'use strict';


let asia = ["Азербайджан", "Армения", "Афганистан", "Бангладеш", "Бахрейн", "Бруней", "Бутан", "Восточный Тимор", "Вьетнам", "Грузия", "Израиль", "Индия", "Индонезия", "Иордания", "Ирак", "Иран", "Йемен", "Казахстан", "Камбоджа", "Катар", "Кипр", "Киргизстан", "Китай", "Корея Северная", "Корея Южная", "Кувейт", "Лаос", "Ливан", "Малайзия", "Мальдивы", "Монголия", "Мьянма", "Непал", "ОАЭ", "Оман", "Пакистан", "Палестина", "Саудовская Аравия", "Сингапур", "Сирия", "Таджикистан", "Таиланд", "Тайвань", "Туркмения", "Турция", "Узбекистан", "Филиппины", "Шри-Ланка", "Япония"];
let asiaCapitals = ["Баку", "Ереван", "Кабул", "Дакка", "Манама", "Бандар-Сери-Бегаван", "Тхимпху", "Дили", "Ханой", "Тбилиси", "Иерусалим", "Дели", "Джакарта", "Амман", "Багдад", "Тегеран", "Сана", "Астана", "Пномпень", "Доха", "Никозия", "Бишкек", "Пекин", "Пхеньян", "Сеул", "Эль-Кувейт", "Вьентьян", "Бейрут", "Куала-Лумпур", "Мале", "Улан-Батор", "Нейпьидо", "Катманду", "Абу-Даби", "Маскат", "Исламабад", "Рамалла", "Эр-Рияд", "Сингапур", "Дамаск", "Душанбе", "Бангкок", "Тайпей", "Ашхабад", "Анкаpа", "Ташкент", "Манила", "Коломбо", "Токио"];
let europe = ["Австрия", "Албания", "Андорра", "Белоруссия", "Бельгия", "Болгария", "Босния и Герцеговина", "Ватикан", "Великобритания", "Венгрия", "Германия", "Греция", "Дания", "Ирландия", "Исландия", "Испания", "Италия", "Латвия", "Литва", "Лихтенштейн", "Люксембург", "Македония", "Мальта", "Молдова", "Монако", "Нидерланды", "Норвегия", "Польша", "Португалия", "Российская Федерация", "Румыния", "Сан-Марино", "Сербия", "Словакия", "Словения", "Украина", "Финляндия", "Франция", "Хорватия", "Черногория", "Чехия", "Швейцария", "Швеция", "Эстония", "Косово"];
let europeCapitals = ["Вена", "Тирана", "Андорра-ла-Велья", "Минск", "Брюссель", "София", "Сараево", "Ватикан", "Лондон", "Будапешт", "Берлин", "Афины", "Копенгаген", "Дублин", "Рейкьявик", "Мадрид", "Рим", "Рига", "Вильнюс", "Вадуц", "Люксембург", "Скопье", "Валетта", "Кишинев", "Монако", "Амстердам", "Осло", "Варшава", "Лиссабон", "Москва", "Бухарест", "Сан-Марино", "Белград", "Братислава", "Любляна", "Киев", "Хельсинки", "Париж", "Загреб", "Подгорица", "Прага", "Берн", "Стокгольм", "Таллинн", "Приштина"];
let africa = ["Алжир", "Ангола", "Бенин", "Ботсвана", "Буркина-Фасо", "Бурунди", "Габон", "Гамбия", "Гана", "Гвинея", "Гвинея-Бисау", "Джибути", "Египет", "Замбия", "Западная Сахара", "Зимбабве", "Кабо-Верде", "Камерун", "Кения", "Коморские острова", "Конго", "Конго (Дем. Република)", "Кот-д'Ивуар", "Лесото", "Либерия", "Ливия", "Маврикий", "Мавритания", "Мадагаскар", "Малави", "Мали", "Марокко", "Мозамбик", "Намибия", "Нигер", "Нигерия", "Руанда", "Сан-Томе и Принсипи", "Свазиленд", "Сейшельские острова", "Сенегал", "Сомали", "Судан", "Сьерра-Леоне", "Танзания", "Того", "Тунис", "Уганда", "Центрально-африканская Республика", "Чад", "Экваториальная Гвинея", "Эритрея", "Эфиопия", "ЮАР", "Южный Судан"];
let africaCapitals = ["Алжир", "Луанда", "Порто-Ново", "Габороне", "Уагадугу", "Бужумбура", "Либревиль", "Банжул", "Аккра", "Конакри", "Бисау", "Джибути", "Каир", "Лусака", "Эль-Аюн", "Хараре", "Прая", "Яунде", "Найроби", "Морони", "Браззавиль", "Киншаса", "Ямусукро", "Масеру", "Монровия", "Триполи", "Порт-Луи", "Нуакшот", "Антананариву", "Лилонгве", "Бамако", "Рабат", "Мапуту", "Виндхук", "Ниамей", "Абуджа", "Кигали", "Сан-Томе", "Мбабане", "Виктория", "Дакар", "Могадишо", "Хаpтум", "Фpитаун", "Додома", "Ломе", "Тунис", "Кампала", "Банги", "Нджамена", "Малабо", "Асмэра", "Аддис-Абеба", "Претория", "Джуба"];
let southAmerica = ["Аргентина", "Боливия", "Бразилия", "Венесуэла", "Гайана", "Колумбия", "Парагвай", "Перу", "Суринам", "Уругвай", "Чили", "Эквадор"];
let southAmericaCapitals = ["Буэнос-Айрес", "Ла-Пас", "Бразилиа", "Каракас", "Джорджтаун", "Богота", "Асунсьон", "Лима", "Паpамаpибо", "Монтевидео", "Сантьяго", "Кито"];
let northAmerica = ["Антигуа", "Багамские острова", "Барбадос", "Белиз", "Гаити", "Гватемала", "Гондурас", "Гренада", "Доминика", "Доминиканская Республика", "Канада", "Коста-Рика", "Куба", "Мексика", "Никарагуа", "Панама", "Эль-Сальвадор", "Сент-Винсент и Гренадины", "Сент-Кристофер и Невис", "Сент-Люсия", "США", "Тринидад и Тобаго", "Ямайка"];
let northAmericaCapitals = ["Сент-Джонс", "Нассау", "Бриджтаун", "Бельмопан", "Порт-о-Пренс", "Гватемала", "Тегусигальпа", "Сент-Джорджес", "Розо", "Санто-Доминго", "Оттава", "Сан-Хосе", "Гавана", "Мехико", "Манагуа", "Панама", "Сан-Сальвадор", "Кингстаун", "Бастер", "Кастри", "Вашингтон", "Порт-оф-Спейн", "Кингстон"];
let oceania = ["Австралия", "Вануату", "Кирибати", "Маршалловы острова", "Микронезия", "Науру", "Новая Зеландия", "Палау", "Папуа - Новая Гвинея", "Самоа", "Соломоновы острова", "Тонга", "Тувалу", "Фиджи"];
let oceaniaCapitals = ["Канберра", "Вила", "Тарава", "Маджуро", "Паликир", "Ярен", "Веллингтон", "Корор", "Порт-Морсби", "Апиа", "Хониаpа", "Нукуалофа", "Фунафути", "Сува"];
let allCountries = [];
let allCapitals = [];
let countWin = 0;
let countLose = 0;

 let change=[
	{flags:`url("${require("../assets/flags/by.png")}") 50% 50% / 100% 100% no-repeat`,country:"Белоруссия"},
	{flags:`url("${require("../assets/flags/ca.png")}") 50% 50% / 100% 100% no-repeat`,country:"Канада"},
	{flags:`url("${require("../assets/flags/co.png")}") 50% 50% / 100% 100% no-repeat`,country:"Колумбия"},
	{flags:`url("${require("../assets/flags/ae.png")}") 50% 50% / 100% 100% no-repeat`,country:"ОАЭ"},
	{flags:`url("${require("../assets/flags/ad.png")}") 50% 50% / 100% 100% no-repeat`,country:"Андорра"},
	{flags:`url("${require("../assets/flags/af.png")}") 50% 50% / 100% 100% no-repeat`,country:"Афганистан"},
	{flags:`url("${require("../assets/flags/ag.png")}") 50% 50% / 100% 100% no-repeat`,country:"Антигуа"},
	{flags:`url("${require("../assets/flags/al.png")}") 50% 50% / 100% 100% no-repeat`,country:"Албания"},
	{flags:`url("${require("../assets/flags/am.png")}") 50% 50% / 100% 100% no-repeat`,country:"Армения"},
	{flags:`url("${require("../assets/flags/ao.png")}") 50% 50% / 100% 100% no-repeat`,country:"Ангола"},
	{flags:`url("${require("../assets/flags/at.png")}") 50% 50% / 100% 100% no-repeat`,country:"Австрия"},
	{flags:`url("${require("../assets/flags/au.png")}") 50% 50% / 100% 100% no-repeat`,country:"Австралия"},
	{flags:`url("${require("../assets/flags/ar.png")}") 50% 50% / 100% 100% no-repeat`,country:"Аргентина"},
	{flags:`url("${require("../assets/flags/az.png")}") 50% 50% / 100% 100% no-repeat`,country:"Азербайджан"},
	{flags:`url("${require("../assets/flags/ba.png")}") 50% 50% / 100% 100% no-repeat`,country:"Босния и Герцеговина"},
	{flags:`url("${require("../assets/flags/bb.png")}") 50% 50% / 100% 100% no-repeat`,country:"Барбадос"},
	{flags:`url("${require("../assets/flags/bd.png")}") 50% 50% / 100% 100% no-repeat`,country:"Бангладеш"},
	{flags:`url("${require("../assets/flags/be.png")}") 50% 50% / 100% 100% no-repeat`,country:"Бельгия"},
	{flags:`url("${require("../assets/flags/bf.png")}") 50% 50% / 100% 100% no-repeat`,country:"Буркина-Фасо"},
	{flags:`url("${require("../assets/flags/bh.png")}") 50% 50% / 100% 100% no-repeat`,country:"Бахрейн"},
	{flags:`url("${require("../assets/flags/bi.png")}") 50% 50% / 100% 100% no-repeat`,country:"Бурунди"},
	{flags:`url("${require("../assets/flags/bj.png")}") 50% 50% / 100% 100% no-repeat`,country:"Бенин"},
	{flags:`url("${require("../assets/flags/bn.png")}") 50% 50% / 100% 100% no-repeat`,country:"Бруней"},
	{flags:`url("${require("../assets/flags/bo.png")}") 50% 50% / 100% 100% no-repeat`,country:"Боливия"},
	{flags:`url("${require("../assets/flags/br.png")}") 50% 50% / 100% 100% no-repeat`,country:"Бразилия"},
	{flags:`url("${require("../assets/flags/bs.png")}") 50% 50% / 100% 100% no-repeat`,country:"Багамские острова"},
	{flags:`url("${require("../assets/flags/bt.png")}") 50% 50% / 100% 100% no-repeat`,country:"Бутан"},
	{flags:`url("${require("../assets/flags/bw.png")}") 50% 50% / 100% 100% no-repeat`,country:"Ботсвана"},
	{flags:`url("${require("../assets/flags/bz.png")}") 50% 50% / 100% 100% no-repeat`,country:"Белиз"},
	{flags:`url("${require("../assets/flags/cd.png")}") 50% 50% / 100% 100% no-repeat`,country:"Конго (Дем. Република)"},
	{flags:`url("${require("../assets/flags/cf.png")}") 50% 50% / 100% 100% no-repeat`,country:"Центрально-африканская Республика"},
	{flags:`url("${require("../assets/flags/cg.png")}") 50% 50% / 100% 100% no-repeat`,country:"Конго"},
	{flags:`url("${require("../assets/flags/ch.png")}") 50% 50% / 100% 100% no-repeat`,country:"Швейцария"},
	{flags:`url("${require("../assets/flags/ci.png")}") 50% 50% / 100% 100% no-repeat`,country:"Кот-д'Ивуар"},
	{flags:`url("${require("../assets/flags/cl.png")}") 50% 50% / 100% 100% no-repeat`,country:"Чили"},
	{flags:`url("${require("../assets/flags/cn.png")}") 50% 50% / 100% 100% no-repeat`,country:"Китай"},
	{flags:`url("${require("../assets/flags/cr.png")}") 50% 50% / 100% 100% no-repeat`,country:"Коста-Рика"},
	{flags:`url("${require("../assets/flags/cu.png")}") 50% 50% / 100% 100% no-repeat`,country:"Куба"},
	{flags:`url("${require("../assets/flags/cv.png")}") 50% 50% / 100% 100% no-repeat`,country:"Кабо-Верде"},
	{flags:`url("${require("../assets/flags/cy.png")}") 50% 50% / 100% 100% no-repeat`,country:"Кипр"},
	{flags:`url("${require("../assets/flags/cz.png")}") 50% 50% / 100% 100% no-repeat`,country:"Чехия"},
	{flags:`url("${require("../assets/flags/de.png")}") 50% 50% / 100% 100% no-repeat`,country:"Германия"},
	{flags:`url("${require("../assets/flags/dj.png")}") 50% 50% / 100% 100% no-repeat`,country:"Джибути"},
	{flags:`url("${require("../assets/flags/dk.png")}") 50% 50% / 100% 100% no-repeat`,country:"Дания"},
	{flags:`url("${require("../assets/flags/dm.png")}") 50% 50% / 100% 100% no-repeat`,country:"Доминика"},
	{flags:`url("${require("../assets/flags/do.png")}") 50% 50% / 100% 100% no-repeat`,country:"Доминиканская Республика"},
	{flags:`url("${require("../assets/flags/dz.png")}") 50% 50% / 100% 100% no-repeat`,country:"Алжир"},
	{flags:`url("${require("../assets/flags/ec.png")}") 50% 50% / 100% 100% no-repeat`,country:"Эквадор"},
	{flags:`url("${require("../assets/flags/ee.png")}") 50% 50% / 100% 100% no-repeat`,country:"Эстония"},
	{flags:`url("${require("../assets/flags/eg.png")}") 50% 50% / 100% 100% no-repeat`,country:"Египет"},
	{flags:`url("${require("../assets/flags/eh.png")}") 50% 50% / 100% 100% no-repeat`,country:"Западная Сахара"},
	{flags:`url("${require("../assets/flags/er.png")}") 50% 50% / 100% 100% no-repeat`,country:"Эритрея"},
	{flags:`url("${require("../assets/flags/es.png")}") 50% 50% / 100% 100% no-repeat`,country:"Испания"},
	{flags:`url("${require("../assets/flags/et.png")}") 50% 50% / 100% 100% no-repeat`,country:"Эфиопия"},
	{flags:`url("${require("../assets/flags/fi.png")}") 50% 50% / 100% 100% no-repeat`,country:"Финляндия"},
	{flags:`url("${require("../assets/flags/fj.png")}") 50% 50% / 100% 100% no-repeat`,country:"Фиджи"},
	{flags:`url("${require("../assets/flags/fm.png")}") 50% 50% / 100% 100% no-repeat`,country:"Микронезия"},
	{flags:`url("${require("../assets/flags/fr.png")}") 50% 50% / 100% 100% no-repeat`,country:"Франция"},
	{flags:`url("${require("../assets/flags/ga.png")}") 50% 50% / 100% 100% no-repeat`,country:"Габон"},
	{flags:`url("${require("../assets/flags/gb.png")}") 50% 50% / 100% 100% no-repeat`,country:"Великобритания"},
	{flags:`url("${require("../assets/flags/gd.png")}") 50% 50% / 100% 100% no-repeat`,country:"Гренада"},
	{flags:`url("${require("../assets/flags/ge.png")}") 50% 50% / 100% 100% no-repeat`,country:"Грузия"},
	{flags:`url("${require("../assets/flags/gh.png")}") 50% 50% / 100% 100% no-repeat`,country:"Гана"},
	{flags:`url("${require("../assets/flags/gm.png")}") 50% 50% / 100% 100% no-repeat`,country:"Гамбия"},
	{flags:`url("${require("../assets/flags/gn.png")}") 50% 50% / 100% 100% no-repeat`,country:"Гвинея"},
	{flags:`url("${require("../assets/flags/gq.png")}") 50% 50% / 100% 100% no-repeat`,country:"Экваториальная Гвинея"},
	{flags:`url("${require("../assets/flags/gr.png")}") 50% 50% / 100% 100% no-repeat`,country:"Греция"},
	{flags:`url("${require("../assets/flags/gt.png")}") 50% 50% / 100% 100% no-repeat`,country:"Гватемала"},
	{flags:`url("${require("../assets/flags/gw.png")}") 50% 50% / 100% 100% no-repeat`,country:"Гвинея-Бисау"},
	{flags:`url("${require("../assets/flags/gy.png")}") 50% 50% / 100% 100% no-repeat`,country:"Гайана"},
	{flags:`url("${require("../assets/flags/hn.png")}") 50% 50% / 100% 100% no-repeat`,country:"Гондурас"},
	{flags:`url("${require("../assets/flags/hr.png")}") 50% 50% / 100% 100% no-repeat`,country:"Хорватия"},
	{flags:`url("${require("../assets/flags/ht.png")}") 50% 50% / 100% 100% no-repeat`,country:"Гаити"},
	{flags:`url("${require("../assets/flags/hu.png")}") 50% 50% / 100% 100% no-repeat`,country:"Венгрия"},
	{flags:`url("${require("../assets/flags/id.png")}") 50% 50% / 100% 100% no-repeat`,country:"Индонезия"},
	{flags:`url("${require("../assets/flags/ie.png")}") 50% 50% / 100% 100% no-repeat`,country:"Ирландия"},
	{flags:`url("${require("../assets/flags/il.png")}") 50% 50% / 100% 100% no-repeat`,country:"Израиль"},
	{flags:`url("${require("../assets/flags/in.png")}") 50% 50% / 100% 100% no-repeat`,country:"Индия"},
	{flags:`url("${require("../assets/flags/iq.png")}") 50% 50% / 100% 100% no-repeat`,country:"Ирак"},
	{flags:`url("${require("../assets/flags/ir.png")}") 50% 50% / 100% 100% no-repeat`,country:"Иран"},
	{flags:`url("${require("../assets/flags/is.png")}") 50% 50% / 100% 100% no-repeat`,country:"Исландия"},
	{flags:`url("${require("../assets/flags/it.png")}") 50% 50% / 100% 100% no-repeat`,country:"Италия"},
	{flags:`url("${require("../assets/flags/jm.png")}") 50% 50% / 100% 100% no-repeat`,country:"Ямайка"},
	{flags:`url("${require("../assets/flags/jo.png")}") 50% 50% / 100% 100% no-repeat`,country:"Иордания"},
	{flags:`url("${require("../assets/flags/jp.png")}") 50% 50% / 100% 100% no-repeat`,country:"Япония"},
	{flags:`url("${require("../assets/flags/ke.png")}") 50% 50% / 100% 100% no-repeat`,country:"Кения"},
	{flags:`url("${require("../assets/flags/kg.png")}") 50% 50% / 100% 100% no-repeat`,country:"Киргизстан"},
	{flags:`url("${require("../assets/flags/kh.png")}") 50% 50% / 100% 100% no-repeat`,country:"Камбоджа"},
	{flags:`url("${require("../assets/flags/ki.png")}") 50% 50% / 100% 100% no-repeat`,country:"Кирибати"},
	{flags:`url("${require("../assets/flags/km.png")}") 50% 50% / 100% 100% no-repeat`,country:"Коморские острова"},
	{flags:`url("${require("../assets/flags/kn.png")}") 50% 50% / 100% 100% no-repeat`,country:"Сент-Кристофер и Невис"},
	{flags:`url("${require("../assets/flags/kp.png")}") 50% 50% / 100% 100% no-repeat`,country:"Корея Северная"},
	{flags:`url("${require("../assets/flags/kr.png")}") 50% 50% / 100% 100% no-repeat`,country:"Корея Южная"},
	{flags:`url("${require("../assets/flags/kw.png")}") 50% 50% / 100% 100% no-repeat`,country:"Кувейт"},
	{flags:`url("${require("../assets/flags/kz.png")}") 50% 50% / 100% 100% no-repeat`,country:"Казахстан"},
	{flags:`url("${require("../assets/flags/la.png")}") 50% 50% / 100% 100% no-repeat`,country:"Лаос"},
	{flags:`url("${require("../assets/flags/lb.png")}") 50% 50% / 100% 100% no-repeat`,country:"Ливан"},
	{flags:`url("${require("../assets/flags/lc.png")}") 50% 50% / 100% 100% no-repeat`,country:"Сент-Люсия"},
	{flags:`url("${require("../assets/flags/li.png")}") 50% 50% / 100% 100% no-repeat`,country:"Лихтенштейн"},
	{flags:`url("${require("../assets/flags/lk.png")}") 50% 50% / 100% 100% no-repeat`,country:"Шри-Ланка"},
	{flags:`url("${require("../assets/flags/lr.png")}") 50% 50% / 100% 100% no-repeat`,country:"Либерия"},
	{flags:`url("${require("../assets/flags/ls.png")}") 50% 50% / 100% 100% no-repeat`,country:"Лесото"},
	{flags:`url("${require("../assets/flags/lt.png")}") 50% 50% / 100% 100% no-repeat`,country:"Литва"},
	{flags:`url("${require("../assets/flags/lu.png")}") 50% 50% / 100% 100% no-repeat`,country:"Люксембург"},
	{flags:`url("${require("../assets/flags/lv.png")}") 50% 50% / 100% 100% no-repeat`,country:"Латвия"},
	{flags:`url("${require("../assets/flags/ly.png")}") 50% 50% / 100% 100% no-repeat`,country:"Ливия"},
	{flags:`url("${require("../assets/flags/ma.png")}") 50% 50% / 100% 100% no-repeat`,country:"Марокко"},
	{flags:`url("${require("../assets/flags/md.png")}") 50% 50% / 100% 100% no-repeat`,country:"Молдова"},
	{flags:`url("${require("../assets/flags/me.png")}") 50% 50% / 100% 100% no-repeat`,country:"Черногория"},
	{flags:`url("${require("../assets/flags/mg.png")}") 50% 50% / 100% 100% no-repeat`,country:"Мадагаскар"},
	{flags:`url("${require("../assets/flags/mh.png")}") 50% 50% / 100% 100% no-repeat`,country:"Маршалловы острова"},
	{flags:`url("${require("../assets/flags/mk.png")}") 50% 50% / 100% 100% no-repeat`,country:"Македония"},
	{flags:`url("${require("../assets/flags/ml.png")}") 50% 50% / 100% 100% no-repeat`,country:"Мали"},
	{flags:`url("${require("../assets/flags/mm.png")}") 50% 50% / 100% 100% no-repeat`,country:"Мьянма"},
	{flags:`url("${require("../assets/flags/mn.png")}") 50% 50% / 100% 100% no-repeat`,country:"Монголия"},
	{flags:`url("${require("../assets/flags/mr.png")}") 50% 50% / 100% 100% no-repeat`,country:"Мавритания"},
	{flags:`url("${require("../assets/flags/mt.png")}") 50% 50% / 100% 100% no-repeat`,country:"Мальта"},
	{flags:`url("${require("../assets/flags/mu.png")}") 50% 50% / 100% 100% no-repeat`,country:"Маврикий"},
	{flags:`url("${require("../assets/flags/mv.png")}") 50% 50% / 100% 100% no-repeat`,country:"Мальдивы"},
	{flags:`url("${require("../assets/flags/mw.png")}") 50% 50% / 100% 100% no-repeat`,country:"Малави"},
	{flags:`url("${require("../assets/flags/mx.png")}") 50% 50% / 100% 100% no-repeat`,country:"Мексика"},
	{flags:`url("${require("../assets/flags/my.png")}") 50% 50% / 100% 100% no-repeat`,country:"Малайзия"},
	{flags:`url("${require("../assets/flags/mz.png")}") 50% 50% / 100% 100% no-repeat`,country:"Мозамбик"},
	{flags:`url("${require("../assets/flags/na.png")}") 50% 50% / 100% 100% no-repeat`,country:"Намибия"},
	{flags:`url("${require("../assets/flags/ne.png")}") 50% 50% / 100% 100% no-repeat`,country:"Нигер"},
	{flags:`url("${require("../assets/flags/ng.png")}") 50% 50% / 100% 100% no-repeat`,country:"Нигерия"},
	{flags:`url("${require("../assets/flags/ni.png")}") 50% 50% / 100% 100% no-repeat`,country:"Никарагуа"},
	{flags:`url("${require("../assets/flags/nl.png")}") 50% 50% / 100% 100% no-repeat`,country:"Нидерланды"},
	{flags:`url("${require("../assets/flags/no.png")}") 50% 50% / 100% 100% no-repeat`,country:"Норвегия"},
	{flags:`url("${require("../assets/flags/np.png")}") 50% 50% / 100% 100% no-repeat`,country:"Непал"},
	{flags:`url("${require("../assets/flags/nr.png")}") 50% 50% / 100% 100% no-repeat`,country:"Науру"},
	{flags:`url("${require("../assets/flags/nz.png")}") 50% 50% / 100% 100% no-repeat`,country:"Новая Зеландия"},
	{flags:`url("${require("../assets/flags/om.png")}") 50% 50% / 100% 100% no-repeat`,country:"Оман"},
	{flags:`url("${require("../assets/flags/pa.png")}") 50% 50% / 100% 100% no-repeat`,country:"Панама"},
	{flags:`url("${require("../assets/flags/pe.png")}") 50% 50% / 100% 100% no-repeat`,country:"Перу"},
	{flags:`url("${require("../assets/flags/pg.png")}") 50% 50% / 100% 100% no-repeat`,country:"Папуа - Новая Гвинея"},
	{flags:`url("${require("../assets/flags/ph.png")}") 50% 50% / 100% 100% no-repeat`,country:"Филиппины"},
	{flags:`url("${require("../assets/flags/pk.png")}") 50% 50% / 100% 100% no-repeat`,country:"Пакистан"},
	{flags:`url("${require("../assets/flags/pl.png")}") 50% 50% / 100% 100% no-repeat`,country:"Польша"},
	{flags:`url("${require("../assets/flags/pt.png")}") 50% 50% / 100% 100% no-repeat`,country:"Португалия"},
	{flags:`url("${require("../assets/flags/pw.png")}") 50% 50% / 100% 100% no-repeat`,country:"Палау"},
	{flags:`url("${require("../assets/flags/py.png")}") 50% 50% / 100% 100% no-repeat`,country:"Парагвай"},
	{flags:`url("${require("../assets/flags/qa.png")}") 50% 50% / 100% 100% no-repeat`,country:"Катар"},
	{flags:`url("${require("../assets/flags/ro.png")}") 50% 50% / 100% 100% no-repeat`,country:"Румыния"},
	{flags:`url("${require("../assets/flags/rs.png")}") 50% 50% / 100% 100% no-repeat`,country:"Сербия"},
	{flags:`url("${require("../assets/flags/mc.png")}") 50% 50% / 100% 100% no-repeat`,country:"Монако"},
	{flags:`url("${require("../assets/flags/ru.png")}") 50% 50% / 100% 100% no-repeat`,country:"Российская Федерация"},
	{flags:`url("${require("../assets/flags/rw.png")}") 50% 50% / 100% 100% no-repeat`,country:"Руанда"},
	{flags:`url("${require("../assets/flags/sa.png")}") 50% 50% / 100% 100% no-repeat`,country:"Саудовская Аравия"},
	{flags:`url("${require("../assets/flags/sb.png")}") 50% 50% / 100% 100% no-repeat`,country:"Соломоновы острова"},
	{flags:`url("${require("../assets/flags/sc.png")}") 50% 50% / 100% 100% no-repeat`,country:"Сейшельские острова"},
	{flags:`url("${require("../assets/flags/sd.png")}") 50% 50% / 100% 100% no-repeat`,country:"Судан"},
	{flags:`url("${require("../assets/flags/se.png")}") 50% 50% / 100% 100% no-repeat`,country:"Швеция"},
	{flags:`url("${require("../assets/flags/sg.png")}") 50% 50% / 100% 100% no-repeat`,country:"Сингапур"},
	{flags:`url("${require("../assets/flags/si.png")}") 50% 50% / 100% 100% no-repeat`,country:"Словения"},
	{flags:`url("${require("../assets/flags/sk.png")}") 50% 50% / 100% 100% no-repeat`,country:"Словакия"},
	{flags:`url("${require("../assets/flags/sl.png")}") 50% 50% / 100% 100% no-repeat`,country:"Сьерра-Леоне"},
	{flags:`url("${require("../assets/flags/sm.png")}") 50% 50% / 100% 100% no-repeat`,country:"Сан-Марино"},
	{flags:`url("${require("../assets/flags/sn.png")}") 50% 50% / 100% 100% no-repeat`,country:"Сенегал"},
	{flags:`url("${require("../assets/flags/so.png")}") 50% 50% / 100% 100% no-repeat`,country:"Сомали"},
	{flags:`url("${require("../assets/flags/sr.png")}") 50% 50% / 100% 100% no-repeat`,country:"Суринам"},
	{flags:`url("${require("../assets/flags/st.png")}") 50% 50% / 100% 100% no-repeat`,country:"Сан-Томе и Принсипи"},
	{flags:`url("${require("../assets/flags/sv.png")}") 50% 50% / 100% 100% no-repeat`,country:"Эль-Сальвадор"},
	{flags:`url("${require("../assets/flags/sy.png")}") 50% 50% / 100% 100% no-repeat`,country:"Сирия"},
	{flags:`url("${require("../assets/flags/td.png")}") 50% 50% / 100% 100% no-repeat`,country:"Чад"},
	{flags:`url("${require("../assets/flags/tg.png")}") 50% 50% / 100% 100% no-repeat`,country:"Того"},
	{flags:`url("${require("../assets/flags/th.png")}") 50% 50% / 100% 100% no-repeat`,country:"Таиланд"},
	{flags:`url("${require("../assets/flags/tj.png")}") 50% 50% / 100% 100% no-repeat`,country:"Таджикистан"},
	{flags:`url("${require("../assets/flags/tl.png")}") 50% 50% / 100% 100% no-repeat`,country:"Восточный Тимор"},
	{flags:`url("${require("../assets/flags/tm.png")}") 50% 50% / 100% 100% no-repeat`,country:"Туркмения"},
	{flags:`url("${require("../assets/flags/tn.png")}") 50% 50% / 100% 100% no-repeat`,country:"Тунис"},
	{flags:`url("${require("../assets/flags/to.png")}") 50% 50% / 100% 100% no-repeat`,country:"Тонга"},
	{flags:`url("${require("../assets/flags/tr.png")}") 50% 50% / 100% 100% no-repeat`,country:"Турция"},
	{flags:`url("${require("../assets/flags/tt.png")}") 50% 50% / 100% 100% no-repeat`,country:"Тринидад и Тобаго"},
	{flags:`url("${require("../assets/flags/tv.png")}") 50% 50% / 100% 100% no-repeat`,country:"Тувалу"},
	{flags:`url("${require("../assets/flags/tw.png")}") 50% 50% / 100% 100% no-repeat`,country:"Тайвань"},
	{flags:`url("${require("../assets/flags/tz.png")}") 50% 50% / 100% 100% no-repeat`,country:"Танзания"},
	{flags:`url("${require("../assets/flags/ua.png")}") 50% 50% / 100% 100% no-repeat`,country:"Украина"},
	{flags:`url("${require("../assets/flags/ug.png")}") 50% 50% / 100% 100% no-repeat`,country:"Уганда"},
	{flags:`url("${require("../assets/flags/us.png")}") 50% 50% / 100% 100% no-repeat`,country:"США"},
	{flags:`url("${require("../assets/flags/uy.png")}") 50% 50% / 100% 100% no-repeat`,country:"Уругвай"},
	{flags:`url("${require("../assets/flags/uz.png")}") 50% 50% / 100% 100% no-repeat`,country:"Узбекистан"},
	{flags:`url("${require("../assets/flags/va.png")}") 50% 50% / 100% 100% no-repeat`,country:"Ватикан"},
	{flags:`url("${require("../assets/flags/vc.png")}") 50% 50% / 100% 100% no-repeat`,country:"Сент-Винсент и Гренадины"},
	{flags:`url("${require("../assets/flags/ve.png")}") 50% 50% / 100% 100% no-repeat`,country:"Венесуэла"},
	{flags:`url("${require("../assets/flags/vn.png")}") 50% 50% / 100% 100% no-repeat`,country:"Вьетнам"},
	{flags:`url("${require("../assets/flags/vu.png")}") 50% 50% / 100% 100% no-repeat`,country:"Вануату"},
	{flags:`url("${require("../assets/flags/ws.png")}") 50% 50% / 100% 100% no-repeat`,country:"Самоа"},
	{flags:`url("${require("../assets/flags/ye.png")}") 50% 50% / 100% 100% no-repeat`,country:"Йемен"},
	{flags:`url("${require("../assets/flags/za.png")}") 50% 50% / 100% 100% no-repeat`,country:"ЮАР"},
	{flags:`url("${require("../assets/flags/zm.png")}") 50% 50% / 100% 100% no-repeat`,country:"Замбия"},
	{flags:`url("${require("../assets/flags/zw.png")}") 50% 50% / 100% 100% no-repeat`,country:"Зимбабве"},
	{flags:`url("${require("../assets/flags/ks.png")}") 50% 50% / 100% 100% no-repeat`,country:"Косово"}
		    ];

