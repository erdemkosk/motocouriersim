#!/usr/bin/env python3
"""Arama motorları için sayfanın İngilizce metnini HTML'ye basar (SEO).

Sayfa metinleri `i18n.js` + `i18n_v2.js`'ten JavaScript ile dolduruluyor;
JavaScript çalıştırmayan tarayıcılar ve paylaşım kartı okuyucuları (Facebook,
X, Discord, Slack…) boş başlık görüyordu. Bu betik:

- `data-i18n` taşıyan her yaprak öğenin içine İngilizce metni yazar
  (dil seçimi yine JS ile değişir; JS aynı öğeleri ezer),
- `data-i18n-label` öğelerine İngilizce `aria-label`,
- galeri / afiş resimlerine altyazıdan `alt`,
- Steam düğmelerine gerçek `href` (JS'siz de çalışsın),
- <head>'deki SEO bloğunu (başlık, açıklama, canonical, hreflang, Open Graph,
  Twitter kartı, VideoGame yapısal verisi) yeniden üretir.

Metin değişince yeniden koş (idempotent):
    python3 tools/prerender.py
"""
import html
import json
import os
import re
import subprocess

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE = "https://motocouriersim.com/"
STEAM = "https://store.steampowered.com/app/5015840/Moto_Courier_Simulator/"
DEMO = "https://store.steampowered.com/app/5190130/Moto_Courier_Simulator_Demo/"
LANGS = [("en", "en"), ("tr", "tr"), ("fr", "fr"), ("de", "de"), ("it", "it"),
         ("es", "es-419"), ("pt_BR", "pt-BR"), ("pt_PT", "pt-PT")]


def load_t():
    js = ("const fs=require('fs');"
          "(0,eval)(fs.readFileSync('i18n.js','utf8')+'\\n'+fs.readFileSync('i18n_v2.js','utf8')"
          "+'\\n;globalThis.__T=T;');process.stdout.write(JSON.stringify(globalThis.__T));")
    out = subprocess.run(["node", "-e", js], cwd=ROOT, capture_output=True, text=True, check=True)
    return json.loads(out.stdout)


def plain(s):
    return html.unescape(re.sub(r"<[^>]+>", "", s)).strip()


def head_block(en):
    title = "Moto Courier Simulator — Open-World Motorcycle Courier Game | Free Demo on Steam"
    desc = en["desc"]
    img = SITE + "img/art/capsule.jpg"
    alt = "".join('<link rel="alternate" hreflang="%s" href="%s?lang=%s">\n' % (h, SITE, c)
                  for c, h in LANGS)
    alt += '<link rel="alternate" hreflang="x-default" href="%s">\n' % SITE
    ld = {
        "@context": "https://schema.org",
        "@type": "VideoGame",
        "name": "Moto Courier Simulator",
        "url": SITE,
        "image": img,
        "description": desc,
        "genre": ["Simulation", "Open world", "Driving", "Motorcycle"],
        "gamePlatform": "PC",
        "operatingSystem": "Windows",
        "applicationCategory": "Game",
        "playMode": ["SinglePlayer", "CoOp"],
        "numberOfPlayers": {"@type": "QuantitativeValue", "minValue": 1, "maxValue": 4},
        "inLanguage": [h for _, h in LANGS],
        "author": {"@type": "Organization", "name": "Poor Heroes"},
        "publisher": {"@type": "Organization", "name": "Poor Heroes"},
        "sameAs": [STEAM, "https://www.instagram.com/motocouriersimulator/",
                   "https://www.youtube.com/@motocouriersimulator", "https://x.com/MotoCourierGame"],
        "offers": {"@type": "Offer", "name": "Free demo", "price": "0", "priceCurrency": "USD",
                   "availability": "https://schema.org/InStock", "url": DEMO},
        "trailer": {"@type": "VideoObject", "name": "Moto Courier Simulator — Official Trailer",
                    "description": desc, "thumbnailUrl": SITE + "img/trailer_poster.jpg",
                    "contentUrl": SITE + "video/trailer.mp4", "uploadDate": "2026-11-20"},
        "screenshot": [SITE + "img/new/" + n + ".jpg" for n in
                       ("hero", "g_snow", "g_belora", "g_volt_charge", "g_kobra", "g_fight")],
    }
    e = html.escape
    return (
        '<!--SEO-->\n'
        '<title>%s</title>\n'
        '<meta name="description" content="%s">\n'
        '<meta name="keywords" content="moto courier simulator, motorcycle game, courier game, delivery simulator, open world, co-op, steam demo">\n'
        '<link rel="canonical" href="%s">\n'
        '%s'
        '<meta name="robots" content="index, follow, max-image-preview:large">\n'
        '<meta name="theme-color" content="#07090b">\n'
        '<meta property="og:type" content="website">\n'
        '<meta property="og:site_name" content="Moto Courier Simulator">\n'
        '<meta property="og:url" content="%s">\n'
        '<meta property="og:title" content="%s">\n'
        '<meta property="og:description" content="%s">\n'
        '<meta property="og:image" content="%s">\n'
        '<meta property="og:image:width" content="1232">\n'
        '<meta property="og:image:height" content="706">\n'
        '<meta property="og:image:alt" content="Moto Courier Simulator key art">\n'
        '<meta property="og:locale" content="en_US">\n'
        '<meta name="twitter:card" content="summary_large_image">\n'
        '<meta name="twitter:site" content="@MotoCourierGame">\n'
        '<meta name="twitter:title" content="%s">\n'
        '<meta name="twitter:description" content="%s">\n'
        '<meta name="twitter:image" content="%s">\n'
        '<link rel="icon" href="img/logo.png">\n'
        '<link rel="apple-touch-icon" href="img/logo.png">\n'
        '<link rel="preload" as="image" href="img/new/hero.jpg">\n'
        '<script type="application/ld+json">%s</script>\n'
        '<!--/SEO-->\n'
    ) % (e(title), e(desc), SITE, alt, SITE, e(title), e(desc), img, e(title), e(desc), img,
         json.dumps(ld, ensure_ascii=False))


