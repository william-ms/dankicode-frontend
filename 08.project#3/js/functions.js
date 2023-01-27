window.onload = function() {
  var map;

  //Inicia o google maps
  function initialize() 
  {
    var mapProp = {
      center : new google.maps.LatLng(-27.648598, -48.577423),
      scrollWheel : false,
      zoom : 12,
      mapTypeId : google.maps.MapTypeId.ROADMAP
    }

    map = new google.maps.Map(document.getElementById('map'), mapProp);
  }

  //Adiciona o marcador no google maps
  function addMarker(lat, lng, icon, content, click) {
    var latLng = {
      'lat' : lat,
      'lng' : lng
    };

    var marker = new google.maps.Marker(
    {
      position : latLng,
      map : map,
      icon : icon
    });

    var infoWindow = new google.maps.InfoWindow({
      content : content,
      maxWidth : 200,
      pixelOffset : new google.maps.Size(0, 20)
    })

    if(click == true) 
    {
      google.map.event.addListener(marker, 'click', function()
      {
        infoWindow.open(map, marker);
      })
    }
    else if (click == false)
    {
      infoWindow.open(map, marker);
    }
  }

  var conteudo = '<p style=color:black;>Meu endereço</p>';

  initialize();
  addMarker(-27.616637, -48.592328, '', conteudo, true);
}