function Places(name, landmarks, season) {
  this.name = name;
  this.landmarks = landmarks;
  this.season = season;
}

let paris = new Places("Paris", ["Eiffel Tower", "Arc de Triomphe", "Louvre"], "Winter");
let portland = new Places("Portand", ["Steel Bridge", "Pittock Mansion", "International Rose Garden"], "Spring");
let ulaanbaatar = new Places("Ulaanbaatar", ["Equestrian statue of Genghis Khan", "Zaisan Memorial", "Sukhbaatar Square"], "Summer");
let landOfMilkAndCookies = new Places("Land of Milk and Cookies", ["Sugar Castle", "Chocolate Chip Statue", "Milk Dunk Falls"], "Fall");


$(document).ready(function() {

  $("#paris-name").text(paris.name);
  $("#portland-name").text(portland.name);
  $("#ulaanbaatar-name").text(ulaanbaatar.name);
  $("#landOfMilkAndCookies-name").text(landOfMilkAndCookies.name);



  paris.landmarks.forEach(function(landmark) {
    $("#paris-landmarks").append("<li>" + landmark + "</li>");
  });
  portland.landmarks.forEach(function(landmark) {
    $("#portland-landmarks").append("<li>" + landmark + "</li>");
  });
  ulaanbaatar.landmarks.forEach(function(landmark) {
    $("#ulaanbaatar-landmarks").append("<li>" + landmark + "</li>");
  });
  landOfMilkAndCookies.landmarks.forEach(function(landmark) {
    $("#landOfMilkAndCookies-landmarks").append("<li>" + landmark + "</li>");
  });


  $("Place1").click(function(){
    $("#paris").show();
  })
});


let madArray = ["date", "name", "exclamation", "location", "adjective", "celebrity1", "celebrity2", "amount", "number", "housingType", "animal"];

madArray.forEach(function (word) {
  let input = $("#" + word).val();
  $("." + word).append(input);
});