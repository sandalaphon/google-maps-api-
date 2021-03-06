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
             title: 'Koregaon Park',
             animation: google.maps.Animation.BOUNCE

           });
           marker.addListener('click', function() {
             infowindow.open(this.googleMap, marker);
           });
  },
  findLocation: function(){
    navigator.geolocation.getCurrentPosition(function(position) {
                var pos = {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude
                };
                this.reCenter(pos)
                this.googleMap.setZoom(16)
                var marker = new google.maps.Marker({
                  position: pos,
                  map: this.googleMap,
                  title: 'You are here',
                  animation: google.maps.Animation.BOUNCE

                });
                var infowindow = new google.maps.InfoWindow({
                         content: "You are here"
                       });
                  infowindow.open(this.googleMap, marker);
                
  }.bind(this))


}

}
