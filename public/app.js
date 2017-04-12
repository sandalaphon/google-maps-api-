var mainMap;
var initialise = function(){
 var center = {lat: 40.431908, lng: 116.570375}
 var container = document.getElementById('main-map')
    mainMap = new MapWrapper(container, center, 12);
  mainMap.addMarker(center)
  mainMap.addClickEvent()
  var button1 = document.querySelector('#k-Park');
  // button.onclick = handleClick(mainMap)
  // this executes without a click so the map immediately recenters on San Franscisco...must be a way to do this without making mainMap a global variable?
  button1.onclick = handlePuneClick
  var button2 = document.querySelector('#find-location');
  button2.onclick = handleWhereAmIClick
  mainMap.koregaonParkInfo()
}

var handlePuneClick =function(){
  var coords = {lat: 18.536208, lng: 73.893975}
  mainMap.reCenter(coords)//goes to MapWrapper.proto
}

var handleWhereAmIClick = function(){
  mainMap.findLocation()
}









window.onload = initialise;