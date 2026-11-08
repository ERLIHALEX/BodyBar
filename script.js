/**
 * 1. ЦЕНТРАЛИЗОВАННЫЙ ОБЪЕКТ ФОТОГРАФИЙ (IMAGE_CONFIG)
 * Используются только прямые URL реальных изображений.
 * Никогда не подставляйте URL обычной страницы ВК в src тега img.
 */
const IMAGE_CONFIG = {
  "cover": "assets/bodybar-cover.jpg",
  "interior": "assets/bodybar-cover.jpg",
  "devices": "assets/bodybar-cover.jpg",
  "lpg": "assets/bodybar-cover.jpg",
  "spheres": "assets/bodybar-cover.jpg",
  "laser": "assets/bodybar-cover.jpg",
  "face": "assets/bodybar-cover.jpg",
  "team": "assets/bodybar-cover.jpg",
  "resultsPreview": "assets/bodybar-cover.jpg"
};

/**
 * 2. КОНФИГУРАЦИЯ СЕТИ И ФИЛИАЛОВ (7 студий в Челябинске и 1 в Копейске)
 * Целевой пилотный филиал: Челябинск, ул. Кирова, 94а, 2 этаж.
 * Общий телефон из шапки ВК (+7 902 609-52-33) не выдаётся за прямой телефон Кирова, 94а.
 */
const NETWORK_CONFIG = {
  brandName: 'BODYBAR',
  slogan: 'Начало твоего преображения',
  vkCommunityUrl: 'https://vk.ru/bodybar_74',
  vkServicesAlbumUrl: 'https://vk.ru/album-211231479_283881978',
  vkResultsAlbumUrl: 'https://vk.ru/album-211231479_284383808',
  generalVkPhone: '+7 (902) 609-52-33',
  defaultBranchId: 'chelyabinsk-kirova-94a'
};

const BRANCHES = [
  {
    "id": "chelyabinsk-kirova-94a",
    "city": "Челябинск",
    "name": "Челябинск, ул. Кирова, 94а",
    "shortName": "Кирова, 94а",
    "isPilot": true,
    "directPhone": "",
    "bookingUrl": "",
    "mapUrl": "https://yandex.ru/maps/?text=Челябинск, улица Кирова, 94а",
    "mapQuery": "Челябинск, улица Кирова, 94а",
    "statusNote": "Студия BODYBAR · адрес из справочников"
  },
  {
    "id": "chelyabinsk-kashirinykh-101",
    "city": "Челябинск",
    "name": "Челябинск, ул. Братьев Кашириных, 101",
    "shortName": "Бр. Кашириных, 101",
    "isPilot": false,
    "directPhone": "",
    "bookingUrl": "",
    "mapUrl": "https://yandex.ru/maps/?text=Челябинск, улица Братьев Кашириных, 101",
    "mapQuery": "Челябинск, улица Братьев Кашириных, 101",
    "statusNote": "Студия BODYBAR · адрес из справочников"
  },
  {
    "id": "chelyabinsk-koroleva-5",
    "city": "Челябинск",
    "name": "Челябинск, ул. Академика Королёва, 5",
    "shortName": "Королёва, 5",
    "isPilot": false,
    "directPhone": "",
    "bookingUrl": "",
    "mapUrl": "https://yandex.ru/maps/?text=Челябинск, улица Академика Королёва, 5",
    "mapQuery": "Челябинск, улица Академика Королёва, 5",
    "statusNote": "Студия BODYBAR · адрес из справочников"
  },
  {
    "id": "chelyabinsk-kurchatova-16",
    "city": "Челябинск",
    "name": "Челябинск, ул. Курчатова, 16",
    "shortName": "Курчатова, 16",
    "isPilot": false,
    "directPhone": "",
    "bookingUrl": "",
    "mapUrl": "https://yandex.ru/maps/?text=Челябинск, улица Курчатова, 16",
    "mapQuery": "Челябинск, улица Курчатова, 16",
    "statusNote": "Студия BODYBAR · адрес из справочников"
  },
  {
    "id": "chelyabinsk-tankograda-116",
    "city": "Челябинск",
    "name": "Челябинск, ул. Героев Танкограда, 116",
    "shortName": "Танкограда, 116",
    "isPilot": false,
    "directPhone": "",
    "bookingUrl": "",
    "mapUrl": "https://yandex.ru/maps/?text=Челябинск, улица Героев Танкограда, 116",
    "mapQuery": "Челябинск, улица Героев Танкограда, 116",
    "statusNote": "Студия BODYBAR · адрес из справочников"
  },
  {
    "id": "chelyabinsk-krasnopolsky-5i",
    "city": "Челябинск",
    "name": "Челябинск, Краснопольский проспект, 5И",
    "shortName": "Краснопольский, 5И",
    "isPilot": false,
    "directPhone": "",
    "bookingUrl": "",
    "mapUrl": "https://yandex.ru/maps/?text=Челябинск, Краснопольский проспект, 5И",
    "mapQuery": "Челябинск, Краснопольский проспект, 5И",
    "statusNote": "Студия BODYBAR · адрес из справочников"
  },
  {
    "id": "chelyabinsk-dzerzhinskogo-93b",
    "city": "Челябинск",
    "name": "Челябинск, ул. Дзержинского, 93Б",
    "shortName": "Дзержинского, 93Б",
    "isPilot": false,
    "directPhone": "",
    "bookingUrl": "",
    "mapUrl": "https://yandex.ru/maps/?text=Челябинск, улица Дзержинского, 93Б",
    "mapQuery": "Челябинск, улица Дзержинского, 93Б",
    "statusNote": "Студия BODYBAR · адрес из справочников"
  },
  {
    "id": "kopeysk-borby-34",
    "city": "Копейск",
    "name": "Копейск, ул. Борьбы, 34, стр. 1",
    "shortName": "Борьбы, 34",
    "isPilot": false,
    "directPhone": "",
    "bookingUrl": "",
    "mapUrl": "https://yandex.ru/maps/?text=Копейск, улица Борьбы, 34",
    "mapQuery": "Копейск, улица Борьбы, 34",
    "statusNote": "Студия BODYBAR · адрес из справочников"
  }
];

/**
 * 3. ЦЕНТРАЛИЗОВАННЫЙ МАССИВ УСЛУГ (SERVICES)
 * Поля: id, category, categoryLabel, type ('single' | 'membership'),
 * name, description, price (число/строка или null -> 'Уточнить стоимость'),
 * sessions, image (ключ из IMAGE_CONFIG или прямой URL), availableBranches, bookingUrl, popular
 */
