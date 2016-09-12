
        // want the clothing centers to come from the db 
        var clothingCenters  = [
           {lat: 45.5087, lng: -73.554},
           {lat: 45.5098, lng: -73.558},
           {lat: 45.5089, lng: -73.550},
           {lat: 45.5089, lng: -73.550},
         ];
        var markers = [];
        var map;
         function initMap() {
           map = new google.maps.Map(document.getElementById('map'), {
             center: {lat: 45.5087, lng: -73.554},
             zoom: 10, 
             styles: [
               {
                 featureType: 'all',
                 stylers: [
                   { saturation: -80 }
                 ]
               },{
                 featureType: 'road.arterial',
                 elementType: 'geometry',
                 stylers: [
                   { hue: '#00ffee' },
                   { saturation: 50 }
                 ]
               },{
                 featureType: 'poi.business',
                 elementType: 'labels',
                 stylers: [
                   { visibility: 'off' }
                 ]
               }
             ]
           });
           drop();
          }
           function drop() {
            clearMarkers();
            for (var i = 0; i < clothingCenters.length; i++) {
              addMarkerWithTimeout(clothingCenters[i], i * 200);
            }
          }
          function addMarkerWithTimeout(position, timeout) {
            window.setTimeout(function() {
              markers.push(new google.maps.Marker({
                position: position,
                map: map,
                animation: google.maps.Animation.DROP
              }));
            }, timeout);
          }
          function clearMarkers() {
              for (var i = 0; i < markers.length; i++) {
                markers[i].setMap(null);
              }
              markers = [];
            }