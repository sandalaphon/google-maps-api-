var MapWrapper = function(container, coords, zoom){

this.googleMap = new google.maps.Map(container, {
  center: coords,
  zoom: zoom
})

}

MapWrapper.prototype = {
  addMarker: function(coords){
    var marker = new google.maps.Marker({
      position:coords,
      map: this.googleMap
    })
  },
///////////   COMMENTED OUT AS MARKERS WERE GETTING ANNOYING!
  addClickEvent: function(){
    google.maps.event.addListener(this.googleMap, 'dblclick', function(event){
      console.log(event)
      console.log(event.latLng.lng())
      var coords = {lat: event.latLng.lat(), lng: event.latLng.lng()}
      console.log(this);
      this.addMarker(coords)

    }.bind(this))
  },

  reCenter: function(coords){
    this.googleMap.setCenter(coords)
  },
  koregaonParkInfo: function(){
    var contentString = "K Park is awesome"
    var infowindow = new google.maps.InfoWindow({
             content: contentString
           });

           var marker = new google.maps.Marker({
             position: {lat: 18.536208, lng: 73.893975},
             map: this.googleMap,
             title: 'Koregaon Park'
           });
           marker.addListener('click', function() {
             infowindow.open(this.googleMap, marker);
           });
  }
}

