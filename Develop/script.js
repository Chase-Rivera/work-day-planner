
var liveDate = moment().format("MMMM/Do/YYYY");
$("#currentDay").text(liveDate);

var getHour = $("hour").data(time);

var date = new Date();

var time = date.getHours();

var save = $(".saveBtn")
