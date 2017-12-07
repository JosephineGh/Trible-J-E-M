function initMap() {
    var location1 = {lat: 55.4880017, lng: 8.44878510000001};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: location1
    });
    var marker = new google.maps.Marker({
      position: location1,
      map: map
    });
}