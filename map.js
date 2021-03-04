// Provedor dos pedaços do map
const tilesProvider = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

var map;
var center;
var zoom;

var mapMarkers = [];
var mapGroups = [];

function startup(){   
  let latLng = [-23.94441, -46.33042];

  // Área do map
  map = L.map('myMap').setView(latLng, 4);

  // Busca os pedaços do map
  L.tileLayer(tilesProvider, {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
}

function load(){
  obj = [
    {
      "TRefeReferencia":{
        "refe_descricao":"Teste",
        "refe_latitude":"-21.6134462000",
        "refe_longitude":"-44.6382784000",
        "0":{
          "image":"\/portal\/bandeiras\/obter_icone_cd\/29610\/13939",
        }
      },
      "TRefeReferencia":{
        "refe_descricao":"Teste",
        "refe_latitude":"-19.6134462000",
        "refe_longitude":"-45.6382784000",
      },
    }
  ];

  obj1 = [
    {
      "TRefeReferencia":{
        "refe_descricao":"Teste",
        "refe_latitude":"-22.6134462000",
        "refe_longitude":"-46.6382784000",
      },
      "TRefeReferencia":{
        "refe_descricao":"Teste",
        "refe_latitude":"-27.6134462000",
        "refe_longitude":"-47.6382784000",
      },
    }
  ];

  obj2 = [
    {
      "TRefeReferencia":{
        "refe_descricao":"Teste",
        "refe_latitude":"-28.6134462000",
        "refe_longitude":"-48.6382784000",
      },
      "TRefeReferencia":{
        "refe_descricao":"Teste",
        "refe_latitude":"-29.6134462000",
        "refe_longitude":"-49.6382784000",
      },
    }
  ];

  markerIcon = 'img/marker/home.png';

  var grupoPrincipal = L.markerClusterGroup({ 
    iconCreateFunction: function (cluster) {
      return L.divIcon({ 
        html: '<div style="width: 30px; height: 30px; padding-top: 5px; background-image: url('+markerIcon+'); text-align: center;">' + cluster.getAllChildMarkers().length + '</div>',
        className: 'grupoPrincipal', 
        iconSize: L.point(30, 30) 
      });
    }
  });
  map.addLayer(grupoPrincipal);
  mapGroups.push(grupoPrincipal);

  var grupo1 = L.markerClusterGroup();
  map.addLayer(grupo1);
  mapGroups.push(grupo1);

  var grupo2 = L.markerClusterGroup();
  map.addLayer(grupo2);
  mapGroups.push(grupo2);

  for(i = 0; i < obj.length; i++) {
    var refes = obj[i];

    for(var j = 0; j < refes.length; j++) {
      var refe = refes[j];        

      var markerTitle = (refe.TRefeReferencia.refe_descricao) ? refe.TRefeReferencia.refe_descricao.replace(",", "") : " ";
      var latitude = refe.TRefeReferencia.refe_latitude;
      var longitude = refe.TRefeReferencia.refe_longitude;

      let latlng = [latitude, longitude];

      marcador = L.marker(
        latlng, 
        {
          icon: L.icon({
            iconUrl: markerIcon,
            iconSize: [30, 30],
          })
        }
      )
      .bindPopup(markerTitle);

      grupoPrincipal.addLayer(marcador);
      mapMarkers.push(marcador);
    }
  }

  for(i = 0; i < obj1.length; i++) {
    var refes = obj1[i];

    for(var j = 0; j < refes.length; j++) {
      var refe = refes[j];        

      var markerTitle = (refe.TRefeReferencia.refe_descricao) ? refe.TRefeReferencia.refe_descricao.replace(",", "") : " ";
      var latitude = refe.TRefeReferencia.refe_latitude;
      var longitude = refe.TRefeReferencia.refe_longitude;

      let latlng = [latitude, longitude];

      marcador = L.marker(
        latlng, 
        {
          icon: L.icon({
            iconUrl: markerIcon,
            iconSize: [30, 30],
          })
        }
      )
      .bindPopup(markerTitle);

      grupo1.addLayer(marcador);
      mapMarkers.push(marcador);
    }
  }

  for(i = 0; i < obj2.length; i++) {
    var refes = obj2[i];

    for(var j = 0; j < refes.length; j++) {
      var refe = refes[j];        

      var markerTitle = (refe.TRefeReferencia.refe_descricao) ? refe.TRefeReferencia.refe_descricao.replace(",", "") : " ";
      var latitude = refe.TRefeReferencia.refe_latitude;
      var longitude = refe.TRefeReferencia.refe_longitude;

      let latlng = [latitude, longitude];

      marcador = L.marker(
        latlng, 
        {
          icon: L.icon({
            iconUrl: markerIcon,
            iconSize: [30, 30],
          })
        }
      )
      .bindPopup(markerTitle);

      grupo2.addLayer(marcador);
      mapMarkers.push(marcador);
    }
  }
}

function removeGrupos() {				
  for(var i = 0; i < mapGroups.length; i++){
    mapGroups[i].remove();
  }
  mapGroups = [];
}

window.onload = function(){
  startup();
  
  window.setTimeout(
    load(), 
    3000
  );
  
  // window.setTimeout(function() {
  //   removeGrupos(), 
  //   10000
  // });
};
