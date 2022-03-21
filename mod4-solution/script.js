(function () {
  var names = [
    "Yaakov",
    "John",
    "Jen",
    "Jason",
    "Paul",
    "Frank",
    "Larry",
    "Paula",
    "Laura",
    "Jim",
  ];
  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    window.name = names[i];
    if (firstLetter === "j") {
      byeSpeaker.speak();
    } else {
      helloSpeaker.speak();
    }
  }
})();
