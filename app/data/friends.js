// ===============================================================================
// DATA
// Below data will hold all of the friends in the system.
// Initially we just set it equal to "dummy" friends even though we would never call
//  them that to their faces...
// ===============================================================================

var friendsArray = [
    {
      friendName: "Tay Tay",
      profileImage: "https://pixel.nymag.com/imgs/daily/intelligencer/2018/12/12/12-taylor-swift-fans.w330.h330.jpg",
      answerAvg: 5
    },
    {
      friendName: "Beyonce",
      profileImage: "https://media4.s-nbcnews.com/j/newscms/2018_32/1357979/beyonce-vogue-gold-today_180806-mainart_7a701d9522f097a15118e785249579d2.fit-760w.jpg",
      answerAvg: 3.6
      }
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendsArray;