const SERVICES = [
  {
    "id": "bb-001",
    "category": "lpg",
    "categoryLabel": "Аппаратные процедуры / LPG",
    "type": "single",
    "name": "LPG-массаж, 30 минут",
    "description": "Вакуумно-роликовый аппаратный массаж. Указанная в меню продолжительность — 30 минут.",
    "price": "990 ₽",
    "sessions": "1 сеанс",
    "image": "lpg",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": true,
    "topMasterEligible": true,
    "maleEpilationEligible": false
  },
  {
    "id": "bb-002",
    "category": "lpg",
    "categoryLabel": "Аппаратные процедуры / LPG",
    "type": "membership",
    "name": "LPG-массаж, 30 минут",
    "description": "Вакуумно-роликовый аппаратный массаж. Указанная в меню продолжительность — 30 минут.",
    "price": "8 990 ₽",
    "sessions": "10 сеансов",
    "image": "lpg",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": false
  },
  {
    "id": "bb-003",
    "category": "lpg",
    "categoryLabel": "Аппаратные процедуры / LPG",
    "type": "membership",
    "name": "LPG-массаж, 30 минут",
    "description": "Вакуумно-роликовый аппаратный массаж. Указанная в меню продолжительность — 30 минут.",
    "price": "11 990 ₽",
    "sessions": "15 сеансов",
    "image": "lpg",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": false
  },
  {
    "id": "bb-004",
    "category": "lpg",
    "categoryLabel": "Аппаратные процедуры / LPG",
    "type": "membership",
    "name": "LPG-массаж, 30 минут",
    "description": "Вакуумно-роликовый аппаратный массаж. Указанная в меню продолжительность — 30 минут.",
    "price": "13 990 ₽",
    "sessions": "20 сеансов",
    "image": "lpg",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": false
  },
  {
    "id": "bb-005",
    "category": "lpg",
    "categoryLabel": "Аппаратные процедуры / LPG",
    "type": "single",
    "name": "Костюм LPG — производство Россия",
    "description": "Покупка индивидуального костюма для LPG-массажа.",
    "price": "1 300 ₽",
    "sessions": "1 единица",
    "image": "lpg",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": false,
    "maleEpilationEligible": false
  },
  {
    "id": "bb-006",
    "category": "lpg",
    "categoryLabel": "Аппаратные процедуры / LPG",
    "type": "single",
    "name": "Аренда костюма LPG",
    "description": "Аренда на один сеанс.",
    "price": "100 ₽",
    "sessions": "1 сеанс",
    "image": "lpg",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": false,
    "maleEpilationEligible": false
  },
  {
    "id": "bb-007",
    "category": "lpg",
    "categoryLabel": "Аппаратные процедуры / LPG",
    "type": "single",
    "name": "Аренда костюма LPG с правом выкупа",
    "description": "Стоимость аренды на один сеанс с правом выкупа.",
    "price": "130 ₽",
    "sessions": "1 сеанс",
    "image": "lpg",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": false,
    "maleEpilationEligible": false
  },
  {
    "id": "bb-008",
    "category": "other",
    "categoryLabel": "Комплексы и другие процедуры",
    "type": "single",
    "name": "Прессотерапия",
    "description": "Продолжительность одной процедуры — 30 минут согласно предоставленному меню.",
    "price": "590 ₽",
    "sessions": "1 сеанс",
    "image": "devices",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": true,
    "topMasterEligible": true,
    "maleEpilationEligible": false
  },
  {
    "id": "bb-009",
    "category": "other",
    "categoryLabel": "Комплексы и другие процедуры",
    "type": "membership",
    "name": "Прессотерапия",
    "description": "Продолжительность одной процедуры — 30 минут согласно предоставленному меню.",
    "price": "2 690 ₽",
    "sessions": "5 сеансов",
    "image": "devices",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": false
  },
  {
    "id": "bb-010",
    "category": "other",
    "categoryLabel": "Комплексы и другие процедуры",
    "type": "membership",
    "name": "Прессотерапия",
    "description": "Продолжительность одной процедуры — 30 минут согласно предоставленному меню.",
    "price": "4 990 ₽",
    "sessions": "10 сеансов",
    "image": "devices",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": false
  },
  {
    "id": "bb-011",
    "category": "other",
    "categoryLabel": "Комплексы и другие процедуры",
    "type": "single",
    "name": "Вибромассаж",
    "description": "Продолжительность одной процедуры — 30 минут согласно предоставленному меню.",
    "price": "1 190 ₽",
    "sessions": "1 сеанс",
    "image": "devices",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": false
  },
  {
    "id": "bb-012",
    "category": "other",
    "categoryLabel": "Комплексы и другие процедуры",
    "type": "membership",
    "name": "Вибромассаж",
    "description": "Продолжительность одной процедуры — 30 минут согласно предоставленному меню.",
    "price": "5 390 ₽",
    "sessions": "5 сеансов",
    "image": "devices",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": false
  },
  {
    "id": "bb-013",
    "category": "other",
    "categoryLabel": "Комплексы и другие процедуры",
    "type": "membership",
    "name": "Вибромассаж",
    "description": "Продолжительность одной процедуры — 30 минут согласно предоставленному меню.",
    "price": "9 990 ₽",
    "sessions": "10 сеансов",
    "image": "devices",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": false
  },
  {
    "id": "bb-014",
    "category": "other",
    "categoryLabel": "Комплексы и другие процедуры",
    "type": "single",
    "name": "Кавитация, 1 зона",
    "description": "Продолжительность одной процедуры — 30 минут согласно предоставленному меню.",
    "price": "1 190 ₽",
    "sessions": "1 сеанс",
    "image": "devices",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": false
  },
  {
    "id": "bb-015",
    "category": "other",
    "categoryLabel": "Комплексы и другие процедуры",
    "type": "membership",
    "name": "Кавитация, 1 зона",
    "description": "Продолжительность одной процедуры — 30 минут согласно предоставленному меню.",
    "price": "5 390 ₽",
    "sessions": "5 сеансов",
    "image": "devices",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": false
  },
  {
    "id": "bb-016",
    "category": "other",
    "categoryLabel": "Комплексы и другие процедуры",
    "type": "membership",
    "name": "Кавитация, 1 зона",
    "description": "Продолжительность одной процедуры — 30 минут согласно предоставленному меню.",
    "price": "9 990 ₽",
    "sessions": "10 сеансов",
    "image": "devices",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": false
  },
  {
    "id": "bb-017",
    "category": "other",
    "categoryLabel": "Комплексы и другие процедуры",
    "type": "single",
    "name": "Миостимуляция, 1 зона",
    "description": "Продолжительность одной процедуры — 25 минут согласно предоставленному меню.",
    "price": "690 ₽",
    "sessions": "1 сеанс",
    "image": "devices",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": false
  },
  {
    "id": "bb-018",
    "category": "other",
    "categoryLabel": "Комплексы и другие процедуры",
    "type": "membership",
    "name": "Миостимуляция, 1 зона",
    "description": "Продолжительность одной процедуры — 25 минут согласно предоставленному меню.",
    "price": "2 990 ₽",
    "sessions": "5 сеансов",
    "image": "devices",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": false
  },
  {
    "id": "bb-019",
    "category": "other",
    "categoryLabel": "Комплексы и другие процедуры",
    "type": "membership",
    "name": "Миостимуляция, 1 зона",
    "description": "Продолжительность одной процедуры — 25 минут согласно предоставленному меню.",
    "price": "5 890 ₽",
    "sessions": "10 сеансов",
    "image": "devices",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": false
  },
  {
    "id": "bb-020",
    "category": "other",
    "categoryLabel": "Комплексы и другие процедуры",
    "type": "single",
    "name": "Вакуумный массаж (горячий вакуум / 3D-моделирование), 1 зона",
    "description": "Продолжительность одной процедуры — 30 минут согласно предоставленному меню.",
    "price": "1 190 ₽",
    "sessions": "1 сеанс",
    "image": "devices",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": false
  },
  {
    "id": "bb-021",
    "category": "other",
    "categoryLabel": "Комплексы и другие процедуры",
    "type": "membership",
    "name": "Вакуумный массаж (горячий вакуум / 3D-моделирование), 1 зона",
    "description": "Продолжительность одной процедуры — 30 минут согласно предоставленному меню.",
    "price": "5 390 ₽",
    "sessions": "5 сеансов",
    "image": "devices",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": false
  },
  {
    "id": "bb-022",
    "category": "other",
    "categoryLabel": "Комплексы и другие процедуры",
    "type": "membership",
    "name": "Вакуумный массаж (горячий вакуум / 3D-моделирование), 1 зона",
    "description": "Продолжительность одной процедуры — 30 минут согласно предоставленному меню.",
    "price": "9 990 ₽",
    "sessions": "10 сеансов",
    "image": "devices",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": false
  },
  {
    "id": "bb-023",
    "category": "face",
    "categoryLabel": "Уход за лицом",
    "type": "single",
    "name": "RF-лифтинг / микротоки — пробная процедура",
    "description": "Процедура из предоставленного меню BODYBAR; рекомендации и детали согласуются со специалистом.",
    "price": "990 ₽",
    "sessions": "1 сеанс",
    "image": "face",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": true,
    "topMasterEligible": true,
    "maleEpilationEligible": false
  },
  {
    "id": "bb-024",
    "category": "face",
    "categoryLabel": "Уход за лицом",
    "type": "single",
    "name": "RF-лифтинг / микротоки — без альгинатной маски",
    "description": "Процедура из предоставленного меню BODYBAR; рекомендации и детали согласуются со специалистом.",
    "price": "1 290 ₽",
    "sessions": "1 сеанс",
    "image": "face",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": false
  },
  {
    "id": "bb-025",
    "category": "face",
    "categoryLabel": "Уход за лицом",
    "type": "single",
    "name": "RF-лифтинг / микротоки — с альгинатной маской",
    "description": "Процедура из предоставленного меню BODYBAR; рекомендации и детали согласуются со специалистом.",
    "price": "1 590 ₽",
    "sessions": "1 сеанс",
    "image": "face",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": false
  },
  {
    "id": "bb-026",
    "category": "face",
    "categoryLabel": "Уход за лицом",
    "type": "membership",
    "name": "RF-лифтинг / микротоки — без альгинатной маски",
    "description": "Программа из фирменного меню BODYBAR. Условия и доступность в выбранном филиале уточняйте перед записью.",
    "price": "5 990 ₽",
    "sessions": "5 сеансов",
    "image": "face",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": false
  },
  {
    "id": "bb-027",
    "category": "face",
    "categoryLabel": "Уход за лицом",
    "type": "membership",
    "name": "RF-лифтинг / микротоки — без альгинатной маски",
    "description": "Программа из фирменного меню BODYBAR. Условия и доступность в выбранном филиале уточняйте перед записью.",
    "price": "10 990 ₽",
    "sessions": "10 сеансов",
    "image": "face",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": false
  },
  {
    "id": "bb-028",
    "category": "face",
    "categoryLabel": "Уход за лицом",
    "type": "membership",
    "name": "RF-лифтинг / микротоки — с альгинатной маской",
    "description": "Программа из фирменного меню BODYBAR. Условия и доступность в выбранном филиале уточняйте перед записью.",
    "price": "6 990 ₽",
    "sessions": "5 сеансов",
    "image": "face",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": false
  },
  {
    "id": "bb-029",
    "category": "face",
    "categoryLabel": "Уход за лицом",
    "type": "membership",
    "name": "RF-лифтинг / микротоки — с альгинатной маской",
    "description": "Программа из фирменного меню BODYBAR. Условия и доступность в выбранном филиале уточняйте перед записью.",
    "price": "13 490 ₽",
    "sessions": "10 сеансов",
    "image": "face",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": false
  },
  {
    "id": "bb-030",
    "category": "other",
    "categoryLabel": "Комплексы и другие процедуры",
    "type": "membership",
    "name": "Курс: 10 LPG + 10 прессотерапия",
    "description": "Комплекс коррекции фигуры из фирменного меню (стр. 07). В каждом сочетании количество сеансов указано в названии.",
    "price": "11 990 ₽",
    "sessions": "курс",
    "image": "devices",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": false
  },
  {
    "id": "bb-031",
    "category": "other",
    "categoryLabel": "Комплексы и другие процедуры",
    "type": "membership",
    "name": "Курс: 5 LPG + 5 вакуумный массаж + 5 кавитация + 5 прессотерапия",
    "description": "Комплекс коррекции фигуры из фирменного меню (стр. 07). В каждом сочетании количество сеансов указано в названии.",
    "price": "15 790 ₽",
    "sessions": "курс",
    "image": "devices",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": false
  },
  {
    "id": "bb-032",
    "category": "other",
    "categoryLabel": "Комплексы и другие процедуры",
    "type": "membership",
    "name": "Курс: 10 LPG + 5 кавитация + 5 прессотерапия",
    "description": "Комплекс коррекции фигуры из фирменного меню (стр. 08). В каждом сочетании количество сеансов указано в названии.",
    "price": "14 990 ₽",
    "sessions": "курс",
    "image": "devices",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": false
  },
  {
    "id": "bb-033",
    "category": "other",
    "categoryLabel": "Комплексы и другие процедуры",
    "type": "membership",
    "name": "Курс: 10 вибромассаж + 5 кавитация + 5 вакуумный массаж + 5 прессотерапия в подарок",
    "description": "Комплекс коррекции фигуры из фирменного меню (стр. 08). В каждом сочетании количество сеансов указано в названии.",
    "price": "19 990 ₽",
    "sessions": "курс",
    "image": "devices",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": false
  },
  {
    "id": "bb-034",
    "category": "other",
    "categoryLabel": "Комплексы и другие процедуры",
    "type": "membership",
    "name": "Курс: 10 LPG + 10 вакуумный массаж",
    "description": "Комплекс коррекции фигуры из фирменного меню (стр. 09). В каждом сочетании количество сеансов указано в названии.",
    "price": "16 990 ₽",
    "sessions": "курс",
    "image": "lpg",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": false
  },
  {
    "id": "bb-035",
    "category": "other",
    "categoryLabel": "Комплексы и другие процедуры",
    "type": "membership",
    "name": "Курс: 10 LPG + 10 вибромассаж",
    "description": "Комплекс коррекции фигуры из фирменного меню (стр. 09). В каждом сочетании количество сеансов указано в названии.",
    "price": "16 990 ₽",
    "sessions": "курс",
    "image": "devices",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": false
  },
  {
    "id": "bb-036",
    "category": "other",
    "categoryLabel": "Комплексы и другие процедуры",
    "type": "membership",
    "name": "Курс: 5 LPG + 5 вибромассаж",
    "description": "Комплекс коррекции фигуры из фирменного меню (стр. 10). В каждом сочетании количество сеансов указано в названии.",
    "price": "8 990 ₽",
    "sessions": "курс",
    "image": "devices",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": false
  },
  {
    "id": "bb-037",
    "category": "other",
    "categoryLabel": "Комплексы и другие процедуры",
    "type": "membership",
    "name": "Курс: 10 вибромассаж + 10 прессотерапия",
    "description": "Комплекс коррекции фигуры из фирменного меню (стр. 10). В каждом сочетании количество сеансов указано в названии.",
    "price": "13 990 ₽",
    "sessions": "курс",
    "image": "devices",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": false
  },
  {
    "id": "bb-038",
    "category": "other",
    "categoryLabel": "Комплексы и другие процедуры",
    "type": "membership",
    "name": "Курс: 5 вибромассаж + 5 прессотерапия",
    "description": "Комплекс коррекции фигуры из фирменного меню (стр. 11). В каждом сочетании количество сеансов указано в названии.",
    "price": "7 590 ₽",
    "sessions": "курс",
    "image": "devices",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": false
  },
  {
    "id": "bb-039",
    "category": "other",
    "categoryLabel": "Комплексы и другие процедуры",
    "type": "membership",
    "name": "Курс: 5 вибромассаж + 5 вакуумный массаж",
    "description": "Комплекс коррекции фигуры из фирменного меню (стр. 11). В каждом сочетании количество сеансов указано в названии.",
    "price": "9 990 ₽",
    "sessions": "курс",
    "image": "devices",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": false
  },
  {
    "id": "bb-040",
    "category": "other",
    "categoryLabel": "Комплексы и другие процедуры",
    "type": "membership",
    "name": "Курс: 10 вибромассаж + 5 вакуумный массаж",
    "description": "Комплекс коррекции фигуры из фирменного меню (стр. 12). В каждом сочетании количество сеансов указано в названии.",
    "price": "14 990 ₽",
    "sessions": "курс",
    "image": "devices",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": false
  },
  {
    "id": "bb-041",
    "category": "other",
    "categoryLabel": "Комплексы и другие процедуры",
    "type": "membership",
    "name": "Курс: 10 LPG + 10 миостимуляция",
    "description": "Комплекс коррекции фигуры из фирменного меню (стр. 12). В каждом сочетании количество сеансов указано в названии.",
    "price": "12 990 ₽",
    "sessions": "курс",
    "image": "devices",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": false
  },
  {
    "id": "bb-042",
    "category": "other",
    "categoryLabel": "Комплексы и другие процедуры",
    "type": "membership",
    "name": "Мини-курс: 2 LPG + 2 прессотерапия",
    "description": "Программа из фирменного меню BODYBAR. Условия и доступность в выбранном филиале уточняйте перед записью.",
    "price": "2 890 ₽",
    "sessions": "мини-курс",
    "image": "devices",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": false
  },
  {
    "id": "bb-043",
    "category": "other",
    "categoryLabel": "Комплексы и другие процедуры",
    "type": "membership",
    "name": "Мини-курс: 4 LPG + 4 прессотерапия",
    "description": "Программа из фирменного меню BODYBAR. Условия и доступность в выбранном филиале уточняйте перед записью.",
    "price": "5 490 ₽",
    "sessions": "мини-курс",
    "image": "devices",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": false
  },
  {
    "id": "bb-044",
    "category": "other",
    "categoryLabel": "Комплексы и другие процедуры",
    "type": "membership",
    "name": "Мини-курс: 2 кавитация + 2 прессотерапия",
    "description": "Программа из фирменного меню BODYBAR. Условия и доступность в выбранном филиале уточняйте перед записью.",
    "price": "2 990 ₽",
    "sessions": "мини-курс",
    "image": "devices",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": false
  },
  {
    "id": "bb-045",
    "category": "other",
    "categoryLabel": "Комплексы и другие процедуры",
    "type": "membership",
    "name": "Мини-курс: 4 кавитация + 4 прессотерапия",
    "description": "Программа из фирменного меню BODYBAR. Условия и доступность в выбранном филиале уточняйте перед записью.",
    "price": "6 390 ₽",
    "sessions": "мини-курс",
    "image": "devices",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": false
  },
  {
    "id": "bb-046",
    "category": "laser",
    "categoryLabel": "Аппаратная эпиляция",
    "type": "single",
    "name": "Эпиляция: Верхняя губа, межбровье или подбородок (одна зона)",
    "description": "Удаление волос (аппарат эпиляции) по фирменному меню. Технологию процедуры и ограничения уточняйте у специалиста.",
    "price": "590 ₽",
    "sessions": "1 зона",
    "image": "laser",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": true
  },
  {
    "id": "bb-047",
    "category": "laser",
    "categoryLabel": "Аппаратная эпиляция",
    "type": "single",
    "name": "Эпиляция: Виски / бакенбарды / шея / скулы / лоб (одна зона)",
    "description": "Удаление волос (аппарат эпиляции) по фирменному меню. Технологию процедуры и ограничения уточняйте у специалиста.",
    "price": "790 ₽",
    "sessions": "1 зона",
    "image": "laser",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": true
  },
  {
    "id": "bb-048",
    "category": "laser",
    "categoryLabel": "Аппаратная эпиляция",
    "type": "single",
    "name": "Эпиляция: Лицо полностью",
    "description": "Удаление волос (аппарат эпиляции) по фирменному меню. Технологию процедуры и ограничения уточняйте у специалиста.",
    "price": "1 690 ₽",
    "sessions": "1 зона",
    "image": "laser",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": true
  },
  {
    "id": "bb-049",
    "category": "laser",
    "categoryLabel": "Аппаратная эпиляция",
    "type": "single",
    "name": "Эпиляция: Подмышечные впадины",
    "description": "Удаление волос (аппарат эпиляции) по фирменному меню. Технологию процедуры и ограничения уточняйте у специалиста.",
    "price": "890 ₽",
    "sessions": "1 зона",
    "image": "laser",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": true,
    "topMasterEligible": true,
    "maleEpilationEligible": true
  },
  {
    "id": "bb-050",
    "category": "laser",
    "categoryLabel": "Аппаратная эпиляция",
    "type": "single",
    "name": "Эпиляция: Руки до локтя",
    "description": "Удаление волос (аппарат эпиляции) по фирменному меню. Технологию процедуры и ограничения уточняйте у специалиста.",
    "price": "1 190 ₽",
    "sessions": "1 зона",
    "image": "laser",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": true
  },
  {
    "id": "bb-051",
    "category": "laser",
    "categoryLabel": "Аппаратная эпиляция",
    "type": "single",
    "name": "Эпиляция: Руки ниже локтя",
    "description": "Удаление волос (аппарат эпиляции) по фирменному меню. Технологию процедуры и ограничения уточняйте у специалиста.",
    "price": "1 390 ₽",
    "sessions": "1 зона",
    "image": "laser",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": true
  },
  {
    "id": "bb-052",
    "category": "laser",
    "categoryLabel": "Аппаратная эпиляция",
    "type": "single",
    "name": "Эпиляция: Руки полностью",
    "description": "Удаление волос (аппарат эпиляции) по фирменному меню. Технологию процедуры и ограничения уточняйте у специалиста.",
    "price": "1 990 ₽",
    "sessions": "1 зона",
    "image": "laser",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": true
  },
  {
    "id": "bb-053",
    "category": "laser",
    "categoryLabel": "Аппаратная эпиляция",
    "type": "single",
    "name": "Эпиляция: Голени (включая колени)",
    "description": "Удаление волос (аппарат эпиляции) по фирменному меню. Технологию процедуры и ограничения уточняйте у специалиста.",
    "price": "1 590 ₽",
    "sessions": "1 зона",
    "image": "laser",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": true
  },
  {
    "id": "bb-054",
    "category": "laser",
    "categoryLabel": "Аппаратная эпиляция",
    "type": "single",
    "name": "Эпиляция: Колени",
    "description": "Удаление волос (аппарат эпиляции) по фирменному меню. Технологию процедуры и ограничения уточняйте у специалиста.",
    "price": "790 ₽",
    "sessions": "1 зона",
    "image": "laser",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": true
  },
  {
    "id": "bb-055",
    "category": "laser",
    "categoryLabel": "Аппаратная эпиляция",
    "type": "single",
    "name": "Эпиляция: Бёдра (вся поверхность)",
    "description": "Удаление волос (аппарат эпиляции) по фирменному меню. Технологию процедуры и ограничения уточняйте у специалиста.",
    "price": "1 890 ₽",
    "sessions": "1 зона",
    "image": "laser",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": true
  },
  {
    "id": "bb-056",
    "category": "laser",
    "categoryLabel": "Аппаратная эпиляция",
    "type": "single",
    "name": "Эпиляция: Ноги полностью",
    "description": "Удаление волос (аппарат эпиляции) по фирменному меню. Технологию процедуры и ограничения уточняйте у специалиста.",
    "price": "2 990 ₽",
    "sessions": "1 зона",
    "image": "laser",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": true
  },
  {
    "id": "bb-057",
    "category": "laser",
    "categoryLabel": "Аппаратная эпиляция",
    "type": "single",
    "name": "Эпиляция: Пальцы ног и подъём стопы",
    "description": "Удаление волос (аппарат эпиляции) по фирменному меню. Технологию процедуры и ограничения уточняйте у специалиста.",
    "price": "590 ₽",
    "sessions": "1 зона",
    "image": "laser",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": true
  },
  {
    "id": "bb-058",
    "category": "laser",
    "categoryLabel": "Аппаратная эпиляция",
    "type": "single",
    "name": "Эпиляция: Только пальцы рук или ног",
    "description": "Удаление волос (аппарат эпиляции) по фирменному меню. Технологию процедуры и ограничения уточняйте у специалиста.",
    "price": "590 ₽",
    "sessions": "1 зона",
    "image": "laser",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": true
  },
  {
    "id": "bb-059",
    "category": "laser",
    "categoryLabel": "Аппаратная эпиляция",
    "type": "single",
    "name": "Эпиляция: Бикини классическое",
    "description": "Удаление волос (аппарат эпиляции) по фирменному меню. Технологию процедуры и ограничения уточняйте у специалиста.",
    "price": "1 190 ₽",
    "sessions": "1 зона",
    "image": "laser",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": true
  },
  {
    "id": "bb-060",
    "category": "laser",
    "categoryLabel": "Аппаратная эпиляция",
    "type": "single",
    "name": "Эпиляция: Бикини глубокое",
    "description": "Удаление волос (аппарат эпиляции) по фирменному меню. Технологию процедуры и ограничения уточняйте у специалиста.",
    "price": "1 590 ₽",
    "sessions": "1 зона",
    "image": "laser",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": true
  },
  {
    "id": "bb-061",
    "category": "laser",
    "categoryLabel": "Аппаратная эпиляция",
    "type": "single",
    "name": "Эпиляция: Бикини тотальное",
    "description": "Удаление волос (аппарат эпиляции) по фирменному меню. Технологию процедуры и ограничения уточняйте у специалиста.",
    "price": "1 690 ₽",
    "sessions": "1 зона",
    "image": "laser",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": true
  },
  {
    "id": "bb-062",
    "category": "laser",
    "categoryLabel": "Аппаратная эпиляция",
    "type": "single",
    "name": "Эпиляция: Соски (ареолы)",
    "description": "Удаление волос (аппарат эпиляции) по фирменному меню. Технологию процедуры и ограничения уточняйте у специалиста.",
    "price": "590 ₽",
    "sessions": "1 зона",
    "image": "laser",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": true
  },
  {
    "id": "bb-063",
    "category": "laser",
    "categoryLabel": "Аппаратная эпиляция",
    "type": "single",
    "name": "Эпиляция: Декольте",
    "description": "Удаление волос (аппарат эпиляции) по фирменному меню. Технологию процедуры и ограничения уточняйте у специалиста.",
    "price": "690 ₽",
    "sessions": "1 зона",
    "image": "laser",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": true
  },
  {
    "id": "bb-064",
    "category": "laser",
    "categoryLabel": "Аппаратная эпиляция",
    "type": "single",
    "name": "Эпиляция: Линия живота",
    "description": "Удаление волос (аппарат эпиляции) по фирменному меню. Технологию процедуры и ограничения уточняйте у специалиста.",
    "price": "590 ₽",
    "sessions": "1 зона",
    "image": "laser",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": true
  },
  {
    "id": "bb-065",
    "category": "laser",
    "categoryLabel": "Аппаратная эпиляция",
    "type": "single",
    "name": "Эпиляция: Живот полностью",
    "description": "Удаление волос (аппарат эпиляции) по фирменному меню. Технологию процедуры и ограничения уточняйте у специалиста.",
    "price": "790 ₽",
    "sessions": "1 зона",
    "image": "laser",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": true
  },
  {
    "id": "bb-066",
    "category": "laser",
    "categoryLabel": "Аппаратная эпиляция",
    "type": "single",
    "name": "Эпиляция: Спина полностью",
    "description": "Удаление волос (аппарат эпиляции) по фирменному меню. Технологию процедуры и ограничения уточняйте у специалиста.",
    "price": "2 690 ₽",
    "sessions": "1 зона",
    "image": "laser",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": true
  },
  {
    "id": "bb-067",
    "category": "laser",
    "categoryLabel": "Аппаратная эпиляция",
    "type": "single",
    "name": "Эпиляция: Часть спины (выше или ниже лопаток)",
    "description": "Удаление волос (аппарат эпиляции) по фирменному меню. Технологию процедуры и ограничения уточняйте у специалиста.",
    "price": "1 690 ₽",
    "sessions": "1 зона",
    "image": "laser",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": true
  },
  {
    "id": "bb-068",
    "category": "laser",
    "categoryLabel": "Аппаратная эпиляция",
    "type": "single",
    "name": "Эпиляция: Поясница",
    "description": "Удаление волос (аппарат эпиляции) по фирменному меню. Технологию процедуры и ограничения уточняйте у специалиста.",
    "price": "1 090 ₽",
    "sessions": "1 зона",
    "image": "laser",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": true
  },
  {
    "id": "bb-069",
    "category": "laser",
    "categoryLabel": "Аппаратная эпиляция",
    "type": "single",
    "name": "Эпиляция: Ягодицы",
    "description": "Удаление волос (аппарат эпиляции) по фирменному меню. Технологию процедуры и ограничения уточняйте у специалиста.",
    "price": "890 ₽",
    "sessions": "1 зона",
    "image": "laser",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": true
  },
  {
    "id": "bb-070",
    "category": "laser",
    "categoryLabel": "Аппаратная эпиляция",
    "type": "single",
    "name": "Эпиляция: Межъягодичная зона",
    "description": "Удаление волос (аппарат эпиляции) по фирменному меню. Технологию процедуры и ограничения уточняйте у специалиста.",
    "price": "790 ₽",
    "sessions": "1 зона",
    "image": "laser",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": true
  },
  {
    "id": "bb-071",
    "category": "laser",
    "categoryLabel": "Аппаратная эпиляция",
    "type": "single",
    "name": "Комплекс «Лайт №1» — удаление волос",
    "description": "Подмышечные впадины + бикини (на выбор)",
    "price": "2 290 ₽",
    "sessions": "1 посещение",
    "image": "laser",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": true
  },
  {
    "id": "bb-072",
    "category": "laser",
    "categoryLabel": "Аппаратная эпиляция",
    "type": "membership",
    "name": "Абонемент «Лайт №1» — 5 сеансов",
    "description": "Подмышечные впадины + бикини (на выбор)",
    "price": "10 290 ₽",
    "sessions": "5 сеансов",
    "image": "laser",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": true
  },
  {
    "id": "bb-073",
    "category": "laser",
    "categoryLabel": "Аппаратная эпиляция",
    "type": "membership",
    "name": "Абонемент «Лайт №1» — 10 сеансов",
    "description": "Подмышечные впадины + бикини (на выбор)",
    "price": "18 590 ₽",
    "sessions": "10 сеансов",
    "image": "laser",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": true
  },
  {
    "id": "bb-074",
    "category": "laser",
    "categoryLabel": "Аппаратная эпиляция",
    "type": "single",
    "name": "Комплекс «Лайт №2» — удаление волос",
    "description": "Подмышечные впадины + голени",
    "price": "2 290 ₽",
    "sessions": "1 посещение",
    "image": "laser",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": true
  },
  {
    "id": "bb-075",
    "category": "laser",
    "categoryLabel": "Аппаратная эпиляция",
    "type": "membership",
    "name": "Абонемент «Лайт №2» — 5 сеансов",
    "description": "Подмышечные впадины + голени",
    "price": "10 290 ₽",
    "sessions": "5 сеансов",
    "image": "laser",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": true
  },
  {
    "id": "bb-076",
    "category": "laser",
    "categoryLabel": "Аппаратная эпиляция",
    "type": "membership",
    "name": "Абонемент «Лайт №2» — 10 сеансов",
    "description": "Подмышечные впадины + голени",
    "price": "18 590 ₽",
    "sessions": "10 сеансов",
    "image": "laser",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": true
  },
  {
    "id": "bb-077",
    "category": "laser",
    "categoryLabel": "Аппаратная эпиляция",
    "type": "single",
    "name": "Комплекс «Стандарт» — удаление волос",
    "description": "Подмышечные впадины + голени + бикини (на выбор)",
    "price": "3 790 ₽",
    "sessions": "1 посещение",
    "image": "laser",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": true,
    "topMasterEligible": true,
    "maleEpilationEligible": true
  },
  {
    "id": "bb-078",
    "category": "laser",
    "categoryLabel": "Аппаратная эпиляция",
    "type": "membership",
    "name": "Абонемент «Стандарт» — 5 сеансов",
    "description": "Подмышечные впадины + голени + бикини (на выбор)",
    "price": "16 990 ₽",
    "sessions": "5 сеансов",
    "image": "laser",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": true
  },
  {
    "id": "bb-079",
    "category": "laser",
    "categoryLabel": "Аппаратная эпиляция",
    "type": "membership",
    "name": "Абонемент «Стандарт» — 10 сеансов",
    "description": "Подмышечные впадины + голени + бикини (на выбор)",
    "price": "32 190 ₽",
    "sessions": "10 сеансов",
    "image": "laser",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": true
  },
  {
    "id": "bb-080",
    "category": "laser",
    "categoryLabel": "Аппаратная эпиляция",
    "type": "single",
    "name": "Комплекс «Медиум» — удаление волос",
    "description": "Подмышечные впадины + ноги полностью + бикини (на выбор)",
    "price": "4 290 ₽",
    "sessions": "1 посещение",
    "image": "laser",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": true
  },
  {
    "id": "bb-081",
    "category": "laser",
    "categoryLabel": "Аппаратная эпиляция",
    "type": "membership",
    "name": "Абонемент «Медиум» — 5 сеансов",
    "description": "Подмышечные впадины + ноги полностью + бикини (на выбор)",
    "price": "19 290 ₽",
    "sessions": "5 сеансов",
    "image": "laser",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": true
  },
  {
    "id": "bb-082",
    "category": "laser",
    "categoryLabel": "Аппаратная эпиляция",
    "type": "membership",
    "name": "Абонемент «Медиум» — 10 сеансов",
    "description": "Подмышечные впадины + ноги полностью + бикини (на выбор)",
    "price": "36 390 ₽",
    "sessions": "10 сеансов",
    "image": "laser",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": true
  },
  {
    "id": "bb-083",
    "category": "laser",
    "categoryLabel": "Аппаратная эпиляция",
    "type": "single",
    "name": "Комплекс «Всё тело» — удаление волос",
    "description": "Комплекс удаления волос «Всё тело»",
    "price": "5 290 ₽",
    "sessions": "1 посещение",
    "image": "laser",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": true
  },
  {
    "id": "bb-084",
    "category": "laser",
    "categoryLabel": "Аппаратная эпиляция",
    "type": "membership",
    "name": "Абонемент «Всё тело» — 5 сеансов",
    "description": "Комплекс удаления волос «Всё тело»",
    "price": "23 790 ₽",
    "sessions": "5 сеансов",
    "image": "laser",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": true
  },
  {
    "id": "bb-085",
    "category": "laser",
    "categoryLabel": "Аппаратная эпиляция",
    "type": "membership",
    "name": "Абонемент «Всё тело» — 10 сеансов",
    "description": "Комплекс удаления волос «Всё тело»",
    "price": "44 990 ₽",
    "sessions": "10 сеансов",
    "image": "laser",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": false,
    "topMasterEligible": true,
    "maleEpilationEligible": true
  },
  {
    "id": "bb-086",
    "category": "face",
    "categoryLabel": "Уход за лицом",
    "type": "single",
    "name": "Массаж сферами для лица",
    "description": "Стоимость взята из предоставленного скриншота товаров ВКонтакте, не из 16 страниц меню.",
    "price": "2 190 ₽",
    "sessions": "1 сеанс",
    "image": "face",
    "availableBranches": [
      "all"
    ],
    "bookingUrl": "",
    "popular": true,
    "topMasterEligible": true,
    "maleEpilationEligible": false
  }
];

