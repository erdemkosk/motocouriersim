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
taşırsan da bozulmaz. 43 MB'lık fragman Pages dosya sınırının (100 MB)
altında.

## Fragman

Fragman bölümünde tek video var: `video/trailer.mp4` (76 sn, Steam
sayfasındaki fragmanın kaynağı), posteri `img/trailer_poster.jpg` (17,5.
saniyedeki dört kurye karesi). Eski fragmanlar (`trailer1`, `trailer2`)
kaldırıldı. Video `preload="none"`; sayfa açılışında inmiyor, tıklayınca
başlıyor.

Kaynak 107 MB geldi — Pages'in 100 MB dosya sınırının üstünde — o yüzden
yeniden kodlandı (≈43 MB):

```bash
ffmpeg -i kaynak.mp4 -c:v libx264 -crf 23 -preset slow -maxrate 6M -bufsize 12M \
  -pix_fmt yuv420p -movflags +faststart -c:a aac -b:a 128k video/trailer.mp4
```

Şerit mekanizması duruyor: `#ttrack`e ikinci bir `.tslide` eklenince oklar
ve noktalar kendiliğinden geri geliyor (tek slaytta JS gizliyor), oynayan
bitince sıradakine geçiyor. Tek slaytta bitince kendini baştan açmıyor.

## Afişler

`img/art/*.jpg` — tanıtım görselleri, oyun içi kare DEĞİL. Bu yüzden
galeriden (`#galeri`, "hepsi oyunun içinden") ayrı bir bölümde (`#afis`)
duruyorlar ve bölümün alt başlığı bunu açıkça söylüyor; ikisi karışırsa
oyuncuya yanlış söz vermiş oluruz. Tıklayınca galeriyle aynı büyüteçte
açılıyorlar.

Eski beş afiş (eski karakter, eski motor) kaldırıldı. Yerlerinde Steam'deki
tek ana görselin üç kesimi var:

- `keyart_wide.jpg` — logosuz geniş kesim (Steam `library_hero_2x`,
  3840×1240 → 2400 px), bölümün tepesinde tam genişlik.
- `capsule.jpg` — logolu yatay kapak (`capsule_616x353_2x`, 1232×706).
  Aynı zamanda `og:image` — paylaşım kartında bu görünüyor.
- `capsule_tall.jpg` — logolu dikey kapak (`hero_capsule_2x`, 748×896).
  Yatay kapağın yanında; kutunun boyu satırdan geliyor, yatay kapağa eşit.

Varlıkların hash'li adresleri mağaza sayfasında yazmıyor; anahtarsız
çalışan store-browse API'si veriyor:

```bash
curl -sG "https://api.steampowered.com/IStoreBrowseService/GetItems/v1/" \
  --data-urlencode 'input_json={"ids":[{"appid":5015840}],"context":{"language":"english","country_code":"US"},"data_request":{"include_assets":true}}'
```

Yanıttaki `assets` alanındaki dosya adları
`https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/5015840/<ad>`
altında. `library_capsule_2x` (600×900) de var, sayfada kullanılmıyor.

## Steam bağlantıları

Demo yayında (11 Eylül 2026), tam sürüm Q4 2026:

- Tam oyun: <https://store.steampowered.com/app/5015840/Moto_Courier_Simulator/>
- Demo: <https://store.steampowered.com/app/5190130/Moto_Courier_Simulator_Demo/>

`index.html` içinde `STEAM_URL` ve `DEMO_URL` sabitleri. Demo düğmeleri
(nav, kahraman, kapanış, alt çubuk — amber) ve kahramandaki "Ücretsiz demo
yayında" rozeti `DEMO_URL`'e; istek listesi düğmeleri (kahraman, kapanış,
alt çubuk — hayalet) `STEAM_URL`'e gidiyor. Bir sabit boşaltılırsa o
düğmeler "Steam sayfası hazırlanıyor" rozetine dönüyor; çalışmayan düğme
gösterilmiyor. Tam sürüm çıkınca rozetteki `demo_full` metni ve demo
düğmeleri gözden geçirilmeli.

## Steam sayfasından güncelleme

Sayfadaki içerik Steam mağaza sayfasından geliyor. Mağaza değişince aynı
kaynaktan tazelenir:

```bash
curl -s "https://store.steampowered.com/api/appdetails?appids=5190130&l=turkish"
```

