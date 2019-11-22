//LOAD DATA

var friendData = require("../data/friends.js");

module.exports = function(app) {
 
 
  // Displays all friends
  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });


  app.post("/api/friends", function(req, res) {
    
    // req.body hosts is equal to the JSON post sent from the user
    var newFriend = req.body;

    console.log(newFriend);
    res.json(newFriend);

    var friendDiff = [];
    // for loop that looks at each friend in the friend array
    for (var i = 0; i < friendData.length; i++) {
      var totalDiff = 0;
      // inner for loop will look at the scores of each friend
      // as we loop through the friend array
      for (var j = 0; j < friendData[i].scores.length; j++) {
        var diff = Math.abs(
          parseInt(newFriend.scores[j]) - parseInt(friendData[i].scores[j])
        );
        totalDiff += diff;
      }
      friendDiff.push(totalDiff);
    }

    // find index of friendDiff with the small value
    var min = Infinity;
    for (var k = 0; k < friendDiff.length; k++) {
      if (friendDiff[k] < min) {
        min = friendDiff[k];
      }
    }
    var bestFriendIndex = friendDiff.indexOf(min);
    // that will be the person that answered the question the closest

    var bestFriend = friendData[bestFriendIndex];
    console.log(bestFriend.name);

  });
};
// end of requests




// 7. Once you've found the current user's most compatible friend, display the result as a modal pop-up.
//    * The modal should display both the name and picture of the closest match.