/**
 * 4. ЦЕНТРАЛИЗОВАННЫЙ МАССИВ РЕЗУЛЬТАТОВ ДО / ПОСЛЕ (RESULTS)
 * Показывает пары ТОЛЬКО при наличии двух реальных фотографий (before, after) и consentConfirmed: true.
 * Источник будущих фото: https://vk.ru/album-211231479_284383808
 */
const RESULTS = [
  {
    before: '',
    after: '',
    procedure: 'Курс аппаратного массажа LPG',
    caption: 'Пример карточки результата: отобразится автоматически после подстановки прямых ссылок на фото ДО и ПОСЛЕ.',
    consentConfirmed: false
  },
  {
    before: '',
    after: '',
    procedure: 'Массаж сферами',
    caption: 'Пример карточки результата: отобразится после верификации фотоматериалов из альбома сообщества.',
    consentConfirmed: false
  }
];

/**
 * 5. СЦЕНАРИИ ТРЁХ ИНТЕРАКТИВНЫХ ТЕСТОВ НА СТРАНИЦЕ RESULTS.HTML
 */
const QUIZZES = {
  direction: {
    badge: 'Тест №1',
    title: 'Какое направление BODYBAR вам интересно?',
    questions: [
      {
        question: 'Какая задача сейчас для вас на первом месте?',
        options: [
          { label: 'Поработать над контурами и тонусом тела', tag: 'lpg' },
          { label: 'Попробовать интенсивный массаж сферами', tag: 'spheres' },
          { label: 'Освежить лицо и подтянуть контур', tag: 'face' },
          { label: 'Обеспечить гладкость кожи без бритвы', tag: 'laser' }
        ]
      },
      {
        question: 'Какой формат посещения вам ближе для старта?',
        options: [
          { label: 'Начать с одного ознакомительного сеанса', tag: 'single' },
          { label: 'Сразу обсудить курс или абонемент', tag: 'course' },
          { label: 'Сначала пообщаться со специалистом на консультации', tag: 'consult' },
          { label: 'Совместить уход за лицом и телом в один день', tag: 'combo' }
        ]
      },
      {
        question: 'Какие ощущения от процедуры вы предпочитаете?',
        options: [
          { label: 'Ощутимую вакуумно-роликовую проработку', tag: 'lpg' },
          { label: 'Ритмичную микровибрацию сферами', tag: 'spheres' },
          { label: 'Деликатное воздействие на зону лица', tag: 'face' },
          { label: 'Быструю и аккуратную аппаратную процедуру по зонам', tag: 'laser' }
        ]
      },
      {
        question: 'В каком филиале вам удобнее планировать визит?',
        options: [
          { label: 'В центре Челябинска — ул. Кирова, 94а (2 этаж)', tag: 'kirova' },
          { label: 'В другом районе Челябинска (сеть из 7 студий)', tag: 'network' },
          { label: 'В филиале в Копейске', tag: 'kopeysk' },
          { label: 'Выберу филиал после просмотра цен', tag: 'any' }
        ]
      }
    ],
    getResult(answers) {
      const primary = answers[0] || 'lpg';
      const map = {
        lpg: {
          title: 'Рекомендуем познакомиться с направлением: Аппаратный массаж / LPG',
          desc: 'По вашим ответам отлично подойдёт вакуумно-роликовый массаж LPG и аппаратные программы по телу. Вы можете начать с разового визита на ул. Кирова, 94а или обсудить абонемент.',
          serviceUrl: 'services.html?category=lpg',
          serviceName: 'Аппаратный массаж LPG по телу'
        },
        spheres: {
          title: 'Рекомендуем направление: Массаж сферами (тело и лицо)',
          desc: 'Методика массажа сферами сочетает интенсивную проработку и комфорт. Обратите внимание как на сеансы по телу, так и на массаж сферами для лица (1 сеанс — 2 190 ₽).',
          serviceUrl: 'services.html?category=spheres',
          serviceName: 'Массаж сферами по телу'
        },
        face: {
          title: 'Рекомендуем направление: Процедуры для лица и массаж сферами',
          desc: 'Для скульптурного ухода и тонуса кожи лица в BODYBAR представлен аппаратный массаж сферами для лица (2 190 ₽ за разовый сеанс), а также курсовые программы.',
          serviceUrl: 'services.html?category=face',
          serviceName: 'Массаж сферами для лица'
        },
        laser: {
          title: 'Рекомендуем направление: Лазерная эпиляция',
          desc: 'Вы можете выбрать отдельные зоны или комплексный визит. Перед процедурой специалист подробно расскажет о подготовке и порядке проведения сеанса.',
          serviceUrl: 'services.html?category=laser',
          serviceName: 'Лазерная эпиляция (выбор зон)'
        }
      };
      return map[primary] || map.lpg;
    }
  },

  lpg: {
    badge: 'Тест №2',
    title: 'Стоит ли рассмотреть LPG?',
    questions: [
      {
        question: 'Знакомы ли вы с процедурой аппаратного массажа LPG ранее?',
        options: [
          { label: 'Ещё не пробовал(а), хочу узнать подробнее', tag: 'new' },
          { label: 'Был опыт разового посещения', tag: 'once' },
          { label: 'Проходил(а) курс, хочу возобновить уход', tag: 'experienced' },
          { label: 'Сравниваю LPG и массаж сферами', tag: 'compare' }
        ]
      },
      {
        question: 'На какие зоны тела вы бы хотели сделать основной акцент?',
        options: [
          { label: 'Бёдра, ягодицы и контуры талии', tag: 'lower' },
          { label: 'Равномерная проработка всего тела', tag: 'full' },
          { label: 'Верхняя часть тела, спина и руки', tag: 'upper' },
          { label: 'Хочу определить зоны вместе со специалистом', tag: 'consult' }
        ]
      },
      {
        question: 'Как вы относитесь к курсовому формату посещений (2–3 раза в неделю)?',
        options: [
          { label: 'Готов(а) ходить регулярно по абонементу', tag: 'course' },
          { label: 'Сначала хочу прийти на 1 пробный сеанс', tag: 'trial' },
          { label: 'Интересует поддерживающий визит 1 раз в неделю', tag: 'support' },
          { label: 'Нужна помощь в составлении графика', tag: 'schedule' }
        ]
      },
      {
        question: 'Что для вас важнее всего на первом визите?',
        options: [
          { label: 'Подробное объяснение механики процедуры и настройка аппарата', tag: 'info' },
          { label: 'Интенсивная проработка с первого сеанса', tag: 'power' },
          { label: 'Мягкий и деликатный старт без дискомфорта', tag: 'soft' },
          { label: 'Сравнение условий разового визита и абонементов', tag: 'price' }
        ]
      }
    ],
    getResult(answers) {
      const isCompare = answers[0] === 'compare';
      if (isCompare) {
        return {
          title: 'Рекомендуем очную консультацию: сравнение LPG и массажа сферами',
          desc: 'Обе методики активно применяются в BODYBAR для ухода за контурами тела. На очной встрече в студии на ул. Кирова, 94а специалист покажет аппараты и поможет выбрать оптимальный вариант под ваши ощущения.',
          serviceUrl: 'services.html?category=lpg',
          serviceName: 'Аппаратный массаж LPG по телу'
        };
      }
      return {
        title: 'LPG-массаж отлично впишется в ваш план ухода за телом',
        desc: 'Аппаратный массаж LPG проводится через специальный индивидуальный костюм и позволяет настраивать интенсивность под ваш комфорт. Рекомендуем начать с консультации и первого сеанса или сразу уточнить параметры абонемента.',
        serviceUrl: 'services.html?category=lpg',
        serviceName: 'Аппаратный массаж LPG по телу'
      };
    }
  },

  laser: {
    badge: 'Тест №3',
    title: 'Лазерная эпиляция: с чего начать?',
    questions: [
      {
        question: 'Планируете ли вы лазерную эпиляцию впервые?',
        options: [
          { label: 'Да, это будет мой первый визит на лазер', tag: 'first' },
          { label: 'Уже делал(а) в другой студии, ищу нового мастера', tag: 'switch' },
          { label: 'Хочу добавить новые зоны к уже пройденному курсу', tag: 'add' },
          { label: 'Пока изучаю информацию о подготовке', tag: 'info' }
        ]
      },
      {
        question: 'С какой зоны вы бы хотели начать знакомство с направлением?',
        options: [
          { label: 'С одной небольшой зоны для проверки ощущений', tag: 'small' },
          { label: 'Ноги полностью или голени', tag: 'legs' },
          { label: 'Деликатные зоны (бикини / подмышки)', tag: 'delicate' },
          { label: 'Комплекс из нескольких зон сразу', tag: 'complex' }
        ]
      },
      {
        question: 'Что для вас наиболее важно при выборе студии эпиляции?',
        options: [
          { label: 'Приватная атмосфера и тактичность специалиста', tag: 'privacy' },
          { label: 'Понятные рекомендации по подготовке до и после визита', tag: 'guide' },
          { label: 'Удобное расположение в центре (Кирова, 94а) или рядом с домом', tag: 'location' },
          { label: 'Выгодные условия при покупке абонемента на курс', tag: 'membership' }
        ]
      },
      {
        question: 'Когда вы планируете ориентировочный визит?',
        options: [
          { label: 'В ближайшие дни (нужна инструкция по подготовке)', tag: 'soon' },
          { label: 'В течение 1–2 недель', tag: 'later' },
          { label: 'Сначала хочу уточнить стоимость выбранных зон', tag: 'price' },
          { label: 'Хочу записаться на предварительную консультацию', tag: 'consult' }
        ]
      }
    ],
    getResult() {
      return {
        title: 'Стартовый маршрут по направлению «Лазерная эпиляция» в BODYBAR',
        desc: 'Для комфортного первого визита достаточно выбрать 1–2 приоритетные зоны или комплекс и уточнить у администратора простые правила подготовки кожи накануне сеанса. На приёме специалист настроит параметры индивидуально.',
        serviceUrl: 'services.html?category=laser',
        serviceName: 'Лазерная эпиляция (выбор зон)'
      };
    }
  }
};