`l=` ile diller: `english`, `turkish`, `french`, `german`, `italian`,
`latam`, `brazilian`, `portuguese`. Yanıtta:

- `screenshots[].path_full` — 1920×1080 ekran görüntüleri → `img/steam/`
  (1600 px'e indirildi, `-vf scale=1600:-2:flags=lanczos -q:v 4`).
- `detailed_description` içindeki `extras/<hash>.mp4|webm` — açıklamadaki
  döngü klipleri ("GIF"ler) → `video/steam/`. Steam'in mp4'ü HEVC ve
  kare oranı kare değil (SAR 63:64); Firefox HEVC oynatmıyor, o yüzden
  H.264'e ve kare piksele çevrildi:
  `-vf "scale=640:360:flags=lanczos,setsar=1" -c:v libx264 -crf 23 -an -movflags +faststart`.
  Posterler klibin ilk karesi (`video/steam/posters/`).
- `detailed_description`'daki `<h2>` başlıkları ve `<li>` maddeleri —
  özellik blokları (`i18n.js` → `T_STEAM`, `st*` anahtarları).

Klip ↔ blok eşleşmesi mağazadakiyle birebir değil: Steam'de klip başlığın
ÜSTÜNDE duruyor, yani her klip bir önceki bölüme ait (ada turu klibi
"yaşayan ada şehri"nin altında vb.). Sitede içeriğe göre eşlendi; açılış
klibi (şehir gündüzden geceye, `daynight.mp4`) kapanış bölümünün arka
planında, hikâye bloğunun klibi olmadığı için kumarhane karesi duruyor.

## Diller

Sayfa oyunla aynı sekiz dilde (`scripts/i18n.gd LANGUAGES` ile birebir):
tr, en, fr, de, it, es (Latinoamérica), pt_BR, pt_PT. Metinler `i18n.js`
içinde `T` sözlüğünde; seçim `localStorage`a yazılıyor, ilk ziyarette
tarayıcı dilinden tahmin ediliyor (pt-BR/pt-PT ayrımı korunuyor).

Yeni metin eklerken sekiz dile birden ekle; eksik anahtar denetimi:

```bash
node -e "const fs=require('fs');fs.writeFileSync('/tmp/_c.js',fs.readFileSync('site/i18n.js','utf8')+'\nmodule.exports={T};');const{T}=require('/tmp/_c.js');for(const c in T){const m=Object.keys(T.tr).filter(k=>!(k in T[c]));if(m.length)console.log(c,m)}"
```

`i18n.js` blokları: ilk broşür metinleri, `T_EXTRA` (detay bölümleri),
`T_PUNCH` (vitrin panoları), `T_FIX` (istatistik etiketleri + fragman),
`T_ART` (afişler), `T_INTRO` (açılış sahnesi), `T_STEAM` (demo rozeti ve
düğmeleri, özellik blokları, galeri alt yazıları). Uzun anlatım blokları
(`T_EXTRA` vb.) sayfada kullanılmıyor; ileride bir "detay" sayfası
açılırsa hazır.

`T_STEAM`'deki `desc` ve `st*` metinleri mağazanın kendi metni. İki
istisna: Steam'in Almanca sayfası İngilizceye düşüyor, Almanca elle
çevrildi; mağazanın Fransızcası "vous", sitenin Fransızcası baştan beri
"tu" — sayfada iki hitap karışmasın diye Fransızca "tu"ya çevrildi.

(Eski istatistik kutusu mağaza metnindendi; 2026-11-20'den beri oyunun
verisinden, bkz. "Metinler".)

## Sosyal hesaplar

Instagram/YouTube: @motocouriersimulator · X: @MotoCourierGame
(nav, hero, final ve yapışkan çubukta geçiyor — değişirse hepsini ara).

## Görseller (büyük güncelleme, 2026-11-20)

Eylül'deki Steam kareleri (`img/steam/`) ve klipleri (`video/steam/`) eski
karakterleri (gerçekçi karakterlerden önce, 2026-10-23) ve eski şehri
gösteriyordu; sitede hiçbiri kalmadı, klasörler silindi. Bütün görseller
oyunun güncel sürümünden, oyunun kendi çekim düzeneğiyle (oyun deposunda
`tools/trailer/`, Movie Maker) alındı:

- `img/new/hero.jpg`, `p_*.jpg` — kahraman ve tam ekran panolar.
- `img/new/g_*.jpg` — galeri (30 kare, üçü `.wide`: 33 hücre = 11 tam satır).
  Kapalıyken ilk 9 kare görünür.
- `video/loops/*.mp4` — sessiz döngüler (sitedeki "GIF"ler): 960x540,
  30 fps, H.264 crf 25, ses yok, ~0,4-2 MB. `posters/` ilk görünen kare.
  Yalnız ekrandayken oynar (`data-clip`), `preload="none"`.
- `video/reels/*.mp4` — dikey (9:16, 540x960) döngü şeridi: kar ve paket
  kamerası.
- `video/intro.mp4` — açılıştaki telefonun klibi (720x1280, 13 sn, oyun
  sesi): fırtına + şimşek, gece karı, teker savurması, karda kayış.

GIF yerine MP4: aynı görüntü GIF olarak 10-20 kat ağır ve 256 renge iniyor.
Döngüler `muted loop playsinline` ile her tarayıcıda GIF gibi davranıyor.

### Çekimler nereden

| Döngü / kare | Oyun deposundaki plan |
|---|---|
| storm, helmet_rain, snow, fog, kobra, ferro, volt_charge, hero, p_weather, p_bikes, p_night | `tools/trailer/shots/site_vitrin.gd` (bu iş için yazıldı; caddeyi şerit grafiğinden seçer) |
| villas, malvista, favela, wheelie, sertac | `k_buyuk_guncelleme.gd` (`--size=1920x1080`) |
| fight, knockout | `dovus_reels.gd` (`--size=1920x1080 --hour=17`) |
| basket | `basket_reels.gd` |
| theft, work | `arac_calma.gd` (rec.sh) |
| city_night (kapanış arka planı), coop | `k_sehir_drone.gd` (gun_gece), `k_coop_eglence.gd` (yıkama) |
| knee_down, fps_hands, reels | masaüstündeki ham çekimler (`his_ham`, `kar_ham`, `paket_goz_ham5`) |

Kayıt (macOS):

```bash
RES=1920x1080 FPS=60 OUT=~/Desktop/site_ham/v tools/trailer/rec.sh site_vitrin
EXTRA="--size=1920x1080" tools/trailer/rec_dikey.sh k_buyuk_guncelleme ~/Desktop/site_ham/b.mp4
```

Döngü kesimi:

```bash
ffmpeg -ss 0 -t 6 -i klip.mkv -an -vf "scale=960:540:flags=lanczos,fps=30" \
  -c:v libx264 -crf 25 -preset slow -pix_fmt yuv420p -movflags +faststart video/loops/ad.mp4
```

Bilinenler: sabit koordinatlı eski planlar (`hava.gd`, x = 112,5) şehir
taşındıktan sonra binaların içine düşüyor; `yagmur_yaris` yeni şehirde cadde
bulamıyor; gece köprü dronu (`kopru_b`) kapkara; akşam ada dronunda gökte
beyaz bir dikdörtgen var; paket kamerasının köprü çekiminde siyah bant,
karda ayak izi çekiminde kare doku lekesi var — bunlar sitede kullanılmadı.
Aynı anda iki kayıt (`override.cfg`) çakışırsa ikincisi hiç başlamıyor.

## Metinler

Yeni bölümlerin metinleri `i18n_v2.js`'te (`T_V2`, `i18n.js`'ten sonra
yüklenir, aynı anahtarları ezer). Yer adları oyunla aynı ve çevrilmez:
San Verano, Calvera County, Bel Oro, Malvista Heights, Slopeton, Brinewell,
Tincan Row (`scripts/place_names.gd`). Görev/uygulama adları oyunun kendi
çevirisinden: "Tabela gecesi" → "Sign Night", "Volt Şarj" → "Volt Charge" vb.
NVIDIA ürün adları (DLSS…) NVIDIA'nın yazılı onayına kadar yazılmaz.

İstatistikler oyunun verisinden: 12 motosiklet + bisiklet
(`vehicle_catalog.gd`), 8 hava (`weather_system.gd` Weather), 9 Calvera
County mahallesi, 12 yan hikâye (30 görev), 4 kişilik co-op, 8 dil.
