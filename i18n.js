/* Tanıtım sayfasının çevirileri — oyunun desteklediği sekiz dil.
 *
 * Diller ve adları `scripts/i18n.gd` LANGUAGES ile BİREBİR aynı: oyunun
 * menüsünde "Português (Brasil)" yazıyorsa sitede de öyle yazsın, oyuncu
 * ikisini eşleştirebilsin.
 *
 * Değerler HTML olarak basılıyor (metinlerin içinde <b> var). İçerik burada
 * yazıldığı için güvenli; dışarıdan metin GİRMESİN.
 */

const LANGS = [
  {code: "tr",    name: "Türkçe",                    html: "tr"},
  {code: "en",    name: "English",                   html: "en"},
  {code: "fr",    name: "Français",                  html: "fr"},
  {code: "de",    name: "Deutsch",                   html: "de"},
  {code: "it",    name: "Italiano",                  html: "it"},
  {code: "es",    name: "Español (Latinoamérica)",   html: "es-419"},
  {code: "pt_BR", name: "Português (Brasil)",        html: "pt-BR"},
  {code: "pt_PT", name: "Português (Portugal)",      html: "pt-PT"},
];

const T = {

/* ------------------------------------------------------------------ tr --- */
tr: {
  title: "Moto Courier Simulator — Şehir senin, vardiya senin",
  desc: "Godot 4.6 ile yapılan açık şehir kurye simülasyonu. Yaşayan trafik, gerçek gün/gece döngüsü, ikinci el araç pazarı, oyun içi telefon ve dört kişilik ortak sürüş.",
  nav_city: "Şehir", nav_courier: "Kurye", nav_market: "Pazar",
  nav_coop: "Ortak sürüş", nav_gallery: "Görseller", nav_lang: "Dil",

  hero1: "Şehir senin.", hero2: "Motor senin.", hero3: "Vardiya senin.",
  hero_lede: "İşten kovuldun, elinde bir bisiklet ve bir telefon var. Trafiği akan, yayası yürüyen, gecesi inen bir şehirde paket taşıyarak başla — kendi motorunu, kendi dükkânını, kendi adını kur.",
  cta_wish: "Steam'de istek listeme ekle", cta_shots: "Oyundan kareler",

  steam_kicker: "Steam'de yakında",
  steam_title: "Çıkışta haberin olsun",
  steam_text: "Oyun Steam'de yakında. İstek listesine eklersen çıktığı gün bildirim gelir — ve bu, oyunun Steam'de görünmesine doğrudan yardım eder.",
  steam_soon: "Steam sayfası hazırlanıyor",

  f1l: "tek parça kara", f2l: "yaya, 260 araç", f3l: "sürülebilir araç",
  f4l: "kişilik ortak sürüş", f5l: "dil",

  city_eye: "Yaşayan şehir",
  city_h2: "Sen olmasan da işleyen bir şehir",
  city_p: "Izgara caddeler, ara sokaklar, sahil şeridi ve dört iskele. Trafik ışıklara uyuyor, yayalar kaldırımda yürüyor, dükkânlar saatinde açılıp kapanıyor. Güneş gerçekten batıyor; hava kararınca sokak lambaları ve vitrinler tek tek yanıyor.",
  city_l1: "<b>Gerçek gün/gece döngüsü</b> — sabah vardiyası ile gece vardiyası aynı şehir değil.",
  city_l2: "<b>Hava</b> — yağmur, ıslak asfalt ve camda su.",
  city_l3: "<b>Girilebilir binalar</b> — asansör, kat, kapı zili; paketi elden teslim ediyorsun.",
  city_l4: "<b>Deniz, plaj, park ve basket sahası</b> — vardiya arası da bir yer.",

  pier_eye: "Sahil", pier_h2: "Şehrin bittiği yer",
  pier_p: "Kara dört bir yandan kumsalla bitiyor ve her kenarın tam ortasında denize uzanan bir iskele var. Güvertesi sürülebilir — motorla sonuna kadar gidip suyun üstünde durabilirsin.",

  cou_eye: "Kurye döngüsü", cou_h2: "Çaylaktan efsaneye",
  cou_p: "Teslimat sayısı tek başına yetmiyor: rütbe atlamak için hem sayı hem puan gerekiyor. Puan süreye, hasara ve paketi sarsmana bakıyor — yani \"hızlı ve özensiz\" kazandıran bir strateji değil.",
  cou_l1: "<b>Altı rütbe</b> — Çaylak, Kurye, Kıdemli, Usta, Elit, Efsane.",
  cou_l2: "<b>Her rütbe üç şey açıyor</b> — daha yüksek ücret, aynı anda daha çok iş, daha uzak teslimatlar.",
  cou_l3: "<b>Seri ve günlük hedef</b> — üst üste temiz teslimat prim getiriyor.",
  cou_l4: "<b>Sözleşmeli müşteri, canlı yayın, rakip şirket</b> — para kazanmanın tek yolu paket taşımak değil.",

  ph_eye: "Telefon", ph_h2: "Bütün oyun cebinde",
  ph_p: "Menü yok — telefon var. Sürerken bile açabildiğin ekranda işler, harita, banka hesabın, mesajlar, market siparişi, sosyal medya, müzik ve ayarlar duruyor.",
  ph_l1: "<b>Kurye</b> — gelen işler, kabul, rota.",
  ph_l2: "<b>Banka ve kredi</b> — kazanç, borç, taksit.",
  ph_l3: "<b>Araç Bul</b> — ikinci el ilanları, satıcıyla pazarlık.",
  ph_l4: "<b>Kamera ve Infagram</b> — teslimat fotoğrafı, paylaşım.",

  mk_eye: "İkinci el pazarı", mk_h2: "Motoru satın almak da bir oyun",
  mk_p: "İlanlar gerçek bir ikinci el sitesi gibi duruyor: fotoğraf, kilometre, aksam durumu, satıcının anlatısı. Fiyat sabit değil — pazarlık ediyorsun, takas veriyorsun, anlaşınca satıcı motoru buluşma noktasına kendisi getiriyor.",
  mk_l1: "<b>Aksam durumu</b> — lastik, fren, zincir, motor ayrı ayrı yıpranıyor; tamir masrafı fiyatın parçası.",
  mk_l2: "<b>Kredi ve kasko</b> — peşinat, gelir/borç oranı, kanıtlanmış kazanç.",
  mk_l3: "<b>Modifiye ve boya</b> — aldığın motoru kendine göre kuruyorsun.",
  mk_l4: "<b>Hırsızlık</b> — sokakta bıraktığın motor orada durmayabilir.",

  ni_eye: "Gece vardiyası", ni_h2: "Karanlıkta ücret artar, görüş azalır",
  ni_p: "Gece işleri daha iyi ödüyor ama şehir başka bir yer oluyor: farın aydınlattığı kadarını görüyorsun, ıslak asfalt tutmuyor, trafik seyrekleştiği için hızlanma isteği artıyor. Kaza bedava değil — hasar hem puana hem tamir faturasına yazılıyor.",
  ni_c1: "Akşam üstü — vitrinler yanıyor",
  ni_c2: "Gece — far, lamba, boş cadde",
  ni_c3: "Omuz üstü — kurye çantası hep orada",

  co_eye: "Ortak sürüş", co_h2: "Dört kurye, tek şehir",
  co_p: "Biri oyunu kurar, diğerleri IP adresiyle katılır. Ortak olan şey dünya: aynı trafik, aynı yayalar, aynı saat, aynı hava. Para, teslimat ve rütbe herkesin kendisinin — arkadaşların haritada renkli işaretle görünüyor.",
  co_l1: "<b>En çok 4 oyuncu</b>, LAN'da doğrudan çalışıyor.",
  co_l2: "<b>Aynı yapı şart</b> — el sıkışmada şehir parmak izi karşılaştırılıyor, tutmuyorsa bağlantı açıkça reddediliyor.",
  co_l3: "<b>Çarpışmalar da paylaşılıyor</b> — sebebi replike ediliyor, sonucu değil.",

  c1h: "Bisikletle başlıyorsun",
  c1p: "Kıdem tazminatın tam olarak bir bisiklet ediyor. On dört motosikletin hepsi ikinci el pazarında, kazandıkça açılıyor.",
  c2h: "Ehliyet sınavı var",
  c2p: "Motora binmek için sınavı geçmen gerekiyor. Polis çevirmesinde evrakın sorulabiliyor.",
  c3h: "Bahisli yarışlar",
  c3p: "Vardiya dışında para kazanmanın hızlı ama pahalı yolu. Kaybedersen ortaya koyduğun gidiyor.",

  lg_eye: "Diller", lg_h2: "Sekiz dilde oynanıyor",
  lg_p: "Her ekran — telefon, ilanlar, sözleşmeler, ehliyet sınavı — baştan sona çevrildi. Dili menüden seçiyorsun, anında geçiyor, yeniden başlatmak gerekmiyor. Bu sayfa da aynı sekiz dilde: aşağıdan seçebilirsin.",

  ga_eye: "Görseller", ga_h2: "Hepsi oyunun içinden",
  ga_p: "Aşağıdaki karelerin tamamı çalışan oyundan, gerçek bir oturumda alındı — render değil, ekran görüntüsü. Büyütmek için üstüne tıkla.",
  g1: "Öğleden sonra vardiyası", g2: "Şehir ızgarası", g3: "İskele ve deniz",
  g4: "Motorun yandan hâli", g5: "İlk araç: bisiklet", g6: "Oyun içi telefon",
  g7: "Sürüş ekranı", g8: "Alacakaranlık", g9: "Gece vardiyası",

  kb_eye: "Kontroller", kb_h2: "Öğrenmesi bir dakika",
  kb_space: "Boşluk",
  k1: "Gaz", k2: "Fren / geri", k3: "Dönüş",
  k4: "Arka fren — virajda basınca kuyruk çıkar",
  k5: "Kontak aç / kapat", k6: "Menü",
  kb_note: "Drift bırakınca kendi toparlıyor; gazı açık tutarsan kayma sürüyor, ters yöne basmak daha hızlı düzeltiyor. Sarı pakete yaklaşınca teslimat otomatik alınıyor.",

  foot_dev: "Godot 4.6 (Forward+) ile geliştiriliyor",
},

/* ------------------------------------------------------------------ en --- */
en: {
  title: "Moto Courier Simulator — Your city, your shift",
  desc: "An open-city courier sim built in Godot 4.6. Living traffic, a real day/night cycle, a second-hand vehicle market, an in-game phone and four-player co-op.",
  nav_city: "City", nav_courier: "Courier", nav_market: "Market",
  nav_coop: "Co-op", nav_gallery: "Screenshots", nav_lang: "Language",

  hero1: "The city is yours.", hero2: "The bike is yours.", hero3: "The shift is yours.",
  hero_lede: "You have just been fired. All you have is a bicycle and a phone. Start hauling packages through a city where traffic flows, people walk and night actually falls — and build your own bike, your own shop, your own name.",
  cta_wish: "Wishlist it on Steam", cta_shots: "In-game screenshots",

  steam_kicker: "Coming soon to Steam",
  steam_title: "Be there on launch day",
  steam_text: "The game is coming to Steam soon. Wishlist it and you get a notification the day it launches — and it directly helps the game get seen.",
  steam_soon: "Steam page in the works",

  f1l: "of unbroken land", f2l: "pedestrians, 260 cars", f3l: "rideable vehicles",
  f4l: "players in co-op", f5l: "languages",

  city_eye: "Living city",
  city_h2: "A city that runs whether you are there or not",
  city_p: "Grid avenues, side streets, a coastline and four piers. Traffic obeys the lights, pedestrians use the pavement, shops open and close on schedule. The sun really sets; when it gets dark, street lamps and shop windows come on one by one.",
  city_l1: "<b>A real day/night cycle</b> — the morning shift and the night shift are not the same city.",
  city_l2: "<b>Weather</b> — rain, wet asphalt and water on your visor.",
  city_l3: "<b>Buildings you can enter</b> — lifts, floors, doorbells; you hand the package over yourself.",
  city_l4: "<b>Sea, beach, park and basketball court</b> — somewhere to be between shifts.",

  pier_eye: "Coast", pier_h2: "Where the city ends",
  pier_p: "The land ends in sand on all four sides, and each side has a pier reaching out into the sea at its midpoint. The deck is rideable — you can take the bike all the way to the end and stand out over the water.",

  cou_eye: "The courier loop", cou_h2: "From rookie to legend",
  cou_p: "Delivery count alone is not enough: ranking up needs both volume and rating. Rating looks at time, damage and how much you shook the package — so \"fast and sloppy\" is not a winning strategy.",
  cou_l1: "<b>Six ranks</b> — Rookie, Courier, Senior, Master, Elite, Legend.",
  cou_l2: "<b>Every rank unlocks three things</b> — higher pay, more jobs at once, longer deliveries.",
  cou_l3: "<b>Streaks and a daily goal</b> — clean deliveries back to back pay a bonus.",
  cou_l4: "<b>Contract clients, live streaming, a rival firm</b> — packages are not the only way to earn.",

  ph_eye: "Phone", ph_h2: "The whole game fits in your pocket",
  ph_p: "No menus — a phone. Jobs, the map, your bank account, messages, grocery orders, social media, music and settings all live on a screen you can open while riding.",
  ph_l1: "<b>Courier</b> — incoming jobs, accept, route.",
  ph_l2: "<b>Bank and loans</b> — earnings, debt, instalments.",
  ph_l3: "<b>Find a Vehicle</b> — second-hand listings, haggling with the seller.",
  ph_l4: "<b>Camera and Infagram</b> — delivery photos, posts.",

  mk_eye: "Second-hand market", mk_h2: "Buying the bike is a game of its own",
  mk_p: "Listings read like a real classifieds site: photos, mileage, part condition, the seller's own pitch. The price is not fixed — you haggle, you trade in, and once you agree the seller rides the bike to the meeting point themselves.",
  mk_l1: "<b>Part condition</b> — tyres, brakes, chain and engine wear separately; repair cost is part of the price.",
  mk_l2: "<b>Loans and insurance</b> — down payment, debt-to-income, proven earnings.",
  mk_l3: "<b>Mods and paint</b> — you set the bike up your way.",
  mk_l4: "<b>Theft</b> — a bike left on the street might not be there when you get back.",

  ni_eye: "Night shift", ni_h2: "Pay goes up in the dark, visibility goes down",
  ni_p: "Night jobs pay better, but the city becomes a different place: you see as far as your headlight, wet asphalt does not grip, and thin traffic makes you want to open the throttle. Crashing is not free — damage hits both your rating and your repair bill.",
  ni_c1: "Dusk — the windows come on",
  ni_c2: "Night — headlight, lamps, empty avenue",
  ni_c3: "Over the shoulder — the courier box is always there",

  co_eye: "Co-op", co_h2: "Four couriers, one city",
  co_p: "One player hosts, the rest join by IP. What you share is the world: same traffic, same pedestrians, same clock, same weather. Money, deliveries and rank are each your own — your friends show up as coloured markers on the map.",
  co_l1: "<b>Up to 4 players</b>, works directly on a LAN.",
  co_l2: "<b>Same build required</b> — the handshake compares city fingerprints and refuses the connection outright if they differ.",
  co_l3: "<b>Crashes are shared too</b> — the cause is replicated, not the effect.",

  c1h: "You start on a bicycle",
  c1p: "Your severance is worth exactly one bicycle. All fourteen motorcycles are out there on the second-hand market, opening up as you earn.",
  c2h: "There is a licence exam",
  c2p: "You have to pass it before you can ride a motorcycle. Police stops can ask for your papers.",
  c3h: "Races with stakes",
  c3p: "The fast, expensive way to earn outside your shift. Lose and whatever you put up is gone.",

  lg_eye: "Languages", lg_h2: "Playable in eight languages",
  lg_p: "Every screen — the phone, the listings, the contracts, the licence exam — is fully translated. You pick the language in the menu; it takes effect immediately, no restart. This page speaks the same eight languages: pick one below.",

  ga_eye: "Screenshots", ga_h2: "All of it from inside the game",
  ga_p: "Every frame below was taken from the running game in a real session — screenshots, not renders. Click to enlarge.",
  g1: "Afternoon shift", g2: "The city grid", g3: "Pier and sea",
  g4: "The bike side-on", g5: "First vehicle: the bicycle", g6: "The in-game phone",
  g7: "Riding view", g8: "Dusk", g9: "Night shift",

  kb_eye: "Controls", kb_h2: "A minute to learn",
  kb_space: "Space",
  k1: "Throttle", k2: "Brake / reverse", k3: "Steering",
  k4: "Rear brake — tap it in a corner and the tail steps out",
  k5: "Ignition on / off", k6: "Menu",
  kb_note: "Let go and the drift catches itself; keep the throttle open and it keeps sliding, counter-steer and it comes back faster. Ride up to a yellow package and the pickup happens automatically.",

  foot_dev: "Built with Godot 4.6 (Forward+)",
},

/* ------------------------------------------------------------------ fr --- */
fr: {
  title: "Moto Courier Simulator — Ta ville, ta tournée",
  desc: "Un simulateur de coursier en ville ouverte réalisé sous Godot 4.6. Trafic vivant, vrai cycle jour/nuit, marché de l'occasion, téléphone in-game et coop à quatre.",
  nav_city: "Ville", nav_courier: "Coursier", nav_market: "Marché",
  nav_coop: "Coop", nav_gallery: "Images", nav_lang: "Langue",

  hero1: "La ville est à toi.", hero2: "La moto est à toi.", hero3: "La tournée est à toi.",
  hero_lede: "Tu viens d'être viré. Il te reste un vélo et un téléphone. Commence à livrer dans une ville où le trafic circule, où les gens marchent et où la nuit tombe vraiment — et construis ta moto, ta boutique, ton nom.",
  cta_wish: "Ajouter à ma liste de souhaits Steam", cta_shots: "Images du jeu",

  steam_kicker: "Bientôt sur Steam",
  steam_title: "Sois là le jour de la sortie",
  steam_text: "Le jeu arrive bientôt sur Steam. Ajoute-le à ta liste de souhaits : tu seras prévenu le jour de la sortie, et ça aide directement le jeu à se faire voir.",
  steam_soon: "Page Steam en préparation",

  f1l: "de terre d'un seul tenant", f2l: "piétons, 260 véhicules", f3l: "véhicules pilotables",
  f4l: "joueurs en coop", f5l: "langues",

  city_eye: "Ville vivante",
  city_h2: "Une ville qui tourne même sans toi",
  city_p: "Des avenues en damier, des ruelles, un littoral et quatre jetées. Le trafic respecte les feux, les piétons restent sur le trottoir, les commerces ouvrent et ferment à l'heure. Le soleil se couche pour de bon ; à la tombée du jour, lampadaires et vitrines s'allument un à un.",
  city_l1: "<b>Vrai cycle jour/nuit</b> — la tournée du matin et celle de la nuit ne sont pas la même ville.",
  city_l2: "<b>Météo</b> — pluie, asphalte mouillé et gouttes sur la visière.",
  city_l3: "<b>Immeubles accessibles</b> — ascenseur, étages, interphone ; tu remets le colis en main propre.",
  city_l4: "<b>Mer, plage, parc et terrain de basket</b> — de quoi faire entre deux tournées.",

  pier_eye: "Littoral", pier_h2: "Là où la ville s'arrête",
  pier_p: "La terre se termine par du sable des quatre côtés, et chaque côté a en son milieu une jetée qui avance sur la mer. Le platelage se roule — tu peux aller jusqu'au bout et t'arrêter au-dessus de l'eau.",

  cou_eye: "La boucle du coursier", cou_h2: "De débutant à légende",
  cou_p: "Le nombre de livraisons ne suffit pas : monter en grade demande à la fois du volume et de la note. La note regarde le temps, les dégâts et les secousses infligées au colis — « vite et sale » n'est donc pas une stratégie gagnante.",
  cou_l1: "<b>Six grades</b> — Débutant, Coursier, Confirmé, Expert, Élite, Légende.",
  cou_l2: "<b>Chaque grade débloque trois choses</b> — meilleure paie, plus de courses simultanées, livraisons plus lointaines.",
  cou_l3: "<b>Séries et objectif quotidien</b> — les livraisons propres à la suite rapportent une prime.",
  cou_l4: "<b>Clients sous contrat, streaming, entreprise rivale</b> — les colis ne sont pas la seule source de revenus.",

  ph_eye: "Téléphone", ph_h2: "Tout le jeu tient dans ta poche",
  ph_p: "Pas de menus : un téléphone. Les courses, la carte, ton compte en banque, les messages, les courses au supermarché, les réseaux, la musique et les réglages tiennent sur un écran que tu peux ouvrir en roulant.",
  ph_l1: "<b>Coursier</b> — courses entrantes, acceptation, itinéraire.",
  ph_l2: "<b>Banque et crédit</b> — gains, dette, mensualités.",
  ph_l3: "<b>Trouver un véhicule</b> — annonces d'occasion, négociation avec le vendeur.",
  ph_l4: "<b>Appareil photo et Infagram</b> — photo de livraison, publication.",

  mk_eye: "Marché de l'occasion", mk_h2: "Acheter la moto est un jeu en soi",
  mk_p: "Les annonces ressemblent à un vrai site de petites annonces : photos, kilométrage, état des pièces, le baratin du vendeur. Le prix n'est pas figé — tu négocies, tu reprends, et une fois d'accord le vendeur amène lui-même la moto au point de rendez-vous.",
  mk_l1: "<b>État des pièces</b> — pneus, freins, chaîne et moteur s'usent séparément ; le coût de réparation fait partie du prix.",
  mk_l2: "<b>Crédit et assurance</b> — apport, taux d'endettement, revenus prouvés.",
  mk_l3: "<b>Préparation et peinture</b> — tu montes la moto à ta façon.",
  mk_l4: "<b>Vol</b> — une moto laissée dans la rue n'y sera peut-être plus.",

  ni_eye: "Tournée de nuit", ni_h2: "La nuit, la paie monte et la visibilité tombe",
  ni_p: "Les courses de nuit paient mieux, mais la ville devient autre chose : tu vois aussi loin que ton phare, l'asphalte mouillé n'accroche pas, et le trafic clairsemé donne envie d'ouvrir les gaz. La chute n'est pas gratuite — les dégâts frappent la note et la facture.",
  ni_c1: "Crépuscule — les vitrines s'allument",
  ni_c2: "Nuit — phare, lampadaires, avenue vide",
  ni_c3: "Par-dessus l'épaule — le top-case est toujours là",

  co_eye: "Coop", co_h2: "Quatre coursiers, une seule ville",
  co_p: "Un joueur héberge, les autres rejoignent par IP. Ce qui est partagé, c'est le monde : même trafic, mêmes piétons, même heure, même météo. L'argent, les livraisons et le grade restent à chacun — tes amis apparaissent en repères colorés sur la carte.",
  co_l1: "<b>4 joueurs maximum</b>, fonctionne directement en réseau local.",
  co_l2: "<b>Même version obligatoire</b> — la poignée de main compare les empreintes de la ville et refuse franchement la connexion en cas d'écart.",
  co_l3: "<b>Les collisions aussi sont partagées</b> — c'est la cause qui est répliquée, pas l'effet.",

  c1h: "Tu commences à vélo",
  c1p: "Tes indemnités valent exactement un vélo. Les quatorze motos sont sur le marché de l'occasion et s'ouvrent au fil de tes gains.",
  c2h: "Il y a un examen du permis",
  c2p: "Il faut le réussir avant de monter sur une moto. Aux contrôles de police, on peut te demander tes papiers.",
  c3h: "Courses avec mise",
  c3p: "Le moyen rapide et cher de gagner hors tournée. Si tu perds, ta mise part avec.",

  lg_eye: "Langues", lg_h2: "Jouable en huit langues",
  lg_p: "Chaque écran — le téléphone, les annonces, les contrats, l'examen du permis — est intégralement traduit. La langue se choisit dans le menu et s'applique aussitôt, sans redémarrage. Cette page parle les mêmes huit langues : choisis ci-dessous.",

  ga_eye: "Images", ga_h2: "Tout vient de l'intérieur du jeu",
  ga_p: "Toutes les images ci-dessous ont été prises dans le jeu en cours d'exécution, lors d'une vraie session — des captures, pas des rendus. Clique pour agrandir.",
  g1: "Tournée de l'après-midi", g2: "Le damier de la ville", g3: "Jetée et mer",
  g4: "La moto de profil", g5: "Premier véhicule : le vélo", g6: "Le téléphone in-game",
  g7: "Vue de conduite", g8: "Crépuscule", g9: "Tournée de nuit",

  kb_eye: "Commandes", kb_h2: "Une minute pour apprendre",
  kb_space: "Espace",
  k1: "Accélérateur", k2: "Frein / marche arrière", k3: "Direction",
  k4: "Frein arrière — en virage, l'arrière décroche",
  k5: "Contact marche / arrêt", k6: "Menu",
  kb_note: "Relâche et le drift se rattrape tout seul ; garde les gaz et ça continue de glisser, contre-braque et ça revient plus vite. Approche-toi d'un colis jaune et la prise en charge se fait automatiquement.",

  foot_dev: "Développé avec Godot 4.6 (Forward+)",
},

/* ------------------------------------------------------------------ de --- */
de: {
  title: "Moto Courier Simulator — Deine Stadt, deine Schicht",
  desc: "Ein Open-City-Kuriersimulator, gebaut mit Godot 4.6. Lebendiger Verkehr, echter Tag-und-Nacht-Wechsel, Gebrauchtmarkt, Handy im Spiel und Koop zu viert.",
  nav_city: "Stadt", nav_courier: "Kurier", nav_market: "Markt",
  nav_coop: "Koop", nav_gallery: "Bilder", nav_lang: "Sprache",

  hero1: "Die Stadt gehört dir.", hero2: "Die Maschine gehört dir.", hero3: "Die Schicht gehört dir.",
  hero_lede: "Du bist gerade rausgeflogen. Übrig sind ein Fahrrad und ein Handy. Fang an, Pakete durch eine Stadt zu fahren, in der der Verkehr rollt, Leute laufen und die Nacht wirklich hereinbricht — und bau dir deine Maschine, deinen Laden, deinen Namen.",
  cta_wish: "Auf die Steam-Wunschliste", cta_shots: "Bilder aus dem Spiel",

  steam_kicker: "Bald auf Steam",
  steam_title: "Sei am Release-Tag dabei",
  steam_text: "Das Spiel kommt bald auf Steam. Setz es auf deine Wunschliste: Du bekommst am Erscheinungstag eine Nachricht — und es hilft dem Spiel direkt, gesehen zu werden.",
  steam_soon: "Steam-Seite ist in Arbeit",

  f1l: "Land am Stück", f2l: "Fußgänger, 260 Fahrzeuge", f3l: "fahrbare Fahrzeuge",
  f4l: "Spieler im Koop", f5l: "Sprachen",

  city_eye: "Lebendige Stadt",
  city_h2: "Eine Stadt, die auch ohne dich läuft",
  city_p: "Rasterförmige Alleen, Seitenstraßen, eine Küste und vier Piers. Der Verkehr hält sich an die Ampeln, Fußgänger bleiben auf dem Gehweg, Läden öffnen und schließen pünktlich. Die Sonne geht wirklich unter; wenn es dunkel wird, gehen Straßenlaternen und Schaufenster nacheinander an.",
  city_l1: "<b>Echter Tag-und-Nacht-Wechsel</b> — Frühschicht und Nachtschicht sind nicht dieselbe Stadt.",
  city_l2: "<b>Wetter</b> — Regen, nasser Asphalt und Wasser auf dem Visier.",
  city_l3: "<b>Betretbare Gebäude</b> — Aufzug, Etage, Klingel; du übergibst das Paket persönlich.",
  city_l4: "<b>Meer, Strand, Park und Basketballplatz</b> — auch zwischen den Schichten gibt es einen Ort.",

  pier_eye: "Küste", pier_h2: "Wo die Stadt aufhört",
  pier_p: "Das Land endet an allen vier Seiten im Sand, und in der Mitte jeder Seite führt ein Pier hinaus aufs Meer. Die Planken sind befahrbar — du kannst bis ans Ende fahren und über dem Wasser stehen.",

  cou_eye: "Der Kurier-Kreislauf", cou_h2: "Vom Neuling zur Legende",
  cou_p: "Die Zahl der Lieferungen allein reicht nicht: Für den Aufstieg brauchst du Menge und Bewertung. Die Bewertung schaut auf Zeit, Schaden und darauf, wie sehr du das Paket durchgeschüttelt hast — „schnell und schlampig\" ist also keine gewinnende Strategie.",
  cou_l1: "<b>Sechs Ränge</b> — Neuling, Kurier, Erfahren, Meister, Elite, Legende.",
  cou_l2: "<b>Jeder Rang öffnet drei Dinge</b> — höherer Lohn, mehr Aufträge gleichzeitig, weitere Strecken.",
  cou_l3: "<b>Serien und Tagesziel</b> — saubere Lieferungen am Stück bringen einen Bonus.",
  cou_l4: "<b>Vertragskunden, Livestream, Konkurrenzfirma</b> — Pakete sind nicht die einzige Einnahmequelle.",

  ph_eye: "Handy", ph_h2: "Das ganze Spiel passt in die Tasche",
  ph_p: "Keine Menüs, sondern ein Handy. Aufträge, Karte, Bankkonto, Nachrichten, Einkauf, Social Media, Musik und Einstellungen liegen auf einem Bildschirm, den du sogar während der Fahrt aufmachen kannst.",
  ph_l1: "<b>Kurier</b> — eingehende Aufträge, Annahme, Route.",
  ph_l2: "<b>Bank und Kredit</b> — Einnahmen, Schulden, Raten.",
  ph_l3: "<b>Fahrzeug finden</b> — Gebrauchtanzeigen, Feilschen mit dem Verkäufer.",
  ph_l4: "<b>Kamera und Infagram</b> — Lieferfoto, Beitrag.",

  mk_eye: "Gebrauchtmarkt", mk_h2: "Auch der Kauf ist ein eigenes Spiel",
  mk_p: "Die Anzeigen sehen aus wie auf einem echten Kleinanzeigenportal: Fotos, Kilometerstand, Zustand der Teile, der Text des Verkäufers. Der Preis steht nicht fest — du feilschst, gibst in Zahlung, und nach der Einigung bringt der Verkäufer die Maschine selbst zum Treffpunkt.",
  mk_l1: "<b>Zustand der Teile</b> — Reifen, Bremsen, Kette und Motor verschleißen getrennt; die Reparaturkosten gehören zum Preis.",
  mk_l2: "<b>Kredit und Versicherung</b> — Anzahlung, Schulden-Einkommens-Verhältnis, nachgewiesene Einnahmen.",
  mk_l3: "<b>Tuning und Lack</b> — du baust die Maschine nach deinem Geschmack auf.",
  mk_l4: "<b>Diebstahl</b> — eine auf der Straße abgestellte Maschine steht vielleicht nicht mehr da.",

  ni_eye: "Nachtschicht", ni_h2: "Im Dunkeln steigt der Lohn und sinkt die Sicht",
  ni_p: "Nachtaufträge zahlen besser, aber die Stadt wird ein anderer Ort: Du siehst so weit wie dein Scheinwerfer, nasser Asphalt greift nicht, und der dünne Verkehr verleitet zum Gasgeben. Ein Sturz ist nicht umsonst — Schaden landet auf der Bewertung und auf der Rechnung.",
  ni_c1: "Dämmerung — die Schaufenster gehen an",
  ni_c2: "Nacht — Scheinwerfer, Laternen, leere Allee",
  ni_c3: "Über die Schulter — die Kuriertasche ist immer da",

  co_eye: "Koop", co_h2: "Vier Kuriere, eine Stadt",
  co_p: "Einer hostet, die anderen treten per IP bei. Geteilt wird die Welt: gleicher Verkehr, gleiche Fußgänger, gleiche Uhrzeit, gleiches Wetter. Geld, Lieferungen und Rang gehören jedem selbst — Freunde erscheinen als farbige Marker auf der Karte.",
  co_l1: "<b>Bis zu 4 Spieler</b>, im LAN direkt lauffähig.",
  co_l2: "<b>Gleicher Build nötig</b> — der Handshake vergleicht Stadt-Fingerabdrücke und lehnt die Verbindung bei Abweichung offen ab.",
  co_l3: "<b>Auch Kollisionen werden geteilt</b> — repliziert wird die Ursache, nicht die Wirkung.",

  c1h: "Du fängst mit dem Fahrrad an",
  c1p: "Deine Abfindung reicht exakt für ein Fahrrad. Alle vierzehn Motorräder stehen auf dem Gebrauchtmarkt und öffnen sich, während du verdienst.",
  c2h: "Es gibt eine Führerscheinprüfung",
  c2p: "Ohne sie steigst du auf kein Motorrad. Bei Polizeikontrollen kann nach den Papieren gefragt werden.",
  c3h: "Rennen um Einsatz",
  c3p: "Der schnelle, teure Weg zu Geld außerhalb der Schicht. Verlierst du, ist der Einsatz weg.",

  lg_eye: "Sprachen", lg_h2: "Spielbar in acht Sprachen",
  lg_p: "Jeder Bildschirm — Handy, Anzeigen, Verträge, Führerscheinprüfung — ist vollständig übersetzt. Die Sprache wählst du im Menü; sie greift sofort, ohne Neustart. Diese Seite spricht dieselben acht Sprachen: unten auswählen.",

  ga_eye: "Bilder", ga_h2: "Alles aus dem laufenden Spiel",
  ga_p: "Jedes Bild unten stammt aus dem laufenden Spiel, aus einer echten Sitzung — Screenshots, keine Renderings. Zum Vergrößern anklicken.",
  g1: "Nachmittagsschicht", g2: "Das Straßenraster", g3: "Pier und Meer",
  g4: "Die Maschine von der Seite", g5: "Erstes Fahrzeug: das Fahrrad", g6: "Das Handy im Spiel",
  g7: "Fahransicht", g8: "Dämmerung", g9: "Nachtschicht",

  kb_eye: "Steuerung", kb_h2: "In einer Minute gelernt",
  kb_space: "Leertaste",
  k1: "Gas", k2: "Bremse / rückwärts", k3: "Lenken",
  k4: "Hinterradbremse — in der Kurve bricht das Heck aus",
  k5: "Zündung an / aus", k6: "Menü",
  kb_note: "Lässt du los, fängt sich der Drift von selbst; bleibt das Gas offen, rutscht es weiter, Gegenlenken holt es schneller zurück. Fahr an ein gelbes Paket heran, die Aufnahme passiert automatisch.",

  foot_dev: "Entwickelt mit Godot 4.6 (Forward+)",
},

/* ------------------------------------------------------------------ it --- */
it: {
  title: "Moto Courier Simulator — La tua città, il tuo turno",
  desc: "Un simulatore di corriere in città aperta realizzato con Godot 4.6. Traffico vivo, vero ciclo giorno/notte, mercato dell'usato, telefono in gioco e coop a quattro.",
  nav_city: "Città", nav_courier: "Corriere", nav_market: "Mercato",
  nav_coop: "Coop", nav_gallery: "Immagini", nav_lang: "Lingua",

  hero1: "La città è tua.", hero2: "La moto è tua.", hero3: "Il turno è tuo.",
  hero_lede: "Ti hanno appena licenziato. Ti restano una bici e un telefono. Comincia a consegnare pacchi in una città dove il traffico scorre, la gente cammina e la notte scende davvero — e costruisci la tua moto, il tuo negozio, il tuo nome.",
  cta_wish: "Aggiungi alla lista dei desideri su Steam", cta_shots: "Immagini dal gioco",

  steam_kicker: "Presto su Steam",
  steam_title: "Ci sei il giorno dell'uscita",
  steam_text: "Il gioco arriva presto su Steam. Mettilo nella lista dei desideri: riceverai una notifica il giorno dell'uscita, e aiuti direttamente il gioco a farsi vedere.",
  steam_soon: "Pagina Steam in preparazione",

  f1l: "di terra in un pezzo solo", f2l: "pedoni, 260 veicoli", f3l: "veicoli guidabili",
  f4l: "giocatori in coop", f5l: "lingue",

  city_eye: "Città viva",
  city_h2: "Una città che gira anche senza di te",
  city_p: "Viali a griglia, vicoli, una costa e quattro pontili. Il traffico rispetta i semafori, i pedoni restano sul marciapiede, i negozi aprono e chiudono a orario. Il sole tramonta davvero; quando cala il buio, lampioni e vetrine si accendono uno a uno.",
  city_l1: "<b>Vero ciclo giorno/notte</b> — il turno del mattino e quello di notte non sono la stessa città.",
  city_l2: "<b>Meteo</b> — pioggia, asfalto bagnato e acqua sulla visiera.",
  city_l3: "<b>Palazzi in cui entrare</b> — ascensore, piani, citofono; il pacco lo consegni a mano.",
  city_l4: "<b>Mare, spiaggia, parco e campo da basket</b> — un posto anche tra un turno e l'altro.",

  pier_eye: "Costa", pier_h2: "Dove finisce la città",
  pier_p: "La terra finisce nella sabbia su tutti e quattro i lati, e al centro di ogni lato c'è un pontile che entra nel mare. L'impalcato è percorribile — puoi arrivare in fondo con la moto e restare sospeso sull'acqua.",

  cou_eye: "Il ciclo del corriere", cou_h2: "Da esordiente a leggenda",
  cou_p: "Il numero di consegne da solo non basta: per salire di grado servono quantità e voto. Il voto guarda il tempo, i danni e quanto hai scosso il pacco — quindi «veloce e sciatto» non è una strategia vincente.",
  cou_l1: "<b>Sei gradi</b> — Esordiente, Corriere, Anziano, Maestro, Elite, Leggenda.",
  cou_l2: "<b>Ogni grado apre tre cose</b> — paga più alta, più consegne insieme, distanze maggiori.",
  cou_l3: "<b>Serie e obiettivo giornaliero</b> — consegne pulite di fila portano un premio.",
  cou_l4: "<b>Clienti a contratto, dirette, azienda rivale</b> — i pacchi non sono l'unico modo di guadagnare.",

  ph_eye: "Telefono", ph_h2: "Tutto il gioco sta in tasca",
  ph_p: "Niente menu: un telefono. Lavori, mappa, conto in banca, messaggi, spesa, social, musica e impostazioni stanno su uno schermo che puoi aprire anche in marcia.",
  ph_l1: "<b>Corriere</b> — lavori in arrivo, accetta, percorso.",
  ph_l2: "<b>Banca e prestito</b> — guadagni, debito, rate.",
  ph_l3: "<b>Trova un veicolo</b> — annunci dell'usato, trattativa con il venditore.",
  ph_l4: "<b>Fotocamera e Infagram</b> — foto della consegna, post.",

  mk_eye: "Mercato dell'usato", mk_h2: "Anche comprare la moto è un gioco",
  mk_p: "Gli annunci sembrano un vero sito di compravendita: foto, chilometri, stato dei componenti, il racconto del venditore. Il prezzo non è fisso — si tratta, si dà l'usato in permuta, e una volta d'accordo il venditore porta la moto al punto d'incontro.",
  mk_l1: "<b>Stato dei componenti</b> — gomme, freni, catena e motore si consumano separatamente; il costo di riparazione fa parte del prezzo.",
  mk_l2: "<b>Prestito e assicurazione</b> — anticipo, rapporto debito/reddito, guadagni dimostrati.",
  mk_l3: "<b>Elaborazioni e vernice</b> — la moto la monti a modo tuo.",
  mk_l4: "<b>Furto</b> — una moto lasciata in strada potrebbe non essere più lì.",

  ni_eye: "Turno di notte", ni_h2: "Al buio la paga sale e la visibilità scende",
  ni_p: "I lavori notturni pagano di più, ma la città diventa un altro posto: vedi quanto arriva il faro, l'asfalto bagnato non tiene e il traffico rado invita ad aprire il gas. Cadere non è gratis — il danno finisce sul voto e sulla fattura.",
  ni_c1: "Crepuscolo — si accendono le vetrine",
  ni_c2: "Notte — faro, lampioni, viale vuoto",
  ni_c3: "Sopra la spalla — il baule è sempre lì",

  co_eye: "Coop", co_h2: "Quattro corrieri, una città",
  co_p: "Uno ospita, gli altri entrano con l'IP. Ciò che si condivide è il mondo: stesso traffico, stessi pedoni, stessa ora, stesso meteo. Soldi, consegne e grado restano di ciascuno — gli amici compaiono come segnalini colorati sulla mappa.",
  co_l1: "<b>Fino a 4 giocatori</b>, in LAN funziona direttamente.",
  co_l2: "<b>Serve la stessa build</b> — l'handshake confronta le impronte della città e rifiuta apertamente la connessione se non coincidono.",
  co_l3: "<b>Anche le collisioni sono condivise</b> — si replica la causa, non l'effetto.",

  c1h: "Si comincia in bicicletta",
  c1p: "La tua liquidazione vale esattamente una bicicletta. Tutte e quattordici le moto sono sul mercato dell'usato e si aprono man mano che guadagni.",
  c2h: "C'è l'esame per la patente",
  c2p: "Devi passarlo prima di salire su una moto. Ai posti di blocco possono chiederti i documenti.",
  c3h: "Gare con puntata",
  c3p: "Il modo rapido e costoso di guadagnare fuori turno. Se perdi, quello che hai messo se ne va.",

  lg_eye: "Lingue", lg_h2: "Giocabile in otto lingue",
  lg_p: "Ogni schermata — telefono, annunci, contratti, esame della patente — è tradotta per intero. La lingua si sceglie dal menu e ha effetto subito, senza riavviare. Anche questa pagina parla le stesse otto lingue: scegli qui sotto.",

  ga_eye: "Immagini", ga_h2: "Tutto dall'interno del gioco",
  ga_p: "Ogni immagine qui sotto è presa dal gioco in esecuzione, in una sessione vera — screenshot, non render. Clicca per ingrandire.",
  g1: "Turno del pomeriggio", g2: "La griglia della città", g3: "Pontile e mare",
  g4: "La moto di profilo", g5: "Primo veicolo: la bicicletta", g6: "Il telefono in gioco",
  g7: "Vista di guida", g8: "Crepuscolo", g9: "Turno di notte",

  kb_eye: "Comandi", kb_h2: "Si impara in un minuto",
  kb_space: "Spazio",
  k1: "Gas", k2: "Freno / retro", k3: "Sterzo",
  k4: "Freno posteriore — in curva la coda esce",
  k5: "Quadro acceso / spento", k6: "Menu",
  kb_note: "Se molli, la derapata si raddrizza da sola; se tieni il gas aperto continua a scivolare, il controsterzo la riporta prima. Avvicinati a un pacco giallo e il ritiro avviene da solo.",

  foot_dev: "Sviluppato con Godot 4.6 (Forward+)",
},

/* ------------------------------------------------------------------ es --- */
es: {
  title: "Moto Courier Simulator — Tu ciudad, tu turno",
  desc: "Un simulador de repartidor en ciudad abierta hecho en Godot 4.6. Tráfico vivo, ciclo real de día y noche, mercado de usados, teléfono dentro del juego y cooperativo para cuatro.",
  nav_city: "Ciudad", nav_courier: "Repartidor", nav_market: "Mercado",
  nav_coop: "Cooperativo", nav_gallery: "Imágenes", nav_lang: "Idioma",

  hero1: "La ciudad es tuya.", hero2: "La moto es tuya.", hero3: "El turno es tuyo.",
  hero_lede: "Te acaban de despedir. Solo te quedan una bici y un teléfono. Empieza repartiendo paquetes en una ciudad donde el tráfico circula, la gente camina y la noche cae de verdad — y construye tu propia moto, tu propio negocio, tu propio nombre.",
  cta_wish: "Agregar a la lista de deseados de Steam", cta_shots: "Imágenes del juego",

  steam_kicker: "Próximamente en Steam",
  steam_title: "Entérate el día del lanzamiento",
  steam_text: "El juego llega pronto a Steam. Agrégalo a tu lista de deseados: recibirás un aviso el día del lanzamiento y ayudas directamente a que el juego se vea.",
  steam_soon: "Página de Steam en preparación",

  f1l: "de tierra de una sola pieza", f2l: "peatones, 260 vehículos", f3l: "vehículos conducibles",
  f4l: "jugadores en cooperativo", f5l: "idiomas",

  city_eye: "Ciudad viva",
  city_h2: "Una ciudad que funciona aunque no estés",
  city_p: "Avenidas en cuadrícula, calles laterales, una costa y cuatro muelles. El tráfico respeta los semáforos, los peatones van por la acera, los comercios abren y cierran a horario. El sol se pone de verdad; cuando oscurece, los faroles y las vitrinas se encienden uno a uno.",
  city_l1: "<b>Ciclo real de día y noche</b> — el turno de la mañana y el de la noche no son la misma ciudad.",
  city_l2: "<b>Clima</b> — lluvia, asfalto mojado y agua en la visera.",
  city_l3: "<b>Edificios en los que entras</b> — ascensor, pisos, timbre; el paquete lo entregas en mano.",
  city_l4: "<b>Mar, playa, parque y cancha de básquet</b> — también hay algo que hacer entre turnos.",

  pier_eye: "Costa", pier_h2: "Donde termina la ciudad",
  pier_p: "La tierra termina en arena por los cuatro lados, y en el centro de cada lado hay un muelle que entra al mar. La tarima se puede recorrer — puedes llegar hasta el final con la moto y quedarte sobre el agua.",

  cou_eye: "El ciclo del repartidor", cou_h2: "De novato a leyenda",
  cou_p: "La cantidad de entregas por sí sola no alcanza: para subir de rango hacen falta volumen y calificación. La calificación mira el tiempo, los daños y cuánto sacudiste el paquete — así que «rápido y descuidado» no es una estrategia ganadora.",
  cou_l1: "<b>Seis rangos</b> — Novato, Repartidor, Veterano, Maestro, Élite, Leyenda.",
  cou_l2: "<b>Cada rango abre tres cosas</b> — mejor paga, más pedidos a la vez, entregas más lejanas.",
  cou_l3: "<b>Rachas y meta diaria</b> — entregas limpias seguidas pagan un bono.",
  cou_l4: "<b>Clientes con contrato, transmisiones en vivo, empresa rival</b> — los paquetes no son la única forma de ganar.",

  ph_eye: "Teléfono", ph_h2: "Todo el juego cabe en tu bolsillo",
  ph_p: "No hay menús: hay un teléfono. Los pedidos, el mapa, tu cuenta bancaria, los mensajes, el súper, las redes, la música y los ajustes viven en una pantalla que puedes abrir incluso conduciendo.",
  ph_l1: "<b>Repartidor</b> — pedidos entrantes, aceptar, ruta.",
  ph_l2: "<b>Banco y crédito</b> — ingresos, deuda, cuotas.",
  ph_l3: "<b>Buscar vehículo</b> — anuncios de usados, regateo con el vendedor.",
  ph_l4: "<b>Cámara e Infagram</b> — foto de la entrega, publicación.",

  mk_eye: "Mercado de usados", mk_h2: "Comprar la moto también es un juego",
  mk_p: "Los anuncios se ven como un sitio real de clasificados: fotos, kilometraje, estado de las piezas, el relato del vendedor. El precio no es fijo — regateas, entregas la tuya a cuenta y, una vez cerrado el trato, el vendedor lleva la moto al punto de encuentro.",
  mk_l1: "<b>Estado de las piezas</b> — llantas, frenos, cadena y motor se desgastan por separado; el costo de reparación es parte del precio.",
  mk_l2: "<b>Crédito y seguro</b> — pago inicial, relación deuda/ingreso, ingresos comprobados.",
  mk_l3: "<b>Modificaciones y pintura</b> — armas la moto a tu manera.",
  mk_l4: "<b>Robo</b> — una moto dejada en la calle puede no seguir ahí.",

  ni_eye: "Turno de noche", ni_h2: "De noche sube la paga y baja la visibilidad",
  ni_p: "Los pedidos nocturnos pagan mejor, pero la ciudad se vuelve otro lugar: ves hasta donde llega el faro, el asfalto mojado no agarra y el tráfico ralo invita a acelerar. Chocar no sale gratis — el daño va a la calificación y a la factura del taller.",
  ni_c1: "Atardecer — se encienden las vitrinas",
  ni_c2: "Noche — faro, faroles, avenida vacía",
  ni_c3: "Sobre el hombro — el baúl siempre está ahí",

  co_eye: "Cooperativo", co_h2: "Cuatro repartidores, una ciudad",
  co_p: "Uno crea la partida y el resto entra con su IP. Lo compartido es el mundo: mismo tráfico, mismos peatones, misma hora, mismo clima. El dinero, las entregas y el rango son de cada quien — tus amigos aparecen como marcas de color en el mapa.",
  co_l1: "<b>Hasta 4 jugadores</b>, en LAN funciona directo.",
  co_l2: "<b>Hace falta la misma versión</b> — el saludo compara las huellas de la ciudad y rechaza la conexión sin rodeos si no coinciden.",
  co_l3: "<b>Los choques también se comparten</b> — se replica la causa, no el efecto.",

  c1h: "Empiezas en bicicleta",
  c1p: "Tu liquidación vale exactamente una bicicleta. Las catorce motos están en el mercado de usados y se abren conforme ganas.",
  c2h: "Hay examen de licencia",
  c2p: "Tienes que aprobarlo antes de subirte a una moto. En los retenes te pueden pedir los papeles.",
  c3h: "Carreras con apuesta",
  c3p: "La forma rápida y cara de ganar fuera del turno. Si pierdes, lo que apostaste se va.",

  lg_eye: "Idiomas", lg_h2: "Se juega en ocho idiomas",
  lg_p: "Todas las pantallas — el teléfono, los anuncios, los contratos, el examen de licencia — están traducidas por completo. El idioma se elige en el menú y se aplica al instante, sin reiniciar. Esta página habla los mismos ocho idiomas: elige abajo.",

  ga_eye: "Imágenes", ga_h2: "Todo desde dentro del juego",
  ga_p: "Cada imagen de abajo salió del juego en ejecución, en una sesión real — capturas, no renders. Haz clic para ampliar.",
  g1: "Turno de la tarde", g2: "La cuadrícula de la ciudad", g3: "Muelle y mar",
  g4: "La moto de perfil", g5: "Primer vehículo: la bicicleta", g6: "El teléfono del juego",
  g7: "Vista de conducción", g8: "Atardecer", g9: "Turno de noche",

  kb_eye: "Controles", kb_h2: "Se aprende en un minuto",
  kb_space: "Espacio",
  k1: "Acelerador", k2: "Freno / reversa", k3: "Dirección",
  k4: "Freno trasero — en curva la cola se va",
  k5: "Encendido on / off", k6: "Menú",
  kb_note: "Si sueltas, el derrape se corrige solo; si mantienes el acelerador sigue deslizando, y contravolantear lo endereza más rápido. Acércate a un paquete amarillo y la recogida es automática.",

  foot_dev: "Desarrollado con Godot 4.6 (Forward+)",
},

/* --------------------------------------------------------------- pt_BR --- */
pt_BR: {
  title: "Moto Courier Simulator — Sua cidade, seu turno",
  desc: "Um simulador de entregador em cidade aberta feito na Godot 4.6. Trânsito vivo, ciclo real de dia e noite, mercado de usados, celular no jogo e cooperativo para quatro.",
  nav_city: "Cidade", nav_courier: "Entregador", nav_market: "Mercado",
  nav_coop: "Coop", nav_gallery: "Imagens", nav_lang: "Idioma",

  hero1: "A cidade é sua.", hero2: "A moto é sua.", hero3: "O turno é seu.",
  hero_lede: "Você acabou de ser demitido. Sobraram uma bicicleta e um celular. Comece entregando encomendas numa cidade onde o trânsito anda, as pessoas caminham e a noite cai de verdade — e construa sua moto, sua loja, seu nome.",
  cta_wish: "Adicionar à lista de desejos da Steam", cta_shots: "Imagens do jogo",

  steam_kicker: "Em breve na Steam",
  steam_title: "Fique sabendo no dia do lançamento",
  steam_text: "O jogo chega em breve à Steam. Coloque na lista de desejos: você recebe um aviso no dia do lançamento — e isso ajuda diretamente o jogo a aparecer.",
  steam_soon: "Página da Steam em preparação",

  f1l: "de terra em uma peça só", f2l: "pedestres, 260 veículos", f3l: "veículos pilotáveis",
  f4l: "jogadores no coop", f5l: "idiomas",

  city_eye: "Cidade viva",
  city_h2: "Uma cidade que funciona mesmo sem você",
  city_p: "Avenidas em grade, ruas laterais, um litoral e quatro píeres. O trânsito obedece aos semáforos, os pedestres andam na calçada, as lojas abrem e fecham na hora. O sol se põe de verdade; quando escurece, os postes e as vitrines acendem um a um.",
  city_l1: "<b>Ciclo real de dia e noite</b> — o turno da manhã e o da noite não são a mesma cidade.",
  city_l2: "<b>Clima</b> — chuva, asfalto molhado e água na viseira.",
  city_l3: "<b>Prédios em que se entra</b> — elevador, andar, interfone; a encomenda você entrega em mãos.",
  city_l4: "<b>Mar, praia, parque e quadra de basquete</b> — também há o que fazer entre um turno e outro.",

  pier_eye: "Litoral", pier_h2: "Onde a cidade acaba",
  pier_p: "A terra termina em areia nos quatro lados, e no meio de cada lado há um píer avançando pelo mar. O tabuado dá para andar — dá para ir até a ponta de moto e parar sobre a água.",

  cou_eye: "O ciclo do entregador", cou_h2: "De novato a lenda",
  cou_p: "Só o número de entregas não basta: para subir de patente é preciso volume e nota. A nota olha o tempo, os danos e o quanto você sacudiu a encomenda — ou seja, «rápido e desleixado» não é uma estratégia vencedora.",
  cou_l1: "<b>Seis patentes</b> — Novato, Entregador, Veterano, Mestre, Elite, Lenda.",
  cou_l2: "<b>Cada patente abre três coisas</b> — pagamento maior, mais corridas ao mesmo tempo, entregas mais distantes.",
  cou_l3: "<b>Sequências e meta diária</b> — entregas limpas seguidas pagam bônus.",
  cou_l4: "<b>Clientes com contrato, transmissão ao vivo, empresa rival</b> — encomendas não são o único jeito de ganhar.",

  ph_eye: "Celular", ph_h2: "O jogo inteiro cabe no bolso",
  ph_p: "Não tem menu: tem celular. Corridas, mapa, conta bancária, mensagens, mercado, redes sociais, música e ajustes ficam numa tela que dá para abrir até andando.",
  ph_l1: "<b>Entregador</b> — corridas recebidas, aceitar, rota.",
  ph_l2: "<b>Banco e financiamento</b> — ganhos, dívida, parcelas.",
  ph_l3: "<b>Achar Veículo</b> — anúncios de usados, pechincha com o vendedor.",
  ph_l4: "<b>Câmera e Infagram</b> — foto da entrega, publicação.",

  mk_eye: "Mercado de usados", mk_h2: "Comprar a moto também é um jogo",
  mk_p: "Os anúncios parecem um site de classificados de verdade: fotos, quilometragem, estado das peças, o texto do vendedor. O preço não é fixo — você pechincha, dá a sua na troca e, fechado o negócio, o vendedor leva a moto até o ponto de encontro.",
  mk_l1: "<b>Estado das peças</b> — pneus, freios, corrente e motor se desgastam separadamente; o custo do conserto faz parte do preço.",
  mk_l2: "<b>Financiamento e seguro</b> — entrada, relação dívida/renda, renda comprovada.",
  mk_l3: "<b>Preparação e pintura</b> — você monta a moto do seu jeito.",
  mk_l4: "<b>Furto</b> — moto deixada na rua pode não estar mais lá.",

  ni_eye: "Turno da noite", ni_h2: "No escuro o pagamento sobe e a visibilidade cai",
  ni_p: "As corridas noturnas pagam melhor, mas a cidade vira outro lugar: você enxerga até onde vai o farol, o asfalto molhado não agarra e o trânsito ralo dá vontade de abrir o acelerador. Cair não é de graça — o dano vai para a nota e para a conta da oficina.",
  ni_c1: "Anoitecer — as vitrines acendem",
  ni_c2: "Noite — farol, postes, avenida vazia",
  ni_c3: "Sobre o ombro — o baú está sempre ali",

  co_eye: "Coop", co_h2: "Quatro entregadores, uma cidade",
  co_p: "Um hospeda, os outros entram pelo IP. O que é compartilhado é o mundo: mesmo trânsito, mesmos pedestres, mesma hora, mesmo clima. Dinheiro, entregas e patente são de cada um — os amigos aparecem como marcadores coloridos no mapa.",
  co_l1: "<b>Até 4 jogadores</b>, em LAN funciona direto.",
  co_l2: "<b>A mesma versão é obrigatória</b> — o handshake compara as impressões digitais da cidade e recusa a conexão abertamente se diferirem.",
  co_l3: "<b>As colisões também são compartilhadas</b> — replica-se a causa, não o efeito.",

  c1h: "Você começa de bicicleta",
  c1p: "Sua rescisão dá exatamente uma bicicleta. As catorze motos estão no mercado de usados e vão abrindo conforme você ganha.",
  c2h: "Tem prova de habilitação",
  c2p: "Você precisa passar antes de subir numa moto. Nas blitze podem pedir os documentos.",
  c3h: "Rachas com aposta",
  c3p: "O jeito rápido e caro de ganhar fora do turno. Se perder, o que você apostou vai embora.",

  lg_eye: "Idiomas", lg_h2: "Jogável em oito idiomas",
  lg_p: "Todas as telas — o celular, os anúncios, os contratos, a prova de habilitação — estão traduzidas por inteiro. O idioma se escolhe no menu e vale na hora, sem reiniciar. Esta página fala os mesmos oito idiomas: escolha abaixo.",

  ga_eye: "Imagens", ga_h2: "Tudo de dentro do jogo",
  ga_p: "Todas as imagens abaixo saíram do jogo rodando, numa sessão de verdade — capturas, não renders. Clique para ampliar.",
  g1: "Turno da tarde", g2: "A grade da cidade", g3: "Píer e mar",
  g4: "A moto de lado", g5: "Primeiro veículo: a bicicleta", g6: "O celular do jogo",
  g7: "Visão de pilotagem", g8: "Anoitecer", g9: "Turno da noite",

  kb_eye: "Controles", kb_h2: "Aprende em um minuto",
  kb_space: "Espaço",
  k1: "Acelerador", k2: "Freio / ré", k3: "Direção",
  k4: "Freio traseiro — na curva a traseira sai",
  k5: "Ignição liga / desliga", k6: "Menu",
  kb_note: "Soltando, o drift se corrige sozinho; com o acelerador aberto ele continua escorregando, e contra-esterço traz de volta mais rápido. Chegue perto de uma encomenda amarela e a coleta acontece sozinha.",

  foot_dev: "Desenvolvido com Godot 4.6 (Forward+)",
},

/* --------------------------------------------------------------- pt_PT --- */
pt_PT: {
  title: "Moto Courier Simulator — A tua cidade, o teu turno",
  desc: "Um simulador de estafeta em cidade aberta feito em Godot 4.6. Trânsito vivo, ciclo real de dia e noite, mercado de usados, telemóvel no jogo e cooperativo a quatro.",
  nav_city: "Cidade", nav_courier: "Estafeta", nav_market: "Mercado",
  nav_coop: "Coop", nav_gallery: "Imagens", nav_lang: "Idioma",

  hero1: "A cidade é tua.", hero2: "A mota é tua.", hero3: "O turno é teu.",
  hero_lede: "Acabaste de ser despedido. Restam-te uma bicicleta e um telemóvel. Começa a entregar encomendas numa cidade onde o trânsito anda, as pessoas caminham e a noite cai a sério — e constrói a tua mota, a tua loja, o teu nome.",
  cta_wish: "Adicionar à lista de desejos do Steam", cta_shots: "Imagens do jogo",

  steam_kicker: "Brevemente no Steam",
  steam_title: "Fica a saber no dia do lançamento",
  steam_text: "O jogo chega brevemente ao Steam. Põe na lista de desejos: recebes aviso no dia do lançamento — e ajuda diretamente o jogo a ser visto.",
  steam_soon: "Página do Steam em preparação",

  f1l: "de terra numa só peça", f2l: "peões, 260 veículos", f3l: "veículos conduzíveis",
  f4l: "jogadores em coop", f5l: "idiomas",

  city_eye: "Cidade viva",
  city_h2: "Uma cidade que funciona mesmo sem ti",
  city_p: "Avenidas em grelha, ruas secundárias, uma costa e quatro pontões. O trânsito respeita os semáforos, os peões andam no passeio, as lojas abrem e fecham a horas. O sol põe-se a sério; quando escurece, os candeeiros e as montras acendem um a um.",
  city_l1: "<b>Ciclo real de dia e noite</b> — o turno da manhã e o da noite não são a mesma cidade.",
  city_l2: "<b>Meteorologia</b> — chuva, alcatrão molhado e água na viseira.",
  city_l3: "<b>Prédios em que se entra</b> — elevador, piso, campainha; a encomenda entregas em mão.",
  city_l4: "<b>Mar, praia, parque e campo de basquetebol</b> — também há que fazer entre turnos.",

  pier_eye: "Costa", pier_h2: "Onde a cidade acaba",
  pier_p: "A terra acaba em areia nos quatro lados e, a meio de cada lado, há um pontão a entrar pelo mar. O estrado dá para andar — podes ir até à ponta de mota e ficar por cima da água.",

  cou_eye: "O ciclo do estafeta", cou_h2: "De novato a lenda",
  cou_p: "Só o número de entregas não chega: para subir de patente é preciso volume e classificação. A classificação olha para o tempo, os danos e o quanto abanaste a encomenda — ou seja, «rápido e desleixado» não é uma estratégia vencedora.",
  cou_l1: "<b>Seis patentes</b> — Novato, Estafeta, Veterano, Mestre, Elite, Lenda.",
  cou_l2: "<b>Cada patente abre três coisas</b> — melhor pagamento, mais serviços em simultâneo, entregas mais longe.",
  cou_l3: "<b>Séries e objetivo diário</b> — entregas limpas seguidas dão prémio.",
  cou_l4: "<b>Clientes com contrato, transmissão em direto, empresa rival</b> — as encomendas não são a única forma de ganhar.",

  ph_eye: "Telemóvel", ph_h2: "O jogo inteiro cabe no bolso",
  ph_p: "Não há menus: há um telemóvel. Serviços, mapa, conta bancária, mensagens, compras, redes sociais, música e definições ficam num ecrã que podes abrir mesmo a andar.",
  ph_l1: "<b>Estafeta</b> — serviços recebidos, aceitar, percurso.",
  ph_l2: "<b>Banco e crédito</b> — ganhos, dívida, prestações.",
  ph_l3: "<b>Encontrar Veículo</b> — anúncios de usados, regateio com o vendedor.",
  ph_l4: "<b>Câmara e Infagram</b> — foto da entrega, publicação.",

  mk_eye: "Mercado de usados", mk_h2: "Comprar a mota também é um jogo",
  mk_p: "Os anúncios parecem um verdadeiro site de classificados: fotos, quilometragem, estado das peças, a conversa do vendedor. O preço não é fixo — regateias, dás a tua como retoma e, fechado o negócio, o vendedor leva a mota ao ponto de encontro.",
  mk_l1: "<b>Estado das peças</b> — pneus, travões, corrente e motor gastam-se em separado; o custo da reparação faz parte do preço.",
  mk_l2: "<b>Crédito e seguro</b> — entrada, rácio dívida/rendimento, rendimentos comprovados.",
  mk_l3: "<b>Preparação e pintura</b> — montas a mota à tua maneira.",
  mk_l4: "<b>Furto</b> — uma mota deixada na rua pode já não lá estar.",

  ni_eye: "Turno da noite", ni_h2: "No escuro o pagamento sobe e a visibilidade desce",
  ni_p: "Os serviços noturnos pagam melhor, mas a cidade passa a ser outro sítio: vês até onde chega o farol, o alcatrão molhado não agarra e o trânsito escasso dá vontade de abrir o acelerador. Cair não é de graça — o dano vai para a classificação e para a fatura da oficina.",
  ni_c1: "Anoitecer — as montras acendem",
  ni_c2: "Noite — farol, candeeiros, avenida vazia",
  ni_c3: "Por cima do ombro — a mala está sempre ali",

  co_eye: "Coop", co_h2: "Quatro estafetas, uma cidade",
  co_p: "Um aloja, os outros entram pelo IP. O que é partilhado é o mundo: mesmo trânsito, mesmos peões, mesma hora, mesma meteorologia. Dinheiro, entregas e patente são de cada um — os amigos aparecem como marcas coloridas no mapa.",
  co_l1: "<b>Até 4 jogadores</b>, em LAN funciona diretamente.",
  co_l2: "<b>É preciso a mesma versão</b> — o handshake compara as impressões digitais da cidade e recusa a ligação sem rodeios se não baterem certo.",
  co_l3: "<b>As colisões também são partilhadas</b> — replica-se a causa, não o efeito.",

  c1h: "Começas de bicicleta",
  c1p: "A tua indemnização dá exatamente uma bicicleta. As catorze motas estão no mercado de usados e vão abrindo à medida que ganhas.",
  c2h: "Há exame de condução",
  c2p: "Tens de passar antes de subir para uma mota. Nas operações STOP podem pedir-te os documentos.",
  c3h: "Corridas apostadas",
  c3p: "A forma rápida e cara de ganhar fora do turno. Se perderes, o que apostaste vai-se.",

  lg_eye: "Idiomas", lg_h2: "Jogável em oito idiomas",
  lg_p: "Todos os ecrãs — o telemóvel, os anúncios, os contratos, o exame de condução — estão totalmente traduzidos. O idioma escolhe-se no menu e aplica-se logo, sem reiniciar. Esta página fala os mesmos oito idiomas: escolhe abaixo.",

  ga_eye: "Imagens", ga_h2: "Tudo de dentro do jogo",
  ga_p: "Todas as imagens abaixo saíram do jogo a correr, numa sessão a sério — capturas, não renders. Clica para ampliar.",
  g1: "Turno da tarde", g2: "A grelha da cidade", g3: "Pontão e mar",
  g4: "A mota de lado", g5: "Primeiro veículo: a bicicleta", g6: "O telemóvel do jogo",
  g7: "Vista de condução", g8: "Anoitecer", g9: "Turno da noite",

  kb_eye: "Comandos", kb_h2: "Aprende-se num minuto",
  kb_space: "Espaço",
  k1: "Acelerador", k2: "Travão / marcha-atrás", k3: "Direção",
  k4: "Travão traseiro — na curva a traseira sai",
  k5: "Ignição ligar / desligar", k6: "Menu",
  kb_note: "Se largares, o drift corrige-se sozinho; com o acelerador aberto continua a deslizar, e contra-direção traz de volta mais depressa. Chega-te a uma encomenda amarela e a recolha acontece sozinha.",

  foot_dev: "Desenvolvido com Godot 4.6 (Forward+)",
},

};