/**
 * БЫСТРЫЙ ОРИЕНТИР НА ГЛАВНОЙ СТРАНИЦЕ
 */

// Дополнительный авторский опрос по мотивам открытого теста VK.
// Не измеряет обмен веществ и не ставит диагнозов.
QUIZZES.rhythm = {
  badge: 'Тест №4',
  title: 'Какой у вас ритм дня?',
  questions: [
    {question: 'Как ты ощущаешь себя по утрам?', options: [
      {label:'Тяжело просыпаюсь, мёрзну, долго включаюсь',tag:'slow'},
      {label:'Сразу в напряжении, будто на старте',tag:'tense'},
      {label:'Тяжесть в животе, тянет обратно в постель',tag:'tired'},
      {label:'Чувствую скованность в теле',tag:'stiff'},
      {label:'Легко встаю, но энергия скачет',tag:'dynamic'},
      {label:'Просыпаюсь спокойно, сил хватает',tag:'calm'}
    ]},
    {question:'Чего сейчас больше хочется от ухода?',options:[
      {label:'Расслабиться и переключиться',tag:'relax'},
      {label:'Познакомиться с аппаратными процедурами',tag:'lpg'},
      {label:'Уделить время уходу за лицом',tag:'face'},
      {label:'Узнать про эпиляцию',tag:'laser'}
    ]},
    {question:'Как удобнее знакомиться с новым уходом?',options:[
      {label:'Пробный разовый визит',tag:'single'},
      {label:'Обсудить программу курса',tag:'course'},
      {label:'Сначала поговорить со специалистом',tag:'consult'},
      {label:'Сравнить услуги и цены на сайте',tag:'prices'}
    ]}
  ],
  getResult(answers) {
    let tag=answers[1] || 'relax';
    let mapping={
      relax:['Мягкое знакомство с процедурами','Вы отметили интерес к отдыху. Посмотрите направления BODYBAR и обсудите комфортный формат со специалистом.','services.html?category=other','Прессотерапия, 30 минут'],
      lpg:['Аппаратный массаж','Ваш выбор — узнать больше об аппаратных процедурах. Изучите разовые сеансы и абонементы LPG.','services.html?category=lpg','LPG-массаж, 30 минут'],
      face:['Уход за лицом','Посмотрите массаж сферами для лица и RF-уход.','services.html?category=face','Массаж сферами для лица'],
      laser:['Аппаратная эпиляция','Сравните зоны и комплексы удаления волос по опубликованному меню.','services.html?category=laser','Эпиляция: Подмышечные впадины']
    };
    let m=mapping[tag]||mapping.relax;
    return {title:m[0],desc:m[1]+' Этот опрос не определяет «метаболический тип» и не оценивает состояние здоровья.',serviceUrl:m[2],serviceName:m[3]};
  }
};

