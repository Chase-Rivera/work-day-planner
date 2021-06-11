
var liveDate = moment().format("MMMM/Do/YYYY");
$("#currentDay").text(liveDate);

var getHour = $("hour").data(time);

var date = new Date();

var time = date.getHours();

var save = $(".saveBtn")


$(document).ready(function() {

    var rows = $(".row");
    var time2 = moment().hours()

    $(".time-block").each(function() {

        var hourBlock = parseInt($(this).attribute("id").split("-")[1])

        if(hourBlock < time2){
            $(this).addClass("past")
        }
    }
)})