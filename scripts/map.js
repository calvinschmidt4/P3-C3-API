var refresh;

function createMap(){   
    var platform = new H.service.Platform({
        'app_id': '6jaAWHsrdukNd1sfb8m4',
        'app_code': '6fwonAXy3Op9JJQ3uuUmnA'
    });

    // De default map types van het platform object worden verkregen:
    var defaultLayers = platform.createDefaultLayers();



    // Er wordt een map object geinitieerd en weergegeven:
    var map = new H.Map(
    document.getElementById('mapContainer'),
    defaultLayers.normal.map,
    {
        zoom: 5,
        center: { lat: 42.5, lng: -83.2 }
    });

    // resizes de map wanneer de browser wordt herschaalt:
    window.addEventListener('resize', function () {
        map.getViewPort().resize(); 
    });


    // er wprdt een markerincon geimporteerd:
    var icon = new H.map.Icon('../images/poi.svg');

    // er wordt een marker aangemaakt met het icon dat is aangemaakt:
    var marker = new H.map.Marker({ lat: 42.5, lng: -83.2 }, { icon: icon });
    var markerTwo = new H.map.Marker({ lat: 37, lng: -78.2 }, { icon: icon });


    // markers worden aan de kaart toegevoegd:
    map.addObject(marker);
    map.addObject(markerTwo);


    // MapEvents enables the event system
    // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
    var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

    // create default UI with layers provided by the platform
    var ui = H.ui.UI.createDefault(map, defaultLayers);
}

createMap();