const QUICK_FINDER_MAP = {
  lpg: {
    badge: 'Аппаратный массаж / LPG',
    title: 'Аппаратный массаж LPG по телу',
    desc: 'Вакуумно-роликовая методика для тех, кто хочет включить регулярный аппаратный уход за фигурой. Доступны разовые визиты и курсовые абонементы.',
    price: 'Уточнить стоимость / есть абонементы',
    link: 'services.html?category=lpg'
  },
  spheres: {
    badge: 'Массаж сферами',
    title: 'Массаж сферами для тела и лица',
    desc: 'Компрессионная микровибрация сферами. Доступны программы для тела и подтверждённый прайс на массаж сферами для лица.',
    price: 'Лицо: 2 190 ₽ (1 сеанс) · Тело: уточнить стоимость',
    link: 'services.html?category=spheres'
  },
  face: {
    badge: 'Процедуры для лица',
    title: 'Массаж сферами для лица и эстетический уход',
    desc: 'Аппаратная и уходовая работа с контурами лица, шеи и декольте для свежего вида и тонуса.',
    price: 'Массаж сферами для лица — 2 190 ₽ (1 сеанс)',
    link: 'services.html?category=face'
  },
  laser: {
    badge: 'Лазерная эпиляция',
    title: 'Лазерная эпиляция выбранных зон',
    desc: 'Деликатная работа с отдельными зонами и комплексами в приватных кабинетах сети BODYBAR.',
    price: 'Уточнить стоимость по зонам / есть абонементы',
    link: 'services.html?category=laser'
  }
};

