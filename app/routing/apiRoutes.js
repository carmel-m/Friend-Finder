//LOAD DATA

var friendArray = require("../data/friends.js");

module.exports = function(app) {
  // Displays all friends
  app.get("/api/friends", function(req, res) {
    return res.json(friendArray);
  });

  app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newFriend = req.body;

    console.log(newFriend);
    res.json(newFriend);

    var friendDiff = [3, 4, 5, 2, 1, 5, 4, 3];
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
    var min = Infinity;
    for (var k = 0; k < friendDiff.length; k++) {
      if (friendDiff[k] < min) {
        min = friendDiff[k];
      }
    }
    var bestFriendIndex = friendDiff.indexOf(min);
    // that will be the person that answered the question the closest

    var bestFriend = FriendArray[bestFriendIndex];
    console.log(bestFriend);

  });
};
// end of requests

// var newFriend = {
//   name: "Carmel",
//   photo: "",
//   scores: ["2", "3", "2", "4", "3", "3", "2", "1", "3", "5"]
// };

// 6. Determine the user's most compatible friend using the following as a guide:

//    * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
//    * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
//      * Example:
//        * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
//        * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
//        * Total Difference: **2 + 1 + 2 =** **_5_**
//    * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on.
//    * The closest match will be the user with the least amount of difference.  (use Math.abs)

// 7. Once you've found the current user's most compatible friend, display the result as a modal pop-up.
//    * The modal should display both the name and picture of the closest match.
