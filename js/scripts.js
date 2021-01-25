function Places(name, landmarks, season) {
  this.name = name;
  this.landmarks = landmarks;
  this.season = season;
  // this.shorthand = shorthand;
}
Places.prototype.shorthand(function(){

})



$(document).ready(function() {
  let paris = new Places("Paris", ["Eiffel Tower", "Arc de Triomphe", "Louvre"], "Winter");
  let portland = new Places("Portland", ["Steel Bridge", "Pittock Mansion", "International Rose Garden"], "Spring");
  let ulaanbaatar = new Places("Ulaanbaatar", ["Equestrian statue of Genghis Khan", "Zaisan Memorial", "Sukhbaatar Square"], "Summer");
  let landOfMilkAndCookies = new Places("Land of Milk and Cookies", ["Sugar Castle", "Chocolate Chip Statue", "Milk Dunk Falls"], "Fall");
  
  // $("#paris-name").text(paris.name);
  // $("#portland-name").text(portland.name);
  // $("#ulaanbaatar-name").text(ulaanbaatar.name);
  // $("#landOfMilkAndCookies-name").text(landOfMilkAndCookies.name);
  
  let placesArray = [paris, portland, ulaanbaatar, landOfMilkAndCookies];
  
  //let placesKey = Places.keys();
  //Places.keys(place)
  
  // Placeholder.Prototype.Findplacethasodfias = function(name) {
    //   loop {
      //     if () {
        //       return thisPlace
        //     }
        //   }
        // }
        
        placesArray.forEach(function (place) {
          // const foundPlaceObject = myPlaceHolder.FindPlaceByName(place);
          $("#" + place.name + "-name").text(place.name);
          place.landmarks.forEach(function(landmark) {
            $("#" + place.name + "-landmarks").append("<li>" + landmark + "</li>");
          });
        });
        console.log("doing something")
      });

  // portland.landmarks.forEach(function(landmark) {
  //   $("#portland-landmarks").append("<li>" + landmark + "</li>");
  // });
  // ulaanbaatar.landmarks.forEach(function(landmark) {
  //   $("#ulaanbaatar-landmarks").append("<li>" + landmark + "</li>");
  // });
  // landOfMilkAndCookies.landmarks.forEach(function(landmark) {
  //   $("#landOfMilkAndCookies-landmarks").append("<li>" + landmark + "</li>");
  // });


  

  // $("Place1").click(function(){
    // $("#paris").show();
//   })
// });


// let madArray = ["date", "name", "exclamation", "location", "adjective", "celebrity1", "celebrity2", "amount", "number", "housingType", "animal"];

// madArray.forEach(function (word) {
//   let input = $("#" + word).val();
//   $("." + word).append(input);
// });