// Глобальное состояние выбранного филиала
const readBranchPreference = () => { try { return localStorage.getItem('bodybar_branch_id'); } catch (_) { return null; } };
const saveBranchPreference = (id) => { try { localStorage.setItem('bodybar_branch_id', id); } catch (_) {} };
let currentBranchId = readBranchPreference() || NETWORK_CONFIG.defaultBranchId;

document.addEventListener('DOMContentLoaded', () => {
  initServiceDetailModal();
  initMediaSlots();
  initMobileMenu();
  initBranchSystem();
  initHomePopularServices();
  initQuickFinder();
  initHomeBranchesSection();
  initServicesCatalogPage();
  initPricingControls();
  initQuizzesPage();
  initBeforeAfterGallery();
  initBookingSystem();
  initBookingPreview();
});

function getBranchById(id) {
  return BRANCHES.find((b) => b.id === id) || BRANCHES[0];
}

function isValidImageUrl(url) {
  if (!url || typeof url !== 'string') return false;
  const trimmed = url.trim();
  if (!trimmed) return false;
  // Защита от вставки обычной страницы ВК вместо прямой ссылки на изображение
  if (/^https?:\/\/(m\.)?vk\.(ru|com)\/(album|wall|bodybar|photo|public|club)/i.test(trimmed)) {
    return false;
  }
  return true;
}

/**
 * Подстановка реальных Ч/Б фотографий из IMAGE_CONFIG
 */
function initMediaSlots() {
  document.querySelectorAll('[data-image-key]').forEach((slot) => {
    const key = slot.getAttribute('data-image-key');
    const url = IMAGE_CONFIG[key];
    if (isValidImageUrl(url)) {
      slot.innerHTML = '';
      const img = document.createElement('img');
      img.src = url.trim();
      img.alt = 'BODYBAR — студия аппаратного массажа и эпиляции';
      img.className = 'real-photo';
      img.loading = 'lazy';
      slot.appendChild(img);
    }
  });
}

/**
 * Мобильное меню
 */
function initMobileMenu() {
  const toggle = document.getElementById('menuToggle');
  const menu = document.getElementById('mobileMenu');
  if (!toggle || !menu) return;

  const setOpen = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-hidden', String(!open));
    menu.classList.toggle('is-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  };

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    setOpen(!isOpen);
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) {
      setOpen(false);
      toggle.focus();
    }
  });
}

/**
 * Система выбора филиала и модальное окно филиалов
 */
function initBranchSystem() {
  const modal = document.getElementById('branchModal');
  const modalList = document.getElementById('modalBranchList');

  const updateBranchUI = () => {
    const branch = getBranchById(currentBranchId);

    document.querySelectorAll('[data-current-branch-name]').forEach((el) => {
      el.textContent = branch.name;
    });
    document.querySelectorAll('[data-current-branch-short]').forEach((el) => {
      el.textContent = branch.shortName;
    });
    document.querySelectorAll('[data-current-branch-badge]').forEach((el) => {
      el.textContent = `Филиал: ${branch.shortName}`;
    });

    const branchSelect = document.getElementById('bookingBranchSelect');
    if (branchSelect && branchSelect.value !== branch.id) {
      branchSelect.value = branch.id;
      branchSelect.dispatchEvent(new Event('change'));
    }

    if (modalList) {
      renderModalBranches(modalList);
    }
    updateMapBranch(currentBranchId);
  };

  const renderModalBranches = (container) => {
    container.innerHTML = '';
    BRANCHES.forEach((b) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `modal-branch-item ${b.id === currentBranchId ? 'is-selected' : ''}`;
      btn.innerHTML = `
        <div>
          <span class="branch-city">${b.city} ${b.isPilot ? '· ЦЕНТР' : ''}</span>
          <div class="branch-address">${b.name}</div>
          <span class="branch-note">${b.statusNote}</span>
        </div>
        <span class="badge-fuchsia">${b.id === currentBranchId ? 'Выбран' : 'Выбрать'}</span>
      `;
      btn.addEventListener('click', () => {
        currentBranchId = b.id;
        saveBranchPreference(currentBranchId);
        updateBranchUI();
        closeBranchModal();
      });
      container.appendChild(btn);
    });
  };

  const openBranchModal = () => {
    if (!modal) return;
    renderModalBranches(modalList);
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeBranchModal = () => {
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  document.querySelectorAll('[data-open-branch-modal]').forEach((btn) => {
    btn.addEventListener('click', openBranchModal);
  });

  document.querySelectorAll('[data-close-branch-modal]').forEach((btn) => {
    btn.addEventListener('click', closeBranchModal);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('is-open')) {
      closeBranchModal();
    }
  });

  updateBranchUI();
}

/**
 * Создание HTML карточки услуги
 */
const BODYBAR_MARKUP = {male: 0.20, top: 0.20};
let selectedAudience = 'female';
let selectedTopMaster = false;
function numericPrice(price) {
  const parsed = Number(String(price || '').replace(/[^0-9]/g, ''));
  return parsed > 0 ? parsed : null;
}
function priceRu(n) { return new Intl.NumberFormat('ru-RU').format(n) + ' ₽'; }
function calculateServicePrice(service) {
  const base = numericPrice(service.price);
  if (base === null) return {base:null,final:null,multiplier:1,hasExtra:false,notes:[]};
  let multiplier=1;
  let notes=[];
  if (selectedAudience==='male' && service.maleEpilationEligible) {
    multiplier+=BODYBAR_MARKUP.male; notes.push('Мужская эпиляция: +20% к базовому прайсу');
  }
  if (selectedTopMaster && service.topMasterEligible) {
    multiplier+=BODYBAR_MARKUP.top; notes.push('Топ-мастер: +20% к базовому прайсу');
  }
  return {base,final:Math.round(base*multiplier),multiplier,hasExtra:multiplier>1,notes};
}
function servicePriceHTML(service) {
  const p=calculateServicePrice(service);
  if (p.base===null) return `<span class="price-value is-unverified">Уточнить стоимость</span>`;
  return p.hasExtra
    ? `<span class="price-comparison"><s class="price-was" aria-label="Базовая цена">${priceRu(p.base)}</s><strong class="price-now" aria-label="Цена с выбранными условиями">${priceRu(p.final)}</strong></span>`
    : `<span class="price-value">${priceRu(p.final)}</span>`;
}
function createServiceCardHTML(service) {
  // One consistent photo on all service cards, as requested. No pictures of the printed menu.
  return `
    <article class="service-card" data-service-id="${service.id}">
      <div class="service-card-media media-slot">
        <img src="assets/bodybar-cover.jpg" alt="Фирменная фотография BODYBAR — аппаратная процедура" class="real-photo" loading="lazy">
      </div>
      <div class="service-card-body">
        <div class="service-card-top"><span class="service-cat-tag">${service.categoryLabel}</span><span class="service-sessions-tag">${service.sessions}</span></div>
        <h3 class="service-card-title">${service.name}</h3>
        <p class="service-card-desc">${service.description}</p>
        <div class="service-card-footer">
          <div class="service-price-line"><span class="price-label">Стоимость:</span>${servicePriceHTML(service)}</div>
          <div class="service-card-actions">
            <a href="#booking" class="btn btn-primary btn-sm" data-preselect-service="${service.name}">Записаться</a>
            <button type="button" class="btn btn-ghost btn-sm" data-service-details="${service.id}">Подробнее</button>
          </div>
        </div>
      </div>
    </article>`;
}
function initServiceDetailModal() {
 const modal=document.getElementById('serviceDetailModal');
 if (!modal) return;
 const body=modal.querySelector('#serviceDetailBody');
 const close=()=>{modal.classList.remove('is-open');modal.setAttribute('aria-hidden','true');document.body.style.overflow='';};
 const open=(id)=>{
   const item=SERVICES.find(s=>s.id===id); if(!item)return;
   const p=calculateServicePrice(item);
   const categoryText={laser:'Эпиляция по зонам',face:'Уходовые и аппаратные процедуры лица',lpg:'Вакуумно-роликовый массаж',other:'Аппаратные программы ухода'}[item.category]||item.categoryLabel;
   const notes=p.notes.length?`<p class="detail-price-note">${p.notes.join(' · ')}</p>`:'';
   const extra=item.type==='membership'?'Курсовая программа или абонемент. Состав курса и ограничения уточняйте при записи.':'Разовая услуга. Подробности проведения и индивидуальные ограничения уточняйте у специалиста.';
   body.innerHTML=`<div class="detail-image-stack"><img class="detail-photo" src="assets/bodybar-cover.jpg" alt="Аппаратная процедура BODYBAR"><div class="detail-photo-companion"><div class="detail-abstract"><span>BODYBAR / BEAUTY CARE</span><strong>${categoryText}</strong></div><div class="detail-abstract detail-abstract-alt"><span>В СТУДИИ</span><strong>Внимание к каждому визиту</strong></div></div></div><div class="detail-copy"><span class="section-kicker">${item.categoryLabel} · ${item.sessions}</span><h2 class="detail-title" id="serviceDetailTitle">${item.name}</h2><p class="detail-description">${item.description}</p><p class="detail-description">${extra}</p><div class="detail-price-box"><span>Стоимость</span>${servicePriceHTML(item)}${notes}</div><div class="detail-care"><strong>Перед посещением</strong><p>Уточните доступность процедуры в выбранном филиале, подготовку, ограничения и условия абонемента. Информация о стоимости взята из предоставленного меню BODYBAR и может измениться.</p></div><div class="detail-actions"><a href="#booking" class="btn btn-primary" data-detail-book="${item.id}">Выбрать и записаться</a><a href="https://vk.ru/album-211231479_283881978" target="_blank" rel="noopener noreferrer" class="btn btn-outline">Материалы студии ↗</a></div></div>`;
   modal.classList.add('is-open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';modal.querySelector('.modal-close-btn').focus();
 };
 document.addEventListener('click',e=>{
  const detailBtn=e.target.closest('[data-service-details]');if(detailBtn){open(detailBtn.dataset.serviceDetails);return;}
  const bookBtn=e.target.closest('[data-detail-book]');if(bookBtn){const item=SERVICES.find(s=>s.id===bookBtn.dataset.detailBook); if(item){const sel=document.getElementById('bookingServiceSelect');if(sel){sel.value=item.name;sel.dispatchEvent(new Event('change'));}}close();return;}
  if(e.target.closest('[data-close-service-modal]'))close();
 });
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('is-open'))close();});
}
function initPricingControls() {
 const audiences=document.querySelectorAll('[data-audience]');
 const top=document.getElementById('topMasterToggle');
 if(!audiences.length&&!top)return;
 const repaint=()=>{
   audiences.forEach(b=>{const active=b.dataset.audience===selectedAudience;b.classList.toggle('is-active',active);b.setAttribute('aria-pressed',String(active));});
   if(top) top.checked=selectedTopMaster;
   if(document.getElementById('singleServicesGrid')) document.dispatchEvent(new Event('bodybar:pricing-change'));
 };
 audiences.forEach(btn=>btn.addEventListener('click',()=>{selectedAudience=btn.dataset.audience;repaint();}));
 if(top) top.addEventListener('change',()=>{selectedTopMaster=top.checked;repaint();});
 repaint();
}
/**
 * Рендер популярных услуг на главной
 */