for (let i=0;i<asia.length;i++){
	allCountries.push(asia[i])
	allCapitals.push(asiaCapitals[i])
}

for (let i=0;i<europe.length;i++){
	allCountries.push(europe[i])
	allCapitals.push(europeCapitals[i])
}

for (let i=0;i<africa.length;i++){
	allCountries.push(africa[i])
	allCapitals.push(africaCapitals[i])
}

for (let i=0;i<southAmerica.length;i++) {
	allCountries.push(southAmerica[i])
	allCapitals.push(southAmericaCapitals[i])
}

for (let i=0;i<northAmerica.length;i++) {
	allCountries.push(northAmerica[i])
	allCapitals.push(northAmericaCapitals[i])
}

for (let i=0;i<oceania.length;i++) {
	allCountries.push(oceania[i])
	allCapitals.push(oceaniaCapitals[i])
}

for (let key in change) {
	for (let i=0;i<allCountries.length;i++){
		if (allCountries[i]===change[key].country) {
			change[key].capital = allCapitals[i]
			break;
		}
	}
}

let asiaChange = [];

for(let i = 0; i < asia.length; i++) {
			for (let j =0; j<change.length;j++) {
				if (change[j].country===asia[i]) {
				asiaChange.push(change[j])
				}
			}
		}

