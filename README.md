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

İstatistik kutusundaki sayıların hepsi mağaza metninden: 15 araç (14 motor
+ bisiklet), 210 araç trafikte ("210'a kadar benzetimli araç"), 8 hava
durumu, 22 hikâye görevi, 4 kişilik co-op, 8 dil. Eskiden ölçümden gelen
"260 araç / 800 yaya / 2,25 km²" kutuları kalktı — mağazada geçmeyen ya da
mağazayla çelişen sayı sitede durmasın.

## Sosyal hesaplar

Instagram/YouTube: @motocouriersimulator · X: @MotoCourierGame
(nav, hero, final ve yapışkan çubukta geçiyor — değişirse hepsini ara).

## Görseller

Kahraman, panolar, galeri ve özellik kartlarındaki bütün kareler Steam
sayfasının ekran görüntüleri (`img/steam/`, 22 kare). Eski oturum kareleri
(`hero.jpg`, `sehir.jpg` …) ve eski klipler (`video/clips/`) kaldırıldı;
oyunun eski sürümünü gösteriyorlardı.

Galeri kapalıyken ilk 9 kareyi (tablette 8) gösteriyor; "Tüm kareleri
göster" 22'sini açıyor. İki kare (`.wide`) masaüstünde iki sütun kaplıyor
ki 22 kare 8 tam satıra otursun. Büyüteçte oklar ve klavye okları aynı
duvarın kareleri arasında geziyor.

Pano sırası kareye göre: yazı sol altta ya da sağ altta duruyor, kare de
ona göre seçildi — telefon karesinde telefon sağ kenarda (03 solda), sisli
motor karesinde motor sol-ortada (04 sağda).

### Oyundan kare almak

Sitenin eski kareleri oyun deposundaki `tools/_site_shots.gd` ile çalışan
oyundan alınmıştı. Mağazaya girmeyen yeni bir kare gerekirse yol hâlâ bu:

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
