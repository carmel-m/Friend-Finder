//LOAD DATA

var friendArray = require("../data/friends.js")


module.exports = function(app) {



// Displays all friends
app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });



  
// // POST route to handle incoming survey results & 

// do compatibility logic with a for loop

// loop over friends Array
    // inside that loop, loop over friends[i].

    

// app.post("/api/friends", function(req, res) {
//     // req.body hosts is equal to the JSON post sent from the user
//     // This works because of our body parsing middleware
//     var newReservation = req.body;
  
//     // Using a RegEx Pattern to remove spaces from newReservation
//     // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//     newReservation.routeName = newReservation.name
//       .replace(/\s+/g, "")
//       .toLowerCase();
  
//     console.log(newReservation);
  
//     res.json(newReservation);
  
//     //   for (var i = 0; i < reservations.length; i++) {
//     if (reservations.length < 5) {
//       reservations.push(newReservation);
//     } else {
//       waitlist.push(newReservation);
//     }
//   });


}