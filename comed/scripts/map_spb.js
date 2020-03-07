ymaps.ready(init);

function init() {
	var myMap = new ymaps.Map("map", {
		center: [59.939095, 30.315868], // коор-ты центра карты "широта, долгота"
		zoom: 12, // уровень масштабирования [0..19]
	});

	myMap.setType('yandex#map');
	myMap.behaviors.disable(['rightMouseButtonMagnifier', 'ruler', 'routeEditor']).enable('drag');

	var hophead = new ymaps.Placemark([59.938094, 30.358799], {
	    balloonContentHeader: `<link rel="stylesheet" href="styles/map_style.css">
	    						<span style="color: black; font-size: 19pt; text-transform: uppercase; font-weight: 700">HopHead</span>`,
	    // balloonContentBody: '<p>Открытый микрофон по <span>понедельникам в 19:00</span></p>',
	    balloonContentBody: `<p><a href="https://vk.com/hopheadspb" target="_blank">Группа в VK</a>
	    						
	    						<br>
	    						<span style="font-size: 12pt; font-weight: 600">Открытый Микрофон</span>
	    						<br>
	    						<span style="font-size: 12pt">по вторникам в 20:00</span>
	    						<br>
	    						<span style="font-size: 12pt">по субботам в 18:00</span></p>`,
	    balloonContentFooter: '',
	    balloonContentFooter: `Восстания 24/27Б`,
	    hintContent: `<span style="font-weight: 600">HopHead</span> - по вторникам в 20:00 и субботам в 18:00`
	}, {
		preset: 'islands#redDotIcon'
	});

	var popravka = new ymaps.Placemark([59.940623, 30.341192], {
	    balloonContentHeader: `<link rel="stylesheet" href="styles/map_style.css">
	    						<span style="color: black; font-size: 19pt; text-transform: uppercase; font-weight: 700">Popravka.bar</span>`,
	    // balloonContentBody: '<p>Открытый микрофон по <span>понедельникам в 19:00</span></p>',
	    balloonContentBody: `<p><a href="https://vk.com/standupspb" target="_blank">Группа в VK</a>
	    						
	    						<br>
	    						<span style="font-size: 12pt; font-weight: 600">Открытый Микрофон</span>
	    						<br>
	    						<span style="font-size: 12pt">по вторникам в 20:00</span></p>`,
	    balloonContentFooter: '',
	    balloonContentFooter: `наб. реки Фонтанки, 20`,
	    hintContent: `<span style="font-weight: 600">Popravka</span> - по вторникам в 20:00`
	}, {
		preset: 'islands#redDotIcon'
	});

	var _1703 = new ymaps.Placemark([59.925144, 30.361849], {
	    balloonContentHeader: `<link rel="stylesheet" href="styles/map_style.css">
	    						<span style="color: black; font-size: 19pt; text-transform: uppercase; font-weight: 700">1703</span>`,
	    // balloonContentBody: '<p>Открытый микрофон по <span>понедельникам в 19:00</span></p>',
	    balloonContentBody: `<p><a href="https://vk.com/spb_openmic" target="_blank">Группа в VK</a>
	    						
	    						<br>
	    						<span style="font-size: 12pt; font-weight: 600">Открытый Микрофон</span>
	    						<br>
	    						<span style="font-size: 12pt">по средам в 19:00</span></p>`,
	    balloonContentFooter: '',
	    balloonContentFooter: `Лиговский просп., 50П`,
	    hintContent: `<span style="font-weight: 600">1703</span> - по средам в 19:00`
	}, {
		preset: 'islands#redDotIcon'
	});

	var capone = new ymaps.Placemark([59.935773, 30.351531], {
	    balloonContentHeader: `<link rel="stylesheet" href="styles/map_style.css">
	    						<span style="color: black; font-size: 19pt; text-transform: uppercase; font-weight: 700">Al Capone</span>`,
	    // balloonContentBody: '<p>Открытый микрофон по <span>понедельникам в 19:00</span></p>',
	    balloonContentBody: `<p><a href="https://vk.com/standupstation" target="_blank">Группа в VK</a>
	    						
	    						<br>
	    						<span style="font-size: 12pt; font-weight: 600">Открытый Микрофон</span>
	    						<br>
	    						<span style="font-size: 12pt">по четвергам в 20:00</span></p>`,
	    balloonContentFooter: '',
	    balloonContentFooter: `Жуковского, 7-9П`,
	    hintContent: `<span style="font-weight: 600">Al Capone</span> - по четвергам в 20:00`
	}, {
		preset: 'islands#redDotIcon'
	});

	var molodost = new ymaps.Placemark([59.939848, 30.323665], {
	    balloonContentHeader: `<link rel="stylesheet" href="styles/map_style.css">
	    						<span style="color: black; font-size: 19pt; text-transform: uppercase; font-weight: 700">Молодость</span>`,
	    // balloonContentBody: '<p>Открытый микрофон по <span>понедельникам в 19:00</span></p>',
	    balloonContentBody: `<p><a href="https://vk.com/molodostopenmic" target="_blank">Группа в VK</a>
	    						
	    						<br>
	    						<span style="font-size: 12pt; font-weight: 600">Money Mic</span>
	    						<br>
	    						<span style="font-size: 12pt">по субботам в 21:00</span></p>`,
	    balloonContentFooter: '',
	    balloonContentFooter: `Большая Конюшенная, 9`,
	    hintContent: `<span style="font-weight: 600">Молодость</span> - по субботам в 21:00`
	}, {
		preset: 'islands#orangeDotIcon'
	});

	openMic = new ymaps.GeoObjectCollection();

	openMic
		.add(hophead)
		.add(popravka)
		.add(_1703)
		.add(capone)
		.add(molodost);

	var openMicLayout = ymaps.templateLayoutFactory.createClass(
		'<div class="openMic-containter">' +
			'$[properties.balloonContentHeader]' +
			'$[properties.balloonContentBody' +
			'$[properties.balloonContentFooter' +
			'$[properties.balloonContentFooter' + 
		'</div>'
	);
 	ymaps.layout.storage.add('my#theaterlayout', openMicLayout);
 	myMap.geoObjects.add(openMic);
}