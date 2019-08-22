ymaps.ready(init);

function init() {
	var myMap = new ymaps.Map("map", {
		center: [55.755814, 37.617635], // коор-ты центра карты "широта, долгота"
		zoom: 11.5, // уровень масштабирования [0..19]
	});

	myMap.setType('yandex#map');
	myMap.behaviors.disable(['rightMouseButtonMagnifier', 'ruler', 'routeEditor']).enable('drag');

	// BalloonContentLayout = ymaps.templateLayoutFactory.createClass(
 //            '<div class="bln" style="margin: 10px;">' +
 //                '<b>$[properties.name]</b><br />' +
 //                '<i id="count"></i> ' +
 //            '</div>');

    // var placemark = new ymaps.Placemark([51.66433407, 39.20528150], {
    //         name: 'Считаем'
    //     }, {
    //         balloonContentLayout: BalloonContentLayout
    //     });

	var suc1 = new ymaps.Placemark([55.751988, 37.587030], {
	    balloonContentHeader: `<link rel="stylesheet" href="styles/map_style.css">
	    						<span style="color: black; font-size: 19pt; text-transform: uppercase; font-weight: 700">Stand-Up Club #1</span>`,
	    // balloonContentBody: '<p>Открытый микрофон по <span>понедельникам в 19:00</span></p>',
	    balloonContentBody: `<p><a href="https://vk.com/standupclubru" target="_blank">Группа в VK</a>
	    						
	    						<br>
	    						<span style="font-size: 12pt; font-weight: 600">Открытый Микрофон</span>
	    						<br>
	    						<span style="font-size: 12pt">по понедельникам в 19:00</span>
	    						<br>
	    						<span style="font-size: 12pt">по пятницам в 18:00</span>
	    						<br>
	    						<br>
	    						<span style="font-size: 12pt; font-weight: 600">Открытый Микрофон Историй</span>
	    						<br>
	    						<span style="font-size: 12pt">по воскресеньям в 18:00</span></p>`,
	    balloonContentFooter: '',
	    balloonContentFooter: `
	    						Новый Арбат, 21, стр. 1, эт. 2`,
	    hintContent: '<span style="font-weight: 600">Stand-Up Club #1</span> - Новый Арбат, 21, стр. 1, эт. 2'
	}, {
		preset: 'islands#redDotIcon'
	});

	var djondonn = new ymaps.Placemark([55.757901, 37.636435], {
	    balloonContentHeader: `<link rel="stylesheet" href="styles/map_style.css">
	    						<span style="color: black; font-size: 19pt; text-transform: uppercase; font-weight: 700">Джон Донн</span>`,
	    // balloonContentBody: '<p>Открытый микрофон по <span>понедельникам в 19:00</span></p>',
	    balloonContentBody: `<p><a href="https://vk.com/event179044407" target="_blank">Группа в VK</a>
	    						
	    						<br>
	    						<span style="font-size: 12pt; font-weight: 600">Открытый Микрофон</span>
	    						<br>
	    						<span style="font-size: 12pt">по четвергам в 20:00</span></p>`,
	    balloonContentFooter: '',
	    balloonContentFooter: `
	    						Маросейка, 15`,
	    hintContent: '<span style="font-weight: 600">Джон Донн</span> - Маросейка, 15'
	}, {
		preset: 'islands#redDotIcon'
	});

	var alibi = new ymaps.Placemark([55.767616, 37.634630], {
	    balloonContentHeader: `<link rel="stylesheet" href="styles/map_style.css">
	    						<span style="color: black; font-size: 19pt; text-transform: uppercase; font-weight: 700">Алиби</span>`,
	    // balloonContentBody: '<p>Открытый микрофон по <span>понедельникам в 19:00</span></p>',
	    balloonContentBody: `<p><a href="https://vk.com/bigopenmic" target="_blank">Группа в VK</a>
	    						
	    						<br>
	    						<span style="font-size: 12pt; font-weight: 600">Открытый Микрофон</span>
	    						<br>
	    						<span style="font-size: 12pt">по вторникам в 20:00</span></p>`,
	    balloonContentFooter: '',
	    balloonContentFooter: `
	    						Ащеулов пер., 9, цокольный этаж`,
	    hintContent: '<span style="font-weight: 600">Алиби</span> - Ащеулов пер., 9, цокольный этаж'
	}, {
		preset: 'islands#redDotIcon'
	});

	var store = new ymaps.Placemark([55.765555, 37.615866], {
	    balloonContentHeader: `<link rel="stylesheet" href="styles/map_style.css">
	    						<span style="color: black; font-size: 19pt; text-transform: uppercase; font-weight: 700">Standup Store<br> Moscow</span>`,
	    // balloonContentBody: '<p>Открытый микрофон по <span>понедельникам в 19:00</span></p>',
	    balloonContentBody: `<p><a href="https://vk.com/standupstore" target="_blank">Группа в VK</a>
	    						
	    						<br>
	    						<span style="font-size: 12pt; font-weight: 600">Открытый Микрофон</span>
	    						<br>
	    						<span style="font-size: 12pt">по воскресеньям в 21:00</span></p>`,
	    balloonContentFooter: '',
	    balloonContentFooter: `
	    						Петровка, 21, стр. 1`,
	    hintContent: '<span style="font-weight: 600">Standup Store Moscow</span> - Петровка, 21, стр. 1'
	}, {
		preset: 'islands#redDotIcon'
	});

	var montis = new ymaps.Placemark([55.730515, 37.627914], {
	    balloonContentHeader: `<link rel="stylesheet" href="styles/map_style.css">
	    						<span style="color: black; font-size: 19pt; text-transform: uppercase; font-weight: 700">Montis’ friends</span>`,
	    // balloonContentBody: '<p>Открытый микрофон по <span>понедельникам в 19:00</span></p>',
	    balloonContentBody: `<p><a href="https://vk.com/otkritiy_mic_shutcki" target="_blank">Группа в VK</a>
	    						
	    						<br>
	    						<span style="font-size: 12pt; font-weight: 600">Открытый Микрофон</span>
	    						<br>
	    						<span style="font-size: 12pt">по воскресеньям в 20:00</span></p>`,
	    balloonContentFooter: '',
	    balloonContentFooter: `
	    						Валовая, 26, эт. 1`,
	    hintContent: '<span style="font-weight: 600">Montis’ friends</span> - Валовая, 26, эт. 1'
	}, {
		preset: 'islands#redDotIcon'
	});

	var harats = new ymaps.Placemark([55.758724, 37.641934], {
	    balloonContentHeader: `<link rel="stylesheet" href="styles/map_style.css">
	    						<span style="color: black; font-size: 19pt; text-transform: uppercase; font-weight: 700">Harat’s pub</span>`,
	    // balloonContentBody: '<p>Открытый микрофон по <span>понедельникам в 19:00</span></p>',
	    balloonContentBody: `<p><a href="https://vk.com/openmicharats" target="_blank">Группа в VK</a>
	    						
	    						<br>
	    						<span style="font-size: 12pt; font-weight: 600">Открытый Микрофон</span>
	    						<br>
	    						<span style="font-size: 12pt">по средам в 20:00</span></p>`,
	    balloonContentFooter: '',
	    balloonContentFooter: `
	    						Покровка, 6`,
	    hintContent: '<span style="font-weight: 600">Harat’s pub</span> - Покровка, 6'
	}, {
		preset: 'islands#redDotIcon'
	});

	var redpub = new ymaps.Placemark([55.740847, 37.611239], {
	    balloonContentHeader: `<link rel="stylesheet" href="styles/map_style.css">
	    						<span style="color: black; font-size: 19pt; text-transform: uppercase; font-weight: 700">Red Pub</span>`,
	    // balloonContentBody: '<p>Открытый микрофон по <span>понедельникам в 19:00</span></p>',
	    balloonContentBody: `<p><a href="https://vk.com/otkritiy_mic_shutcki" target="_blank">Группа в VK</a>
	    						
	    						<br>
	    						<span style="font-size: 12pt; font-weight: 600">Открытый Микрофон</span>
	    						<br>
	    						<span style="font-size: 12pt">по четвергам в 20:00</span></p>`,
	    balloonContentFooter: '',
	    balloonContentFooter: `
	    						Болотная наб., 9, стр. 1`,
	    hintContent: '<span style="font-weight: 600">Red Pub</span> - Болотная наб., 9, стр. 1'
	}, {
		preset: 'islands#redDotIcon'
	});

	var dost = new ymaps.Placemark([55.788500, 37.613979], {
	    balloonContentHeader: `<link rel="stylesheet" href="styles/map_style.css">
	    						<span style="color: black; font-size: 19pt; text-transform: uppercase; font-weight: 700">Достоевский</span>`,
	    // balloonContentBody: '<p>Открытый микрофон по <span>понедельникам в 19:00</span></p>',
	    balloonContentBody: `<p><a href="https://vk.com/raw_standup" target="_blank">Группа в VK</a>
	    						
	    						<br>
	    						<span style="font-size: 12pt; font-weight: 600">Открытый Микрофон</span>
	    						<br>
	    						<span style="font-size: 12pt">по пятницам в 20:00</span></p>`,
	    balloonContentFooter: '',
	    balloonContentFooter: `
	    						Октябрьская, 26, стр. 1, 1 этаж`,
	    hintContent: '<span style="font-weight: 600">Достоевский</span> - Октябрьская, 26, стр. 1, 1 этаж'
	}, {
		preset: 'islands#redDotIcon'
	});

	var bbbar = new ymaps.Placemark([55.793277, 37.608268], {
	    balloonContentHeader: `<link rel="stylesheet" href="styles/map_style.css">
	    						<span style="color: black; font-size: 19pt; text-transform: uppercase; font-weight: 700">Beer Bear</span>`,
	    // balloonContentBody: '<p>Открытый микрофон по <span>понедельникам в 19:00</span></p>',
	    balloonContentBody: `<p><a href="https://vk.com/raw_standup" target="_blank">Группа в VK</a>
	    						
	    						<br>
	    						<span style="font-size: 12pt; font-weight: 600">Открытый Микрофон</span>
	    						<br>
	    						<span style="font-size: 12pt">по воскресеньям в 20:00</span></p>`,
	    balloonContentFooter: '',
	    balloonContentFooter: `
	    						Сущёвский Вал, 41`,
	    hintContent: '<span style="font-weight: 600">Beer Bear Bar</span> - Сущёвский Вал, 41'
	}, {
		preset: 'islands#redDotIcon'
	});

	var rolling_barrels = new ymaps.Placemark([55.752150, 37.594500], {
	    balloonContentHeader: `<link rel="stylesheet" href="styles/map_style.css">
	    						<span style="color: black; font-size: 19pt; text-transform: uppercase; font-weight: 700">Rolling<br>Barrels</span>`,
	    // balloonContentBody: '<p>Открытый микрофон по <span>понедельникам в 19:00</span></p>',
	    balloonContentBody: `<p><a href="https://vk.com/raw_standup" target="_blank">Группа в VK</a>
	    						
	    						<br>
	    						<span style="font-size: 12pt; font-weight: 600">Открытый Микрофон</span>
	    						<br>
	    						<span style="font-size: 12pt">по понедельникам в 20:00</span></p>`,
	    balloonContentFooter: '',
	    balloonContentFooter: `
	    						Новый Арбат, 13`,
	    hintContent: '<span style="font-weight: 600">Rolling Barrels Craft</span> - Новый Арбат, 13'
	}, {
		preset: 'islands#redDotIcon'
	});

	var duma = new ymaps.Placemark([55.756817, 37.610503], {
	    balloonContentHeader: `<link rel="stylesheet" href="styles/map_style.css">
	    						<span style="color: black; font-size: 19pt; text-transform: uppercase; font-weight: 700">Дума</span>`,
	    // balloonContentBody: '<p>Открытый микрофон по <span>понедельникам в 19:00</span></p>',
	    balloonContentBody: `<p><a href="https://vk.com/hatestandup" target="_blank">Группа в VK</a>
	    						
	    						<br>
	    						<span style="font-size: 12pt; font-weight: 600">Открытый Микрофон</span>
	    						<br>
	    						<span style="font-size: 12pt">по воскресеньям в 20:00</span></p>`,
	    balloonContentFooter: '',
	    balloonContentFooter: `Моховая, 11, стр. 3`,
	    hintContent: `<span style="font-weight: 600">Дума</span> - Моховая, 11, стр. 3`
	}, {
		preset: 'islands#redDotIcon'
	});

	var friends = new ymaps.Placemark([55.709853, 37.655254], {
	    balloonContentHeader: `<link rel="stylesheet" href="styles/map_style.css">
	    						<span style="color: black; font-size: 19pt; text-transform: uppercase; font-weight: 700">Друзья</span>`,
	    // balloonContentBody: '<p>Открытый микрофон по <span>понедельникам в 19:00</span></p>',
	    balloonContentBody: `<p><a href="https://vk.com/hatestandup" target="_blank">Группа в VK</a>
	    						
	    						<br>
	    						<span style="font-size: 12pt; font-weight: 600">Открытый Микрофон</span>
	    						<br>
	    						<span style="font-size: 12pt">по средам в 19:30</span></p>`,
	    balloonContentFooter: '',
	    balloonContentFooter: `Ленинская Слобода, 26`,
	    hintContent: `<span style="font-weight: 600">Друзья</span> - Ленинская Слобода, 26`
	}, {
		preset: 'islands#redDotIcon'
	});

	var concert = new ymaps.Placemark([55.744607, 37.626969], {
	    balloonContentHeader: `<link rel="stylesheet" href="styles/map_style.css">
	    						<span style="color: black; font-size: 19pt; text-transform: uppercase; font-weight: 700">БарКонцерт</span>`,
	    // balloonContentBody: '<p>Открытый микрофон по <span>понедельникам в 19:00</span></p>',
	    balloonContentBody: `<p><a href="https://vk.com/hatestandup" target="_blank">Группа в VK</a>
	    						
	    						<br>
	    						<span style="font-size: 12pt; font-weight: 600">Открытый Микрофон</span>
	    						<br>
	    						<span style="font-size: 12pt">по четвергам в 20:00</span></p>`,
	    balloonContentFooter: '',
	    balloonContentFooter: `Пятницкая, 6/1с1`,
	    hintContent: `<span style="font-weight: 600">БарКонцерт</span> - Пятницкая, 6/1с1`
	}, {
		preset: 'islands#redDotIcon'
	});

	var mint = new ymaps.Placemark([55.754534, 37.637252], {
	    balloonContentHeader: `<link rel="stylesheet" href="styles/map_style.css">
	    						<span style="color: black; font-size: 19pt; text-transform: uppercase; font-weight: 700">Мята Lounge</span>`,
	    // balloonContentBody: '<p>Открытый микрофон по <span>понедельникам в 19:00</span></p>',
	    balloonContentBody: `<p><a href="https://vk.com/to.kromeshutok" target="_blank">Группа в VK</a>
	    						
	    						<br>
	    						<span style="font-size: 12pt; font-weight: 600">Открытый Микрофон</span>
	    						<br>
	    						<span style="font-size: 12pt">по средам в 20:30</span></p>`,
	    balloonContentFooter: '',
	    balloonContentFooter: `Большой Спасоглинищевский пер., 9/1с16А, эт. 3`,
	    hintContent: `<span style="font-weight: 600">Мята Lounge</span> - Большой Спасоглинищевский пер., 9/1с16А, эт. 3`
	}, {
		preset: 'islands#redDotIcon'
	});

	var sausage = new ymaps.Placemark([55.754384, 37.637206], {
	    balloonContentHeader: `<link rel="stylesheet" href="styles/map_style.css">
	    						<span style="color: black; font-size: 19pt; text-transform: uppercase; font-weight: 700">Колбаса</span>`,
	    // balloonContentBody: '<p>Открытый микрофон по <span>понедельникам в 19:00</span></p>',
	    balloonContentBody: `<p><a href="https://vk.com/to.kromeshutok" target="_blank">Группа в VK</a>
	    						
	    						<br>
	    						<span style="font-size: 12pt; font-weight: 600">Открытый Микрофон</span>
	    						<br>
	    						<span style="font-size: 12pt">по четвергам в 20:30</span></p>`,
	    balloonContentFooter: '',
	    balloonContentFooter: ` Забелина, 1`,
	    hintContent: `<span style="font-weight: 600">Колбаса</span> -  Забелина, 1`
	}, {
		preset: 'islands#redDotIcon'
	});

	var mint_phili = new ymaps.Placemark([55.745296, 37.508290], {
	    balloonContentHeader: `<link rel="stylesheet" href="styles/map_style.css">
	    						<span style="color: black; font-size: 19pt; text-transform: uppercase; font-weight: 700">Мята Lounge Фили</span>`,
	    // balloonContentBody: '<p>Открытый микрофон по <span>понедельникам в 19:00</span></p>',
	    balloonContentBody: `<p><a href="https://vk.com/to.kromeshutok" target="_blank">Группа в VK</a>
	    						
	    						<br>
	    						<span style="font-size: 12pt; font-weight: 600">Открытый Микрофон</span>
	    						<br>
	    						<span style="font-size: 12pt">по субботам в 20:30</span></p>`,
	    balloonContentFooter: '',
	    balloonContentFooter: `Багратионовский пр., 12`,
	    hintContent: `<span style="font-weight: 600">Мята Lounge Фили</span> -  Багратионовский пр., 12`
	}, {
		preset: 'islands#redDotIcon'
	});

	var bbking = new ymaps.Placemark([55.772602, 37.613316], {
	    balloonContentHeader: `<link rel="stylesheet" href="styles/map_style.css">
	    						<span style="color: black; font-size: 19pt; text-transform: uppercase; font-weight: 700">B. B. King</span>`,
	    // balloonContentBody: '<p>Открытый микрофон по <span>понедельникам в 19:00</span></p>',
	    balloonContentBody: `<p><a href="https://vk.com/standupmsk28" target="_blank">Группа в VK</a>
	    						
	    						<br>
	    						<span style="font-size: 12pt; font-weight: 600">Открытый Микрофон</span>
	    						<br>
	    						<span style="font-size: 12pt">по воскресеньям в 18:30</span></p>`,
	    balloonContentFooter: '',
	    balloonContentFooter: `Садовая-Самотёчная, 4, стр. 2`,
	    hintContent: `<span style="font-weight: 600">B. B. King</span> -  Садовая-Самотёчная, 4, стр. 2`
	}, {
		preset: 'islands#redDotIcon'
	});

	var jim = new ymaps.Placemark([55.765975, 37.640193], {
	    balloonContentHeader: `<link rel="stylesheet" href="styles/map_style.css">
	    						<span style="color: black; font-size: 19pt; text-transform: uppercase; font-weight: 700">Jim 'n' Jack's</span>`,
	    // balloonContentBody: '<p>Открытый микрофон по <span>понедельникам в 19:00</span></p>',
	    balloonContentBody: `<p><a href="https://vk.com/standup.moscow" target="_blank">Группа в VK</a>
	    						
	    						<br>
	    						<span style="font-size: 12pt; font-weight: 600">Открытый Микрофон</span>
	    						<br>
	    						<span style="font-size: 12pt">по средам в 21:30</span></p>`,
	    balloonContentFooter: '',
	    balloonContentFooter: `Мясницкая, 38, стр. 1`,
	    hintContent: `<span style="font-weight: 600">Jim 'n' Jack's</span> - Мясницкая, 38, стр. 1`
	}, {
		preset: 'islands#redDotIcon'
	});

	openMic = new ymaps.GeoObjectCollection();

	openMic
		.add(suc1)
		.add(djondonn)
		.add(alibi)
		.add(store)
		.add(montis)
		.add(harats)
		.add(redpub)
		.add(dost)
		.add(bbbar)
		.add(rolling_barrels)
		.add(duma)
		// .add(friends)
		.add(concert)
		.add(mint)
		.add(sausage)
		.add(mint_phili)
		.add(bbking)
		.add(jim);
	var openMicLayout = ymaps.templateLayoutFactory.createClass(
		'<div class="openMic-containter" >' +
			'$[properties.balloonContentHeader]' +
			'$[properties.balloonContentBody' +
			'$[properties.balloonContentFooter' +
			'$[properties.balloonContentFooter' + 
		'</div>'
	);
 	ymaps.layout.storage.add('my#theaterlayout', openMicLayout);
 	myMap.geoObjects.add(openMic);
	// myMap.geoObjects.add(nigilist);
	// myMap.geoObjects.add(litera);
	// myMap.geoObjects.add(bristol);
	// myMap.geoObjects.add(set_puaro);


	// Балун откроется в точке «привязки» балуна — т. е. над меткой.
	// nigilist.balloon.open();
}