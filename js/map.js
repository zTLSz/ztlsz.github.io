
// map

      function initMap() {
        // Styles a map in night mode.
        var mark1 = {lat: 56.306, lng: 44.029};
        var mark2 = {lat: 56.282, lng: 43.931};
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 56.284, lng: 43.997},
          zoom: 12,
          styles: [
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-100"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 65
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": "50"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-100"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "30"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "40"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ffff00"
            },
            {
                "lightness": -25
            },
            {
                "saturation": -97
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "lightness": -25
            },
            {
                "saturation": -100
            }
        ]
    }
]
        });

        var markerContent = '<div class="marker-clicker">'   +   '<div class="project__item project__item-comm">' +
                '<div class="project__item-img">' +
                  '<a href="#"><img src="img/chicken-pho-1.jpg" alt="item"></a>' +
                '</div>' + 
                '<div class="project__item-text">' +
                  '<h3>Жилой комплекс "Комарово"</h3>' +
                  '<p class="project__amount">Студии от 1.2 млн руб.</p>' +
                  '<p class="project__amount">1-комнатные от 1.2 млн руб.</p>' +
                  '<p class="project__amount">2-комнатные от 2.2 млн руб.</p>' +
                  '<p class="project__amount">3-комнатные от 3.2 млн руб.</p>' +
                '</div>' +
              '</div>' + '</div>'

        var markerContentBooks = '<div class="marker-clicker">' + '<div class="project__item project__item-comm">' +
                '<div class="project__item-img">' +
                  '<a href="#"><img src="img/chicken-pho-2.jpg" alt="item"></a>' +
                '</div>' +
                '<div class="project__item-text">' +
                  '<h3>Жилой комплекс "Книги"</h3>' +
                  '<p class="project__adr-comm">Коммерческие помещения от 70 м2</p>' +
                  '<p class="project__amount">От 2.1 млн руб.</p>' +
                '</div>' +
              '</div>' + '</div>'

        var infowindow1 = new google.maps.InfoWindow({
          content: markerContent
        });

        var infowindow2 = new google.maps.InfoWindow({
          content: markerContentBooks
        });

        var marker = new google.maps.Marker({
          position: mark1,
          map: map,
          icon: 'img/oval-map-1.png'
        });

        var marker2 = new google.maps.Marker({
          position: mark2,
          map: map,
          icon: 'img/oval-map-2.png'
        });

        marker.addListener('click', function() {
            infowindow2.open(map, marker);
        });

        marker2.addListener('click', function() {
            infowindow1.open(map, marker2);
        });
      }


            