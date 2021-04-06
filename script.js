function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(-7.0508247,107.7204802),
      zoom:15,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}