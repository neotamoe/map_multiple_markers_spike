var map;
function initMap() {
  // var phoenixBarAndGrill = {lat: 44.9449, lng: -92.3739};
  var center = {lat:44.974758, lng: -92.758080};
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: center,
    mapTypeId: 'terrain'
  });
  // var marker = new google.maps.Marker({
  //   position: phoenixBarAndGrill,
  //   map: map
  // });

// Multiple Markers
    var markers = [
        ['Phoenix Bar And Grill', 44.9449,-92.3739],
        ['Afton House Inn', 44.9009704589844, -92.7832107543945]
    ];

    // // Info Window Content
    var infoWindowContent = [
        ['<div class="info_content"><h3>Phoenix</h3><p>Best bar and grill in Baldwin!</p><a href="http://www.phoenixbarandgrill.com/">Website</a></div>'],
        ['<div class="info_content"><h3>Afton House Inn</h3><p>Historic bed and breakfast.  Super cute.</p><a href="http://aftonhouseinn.com/">Website</a></div>']
    ];

    // // Display multiple markers on a map
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    //
    // Loop through our array of markers & place each one on the map
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        // bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0]
        });

        // // Allow each marker to have an info window
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            };
        })(marker, i));

        // Automatically center the map fitting all markers on the screen
        // map.fitBounds(bounds);
    }

    // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
    // var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
    //     this.setZoom(14);
    //     google.maps.event.removeListener(boundsListener);
    // });
}



// original code for example from google website:
//   // Create a <script> tag and set the USGS URL as the source.
//   var script = document.createElement('script');
//   // This example uses a local copy of the GeoJSON stored at
//   // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
//   script.src = 'https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js';
//   document.getElementsByTagName('head')[0].appendChild(script);
// }

// // Loop through the results array and place a marker for each
// // set of coordinates.
// window.eqfeed_callback = function(results) {
//   for (var i = 0; i < results.features.length; i++) {
//     var coords = results.features[i].geometry.coordinates;
//     var latLng = new google.maps.LatLng(coords[1],coords[0]);
//     var marker = new google.maps.Marker({
//       position: latLng,
//       map: map
//     });
//   }
// };

// function initMap() {
//   var uluru = {lat: -25.363, lng: 131.044};
//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 4,
//     center: uluru
//   });
//   var marker = new google.maps.Marker({
//     position: uluru,
//     map: map
//   });
// }