/* --------------------------------------------------------------------------
 * EK BÖLÜMLER — sayfa "oyunu tanıtan" yöne büyütüldü: rütbe tablosu, bir
 * vardiyanın akışı, yüzeyin altındaki sistemler ve sosyal hesaplar.
 * Ayrı blok tutuluyor ki yukarıdaki ilk sürüm okunur kalsın; aşağıda
 * dillerin üstüne birleştiriliyor.
 * ------------------------------------------------------------------------ */

const T_EXTRA = {

tr: {
  rank_eye: "Rütbe merdiveni", rank_h2: "Ne kadar teslimat, ne kazandırıyor",
  th1: "Rütbe", th2: "Teslimat", th3: "Ücret", th4: "Eşzamanlı iş",
  r1: "Çaylak", r2: "Kurye", r3: "Kıdemli", r4: "Usta", r5: "Elit", r6: "Efsane",
  rank_note: "Rütbe atlamak için sayı yetmiyor, puan da tutmalı. Puan düşerse rütbe de düşüyor — ve rütbe yalnız ücreti değil, aynı anda kaç iş alabildiğini ve ne kadar uzağa gönderildiğini de belirliyor.",

  flow_eye: "Bir vardiya", flow_h2: "İş nasıl akıyor",
  w1t: "Telefon çalar", w1p: "İş teklifi gelir: mesafe, ücret, yük tipi. Kabul et ya da bırak.",
  w2t: "Alırsın", w2p: "Adrese gidip paketi sepete koyarsın. Kırılacak yükse dikkatli sür.",
  w3t: "Götürürsün", w3p: "Süre işliyor, trafik akıyor. Sarsarsan, çarparsan puan düşüyor.",
  w4t: "Kapıyı çalarsın", w4p: "Binaya girer, asansöre biner, paketi elden verirsin. Puan yazılır.",

  sys_eye: "Sistemler", sys_h2: "Yüzeyin altında ne var",
  sys_p: "Kurye döngüsünün etrafında birbirine bağlı bir ekonomi dönüyor. Hepsi birbirini besliyor: kaza kaskoya, kasko nakde, nakit krediye, kredi alabileceğin motora bakıyor.",
  y1t: "Taşıt kredisi", y1p: "Peşinat, gelir/borç oranı, kanıtlanmış kazanç. Banka her isteyene vermiyor.",
  y2t: "Kasko", y2p: "Kazanın faturasını sen mi ödersin sigorta mı — primi önceden ödediysen.",
  y3t: "Canlı yayın", y3p: "Sürüşünü yayınla, izleyici topla, bağış al. Kaza da yayında.",
  y4t: "Dükkân işletmesi", y4p: "Kariyerin finali: kendi dükkânını açıp raf, stok ve kasa işletiyorsun.",
  y5t: "Modifiye ve boya", y5p: "Egzoz, sele, sepet, renk. Aldığın motor öyle kalmak zorunda değil.",
  y6t: "Motor hırsızlığı", y6p: "Sokakta bıraktığın motor çalınabiliyor. Alarm ve kilit satılık.",
  y7t: "Polis çevirmesi", y7p: "Hız, kırmızı ışık, ehliyet. Ceza doğrudan cebinden çıkıyor.",
  y8t: "Rakip şirket", y8p: "Şehirde tek kurye sen değilsin; iyi işleri kapmak için yarışıyorsun.",
  y9t: "Market alışverişi", y9p: "Raflardan gerçek ürün topluyorsun — hem müşteri siparişi hem kendi ihtiyacın.",

  soc_eye: "Takip et", soc_h2: "Gelişmeleri kaçırma",
  soc_p: "Yeni özellikler, kısa videolar ve çıkış tarihi önce buralarda duyuruluyor.",
},

en: {
  rank_eye: "Rank ladder", rank_h2: "How far each rank gets you",
  th1: "Rank", th2: "Deliveries", th3: "Pay", th4: "Jobs at once",
  r1: "Rookie", r2: "Courier", r3: "Senior", r4: "Master", r5: "Elite", r6: "Legend",
  rank_note: "Volume alone won't rank you up — your rating has to hold too. Let the rating slip and the rank goes with it. And rank sets more than pay: it sets how many jobs you can carry and how far the city will send you.",

  flow_eye: "One shift", flow_h2: "How a job actually runs",
  w1t: "The phone rings", w1p: "An offer comes in: distance, pay, cargo type. Take it or leave it.",
  w2t: "You pick it up", w2p: "Ride to the address and drop the package in the box. Fragile cargo, ride gently.",
  w3t: "You haul it", w3p: "The clock runs, traffic flows. Shake it or crash it and the rating drops.",
  w4t: "You ring the bell", w4p: "Into the building, up the lift, package handed over. Rating goes on the board.",

  sys_eye: "Systems", sys_h2: "What sits under the surface",
  sys_p: "An interlocking economy turns around the courier loop. Everything feeds everything else: crashes feed insurance, insurance feeds cash, cash feeds credit, credit decides which bike you can even reach.",
  y1t: "Vehicle loan", y1p: "Down payment, debt-to-income, proven earnings. The bank doesn't say yes to everyone.",
  y2t: "Insurance", y2p: "Who pays for the crash, you or the insurer — if you paid the premium up front.",
  y3t: "Live streaming", y3p: "Stream your ride, gather viewers, take donations. The crash is on stream too.",
  y4t: "Running a shop", y4p: "The last act of the career: your own shop, with shelves, stock and a till.",
  y5t: "Mods and paint", y5p: "Exhaust, seat, box, colour. The bike you bought doesn't have to stay that way.",
  y6t: "Bike theft", y6p: "A bike left on the street can be stolen. Alarms and locks are for sale.",
  y7t: "Police stops", y7p: "Speed, red lights, licence. The fine comes straight out of your pocket.",
  y8t: "Rival firm", y8p: "You're not the only courier in town; you race them for the good jobs.",
  y9t: "Grocery runs", y9p: "You pick real products off the shelves — customer orders and your own needs.",

  soc_eye: "Follow along", soc_h2: "Don't miss what's next",
  soc_p: "New features, short clips and the release date land here first.",
},

fr: {
  rank_eye: "Échelle des grades", rank_h2: "Ce que chaque grade rapporte",
  th1: "Grade", th2: "Livraisons", th3: "Paie", th4: "Courses à la fois",
  r1: "Débutant", r2: "Coursier", r3: "Confirmé", r4: "Expert", r5: "Élite", r6: "Légende",
  rank_note: "Le volume seul ne fait pas monter : la note doit suivre. Si elle chute, le grade chute avec. Et le grade ne fixe pas que la paie : il fixe combien de courses tu portes et jusqu'où la ville t'envoie.",

  flow_eye: "Une tournée", flow_h2: "Comment se déroule une course",
  w1t: "Le téléphone sonne", w1p: "Une offre arrive : distance, paie, type de colis. À prendre ou à laisser.",
  w2t: "Tu récupères", w2p: "Tu roules jusqu'à l'adresse et tu mets le colis dans le top-case. Fragile ? Roule doux.",
  w3t: "Tu livres", w3p: "Le chrono tourne, le trafic circule. Secousses ou chute : la note descend.",
  w4t: "Tu sonnes", w4p: "Dans l'immeuble, l'ascenseur, le colis en main propre. La note est comptée.",

  sys_eye: "Systèmes", sys_h2: "Ce qu'il y a sous la surface",
  sys_p: "Une économie imbriquée tourne autour de la boucle du coursier. Tout se nourrit : la chute nourrit l'assurance, l'assurance la trésorerie, la trésorerie le crédit, le crédit la moto que tu peux viser.",
  y1t: "Crédit véhicule", y1p: "Apport, taux d'endettement, revenus prouvés. La banque ne dit pas oui à tout le monde.",
  y2t: "Assurance", y2p: "Qui paie la casse, toi ou l'assureur — si tu as réglé la prime avant.",
  y3t: "Streaming", y3p: "Diffuse ta tournée, gagne des spectateurs, reçois des dons. La chute passe aussi en direct.",
  y4t: "Gérer une boutique", y4p: "Le dernier acte de la carrière : ta boutique, ses rayons, son stock et sa caisse.",
  y5t: "Préparation et peinture", y5p: "Échappement, selle, top-case, couleur. La moto achetée peut changer de tête.",
  y6t: "Vol de moto", y6p: "Une moto laissée dans la rue peut disparaître. Alarmes et antivols sont en vente.",
  y7t: "Contrôles de police", y7p: "Vitesse, feu rouge, permis. L'amende sort directement de ta poche.",
  y8t: "Entreprise rivale", y8p: "Tu n'es pas le seul coursier en ville ; vous vous disputez les bonnes courses.",
  y9t: "Courses au supermarché", y9p: "Tu prends de vrais produits en rayon — commandes clients et tes propres besoins.",

  soc_eye: "Suis le projet", soc_h2: "Ne rate pas la suite",
  soc_p: "Nouveautés, courtes vidéos et date de sortie arrivent ici en premier.",
},

de: {
  rank_eye: "Rangleiter", rank_h2: "Was jeder Rang einbringt",
  th1: "Rang", th2: "Lieferungen", th3: "Lohn", th4: "Aufträge gleichzeitig",
  r1: "Neuling", r2: "Kurier", r3: "Erfahren", r4: "Meister", r5: "Elite", r6: "Legende",
  rank_note: "Menge allein bringt dich nicht hoch — die Bewertung muss mithalten. Rutscht sie, rutscht der Rang mit. Und der Rang setzt mehr als den Lohn: er setzt, wie viele Aufträge du trägst und wie weit dich die Stadt schickt.",

  flow_eye: "Eine Schicht", flow_h2: "Wie ein Auftrag abläuft",
  w1t: "Das Handy klingelt", w1p: "Ein Angebot kommt: Strecke, Lohn, Frachtart. Annehmen oder liegen lassen.",
  w2t: "Du holst ab", w2p: "Zur Adresse fahren, Paket in die Box. Zerbrechlich? Dann sanft fahren.",
  w3t: "Du bringst es hin", w3p: "Die Uhr läuft, der Verkehr rollt. Durchschütteln oder Sturz kostet Bewertung.",
  w4t: "Du klingelst", w4p: "Rein ins Haus, Aufzug, Paket persönlich übergeben. Bewertung wird gebucht.",

  sys_eye: "Systeme", sys_h2: "Was unter der Oberfläche liegt",
  sys_p: "Um den Kurier-Kreislauf dreht sich eine verzahnte Wirtschaft. Alles hängt zusammen: der Sturz an der Versicherung, die Versicherung am Bargeld, das Bargeld am Kredit, der Kredit an der Maschine, die überhaupt erreichbar ist.",
  y1t: "Fahrzeugkredit", y1p: "Anzahlung, Schulden-Einkommens-Verhältnis, nachgewiesene Einnahmen. Die Bank sagt nicht jedem Ja.",
  y2t: "Versicherung", y2p: "Wer den Schaden zahlt, du oder der Versicherer — wenn du die Prämie vorher entrichtet hast.",
  y3t: "Livestream", y3p: "Übertrage deine Fahrt, sammle Zuschauer, nimm Spenden. Der Sturz läuft auch live.",
  y4t: "Laden führen", y4p: "Der letzte Akt der Karriere: dein eigener Laden mit Regalen, Lager und Kasse.",
  y5t: "Tuning und Lack", y5p: "Auspuff, Sitz, Koffer, Farbe. Die gekaufte Maschine muss nicht so bleiben.",
  y6t: "Motorraddiebstahl", y6p: "Eine auf der Straße abgestellte Maschine kann weg sein. Alarm und Schloss gibt es zu kaufen.",
  y7t: "Polizeikontrollen", y7p: "Tempo, rote Ampel, Führerschein. Das Bußgeld geht direkt aus deiner Tasche.",
  y8t: "Konkurrenzfirma", y8p: "Du bist nicht der einzige Kurier; um die guten Aufträge wird gerannt.",
  y9t: "Einkaufen", y9p: "Du nimmst echte Produkte aus dem Regal — Kundenbestellung und eigener Bedarf.",

  soc_eye: "Folgen", soc_h2: "Verpass nichts",
  soc_p: "Neue Funktionen, kurze Clips und der Erscheinungstermin landen hier zuerst.",
},

it: {
  rank_eye: "Scala dei gradi", rank_h2: "Quanto rende ogni grado",
  th1: "Grado", th2: "Consegne", th3: "Paga", th4: "Consegne insieme",
  r1: "Esordiente", r2: "Corriere", r3: "Anziano", r4: "Maestro", r5: "Elite", r6: "Leggenda",
  rank_note: "La quantità da sola non fa salire: deve reggere anche il voto. Se il voto scende, scende pure il grado. E il grado non fissa solo la paga: fissa quante consegne porti insieme e quanto lontano ti manda la città.",

  flow_eye: "Un turno", flow_h2: "Come funziona una consegna",
  w1t: "Squilla il telefono", w1p: "Arriva un'offerta: distanza, paga, tipo di carico. Prendere o lasciare.",
  w2t: "Ritiri", w2p: "Vai all'indirizzo e metti il pacco nel baule. Se è fragile, guida morbido.",
  w3t: "Porti", w3p: "Il tempo corre, il traffico scorre. Se lo scuoti o cadi, il voto cala.",
  w4t: "Suoni il campanello", w4p: "Dentro il palazzo, ascensore, pacco in mano. Il voto viene registrato.",

  sys_eye: "Sistemi", sys_h2: "Cosa c'è sotto la superficie",
  sys_p: "Attorno al ciclo del corriere gira un'economia incastrata. Tutto alimenta tutto: la caduta alimenta l'assicurazione, l'assicurazione la cassa, la cassa il prestito, il prestito la moto che puoi permetterti.",
  y1t: "Prestito veicolo", y1p: "Anticipo, rapporto debito/reddito, guadagni dimostrati. La banca non dice sì a tutti.",
  y2t: "Assicurazione", y2p: "Chi paga il danno, tu o l'assicurazione — se hai versato il premio prima.",
  y3t: "Dirette", y3p: "Trasmetti la guida, raccogli spettatori, ricevi donazioni. Anche la caduta va in diretta.",
  y4t: "Gestire un negozio", y4p: "L'ultimo atto della carriera: il tuo negozio, con scaffali, scorte e cassa.",
  y5t: "Elaborazioni e vernice", y5p: "Scarico, sella, baule, colore. La moto comprata non deve restare così.",
  y6t: "Furto di moto", y6p: "Una moto lasciata in strada può sparire. Allarmi e bloccasterzo sono in vendita.",
  y7t: "Posti di blocco", y7p: "Velocità, rosso, patente. La multa esce direttamente dalle tue tasche.",
  y8t: "Azienda rivale", y8p: "Non sei l'unico corriere in città; le consegne buone ve le contendete.",
  y9t: "Spesa al supermercato", y9p: "Prendi prodotti veri dagli scaffali — ordini dei clienti e i tuoi bisogni.",

  soc_eye: "Segui il progetto", soc_h2: "Non perderti il resto",
  soc_p: "Novità, video brevi e data d'uscita arrivano prima qui.",
},

es: {
  rank_eye: "Escalera de rangos", rank_h2: "Cuánto rinde cada rango",
  th1: "Rango", th2: "Entregas", th3: "Paga", th4: "Pedidos a la vez",
  r1: "Novato", r2: "Repartidor", r3: "Veterano", r4: "Maestro", r5: "Élite", r6: "Leyenda",
  rank_note: "El volumen por sí solo no te sube: la calificación también tiene que aguantar. Si cae, el rango cae con ella. Y el rango no fija solo la paga: fija cuántos pedidos cargas y qué tan lejos te manda la ciudad.",

  flow_eye: "Un turno", flow_h2: "Cómo corre un pedido",
  w1t: "Suena el teléfono", w1p: "Llega una oferta: distancia, paga, tipo de carga. Aceptas o la dejas.",
  w2t: "Recoges", w2p: "Vas a la dirección y metes el paquete en el baúl. Si es frágil, conduce suave.",
  w3t: "Lo llevas", w3p: "El reloj corre, el tráfico circula. Si lo sacudes o chocas, baja la calificación.",
  w4t: "Tocas el timbre", w4p: "Entras al edificio, subes en el ascensor, entregas en mano. Se anota la calificación.",

  sys_eye: "Sistemas", sys_h2: "Lo que hay debajo de la superficie",
  sys_p: "Alrededor del ciclo del repartidor gira una economía encadenada. Todo alimenta a todo: el choque alimenta el seguro, el seguro la caja, la caja el crédito, y el crédito decide a qué moto puedes aspirar.",
  y1t: "Crédito de vehículo", y1p: "Pago inicial, relación deuda/ingreso, ingresos comprobados. El banco no le dice que sí a cualquiera.",
  y2t: "Seguro", y2p: "Quién paga el choque, tú o la aseguradora — si pagaste la prima antes.",
  y3t: "Transmisiones en vivo", y3p: "Transmite tu ruta, junta público, recibe donaciones. El choque también sale al aire.",
  y4t: "Llevar un negocio", y4p: "El último acto de la carrera: tu propio local, con estantes, inventario y caja.",
  y5t: "Modificaciones y pintura", y5p: "Escape, asiento, baúl, color. La moto que compraste no tiene que quedarse así.",
  y6t: "Robo de moto", y6p: "Una moto dejada en la calle se puede robar. Hay alarmas y candados a la venta.",
  y7t: "Retenes de policía", y7p: "Velocidad, luz roja, licencia. La multa sale directo de tu bolsillo.",
  y8t: "Empresa rival", y8p: "No eres el único repartidor de la ciudad; se pelean los buenos pedidos.",
  y9t: "Compras en el súper", y9p: "Tomas productos reales de los estantes — pedidos de clientes y lo tuyo.",

  soc_eye: "Sigue el proyecto", soc_h2: "No te pierdas lo que viene",
  soc_p: "Novedades, videos cortos y la fecha de lanzamiento aparecen primero acá.",
},

pt_BR: {
  rank_eye: "Escada de patentes", rank_h2: "Quanto cada patente rende",
  th1: "Patente", th2: "Entregas", th3: "Pagamento", th4: "Corridas ao mesmo tempo",
  r1: "Novato", r2: "Entregador", r3: "Veterano", r4: "Mestre", r5: "Elite", r6: "Lenda",
  rank_note: "Só volume não sobe você: a nota também precisa segurar. Se a nota cai, a patente cai junto. E a patente define mais que o pagamento: define quantas corridas você carrega e o quão longe a cidade te manda.",

  flow_eye: "Um turno", flow_h2: "Como uma corrida acontece",
  w1t: "O celular toca", w1p: "Chega uma oferta: distância, pagamento, tipo de carga. Aceita ou deixa.",
  w2t: "Você retira", w2p: "Vai até o endereço e põe a encomenda no baú. Se for frágil, pilote com jeito.",
  w3t: "Você leva", w3p: "O relógio corre, o trânsito anda. Se sacudir ou bater, a nota cai.",
  w4t: "Você toca a campainha", w4p: "Entra no prédio, sobe de elevador, entrega em mãos. A nota é lançada.",

  sys_eye: "Sistemas", sys_h2: "O que existe abaixo da superfície",
  sys_p: "Em volta do ciclo do entregador gira uma economia encadeada. Tudo alimenta tudo: a batida alimenta o seguro, o seguro o caixa, o caixa o financiamento, e o financiamento decide que moto dá para alcançar.",
  y1t: "Financiamento de veículo", y1p: "Entrada, relação dívida/renda, renda comprovada. O banco não aprova qualquer um.",
  y2t: "Seguro", y2p: "Quem paga a batida, você ou a seguradora — se pagou o prêmio antes.",
  y3t: "Transmissão ao vivo", y3p: "Transmita a pilotagem, junte público, receba doações. A queda também vai ao ar.",
  y4t: "Tocar uma loja", y4p: "O último ato da carreira: sua própria loja, com prateleira, estoque e caixa.",
  y5t: "Preparação e pintura", y5p: "Escapamento, banco, baú, cor. A moto comprada não precisa continuar assim.",
  y6t: "Furto de moto", y6p: "Moto deixada na rua pode sumir. Tem alarme e trava à venda.",
  y7t: "Blitz da polícia", y7p: "Velocidade, sinal vermelho, habilitação. A multa sai direto do seu bolso.",
  y8t: "Empresa rival", y8p: "Você não é o único entregador da cidade; as boas corridas são disputadas.",
  y9t: "Compras no mercado", y9p: "Você pega produtos de verdade da prateleira — pedido do cliente e o que é seu.",

  soc_eye: "Acompanhe", soc_h2: "Não perca o que vem",
  soc_p: "Novidades, vídeos curtos e a data de lançamento saem aqui primeiro.",
},

pt_PT: {
  rank_eye: "Escada de patentes", rank_h2: "Quanto rende cada patente",
  th1: "Patente", th2: "Entregas", th3: "Pagamento", th4: "Serviços em simultâneo",
  r1: "Novato", r2: "Estafeta", r3: "Veterano", r4: "Mestre", r5: "Elite", r6: "Lenda",
  rank_note: "Só volume não sobe: a classificação também tem de aguentar. Se ela cai, a patente cai com ela. E a patente define mais do que o pagamento: define quantos serviços levas e até onde a cidade te manda.",

  flow_eye: "Um turno", flow_h2: "Como decorre um serviço",
  w1t: "O telemóvel toca", w1p: "Chega uma proposta: distância, pagamento, tipo de carga. Aceitas ou deixas.",
  w2t: "Levantas", w2p: "Vais à morada e pões a encomenda na mala. Se for frágil, conduz com calma.",
  w3t: "Levas", w3p: "O relógio corre, o trânsito anda. Se abanares ou bateres, a classificação desce.",
  w4t: "Tocas à campainha", w4p: "Entras no prédio, sobes de elevador, entregas em mão. A classificação é lançada.",

  sys_eye: "Sistemas", sys_h2: "O que está por baixo da superfície",
  sys_p: "À volta do ciclo do estafeta gira uma economia encadeada. Tudo alimenta tudo: a queda alimenta o seguro, o seguro a tesouraria, a tesouraria o crédito, e o crédito decide a que mota podes chegar.",
  y1t: "Crédito automóvel", y1p: "Entrada, rácio dívida/rendimento, rendimentos comprovados. O banco não aprova a toda a gente.",
  y2t: "Seguro", y2p: "Quem paga o embate, tu ou a seguradora — se pagaste o prémio antes.",
  y3t: "Transmissão em direto", y3p: "Transmite a condução, junta público, recebe donativos. A queda também vai para o ar.",
  y4t: "Gerir uma loja", y4p: "O último ato da carreira: a tua loja, com prateleiras, stock e caixa.",
  y5t: "Preparação e pintura", y5p: "Escape, selim, mala, cor. A mota comprada não tem de ficar assim.",
  y6t: "Furto de motas", y6p: "Uma mota deixada na rua pode desaparecer. Há alarmes e cadeados à venda.",
  y7t: "Operações STOP", y7p: "Velocidade, semáforo vermelho, carta. A multa sai diretamente do teu bolso.",
  y8t: "Empresa rival", y8p: "Não és o único estafeta da cidade; os bons serviços são disputados.",
  y9t: "Compras no supermercado", y9p: "Tiras produtos a sério das prateleiras — encomendas de clientes e o que é teu.",

  soc_eye: "Acompanha", soc_h2: "Não percas o que vem a seguir",
  soc_p: "Novidades, vídeos curtos e a data de lançamento saem aqui primeiro.",
},

};

