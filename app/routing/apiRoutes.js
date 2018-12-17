var friendsData = require("../data/friends")


// Displays all friends
app.get("https://friends-ec.herokuapp.com//api/friends", function(req, res) {
    return res.json(friendsData);
  });
  

  // Create New Friends - takes in JSON input
app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newFriend = req.body;
    var difference = 0;
    var match = 0;

    console.log(newFriend);
    console.log(friendsData);

for (var i=0; i<friendsArray.length; i++){
    var score1 = parseFloat(newFriend.answerAvg);
    var score2 = parseFloat(friendsArray[i].answerAvg);
    difference = Math.abs(score1-score2);

    if(difference === 0){
        match = i;
    }
    else{
        match = 0;
    }
}
  
    console.log(newFriend);
  
    friendsArray.push(newFriend);
  
    res.json(friendsArray[match]);
  });