let europeChange = [];

for(let i = 0; i < europe.length; i++) {
			for (let j =0; j<change.length;j++) {
				if (change[j].country===europe[i]) {
				europeChange.push(change[j])
				}
			}
		}

let africaChange = [];

for(let i = 0; i < africa.length; i++) {
			for (let j =0; j<change.length;j++) {
				if (change[j].country===africa[i]) {
				africaChange.push(change[j])
				}
			}
		}

let southAmericaChange = [];

for(let i = 0; i < southAmerica.length; i++) {
			for (let j =0; j<change.length;j++) {
				if (change[j].country===southAmerica[i]) {
				southAmericaChange.push(change[j])
				}
			}
		}

let northAmericaChange = [];

for(let i = 0; i < northAmerica.length; i++) {
			for (let j =0; j<change.length;j++) {
				if (change[j].country===northAmerica[i]) {
				northAmericaChange.push(change[j])
				}
			}
		}

let oceaniaChange = [];

for(let i = 0; i < oceania.length; i++) {
			for (let j =0; j<change.length;j++) {
				if (change[j].country===oceania[i]) {
				oceaniaChange.push(change[j])
				}
			}
		}

let countriesAll = change.concat()
let countriesCopyAll = change.concat()

/*let flagsRecordsAllCountries = JSON.stringify(0)
	localStorage.setItem(`Флаги(Весь мир)`, flagsRecordsAllCountries)

let flagsRecordsAsia = JSON.stringify(0)
	localStorage.setItem(`Флаги(Азия)`, flagsRecordsAsia)

let flagsRecordsEurope = JSON.stringify(0)
	localStorage.setItem(`Флаги(Европа)`, flagsRecordsEurope)

let flagsRecordsAfrica = JSON.stringify(0)
	localStorage.setItem(`Флаги(Африка)`, flagsRecordsAfrica)

let flagsRecordsSouthAmerica = JSON.stringify(0)
	localStorage.setItem(`Флаги(Южная Америка)`, flagsRecordsSouthAmerica)

let flagsRecordsNorthAmerica = JSON.stringify(0)
	localStorage.setItem(`Флаги(Северная Америка)`, flagsRecordsNorthAmerica)

let flagsRecordsOceania = JSON.stringify(0)
	localStorage.setItem(`Флаги(Океания)`, flagsRecordsOceania)

let capitalsRecordsAllCountries
let capitalsRecordsAsia
let capitalsRecordsEurope
let capitalsRecordsAfrica
let capitalsRecordsSouthAmerica
let capitalsRecordsNorthAmerica
let capitalsRecordsOceania*/



export{countriesAll as fullCounties,countriesCopyAll as countriesCopy, asiaChange,
europeChange,africaChange,southAmericaChange,northAmericaChange,oceaniaChange};