for (const code in T_EXTRA) Object.assign(T[code], T_EXTRA[code]);

/* --------------------------------------------------------------------------
 * VİTRİN METİNLERİ — sayfa "tanıtım broşürü"nden "vitrin"e çevrildi: tam
 * ekran görsel panoları, panel başına TEK cümle. Uzun anlatım yukarıdaki
 * bloklarda duruyor ama artık sayfada kullanılmıyor; anahtarlar kalsın,
 * ileride "detay" sayfası açılırsa hazır.
 * ------------------------------------------------------------------------ */

const T_PUNCH = {

tr: {
  p_city_t: "Yaşayan bir şehir",
  p_city_s: "Trafik akıyor, yayalar yürüyor, güneş gerçekten batıyor.",
  p_night_t: "Gece vardiyası",
  p_night_s: "Karanlıkta ücret artar — görüş azalır.",
  p_market_t: "Pazarlık senin",
  p_market_s: "İkinci el ilanları, takas, kredi. Motoru satın almak da bir oyun.",
  p_phone_t: "Bütün oyun cebinde",
  p_phone_s: "İşler, harita, banka, sosyal medya — hepsi oyun içi telefonda.",
  p_coop_t: "Arkadaşını getir",
  p_coop_s: "4 kişilik ortak sürüş: aynı şehir, aynı saat, aynı hava.",
  p_pier_t: "Şehrin bittiği yer",
  p_pier_s: "Sahile sür, iskelenin sonuna kadar git.",
  fin_h: "Vardiyaya hazır mısın?",
  fin_p: "İstek listesine ekle, çıktığı gün haberin olsun.",
  follow_h: "Takip et",
  scroll_hint: "Kaydır",
},

en: {
  p_city_t: "A living city",
  p_city_s: "Traffic flows, people walk, the sun actually sets.",
  p_night_t: "The night shift",
  p_night_s: "Pay goes up in the dark — visibility goes down.",
  p_market_t: "The haggle is yours",
  p_market_s: "Used listings, trade-ins, loans. Buying the bike is a game of its own.",
  p_phone_t: "The whole game in your pocket",
  p_phone_s: "Jobs, map, bank, social media — all on the in-game phone.",
  p_coop_t: "Bring a friend",
  p_coop_s: "4-player co-op: same city, same clock, same weather.",
  p_pier_t: "Where the city ends",
  p_pier_s: "Ride to the coast, take the pier to the very end.",
  fin_h: "Ready for your shift?",
  fin_p: "Wishlist it and know the day it drops.",
  follow_h: "Follow",
  scroll_hint: "Scroll",
},

fr: {
  p_city_t: "Une ville vivante",
  p_city_s: "Le trafic circule, les gens marchent, le soleil se couche vraiment.",
  p_night_t: "La tournée de nuit",
  p_night_s: "La nuit, la paie monte — la visibilité tombe.",
  p_market_t: "La négo est à toi",
  p_market_s: "Annonces d'occasion, reprise, crédit. Acheter la moto est un jeu en soi.",
  p_phone_t: "Tout le jeu dans ta poche",
  p_phone_s: "Courses, carte, banque, réseaux — tout sur le téléphone in-game.",
  p_coop_t: "Amène un ami",
  p_coop_s: "Coop à 4 : même ville, même heure, même météo.",
  p_pier_t: "Là où la ville s'arrête",
  p_pier_s: "File jusqu'à la côte, roule jusqu'au bout de la jetée.",
  fin_h: "Prêt pour ta tournée ?",
  fin_p: "Ajoute-le à ta liste et sache le jour où il sort.",
  follow_h: "Suivre",
  scroll_hint: "Défiler",
},

de: {
  p_city_t: "Eine lebendige Stadt",
  p_city_s: "Der Verkehr rollt, Leute laufen, die Sonne geht wirklich unter.",
  p_night_t: "Die Nachtschicht",
  p_night_s: "Im Dunkeln steigt der Lohn — und sinkt die Sicht.",
  p_market_t: "Das Feilschen gehört dir",
  p_market_s: "Gebrauchtanzeigen, Inzahlungnahme, Kredit. Der Kauf ist ein eigenes Spiel.",
  p_phone_t: "Das ganze Spiel in der Tasche",
  p_phone_s: "Aufträge, Karte, Bank, Social Media — alles auf dem Handy im Spiel.",
  p_coop_t: "Bring einen Freund mit",
  p_coop_s: "Koop zu viert: gleiche Stadt, gleiche Uhr, gleiches Wetter.",
  p_pier_t: "Wo die Stadt aufhört",
  p_pier_s: "Fahr an die Küste, nimm den Pier bis ganz ans Ende.",
  fin_h: "Bereit für deine Schicht?",
  fin_p: "Auf die Wunschliste — und du weißt, wann es erscheint.",
  follow_h: "Folgen",
  scroll_hint: "Scrollen",
},

it: {
  p_city_t: "Una città viva",
  p_city_s: "Il traffico scorre, la gente cammina, il sole tramonta davvero.",
  p_night_t: "Il turno di notte",
  p_night_s: "Al buio la paga sale — la visibilità scende.",
  p_market_t: "La trattativa è tua",
  p_market_s: "Annunci usato, permuta, prestito. Comprare la moto è un gioco a sé.",
  p_phone_t: "Tutto il gioco in tasca",
  p_phone_s: "Lavori, mappa, banca, social — tutto sul telefono in gioco.",
  p_coop_t: "Porta un amico",
  p_coop_s: "Coop a 4: stessa città, stessa ora, stesso meteo.",
  p_pier_t: "Dove finisce la città",
  p_pier_s: "Corri alla costa, percorri il pontile fino in fondo.",
  fin_h: "Pronto per il turno?",
  fin_p: "Mettilo in lista e saprai il giorno dell'uscita.",
  follow_h: "Segui",
  scroll_hint: "Scorri",
},

es: {
  p_city_t: "Una ciudad viva",
  p_city_s: "El tráfico circula, la gente camina, el sol se pone de verdad.",
  p_night_t: "El turno de noche",
  p_night_s: "De noche sube la paga — y baja la visibilidad.",
  p_market_t: "El regateo es tuyo",
  p_market_s: "Anuncios de usados, permuta, crédito. Comprar la moto es otro juego.",
  p_phone_t: "Todo el juego en tu bolsillo",
  p_phone_s: "Pedidos, mapa, banco, redes — todo en el teléfono del juego.",
  p_coop_t: "Trae a un amigo",
  p_coop_s: "Cooperativo de 4: misma ciudad, misma hora, mismo clima.",
  p_pier_t: "Donde termina la ciudad",
  p_pier_s: "Ve a la costa y recorre el muelle hasta el final.",
  fin_h: "¿Listo para tu turno?",
  fin_p: "Agrégalo a deseados y entérate el día que salga.",
  follow_h: "Seguir",
  scroll_hint: "Desliza",
},

pt_BR: {
  p_city_t: "Uma cidade viva",
  p_city_s: "O trânsito anda, as pessoas caminham, o sol se põe de verdade.",
  p_night_t: "O turno da noite",
  p_night_s: "No escuro o pagamento sobe — e a visibilidade cai.",
  p_market_t: "A pechincha é sua",
  p_market_s: "Anúncios de usados, troca, financiamento. Comprar a moto é outro jogo.",
  p_phone_t: "O jogo inteiro no bolso",
  p_phone_s: "Corridas, mapa, banco, redes — tudo no celular do jogo.",
  p_coop_t: "Traga um amigo",
  p_coop_s: "Coop de 4: mesma cidade, mesma hora, mesmo clima.",
  p_pier_t: "Onde a cidade acaba",
  p_pier_s: "Vá até o litoral e percorra o píer até a ponta.",
  fin_h: "Pronto para o turno?",
  fin_p: "Põe na lista de desejos e saiba o dia do lançamento.",
  follow_h: "Seguir",
  scroll_hint: "Rolar",
},

pt_PT: {
  p_city_t: "Uma cidade viva",
  p_city_s: "O trânsito anda, as pessoas caminham, o sol põe-se a sério.",
  p_night_t: "O turno da noite",
  p_night_s: "No escuro o pagamento sobe — e a visibilidade desce.",
  p_market_t: "O regateio é teu",
  p_market_s: "Anúncios de usados, retoma, crédito. Comprar a mota é outro jogo.",
  p_phone_t: "O jogo inteiro no bolso",
  p_phone_s: "Serviços, mapa, banco, redes — tudo no telemóvel do jogo.",
  p_coop_t: "Traz um amigo",
  p_coop_s: "Coop a 4: mesma cidade, mesma hora, mesma meteorologia.",
  p_pier_t: "Onde a cidade acaba",
  p_pier_s: "Vai até à costa e percorre o pontão até à ponta.",
  fin_h: "Pronto para o turno?",
  fin_p: "Põe na lista de desejos e fica a saber o dia da saída.",
  follow_h: "Seguir",
  scroll_hint: "Deslizar",
},

};

