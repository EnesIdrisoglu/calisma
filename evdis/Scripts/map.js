/** Custom Map */
$(function () {
    function initMap() {


        var location = new google.maps.LatLng(40.7724816, 30.3966767);

        var mapCanvas = document.getElementById('map');

        var mapOptions = {
            center: location,
            zoom: 16,
            panControl: true,
            scrollwheel: false,
            overviewMapControl: true,
            streetViewControl: true,
            backgroundColor: "#003057",
            mapMaker: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(mapCanvas, mapOptions);

        var markerImage={
            url:"img/logo.png",
            scaledSize:new google.maps.Size(50,50)
        };
        marker = new google.maps.Marker({
            position: location,
            map: map,
            icon: markerImage
        });

        // var infowindow = new google.maps.InfoWindow({
        //     content: contentString,
        //     maxWidth: 500
        // });

        // marker.addListener('click', function() {
        //     infowindow.open(map, marker);
        // });

        var styles = [
            {
                "featureType": "administrative.neighborhood",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            }
        ];

        map.set('styles', styles);


    }

    google.maps.event.addDomListener(window, 'load', initMap);

    /** Custom Map */
});