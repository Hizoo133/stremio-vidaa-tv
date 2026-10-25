"""Composite the README hero banner (and the GitHub social preview) from a rendered emblem.

The emblem is rendered locally with Z-Image-Turbo (prompt and seed in
docs/brand/README.md); this script only lays it out and sets the type, so the
banner can be rebuilt pixel for pixel.

    python scripts/brand/make_hero.py
    python scripts/brand/make_hero.py --bg docs/brand/emblem.png --out docs/brand/hero.png --social docs/brand/social-preview.png

Fonts: Unbounded ExtraBold (wordmark) and JetBrains Mono (tagline), static
instances of the SIL OFL fonts, vendored in docs/brand/fonts/. Pillow is the only dependency.
"""
import argparse
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

REPO_ROOT = Path(__file__).resolve().parent.parent.parent
BRAND = REPO_ROOT / "docs" / "brand"
FONTS = BRAND / "fonts"

WORD = "Stremio"
SUB = "for Hisense & VIDAA TVs"
TAGLINE = "Full Stremio with 4K Dolby Vision on your projector"
FOOTLINE = "Theater 1.10.0  ·  Core 0.65.1  ·  52 VIDAA patches  ·  PX3-Pro  ·  C2  ·  M2 Pro  ·  PX1-Pro"

W, H = 1600, 600          # 2x of the 800x300 the README shows
BG = (6, 7, 11)
C_CYAN, C_VIOLET, C_AMBER = (0, 180, 216), (123, 91, 245), (245, 158, 11)
GRADIENT = [(248, 250, 252), (226, 232, 240), C_CYAN, C_VIOLET, C_AMBER]


def font(name, size):
    return ImageFont.truetype(str(FONTS / name), size)


def fit(draw, text, name, start, floor, max_width):
    """The largest size from *start* down to *floor* at which *text* fits *max_width*."""
    size = start
    while size > floor:
        f = font(name, size)
        if draw.textlength(text, font=f) <= max_width:
            return f
        size -= 1
    return font(name, floor)


def cover(im, w, h, anchor=0.5):
    scale = max(w / im.width, h / im.height)
    im = im.resize((round(im.width * scale), round(im.height * scale)), Image.LANCZOS)
    x = round((im.width - w) * anchor)
    y = (im.height - h) // 2
    return im.crop((x, y, x + w, y + h))


def horizontal_gradient(w, h, stops):
    grad = Image.new("RGB", (w, 1))
    px = grad.load()
    n = len(stops) - 1
    for x in range(w):
        t = x / max(w - 1, 1) * n
        i = min(int(t), n - 1)
        f = t - i
        a, b = stops[i], stops[i + 1]
        px[x, 0] = tuple(round(a[k] + (b[k] - a[k]) * f) for k in range(3))
    return grad.resize((w, h))


def place_emblem(emblem_path, size=600, x=70):
    """Dark canvas, square render on the left, its right edge faded into the
    canvas so the render's own background never shows a seam."""
    canvas = Image.new("RGB", (W, H), BG)
    em = cover(Image.open(emblem_path).convert("RGB"), size, size)
    fade = Image.new("L", (size, 1), 255)
    px = fade.load()
    for i in range(size):
        t = i / (size - 1)
        px[i, 0] = 255 if t < 0.62 else round(255 * max(0.0, 1 - (t - 0.62) / 0.38))
    fade = fade.resize((size, size))
    canvas.paste(em, (x, (H - size) // 2), fade)
    return canvas


def gradient_text(canvas, text, f, xy, glow_colour, glow_radius=28, glow_strength=0.55):
    """Draw *text* filled with the brand gradient over a soft glow."""
    mask = Image.new("L", canvas.size, 0)
    ImageDraw.Draw(mask).text(xy, text, font=f, fill=255)
    glow = mask.filter(ImageFilter.GaussianBlur(glow_radius))
    canvas = Image.composite(Image.new("RGB", canvas.size, glow_colour), canvas, glow.point(lambda v: v * glow_strength))
    bbox = mask.getbbox()
    grad = horizontal_gradient(bbox[2] - bbox[0], canvas.height, GRADIENT)
    grad_full = Image.new("RGB", canvas.size, GRADIENT[0])
    grad_full.paste(grad, (bbox[0], 0))
    return Image.composite(grad_full, canvas, mask)


def round_corners(im, radius):
    im = im.convert("RGBA")
    mask = Image.new("L", im.size, 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, im.width - 1, im.height - 1), radius=radius, fill=255)
    im.putalpha(mask)
    return im


def build_banner(bg_path, out_path, text_x=720):
    canvas = place_emblem(bg_path)
    canvas = gradient_text(canvas, WORD, font("Unbounded-ExtraBold.ttf", 118), (text_x, 134), C_VIOLET)
    draw = ImageDraw.Draw(canvas)
    right = W - text_x - 4 - 60
    draw.text((text_x + 4, 278), SUB, font=fit(draw, SUB, "Unbounded-ExtraBold.ttf", 50, 30, right), fill=(226, 232, 240))
    draw.text((text_x + 4, 376), TAGLINE, font=fit(draw, TAGLINE, "JetBrainsMono-Medium.ttf", 29, 18, right), fill=(203, 213, 225))
    draw.text((text_x + 4, 434), FOOTLINE, font=fit(draw, FOOTLINE, "JetBrainsMono-Regular.ttf", 17, 11, right), fill=(120, 130, 150))
    canvas = round_corners(canvas, 28)
    canvas.save(out_path, optimize=True)
    return canvas


def build_social_preview(bg_path, out_path):
    """GitHub's social preview is 1280x640: emblem centred high, wordmark below."""
    canvas = Image.new("RGB", (1280, 640), BG)
    size = 400
    em = cover(Image.open(bg_path).convert("RGB"), size, size)
    fade = Image.new("L", (size, size), 0)
    ImageDraw.Draw(fade).ellipse((70, 70, size - 70, size - 70), fill=255)
    fade = fade.filter(ImageFilter.GaussianBlur(34))
    canvas.paste(em, ((1280 - size) // 2, 0), fade)
    word_font = font("Unbounded-ExtraBold.ttf", 92)
    d = ImageDraw.Draw(canvas)
    tw = d.textlength(WORD, font=word_font)
    canvas = gradient_text(canvas, WORD, word_font, ((1280 - tw) / 2, 372), C_VIOLET, 24)
    d = ImageDraw.Draw(canvas)
    sf = font("Unbounded-ExtraBold.ttf", 40)
    d.text(((1280 - d.textlength(SUB, font=sf)) / 2, 492), SUB, font=sf, fill=(226, 232, 240))
    tf = font("JetBrainsMono-Medium.ttf", 24)
    d.text(((1280 - d.textlength(TAGLINE, font=tf)) / 2, 566), TAGLINE, font=tf, fill=(203, 213, 225))
    canvas.save(out_path, optimize=True)
    return canvas


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--bg", default=str(BRAND / "emblem.png"))
    ap.add_argument("--out", default=str(BRAND / "hero.png"))
    ap.add_argument("--text-x", type=int, default=720)
    ap.add_argument("--social", default=str(BRAND / "social-preview.png"), help="path for the 1280x640 GitHub social preview; '' to skip")
    a = ap.parse_args()
    banner = build_banner(a.bg, a.out, a.text_x)
    print("wrote", a.out, banner.size)
    if a.social:
        build_social_preview(a.bg, a.social)
        print("wrote", a.social)


if __name__ == "__main__":
    main()