for (const code in T_PUNCH) Object.assign(T[code], T_PUNCH[code]);

/* --------------------------------------------------------------------------
 * DÜZELTME + FRAGMAN. "800 / yaya, 260 araç" kutusu 800 araç varmış gibi
 * okunuyordu (kullanıcı bulgusu) — yaya ve araç ayrı kutu oldu. Sayılar
 * ölçümden: sim_core açılış satırı "filo 260/420 araç · 800 yaya";
 * kutuda TRAFİKTEKİ sayı (260) kullanılıyor, havuz değil.
 * ------------------------------------------------------------------------ */

const T_FIX = {
  tr:    {f2l: "yaya",       fveh_l: "araç trafikte",        trl_h: "Fragman"},
  en:    {f2l: "pedestrians", fveh_l: "vehicles in traffic",  trl_h: "Trailer"},
  fr:    {f2l: "piétons",    fveh_l: "véhicules en circulation", trl_h: "Bande-annonce"},
  de:    {f2l: "Fußgänger",  fveh_l: "Fahrzeuge im Verkehr", trl_h: "Trailer"},
  it:    {f2l: "pedoni",     fveh_l: "veicoli nel traffico", trl_h: "Trailer"},
  es:    {f2l: "peatones",   fveh_l: "vehículos en tráfico", trl_h: "Tráiler"},
  pt_BR: {f2l: "pedestres",  fveh_l: "veículos no trânsito", trl_h: "Trailer"},
  pt_PT: {f2l: "peões",      fveh_l: "veículos no trânsito", trl_h: "Trailer"},
};

for (const code in T_FIX) Object.assign(T[code], T_FIX[code]);
