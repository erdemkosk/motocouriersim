# Tanıtım sayfası

Vitrin tarzı tek sayfa: fragman, tam ekran görsel panolar, panel başına tek
cümle, istek listesi + sosyal medya odaklı. `index.html` + `i18n.js` +
`img/` + `video/` — dış bağımlılık yok; `site/` klasörünü herhangi bir
statik hosta koyman yeter.

## GitHub Pages'e yayın

Depoda hazır iş akışı var: `.github/workflows/deploy-site.yml` — main'e
`site/` altını değiştiren her push, klasörü olduğu gibi Pages'e yükler
(derleme yok). Tek seferlik kurulum: GitHub'da **Settings → Pages →
Source: GitHub Actions**. Sonrasında adres:
`https://erdemkosk.github.io/bike_mike/`

Not: `og:image` gibi meta etiketler göreli yol kullanıyor; özel alan adına
taşırsan da bozulmaz. 40 MB'lık fragman Pages dosya sınırının (100 MB)
altında.

## Fragman

`video/trailer.mp4` — kaynak `~/Desktop/test-trailer.mp4`ten sıkıştırıldı
(235 MB / 19 Mbps → 40 MB / 3.3 Mbps, H.264 CRF 23 + faststart):

```bash
ffmpeg -i ~/Desktop/test-trailer.mp4 -c:v libx264 -crf 23 -preset slow \
  -pix_fmt yuv420p -movflags +faststart -c:a aac -b:a 128k site/video/trailer.mp4
```

Poster karesi 42. saniyeden (`img/trailer_poster.jpg`). Video
`preload="none"` — sayfa açılışında indirilmiyor, tıklayınca başlıyor.
Yeni fragman gelince aynı komutla sıkıştırıp dosyanın üstüne yaz.

## Steam bağlantısı

`index.html` içinde `const STEAM_URL = ""` satırı var. Mağaza sayfası
açılınca URL'yi oraya yapıştır — bütün "istek listesine ekle" düğmeleri
kendiliğinden canlanıyor. Boşken düğmeler "Steam sayfası hazırlanıyor"
rozetine dönüşüyor; çalışmayan düğme gösterilmiyor.

## Diller

Sayfa oyunla aynı sekiz dilde (`scripts/i18n.gd LANGUAGES` ile birebir):
tr, en, fr, de, it, es (Latinoamérica), pt_BR, pt_PT. Metinler `i18n.js`
içinde `T` sözlüğünde; seçim `localStorage`a yazılıyor, ilk ziyarette
tarayıcı dilinden tahmin ediliyor (pt-BR/pt-PT ayrımı korunuyor).

Yeni metin eklerken sekiz dile birden ekle; eksik anahtar denetimi:

```bash
node -e "const fs=require('fs');fs.writeFileSync('/tmp/_c.js',fs.readFileSync('site/i18n.js','utf8')+'\nmodule.exports={T};');const{T}=require('/tmp/_c.js');for(const c in T){const m=Object.keys(T.tr).filter(k=>!(k in T[c]));if(m.length)console.log(c,m)}"
```

`i18n.js` dört blok: ilk broşür metinleri, `T_EXTRA` (detay bölümleri),
`T_PUNCH` (vitrin panoları), `T_FIX` (istatistik düzeltmesi + fragman).
Sayfa şu an yalnız kısa vitrin anahtarlarını kullanıyor; uzun anlatım
ileride bir "detay" sayfası açılırsa hazır.

İstatistik kutusundaki sayılar ölçümden: sim_core açılış satırı
"filo 260/420 araç · 800 yaya" — kutuda trafikte olan 260 kullanılıyor
(800'ün araç sanılması bir kere yaşandı; yaya ile araç ayrı kutu).

## Sosyal hesaplar

Instagram/YouTube: @motocouriersimulator · X: @MotoCourierGame
(nav, hero, final ve yapışkan çubukta geçiyor — değişirse hepsini ara).

## Görseller

`img/` altındaki karelerin **hepsi çalışan oyundan**, gerçek bir oturumda
alındı. Üreten betik: `tools/_site_shots.gd`.

```bash
godot --path . --script res://tools/_site_shots.gd
```

Betiğin bildikleri (yeniden türetmeye değmez, hepsi ölçüldü):

- **Yükleme perdesi.** `_menu_active` perde daha %99'dayken `true` oluyor.
  Tek doğru kapı `/root/WorldBoot`'un `is_ready` alanı. Erken çekilen kare
  perdenin karartma katmanını yakalıyor.
- **Otomatik yüklemeler `--script` koşusunda global ad DEĞİL** — betik
  onlardan önce derleniyor. `WorldBoot` düğüm yolundan okunuyor.
- **Menü katmanı.** `_root.visible = false` yetmiyor; `_enter_menu` menüyü
  geri açabiliyor. `CanvasLayer`'ın kendisi kapatılıyor.
- **Binme.** `_mount()` animasyonlu (yaya önce motorun yanına yürüyor);
  kareler o yürüyüşün ortasında düşüyordu. `teleport_to` sürücüyü koşulsuz
  seleye oturtuyor — tanıtım karesi için istenen bu.
- **Yerleşim.** `node_position` ızgarası ölü segmentleri de veriyor ve motor
  çimenin ortasına düşüyordu; `road_polylines()` yalnız kurulmuş yolları
  döndürüyor. Merkez yarıçapı sınırı olmadan bütün kareler banliyöde çıkıyor.
- **Duman.** Işınlanma anında kayma dumanı patlıyor ve motorun altında beyaz
  bir leke bırakıyor — parçacıklar kare öncesi susturuluyor.
- **Kare boyutu.** Pencereli kipte istenen boyut ekrana kırpılıyor ve koşudan
  koşuya değişiyor. Tam ekran her seferinde 3024x1898 veriyor; 16:9 kırpması
  ve web'e ölçekleme sonradan yapılıyor.

Saat seçimi `tools/_site_hours.gd` ile ölçüldü (aynı kadraj, 12 saat):
10–16.5 mavi gök, 17.5–19.0 alacakaranlık, 19.8 sonrası tanıtım için karanlık.