function initHomePopularServices() {
  const grid = document.getElementById('homePopularGrid');
  if (!grid) return;

  const popularItems = SERVICES.filter((s) => s.popular).slice(0, 6);
  grid.innerHTML = popularItems.map(createServiceCardHTML).join('');
}

/**
 * Короткий интерактивный выбор направления на главной
 */
function initQuickFinder() {
  const buttons = document.querySelectorAll('.quick-goal-btn');
  if (!buttons.length) return;

  const badge = document.getElementById('qfCategoryBadge');
  const title = document.getElementById('qfTitle');
  const desc = document.getElementById('qfDesc');
  const price = document.getElementById('qfPrice');
  const link = document.getElementById('qfCatalogLink');

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const goal = btn.dataset.goal;
      const data = QUICK_FINDER_MAP[goal];
      if (!data) return;

      buttons.forEach((b) => {
        const active = b === btn;
        b.classList.toggle('is-active', active);
        b.setAttribute('aria-checked', String(active));
      });

      if (badge) badge.textContent = data.badge;
      if (title) title.textContent = data.title;
      if (desc) desc.textContent = data.desc;
      if (price) price.textContent = data.price;
      if (link) link.href = data.link;
    });
  });
}

/**
 * Секция филиалов на главной
 */
function initHomeBranchesSection() {
 const grid=document.getElementById('branchesGrid');
 if(!grid)return;
 grid.innerHTML=BRANCHES.map(branch=>`
 <article class="branch-card ${branch.isPilot?'is-pilot':''}" data-branch-card="${branch.id}">
 <div><span class="branch-city">${branch.city}</span><h3 class="branch-address">${branch.shortName}</h3><p class="branch-note">${branch.statusNote}</p></div>
 <div class="branch-card-actions">
 <button type="button" class="btn btn-outline btn-sm" data-select-branch="${branch.id}">Выбрать</button>
 <button type="button" class="link-fuchsia" data-show-on-map="${branch.id}">На карте ↗</button>
 </div></article>`).join('');
 grid.querySelectorAll('[data-select-branch]').forEach(btn=>btn.addEventListener('click',()=>{
   currentBranchId=btn.dataset.selectBranch;saveBranchPreference(currentBranchId);
   const select=document.getElementById('bookingBranchSelect');if(select){select.value=currentBranchId;select.dispatchEvent(new Event('change'));}
   updateMapBranch(currentBranchId);
   const booking=document.getElementById('booking');if(booking)booking.scrollIntoView({behavior:'smooth'});
 }));
 grid.querySelectorAll('[data-show-on-map]').forEach(btn=>btn.addEventListener('click',()=>updateMapBranch(btn.dataset.showOnMap)));
 updateMapBranch(currentBranchId);
}
function updateMapBranch(id){
 const branch=getBranchById(id);
 const frame=document.getElementById('branchMapFrame');
 const name=document.getElementById('branchMapName');
 const link=document.getElementById('branchMapRoute');
 if(!frame)return;
 const q=encodeURIComponent(`BodyBar ${branch.mapQuery||branch.name}`);
 frame.src='https://yandex.ru/map-widget/v1/?text='+q;
 frame.title='Карта — '+branch.name;
 if(name)name.textContent=branch.name;
 if(link)link.href=branch.mapUrl;
 document.querySelectorAll('[data-branch-card]').forEach(card=>card.classList.toggle('is-on-map',card.dataset.branchCard===id));
}

/**
 * Страница каталога услуг (services.html)
 */
function initServicesCatalogPage() {
  const singleGrid = document.getElementById('singleServicesGrid');
  const membershipGrid = document.getElementById('membershipServicesGrid');
  if (!singleGrid || !membershipGrid) return;

  const singleBlock = document.getElementById('singleServicesBlock');
  const membershipBlock = document.getElementById('membershipServicesBlock');
  const emptyState = document.getElementById('catalogEmptyState');
  const countStatus = document.getElementById('catalogCountStatus');
  const resetBtn = document.getElementById('resetCatalogFilters');
  const emptyResetBtn = document.getElementById('emptyResetBtn');
  const searchInput = document.getElementById('serviceSearchInput');
  const categoryBtns = document.querySelectorAll('[data-category-filter]');
  const formatBtns = document.querySelectorAll('[data-format-filter]');

  let activeCategory = 'all';
  let activeFormat = 'all';
  let searchQuery = '';

  // Чтение GET-параметра ?category=...
  const params = new URLSearchParams(window.location.search);
  const urlCategory = params.get('category');
  if (urlCategory && ['lpg', 'spheres', 'face', 'laser', 'other'].includes(urlCategory)) {
    activeCategory = urlCategory;
    categoryBtns.forEach((b) => {
      b.classList.toggle('is-active', b.dataset.categoryFilter === activeCategory);
    });
  }

  const renderCatalog = () => {
    const query = searchQuery.trim().toLowerCase();

    const filtered = SERVICES.filter((item) => {
      const catMatch = activeCategory === 'all' || item.category === activeCategory;
      const formatMatch = activeFormat === 'all' || item.type === activeFormat;
      const textMatch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.categoryLabel.toLowerCase().includes(query);
      return catMatch && formatMatch && textMatch;
    });

    const singles = filtered.filter((i) => i.type === 'single');
    const memberships = filtered.filter((i) => i.type === 'membership');

    singleGrid.innerHTML = singles.map(createServiceCardHTML).join('');
    membershipGrid.innerHTML = memberships.map(createServiceCardHTML).join('');

    singleBlock.hidden = singles.length === 0;
    membershipBlock.hidden = memberships.length === 0;
    emptyState.hidden = filtered.length > 0;

    const isFiltered = activeCategory !== 'all' || activeFormat !== 'all' || query !== '';
    if (resetBtn) resetBtn.hidden = !isFiltered;

    if (countStatus) {
      countStatus.textContent = `Найдено позиций в каталоге: ${filtered.length} (разовых: ${singles.length}, абонементов: ${memberships.length})`;
    }

    bindPreselectServiceButtons();
  };

  categoryBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      activeCategory = btn.dataset.categoryFilter;
      categoryBtns.forEach((b) => b.classList.toggle('is-active', b === btn));
      renderCatalog();
    });
  });

  formatBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      activeFormat = btn.dataset.formatFilter;
      formatBtns.forEach((b) => b.classList.toggle('is-active', b === btn));
      renderCatalog();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderCatalog();
    });
  }

  const resetAll = () => {
    activeCategory = 'all';
    activeFormat = 'all';
    searchQuery = '';
    if (searchInput) searchInput.value = '';
    categoryBtns.forEach((b) => b.classList.toggle('is-active', b.dataset.categoryFilter === 'all'));
    formatBtns.forEach((b) => b.classList.toggle('is-active', b.dataset.formatFilter === 'all'));
    renderCatalog();
  };

  if (resetBtn) resetBtn.addEventListener('click', resetAll);
  if (emptyResetBtn) emptyResetBtn.addEventListener('click', resetAll);
  document.addEventListener('bodybar:pricing-change', renderCatalog);

  renderCatalog();
}

/**
 * 3 интерактивных теста на странице results.html
 */
function initQuizzesPage() {
  const stage = document.getElementById('quizStage');
  if (!stage) return;

  const tabBtns = document.querySelectorAll('.quiz-tab-btn');
  const badgeLabel = document.getElementById('quizBadgeLabel');
  const mainTitle = document.getElementById('quizMainTitle');
  const stepCounter = document.getElementById('quizStepCounter');
  const progressBar = document.getElementById('quizProgressBar');
  const questionView = document.getElementById('quizQuestionView');
  const questionText = document.getElementById('quizQuestionText');
  const optionsList = document.getElementById('quizOptionsList');
  const prevBtn = document.getElementById('quizPrevBtn');
  const restartBtn = document.getElementById('quizRestartBtn');

  const resultView = document.getElementById('quizResultView');
  const resultTitle = document.getElementById('quizResultTitle');
  const resultDesc = document.getElementById('quizResultDesc');
  const resultServiceLink = document.getElementById('quizResultServiceLink');
  const resultBookBtn = document.getElementById('quizResultBookBtn');
  const resultRestartBtn = document.getElementById('quizResultRestartBtn');

  let activeQuizKey = 'direction';
  let currentStep = 0;
  let answers = [];

  const renderQuiz = () => {
    const quiz = QUIZZES[activeQuizKey];
    if (!quiz) return;

    badgeLabel.textContent = quiz.badge;
    mainTitle.textContent = quiz.title;

    const total = quiz.questions.length;

    if (currentStep < total) {
      questionView.hidden = false;
      resultView.hidden = true;

      stepCounter.textContent = `Вопрос ${currentStep + 1} из ${total}`;
      const progressPercent = Math.round(((currentStep + 1) / total) * 100);
      progressBar.style.width = `${progressPercent}%`;

      const qObj = quiz.questions[currentStep];
      questionText.textContent = qObj.question;

      optionsList.innerHTML = '';
      qObj.options.forEach((opt) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'quiz-option-btn';
        btn.innerHTML = `
          <span>${opt.label}</span>
          <span class="text-fuchsia" aria-hidden="true">→</span>
        `;
        btn.addEventListener('click', () => {
          answers[currentStep] = opt.tag;
          currentStep += 1;
          renderQuiz();
        });
        optionsList.appendChild(btn);
      });

      prevBtn.disabled = currentStep === 0;
    } else {
      // Показ экрана результата
      questionView.hidden = true;
      resultView.hidden = false;
      stepCounter.textContent = 'Тест завершён';
      progressBar.style.width = '100%';

      const outcome = quiz.getResult(answers);
      resultTitle.textContent = outcome.title;
      resultDesc.textContent = outcome.desc;
      resultServiceLink.href = outcome.serviceUrl;
      resultBookBtn.setAttribute('data-preselect-service', outcome.serviceName);
      bindPreselectServiceButtons();
    }
  };

  tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      activeQuizKey = btn.dataset.quizId;
      currentStep = 0;
      answers = [];
      tabBtns.forEach((b) => {
        const active = b === btn;
        b.classList.toggle('is-active', active);
        b.setAttribute('aria-selected', String(active));
      });
      renderQuiz();
    });
  });

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentStep > 0) {
        currentStep -= 1;
        renderQuiz();
      }
    });
  }

  const restartCurrentQuiz = () => {
    currentStep = 0;
    answers = [];
    renderQuiz();
  };

  if (restartBtn) restartBtn.addEventListener('click', restartCurrentQuiz);
  if (resultRestartBtn) resultRestartBtn.addEventListener('click', restartCurrentQuiz);

  renderQuiz();
}

