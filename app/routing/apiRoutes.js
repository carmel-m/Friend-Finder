//LOAD DATA

var friendArray = require("../data/friends.js");

module.exports = function(app) {
  // Displays all friends
  app.get("/api/friends", function(req, res) {
    return res.json(friendArray);
  });



  // POST route to handle incoming survey results & do compatibility logic with a for loop
  //     loop over friends array
  //       inside that loop, loop over friends[i].surveyResponsesArray
  //       compare each survey response with the survey response of the user
  //       keep a running total

  app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newReservation = req.body;


    console.log(newReservation);

    res.json(newReservation);

    //   for (var i = 0; i < reservations.length; i++) {
    if (reservations.length < 5) {
      reservations.push(newReservation);
    } else {
      waitlist.push(newReservation);
    }
  });


};
// end of requests



// THIS GOES INSIDE A POST ROUTE

var newFriend = {
  name: "Maeby Funke",
  photo: "",
  scores: ["2", "3", "2", "4", "3", "3", "2", "1", "3", "5"]
};

var friendDiff = [];
// for loop that looks at each friend in the friend array
for (var i = 0; i < friendArray.length; i++) {
  var totalDiff = 0;
  // inner for loop will look at the scores of each friend
  // as we loop through the friend array
  for (var j = 0; j < friendArray[i].scores.length; j++) {
    var diff = Math.abs(
      parseInt(newFriend.scores[j]) - parseInt(friendArray[i].scores[j])
    );
    totalDiff += diff;
  }
  friendDiff.push(totalDiff);
}

// find index of friendDiff with the small value
// that will be the person that answered the question the closest
