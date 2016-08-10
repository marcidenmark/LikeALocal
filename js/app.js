$(document).ready(function() {
  showMap(40.720201, -73.993092);
  $("form:first").on('submit', function(event) {
    event.preventDefault();
    callGoogleAPI($('#your-address').val());
    // console.log($('#your-address').val());
  });
});

function callGoogleAPI(address) {

  $.ajax({
    type: "GET",
    url: "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyAtnpIZC_cBOtWd4lmXGviarYpn0oMDbsQ&address=" + address,

    success: function(data) {
      // jQuery.parseJSON(data)
      var lat = data['results']['0']['geometry']['location']['lat'];
      var lng = data['results']['0']['geometry']['location']['lng'];
      showMap(lat, lng);
    },
    error: function(jqXHR) {
      console.error(jqXHR.responseText);
    }
  });
}

function showMap(lat, lng) {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: lat, lng: lng },
    zoom: 14 // Change this value from 0 to 18
  });
  var marker = new google.maps.Marker({
    map: map,
    position: { lat: lat, lng: lng }
  });
}
