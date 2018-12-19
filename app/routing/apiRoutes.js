var friendsData = require("../data/friends")

module.exports = function(app){


// Displays all friends
app.get("/api/friends", function(req, res) {
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

for (var i=0; i<friendsData.length; i++){
    var score1 = parseFloat(newFriend.answerAvg);
    var score2 = parseFloat(friendsData[i].answerAvg);
    difference = parseFloat(Math.abs(score1-score2));

    if(difference === 0){
        match = i;
    }
    else{
        match = 0;
    }
}
  
    console.log(newFriend);
  
    friendsData.push(newFriend);
  
    res.json(friendsData[match]);
  })}
