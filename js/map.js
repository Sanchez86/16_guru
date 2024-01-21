

$(document).ready(function () {
 

    /*google map*/
            var map;
            var mapCoordinates = new google.maps.LatLng(59.883466, 30.444230);

            function initialize() {
                var mapOptions = {
                    backgroundColor: "#000", // ���� ����
                    zoom: 8, // �������
                    disableDefaultUI: false,
                    draggable: true,
                    scrollwheel: false,
                    center: mapCoordinates,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    //----------- ����� ----------
                    styles: [{ "featureType": "administrative", "elementType": "all", "stylers": [{ "visibility": "on" }, { "lightness": 33 }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#f2e5d4" }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#c5dac6" }] }, { "featureType": "poi.park", "elementType": "labels", "stylers": [{ "visibility": "on" }, { "lightness": 20 }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "color": "#c5c6c6" }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#e4d7c6" }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#fbfaf7" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "visibility": "on" }, { "color": "#acbcc9" }] }]
                    //------------����� --------------
                };
                map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
            }
            google.maps.event.addDomListener(window, 'load', initialize);
    /* end google map */
});