/**
 * Галерея ДО / ПОСЛЕ (Comparison Slider)
 * Отображает слайдеры только для элементов RESULTS с двумя валидными фото и consentConfirmed === true
 */
function initBeforeAfterGallery() {
  const container = document.getElementById('beforeAfterContainer');
  if (!container) return;

  const verifiedPairs = RESULTS.filter(
    (item) =>
      item.consentConfirmed === true &&
      isValidImageUrl(item.before) &&
      isValidImageUrl(item.after)
  );

  if (verifiedPairs.length === 0) {
    container.innerHTML = `
      <div class="results-gallery-teaser">
        <img src="assets/bodybar-cover.jpg" alt="Аппаратная процедура BODYBAR" loading="lazy">
        <div><span class="section-kicker">Фотоархив студии</span><h3>Работы и результаты BODYBAR</h3>
          <p>Реальные фотографии результатов доступны в официальном сообществе. Здесь можно будет сравнивать пары «до / после» на интерактивном слайдере после согласования фотоматериалов.</p>
          <a href="${NETWORK_CONFIG.vkResultsAlbumUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Открыть альбом результатов ↗</a>
        </div>
      </div>`;
    return;
  }

  container.innerHTML = verifiedPairs
    .map(
      (item, idx) => `
      <article class="ba-card">
        <div class="comparison-slider" data-ba-slider="${idx}">
          <img src="${item.after.trim()}" alt="После: ${item.procedure}" loading="lazy">
          <div class="comparison-before" style="clip-path: inset(0 50% 0 0);">
            <img src="${item.before.trim()}" alt="До: ${item.procedure}" loading="lazy">
          </div>
          <span class="comparison-label label-before">ДО</span>
          <span class="comparison-label label-after">ПОСЛЕ</span>
          <div class="comparison-Divider" style="left: 50%;">
            <span class="comparison-handle" aria-hidden="true">↔</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value="50"
            class="comparison-range"
            aria-label="Сравнение фотографий До и После: ${item.procedure}"
          >
        </div>
        <h3 class="service-card-title">${item.procedure}</h3>
        <p class="service-card-desc">${item.caption}</p>
      </article>
    `
    )
    .join('');

  container.querySelectorAll('.comparison-slider').forEach((slider) => {
    const range = slider.querySelector('.comparison-range');
    const beforeLayer = slider.querySelector('.comparison-before');
    const divider = slider.querySelector('.comparison-Divider');

    const updateSplit = (val) => {
      const percent = Math.min(100, Math.max(0, Number(val)));
      beforeLayer.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
      divider.style.left = `${percent}%`;
    };

    range.addEventListener('input', (e) => updateSplit(e.target.value));
  });
}

/**
 * Привязка кнопок быстрого выбора услуги для записи
 */
function bindPreselectServiceButtons() {
  document.querySelectorAll('[data-preselect-service]').forEach((btn) => {
    btn.onclick = () => {
      const serviceName = btn.getAttribute('data-preselect-service');
      const select = document.getElementById('bookingServiceSelect');
      if (select && serviceName) {
        const existing = Array.from(select.options).find((opt) => opt.value === serviceName);
        if (!existing) {
          const newOpt = document.createElement('option');
          newOpt.value = serviceName;
          newOpt.textContent = serviceName;
          select.prepend(newOpt);
        }
        select.value = serviceName;
        select.dispatchEvent(new Event('change'));
      }
    };
  });
}

/**
 * Работающий модуль записи без фиктивной отправки
 */
function initBookingSystem() {
  const form = document.getElementById('bookingForm');
  const branchSelect = document.getElementById('bookingBranchSelect');
  const serviceSelect = document.getElementById('bookingServiceSelect');
  const formatSelect = document.getElementById('bookingFormatSelect');
  const noteInput = document.getElementById('bookingNote');
  const summaryText = document.getElementById('bookingSummaryText');
  const copyBtn = document.getElementById('copyRequestBtn');
  const feedbackBox = document.getElementById('bookingActionFeedback');

  if (!form || !branchSelect || !serviceSelect) return;

  // Заполнение списка филиалов
  branchSelect.innerHTML = BRANCHES.map(
    (b) => `<option value="${b.id}">${b.name}</option>`
  ).join('');
  branchSelect.value = currentBranchId;

  // Заполнение списка услуг из SERVICES
  serviceSelect.innerHTML = SERVICES.map(
    (s) => `<option value="${s.name}">${s.name} (${s.price ? s.price : 'Уточнить стоимость'})</option>`
  ).join('');

  const buildSummary = () => {
    const branch = getBranchById(branchSelect.value);
    const service = serviceSelect.value;
    const format = formatSelect ? formatSelect.value : 'Разовый сеанс';
    const note = noteInput && noteInput.value.trim() ? ` · Комментарий: ${noteInput.value.trim()}` : '';
    const obj=SERVICES.find(s=>s.name===service);const price=obj?calculateServicePrice(obj).final:null; const pricePart=price?` | Цена: ${priceRu(price)}`:''; const audiencePart=obj&&obj.maleEpilationEligible&&selectedAudience==='male'?' | Мужской прайс +20%':''; const topPart=obj&&obj.topMasterEligible&&selectedTopMaster?' | Топ-мастер +20%':'';return `BODYBAR | Филиал: ${branch.name} | Услуга: ${service}${pricePart}${audiencePart}${topPart} | Формат: ${format}${note}`;
  };

  const refreshSummary = () => {
    if (summaryText) {
      summaryText.textContent = buildSummary();
    }
  };

  branchSelect.addEventListener('change', () => {
    currentBranchId = branchSelect.value;
    saveBranchPreference(currentBranchId);
    document.querySelectorAll('[data-current-branch-name]').forEach((el) => {
      el.textContent = getBranchById(currentBranchId).name;
    });
    document.querySelectorAll('[data-current-branch-short]').forEach((el) => {
      el.textContent = getBranchById(currentBranchId).shortName;
    });
    refreshSummary();
  });

  serviceSelect.addEventListener('change', refreshSummary);
  const updateBookingPrices = () => {
    Array.from(serviceSelect.options).forEach((option,i) => {
      const svc=SERVICES[i]; if(!svc)return; const p=calculateServicePrice(svc);
      option.textContent=`${svc.name} (${p.final!==null?priceRu(p.final):'Уточнить стоимость'})`;
    });
    refreshSummary();
  };
  document.addEventListener('bodybar:pricing-change', updateBookingPrices);
  if (formatSelect) formatSelect.addEventListener('change', refreshSummary);
  if (noteInput) noteInput.addEventListener('input', refreshSummary);

  bindPreselectServiceButtons();
  updateBookingPrices();

  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(buildSummary());
        copyBtn.textContent = 'Скопировано!';
        setTimeout(() => {
          copyBtn.textContent = 'Скопировать текст';
        }, 2200);
      } catch {
        if (feedbackBox) {
          feedbackBox.hidden = false;
          feedbackBox.textContent = `Скопируйте параметры вручную: ${buildSummary()}`;
        }
      }
    });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const branch = getBranchById(branchSelect.value);
    const selectedServiceObj = SERVICES.find((s) => s.name === serviceSelect.value);
    const targetBookingUrl =
      (selectedServiceObj && selectedServiceObj.bookingUrl) || branch.bookingUrl || '';

    if (targetBookingUrl.trim() !== '') {
      window.open(targetBookingUrl.trim(), '_blank', 'noopener,noreferrer');
      return;
    }

    if (feedbackBox) {
      feedbackBox.hidden = false;
      feedbackBox.innerHTML = `
        <strong>Переход к записи в BODYBAR:</strong> прямая интеграция виджета для филиала «${branch.shortName}» ещё не подключена, поэтому заявка не отправляется автоматически.
        Мы подготовили ваш запрос выше — скопируйте его кнопкой «Скопировать текст» и отправьте администратору в
        <a href="${NETWORK_CONFIG.vkCommunityUrl}" target="_blank" rel="noopener noreferrer" class="link-fuchsia">официальное сообщество BODYBAR ВКонтакте ↗</a>
        или уточните запись по общему телефону сети <a href="tel:+79026095233" class="link-fuchsia">${NETWORK_CONFIG.generalVkPhone}</a>.
      `;
    }
  });
}


/** Preview of future appointment integration. No real slots or data are submitted. */
function initBookingPreview() {
 const btn=document.getElementById('showBookingPreview');
 const modal=document.getElementById('bookingPreviewModal');
 if(!btn||!modal)return;
 const days=modal.querySelector('#bookingPreviewDays');
 const times=modal.querySelector('#bookingPreviewTimes');
 const feedback=modal.querySelector('#bookingPreviewSelection');
 let day='',hour='';
 const close=()=>{modal.classList.remove('is-open');modal.setAttribute('aria-hidden','true');document.body.style.overflow='';};
 let d=new Date();const fmt=new Intl.DateTimeFormat('ru-RU',{day:'numeric',month:'long'});
 for(let i=1;i<=4;i++) {
  let x=new Date(d);x.setDate(x.getDate()+i);
  let b=document.createElement('button');b.type='button';b.className='preview-chip';b.textContent=fmt.format(x);b.dataset.date=fmt.format(x);
  b.addEventListener('click',()=>{day=b.dataset.date;days.querySelectorAll('button').forEach(c=>c.classList.toggle('is-active',c===b));feedback.textContent=hour?`Вы выбрали ${day}, ${hour} (показательный интерфейс, запись не создана)`:`Дата: ${day} — выберите время`;});days.appendChild(b);
 }
 ['10:00','11:30','14:00','17:30'].forEach(t=>{let b=document.createElement('button');b.type='button';b.className='preview-chip';b.textContent=t;b.addEventListener('click',()=>{hour=t;times.querySelectorAll('button').forEach(c=>c.classList.toggle('is-active',c===b));feedback.textContent=day?`Вы выбрали ${day}, ${hour} (показательный интерфейс, запись не создана)`:`Время: ${t} — выберите дату`;});times.appendChild(b);});
 btn.addEventListener('click',()=>{modal.classList.add('is-open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';modal.querySelector('.modal-close-btn').focus();});
 modal.querySelectorAll('[data-close-booking-preview]').forEach(c=>c.addEventListener('click',close));
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('is-open'))close();});
}
