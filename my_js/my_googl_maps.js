// 4. Пишем скрипт который создаст и отобразит карту Google Maps на странице.

// Определяем переменную map
var map;

// Функция initMap которая отрисует карту на странице
function initMap() {

    // В переменной map создаем объект карты GoogleMaps и вешаем эту переменную на <div id="map"></div>
    map = new google.maps.Map(document.getElementById('map'), {
        // При создании объекта карты необходимо указать его свойства
        // center - определяем точку на которой карта будет центрироваться
        center: {
            lat: 52.431901,
            lng: 31.012487
        },
        // zoom - определяет масштаб. 0 - видно всю платнеу. 18 - видно дома и улицы города.
        zoom: 16,
        scrollwheel: false,
        // Добавляем свои стили для отображения карты
        styles: [
            {
                "featureType": "landscape.natural",
                "stylers": [
                    {
                        "color": "#bcddff"
            }
        ]
    },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#5fb3ff"
            }
        ]
    },
            {
                "featureType": "road.arterial",
                "stylers": [
                    {
                        "color": "#ebf4ff"
            }
        ]
    },
            {
                "featureType": "road.local",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ebf4ff"
            }
        ]
    },
            {
                "featureType": "road.local",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "visibility": "on"
            },
                    {
                        "color": "#93c8ff"
            }
        ]
    },
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#c7e2ff"
            }
        ]
    },
            {
                "featureType": "transit.station.airport",
                "elementType": "geometry",
                "stylers": [
                    {
                        "saturation": 100
            },
                    {
                        "gamma": 0.82
            },
                    {
                        "hue": "#0088ff"
            }
        ]
    },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#1673cb"
            }
        ]
    },
            {
                "featureType": "road.highway",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "saturation": 58
            },
                    {
                        "hue": "#006eff"
            }
        ]
    },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#4797e0"
            }
        ]
    },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#209ee1"
            },
                    {
                        "lightness": 49
            }
        ]
    },
            {
                "featureType": "transit.line",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#83befc"
            }
        ]
    },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#3ea3ff"
            }
        ]
    },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "saturation": 86
            },
                    {
                        "hue": "#0077ff"
            },
                    {
                        "weight": 0.8
            }
        ]
    },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "hue": "#0066ff"
            },
                    {
                        "weight": 1.9
            }
        ]
    },
            {
                "featureType": "poi",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "hue": "#0077ff"
            },
                    {
                        "saturation": -7
            },
                    {
                        "lightness": 24
            }
        ]
    }
]
    });

    // Создаем маркер на карте
    var marker = new google.maps.Marker({

        // Определяем позицию маркера
        position: {
            lat: 52.431901,
            lng: 31.012487
        },

        // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
        map: map,

        // Пишем название маркера - появится если навести на него курсор и немного подождать
        title: 'TRIGONUM',

        // Укажем свою иконку для маркера
        icon: 'img/map_kur.png'
    });

    // Создаем наполнение для информационного окна
    var contentString = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">Самый классный магазин</h1>' +
        '<div id="bodyContent">' +
        '<p>Магазин просто класс, там есть все что душе угодно, ' +
        'даже если что-то не угодно все равно это есть.</p>' +
        '<p><b>Веб-сайт:</b> <a href="http://www.TRIGONUM.ru/" target="_blank">TRIGONUM.ru</a>' +
        '</p>' +
        '</div>' +
        '</div>';

    // Создаем информационное окно
    var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 400
    });

    // Создаем прослушивание, по клику на маркер - открыть инфо-окно infowindow
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });

}
