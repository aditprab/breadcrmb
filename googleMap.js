jQuery(function($) {
    // Asynchronously Load the map API 
    var script = document.createElement('script');
    script.src = "http://maps.googleapis.com/maps/api/js?sensor=false&callback=initialize";
    document.body.appendChild(script);
});

function initialize() {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'roadmap',
        scrollwheel: false,
        mapTypeControl: false,
        streetViewControl: false,
        

        styles: [{'featureType':'water','stylers':[{'visibility':'on'},{'color':'#428BCA'}]},{'featureType':'landscape','stylers':[{'color':'#f2e5d4'}]},{'featureType':'road.highway','elementType':'geometry','stylers':[{'color':'#c5c6c6'}]},{'featureType':'road.arterial','elementType':'geometry','stylers':[{'color':'#e4d7c6'}]},{'featureType':'road.local','elementType':'geometry','stylers':[{'color':'#fbfaf7'}]},{'featureType':'poi.park','elementType':'geometry','stylers':[{'color':'#c5dac6'}]},{'featureType':'administrative','stylers':[{'visibility':'on'},{'lightness':33}]},{'featureType':'road'},{'featureType':'poi.park','elementType':'labels','stylers':[{'visibility':'on'},{'lightness':20}]},{},{'featureType':'road','stylers':[{'lightness':20}]}]

    };
                    
    // Display a map on the page
    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    //map.setTilt(45);
        
    // Multiple Markers
    var markers = [
        ['San Francisco', 51.499633,-0.124755],
        ['Dublin', 51.503454,-0.119562]
        
    ];


        

    // Info Window Content
    var infoWindowContent = [
        ['</div><div class="info_content">' +
        '<h3>London Eye</h3>' +
        '<p>The London Eye is a giant Ferris wheel situated on the banks of the River Thames. The entire structure is 135 metres (443 ft) tall and the wheel has a diameter of 120 metres (394 ft).</p>' +        '</div>'],
        ['<div class="info_content">' +
        '<h3>Palace of Westminster</h3>' +
        '<p>The Palace of Westminster is the meeting place of the House of Commons and the House of Lords, the two houses of the Parliament of the United Kingdom. Commonly known as the Houses of Parliament after its tenants.</p>' +
        '</div>']
    ];
        
    // Display multiple markers on a map
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    
    // Loop through our array of markers & place each one on the map  
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0]
        });
        
        // Allow each marker to have an info window    
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                //infoWindow.setContent(infoWindowContent[i][0]);
                //infoWindow.open(map, marker);
                test(markers[i][0], i);
            }
        })(marker, i));

        // Automatically center the map fitting all markers on the screen
        map.fitBounds(bounds);

    }

    // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        if(markers.length == 1){
            this.setZoom(14);
        }
        google.maps.event.removeListener(boundsListener);
    });

    var lineSymbol = {
        path: google.maps.SymbolPath.FORWARD_OPEN_ARROW
    };


    var flightPlanCoordinates = [
    new google.maps.LatLng(51.499633,-0.124755),
    new google.maps.LatLng(51.503454,-0.119562)
  ];

  var flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    icons: [{
        icon: lineSymbol,
        offset: '100%'
    }],
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 4
  });

  flightPath.setMap(map);

}





function test(placeName, tripNum) {
    if(1){
        //alert("here");
        //var test = "trip" + tripNum;
        //alert(test)
        $("#trip" + tripNum).show();
    }
}




var imgs = ["San_Francisco.jpg", "Ireland_Dublin_Night.jpg"];

$(document).ready(function(){
    var places = ["San Francisco", "Dublin"];
    var count = places.length;
    for(var i = 0; i < count; i++){
        var idStr = "trip" + i;
        var classStr = "trip";
        var appendStr = "<div id=" + idStr + " class=" + classStr +  "></div>";
        $("#images").append(appendStr);
        $("#" + idStr).append("<img src=\"" + imgs[i] + "\" />");
        // var idSelector = "#" + idStr;
        var eventHandling = function(sel){
        return $(sel).css('cursor', 'pointer')
        .click(function(){
        });
        };
        $("#" + idStr).hover(eventHandling("#" + idStr));
    }
});




