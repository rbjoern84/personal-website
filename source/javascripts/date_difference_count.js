$(document).ready(function() {

  var element = $(".dynamic-date-span");
  var startdate = new Date(element.data("startdate"));
  var now = new Date();
  element.text("(" + monthDiff(startdate, now) + " months)");

  function monthDiff(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth() + 1;
    months += d2.getMonth();
    return now.getMonth() <= 0 ? months : months + 1
  }

});
