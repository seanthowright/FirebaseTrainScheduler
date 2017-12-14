// Initialize Firebase
var config = {
  apiKey: "AIzaSyABp-hRRCIpIsDlpeecbz7WYtsTChv5xFw",
  authDomain: "trainscheduler-7feb0.firebaseapp.com",
  databaseURL: "https://trainscheduler-7feb0.firebaseio.com",
  projectId: "trainscheduler-7feb0",
  storageBucket: "trainscheduler-7feb0.appspot.com",
  messagingSenderId: "959162018983"
};

firebase.initializeApp(config);

var database = firebase.database();

$("#add-train-btn").on("click", function(event) {
  event.preventDefault();

  var tName = $("#train-name").val().trim();
  var tDest = $("#train-destination").val().trim();
  var fTrainT = moment($("#first-train-time").val().trim(), "HH:mm").format("HH:mm");
  var fMin = moment($("frequency-min").val().trim(), "hh:mm").format("hh:mm");


  var addTrain = {
    name: tName,
    destination: tDest,
    firstTrainTime: fTrainT,
    frequency: fMin
  };


  database.ref().push(addTrain);

  console.log(addTrain.name);
  console.log(addTrain.destination);
  console.log(addTrain.firstTrainTime);
  console.log(addTrain.frequency);


  alert("Train added!");


  $("#train-name").val("");
  $("#train-destination").val("");
  $("#first-train-time").val("");
  $("#frequency-min").val("");

});


database.ref().on("child_added", function(childSnapshot, prevChildKey) {

  console.log(childSnapshot.val());

  var tName = childSnapshot.val().name;
  var tDest = childSnapshot.val().destination;
  var fTrainT = childSnapshot.val().firstTrainTime;
  var fMin = childSnapshot.val().frequency;


  console.log(tName);
  console.log(tDest);
  console.log(fTrainT);
  console.log(fMin);

  var fTrainMil = moment.unix(fTrainT).format("HH:mm");

  $("#train-table > tbody").append("<tr><td>" + tName + "</td><td>" + tDest + "</td><td>" +
  fMin + "</td><td>" + nArrive + "</td><td>" + mAway + "</td><td>");


});