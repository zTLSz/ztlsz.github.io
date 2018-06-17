
// map

      function initMap() {
        // Styles a map in night mode.
        var mark1 = {lat: 56.306, lng: 44.029};
        var mark2 = {lat: 56.282, lng: 43.931};
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 56.284, lng: 43.997},
          zoom: 12,
          styles: [
            {elementType: 'geometry', stylers: [{color: '#f7fcfc'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#ffffff'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#5e5d5d'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#5e5d5d'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#5e5d5d'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#e5eaea'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#5e5d5d'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#000000'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#5e5d5d'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#5e5d5d'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#5e5d5d'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
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


            