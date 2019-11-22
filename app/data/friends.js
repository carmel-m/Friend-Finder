

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


var friendArray = [
    {
        "name": "Buster Bluth",
        "photo": "",
        "scores": [
            "4", 
            "1", 
            "5", 
            "1",
            "4", 
            "2", 
            "5", 
            "4",
            "1", 
            "1",
        ]
    },
    {
        "name": "Lucille Bluth",
        "photo": "",
        "scores": [
            "1", 
            "5", 
            "1", 
            "4",
            "1", 
            "4", 
            "2", 
            "3",
            "3", 
            "4",
        ]
    },
    {
        "name": "George Bluth",
        "photo": "",
        "scores": [
            "2", 
            "3", 
            "2", 
            "3",
            "1", 
            "2", 
            "1", 
            "2",
            "5", 
            "5",
        ]
    },
    {
        "name": "Michael Bluth",
        "photo": "",
        "scores": [
            "5", 
            "2", 
            "1", 
            "2",
            "2", 
            "1", 
            "5", 
            "5",
            "4", 
            "3",
        ]
    },
    {
        "name": "George Michael Bluth",
        "photo": "",
        "scores": [
            "4", 
            "2", 
            "3", 
            "2",
            "3", 
            "1", 
            "5", 
            "4",
            "2", 
            "3",
        ]
    },
    {
        "name": "Gob Bluth",
        "photo": "",
        "scores": [
            "1", 
            "4", 
            "4", 
            "3",
            "5", 
            "5", 
            "1", 
            "1",
            "2", 
            "4",
        ]
    },
    {
        "name": "Tobias Funke",
        "photo": "",
        "scores": [
            "3", 
            "5", 
            "4", 
            "1",
            "4", 
            "5", 
            "1", 
            "3",
            "2", 
            "2",
        ]
    },
    {
        "name": "Lindsay Bluth Funke",
        "photo": "",
        "scores": [
            "1", 
            "4", 
            "3", 
            "2",
            "2", 
            "2", 
            "2", 
            "3",
            "1", 
            "3",
        ]
    },
    {
        "name": "Maeby Funke",
        "photo": "",
        "scores": [
            "2", 
            "3", 
            "2", 
            "4",
            "3",
            "3",
            "2",
            "1",
            "3",
            "5"
        ]
    }
]


module.exports = friendArray;