def main():
    T = load_t()
    en = T["en"]
    p = os.path.join(ROOT, "index.html")
    h = open(p, encoding="utf-8").read()

    h = re.sub(r'<html lang="[^"]*">', '<html lang="en">', h, count=1)

    # <head> SEO bloğu: önceki blok ya da eski tek tek etiketler.
    blk = head_block(en)
    if "<!--SEO-->" in h:
        h = re.sub(r"<!--SEO-->.*?<!--/SEO-->\n", lambda m: blk, h, count=1, flags=re.S)
    else:
        a = h.index('<meta name="viewport"')
        a = h.index("\n", a) + 1
        b = h.index("<style>")
        h = h[:a] + blk + h[b:]

    # Yaprak öğelerin metni.
    def fill(m):
        key = m.group(4)
        if key not in en:
            return m.group(0)
        return m.group(1) + en[key] + m.group(6)
    pat = re.compile(r'(<(\w+)\b([^>]*?)\bdata-i18n="([\w]+)"([^>]*)>)(?:(?!<\2\b).)*?(</\2>)', re.S)
    h = pat.sub(lambda m: m.group(1) + en.get(m.group(4), "") + m.group(6)
                if m.group(4) in en else m.group(0), h)

    # aria-label.
    def lab(m):
        tag = m.group(0)
        key = m.group(1)
        if key not in en:
            return tag
        tag = re.sub(r'\saria-label="[^"]*"', "", tag)
        return tag.replace('data-i18n-label="%s"' % key,
                           'data-i18n-label="%s" aria-label="%s"' % (key, html.escape(plain(en[key]))))
    h = re.sub(r'<[^<>]*\bdata-i18n-label="([\w]+)"[^<>]*>', lab, h)

    # Resim alt metni: aynı figure'daki altyazıdan.
    def fig(m):
        f = m.group(0)
        c = re.search(r'<figcaption data-i18n="([\w]+)"', f)
        if not c or c.group(1) not in en:
            return f
        alt = html.escape(plain(en[c.group(1)]) + " — Moto Courier Simulator")
        return re.sub(r'(<img\b[^>]*?)\salt="[^"]*"', r'\1 alt="%s"' % alt, f, count=1)
    h = re.sub(r"<figure\b.*?</figure>", fig, h, flags=re.S)

    # Steam düğmeleri JS'siz de gitsin.
    for i in ("demo-nav", "demo-hero", "demo-final", "demo-stick", "demo-pill"):
        h = re.sub(r'(id="%s" href=")[^"]*(")' % i, r"\g<1>%s\2" % DEMO, h)
    for i in ("wish-hero", "wish-final", "wish-stick"):
        h = re.sub(r'(id="%s" href=")[^"]*(")' % i, r"\g<1>%s\2" % STEAM, h)

    open(p, "w", encoding="utf-8").write(h)
    left = re.findall(r'data-i18n="([\w]+)"></', h)
    print("tamam; boş kalan anahtar:", sorted(set(left)) or "yok")


if __name__ == "__main__":
    main()
