// ===============================================================================
// DATA
// Below data will hold all of the friends in the system.
// Initially we just set it equal to a "dummy" friend even though we would never call
//  them that to their face...
// ===============================================================================

var tableArray = [
    {
      customerName: "Ahmed",
      customerEmail: "ahmed@example.com",
      customerID: "afhaque89",
      phoneNumber: "000-000-0000"
    }
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendsArray;
  