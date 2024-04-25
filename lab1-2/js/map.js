;(function() {  if (typeof ymaps === 'undefined') {
    return;  }

  ymaps.ready(function () {    var myMap = new ymaps.Map('ymap', {
            center: [50.59383713186251,36.597189115445374],            zoom: 16
        }, {
            searchControlProvider: 'yandex#search'        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            balloonContent: 'г. Белгород, Гражданский проспект, 29А '        }, {
            iconLayout: 'default#image',            
            iconImageHref: './img/logo/dlyakarti.png',
            iconImageSize: [40, 63.2],          
            iconImageOffset: [-50, -38]
        });
    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');});

})();