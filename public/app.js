var mainMap;
var initialise = function(){
 var center = {lat: 40.431908, lng: 116.570375}
 var container = document.getElementById('main-map')
    mainMap = new MapWrapper(container, center, 12);
  mainMap.addMarker(center)
  mainMap.addClickEvent()
  var button = document.querySelector('button');
  // button.onclick = handleClick(mainMap)
  // this executes without a click so the map immediately recenters on San Franscisco...must be a way to do this without making mainMap a global variable?
  button.onclick = handleClick
  mainMap.koregaonParkInfo()
}

var handleClick =function(){
  var coords = {lat: 18.536208, lng: 73.893975}
  mainMap.reCenter(coords)//goes to MapWrapper.proto
}









window.onload = initialise;