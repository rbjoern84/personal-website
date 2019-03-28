$(document).ready(function() {

  var element = $(".dynamic-date-span");
  var startdate = new Date(element.data("startdate"));
  var now = new Date();

  function monthDiff(start, end) {
    var months;
    var years = "";
    var separator = ""
    months = (end.getFullYear() - start.getFullYear()) * 12;
    months -= start.getMonth();
    months += end.getMonth();
    now.getDate() >= 15 ? months ++ : months = months;

    separator = months > 12 ? ", " : "";

    if (months >= 12) {
      years = Math.floor(months / 12);
      months = months - (years * 12);
    }

    if (years === 1) {
      years = years + " year";
    } else if (years > 1) {
      years = years + " years";
    } else {
      year = "";
    }

    if (months === 1) {
      months = months + " month";
    } else if (months > 1) {
      months = months + " months";
    } else {
      months = "";
    }

    return "(" + years + separator + months + ")";
  }

  element.text(monthDiff(startdate, now));

});
