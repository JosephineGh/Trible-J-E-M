function indexMap() {
  var location1 = {lat: 55.487784, lng: 8.446825999999987};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: location1
  });
  var marker = new google.maps.Marker({
    position: location1,
    map: map
  });
}

function doctorMap() {
  var location1 = {lat: 55.4880017, lng: 8.44878510000001};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: location1
  });
  var marker = new google.maps.Marker({
    position: location1,
    map: map
  });
}

function frirumshusetMap() {
  var location1 = {lat: 55.4890114, lng: 8.44416960000001};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: location1
  });
  var marker = new google.maps.Marker({
    position: location1,
    map: map
  });
}

function indkobMap() {
  var location1 = {lat: 55.4871874, lng: 8.444064300000036};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: location1
  });
  var marker = new google.maps.Marker({
    position: location1,
    map: map
  });
}

function klubhusetMap() {
  var location1 = {lat: 55.487211, lng: 8.445298999999977};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: location1
  });
  var marker = new google.maps.Marker({
    position: location1,
    map: map
  });
}

function hvorErVi() {
  var location1 = {lat: 55.487784, lng: 8.446825999999987};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: location1
  });
  var marker = new google.maps.Marker({
    position: location1,
    map: map
  });
}

window.onload = intervalTimer;

var myIntervalTimer;

var image_tracker = 'img1';

function changeImageInterval(){

    var image = document.getElementById('changingImage');

    if(image_tracker=='img1'){
        image.src='images/ChangingImg2.jpg';
        image_tracker='img2';
    }
    else if(image_tracker=='img2'){
        image.src='images/ChangingImg3.jpg';
        image_tracker='img3';
    }
    else if(image_tracker=='img3'){
      image.src='images/ChangingImg4.jpg';
      image_tracker='img4';
    }
    else if(image_tracker=='img4'){
      image.src='images/ChangingImg5.jpg';
      image_tracker='img5';
    }
    else{
        image.src='images/ChangingImg1.jpg';
        image_tracker='img1';
    }
}

function intervalTimer(){
    myVar = setInterval(function(){ changeImageInterval() }, 10000);
}

function rwdMenuFunction() {
  var x = document.getElementById("topNav");
  if (x.className === "headerNav") {
      x.className += " responsive";
  }
  else {
      x.className = "headerNav";
  }
}