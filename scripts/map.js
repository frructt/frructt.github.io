ymaps.ready(init);

function init() {
	var myMap = new ymaps.Map("map", {
		center: [51.66765298, 39.20501223], // коор-ты центра карты "широта, долгота"
		zoom: 14, // уровень масштабирования [0..19]
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

	var nigilist = new ymaps.Placemark([51.65736157, 39.19278600], {
		    balloonContentHeader: '<span style="color: black; font-size: 19pt">Нигилист</span>',
		    balloonContentBody: '<a href="https://vk.com/micdom" target="_blank" style="text-decoration: underline; color: orange; font-weight: 600; font-size: 12pt">Записаться</a>',
		    balloonContentFooter: '',
		    balloonContentFooter: 'Кирова, 7А',
		    hintContent: 'Нигилист - Кирова, 7А'
    }, {
		preset: 'islands#darkOrangeDotIcon'
	});

	var litera = new ymaps.Placemark([51.66433407, 39.20528150], {
	    balloonContentHeader: `<link rel="stylesheet" href="styles/map_style.css">
	    						<span style="color: black; font-size: 19pt; text-transform: uppercase; font-weight: 700">Литера Б</span>`,
	    // balloonContentBody: '<p>Открытый микрофон по <span>понедельникам в 19:00</span></p>',
	    balloonContentBody: `<p><a href="https://vk.com/event161911454" target="_blank"">Группа в VK</a>
	    						
	    						<br>
	    						<span style="font-size: 12pt; font-weight: 600">Открытый Микрофон</span>
	    						<br>
	    						<span style="font-size: 12pt">по понедельникам в 19:00</span></p>`,
	    balloonContentFooter: '',
	    balloonContentFooter: `
	    						Театральная улица, 36`,
	    hintContent: '<span style="font-weight: 600">Литера Б</span> - по понедельникам в 19:00'
	}, {
		preset: 'islands#redDotIcon'
	});

	var bristol = new ymaps.Placemark([51.66619907, 39.20632350], {
	    balloonContentHeader: '<span style="color: black; font-size: 19pt">Бристоль</span>',
	    balloonContentBody: '<a href="https://vk.com/openmicbristol" target="_blank" style="text-decoration: underline; color: orange; font-weight: 600; font-size: 12pt">Записаться</a>',
	    balloonContentFooter: '',
	    balloonContentFooter: 'Проспект Революции, 43 (2 этаж)',
	    hintContent: 'Бристоль - Проспект Революции, 43 (2 этаж)'
    }, {
		preset: 'islands#darkOrangeDotIcon'
	});

	var set_puaro = new ymaps.Placemark([51.67351657, 39.21248650], {
	    balloonContentHeader: '<span style="color: black; font-size: 19pt">Сэт-лист в Пуаро</span>',
	    balloonContentBody: '<a href="https://vk.com/setlistpuaro" target="_blank" style="text-decoration: underline; color: orange; font-weight: 600; font-size: 12pt">Записаться</a>',
	    balloonContentFooter: '',
	    balloonContentFooter: '20-летия ВЛКСМ ул., 54А',
	    hintContent: 'Пуаро - 20-летия ВЛКСМ ул., 54А'
    }, {
		preset: 'islands#redDotIcon'
	});

	var setka = new ymaps.Placemark([51.667529, 39.186812], {
	    balloonContentHeader: `
	    	<link rel="stylesheet" href="styles/map_style.css">
	    	<span style="color: black; font-size: 19pt; text-transform: uppercase; font-weight: 700">SETKA BAR</span>`,
	    balloonContentBody: `
		    <div style="display: flex; justify-content: center; align-items: center">
			    <p>
				    
				    <a href="https://vk.com/event161911454" target="_blank" style="
					    ">Группа в VK</a>
					
					<br>
					<span style="font-size: 12pt; font-weight: 600">Открытый Микрофон</span>
					<br>
					<span style="font-size: 12pt">по четвергам в 20:00</span>
				</p>
			</div>`,
	    balloonContentFooter: '',
	    balloonContentFooter: 'Революции 1905 года, 31Г',
	    hintContent: '<span style="font-weight: 600">SETKA BAR</span> - по четвергам в 20:00'
    }, {
		preset: 'islands#redDotIcon'
	});

	var friendship = new ymaps.Placemark([51.663820, 39.195436], {
	    balloonContentHeader: `
	    	<link rel="stylesheet" href="styles/map_style.css">
	    	<span style="color: black; font-size: 19pt; text-transform: uppercase; font-weight: 700">Дружба</span>`,
	    balloonContentBody: `
		    <div style="display: flex; justify-content: center; align-items: center">
			    <p>
				    
				    <a href="https://vk.com/standupvrn" target="_blank" style="
					    ">Группа в VK</a>
					
					<br>
					<span style="font-size: 12pt; font-weight: 600">Открытый Микрофон</span>
					<br>
					<span style="font-size: 12pt">по четвергам в 19:00</span>
				</p>
			</div>`,
	    balloonContentFooter: '',
	    balloonContentFooter: 'Фридриха Энгельса, 60',
	    hintContent: '<span style="font-weight: 600">Дружба</span> - по четвергам в 19:00'
    }, {
		preset: 'islands#redDotIcon'
	});

	var white_gen = new ymaps.Placemark([51.666361, 39.206211], {
	    balloonContentHeader: `
	    	<link rel="stylesheet" href="styles/map_style.css">
	    	<span style="color: black; font-size: 19pt; text-transform: uppercase; font-weight: 700">Белый Генерал</span>`,
	    balloonContentBody: `
		    <div style="display: flex; justify-content: center; align-items: center">
			    <p>
				    
				    <a href="https://vk.com/standupbg" target="_blank" style="
					    ">Группа в VK</a>
					
					<br>
					<span style="font-size: 12pt; font-weight: 600">Открытый Микрофон</span>
					<br>
					<span style="font-size: 12pt">по средам в 19:00</span>
				</p>
			</div>`,
	    balloonContentFooter: '',
	    balloonContentFooter: 'пр. Революции, 43, этаж Цокольный',
	    hintContent: '<span style="font-weight: 600">Белый Генерал</span> - по средам в 19:00'
    }, {
		preset: 'islands#redDotIcon'
	});

	openMic = new ymaps.GeoObjectCollection();

	openMic
		// .add(nigilist)
		.add(litera)
		// .add(bristol)
		// .add(set_puaro)
		.add(setka)
		.add(friendship)
		.add(white_gen);
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
	// myMap.geoObjects.add(nigilist);
	// myMap.geoObjects.add(litera);
	// myMap.geoObjects.add(bristol);
	// myMap.geoObjects.add(set_puaro);


	// Балун откроется в точке «привязки» балуна — т. е. над меткой.
	// nigilist.balloon.open();
}