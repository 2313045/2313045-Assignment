// JavaScript for countdown timer for Artur Beterbiev vs Dimitry Bivol

// Set the date and time for the countdown timer
var countDownDate = new Date("June 1, 2024 22:30:00").getTime();

// Update the countdown every second
var timerBeterbievVsBivol = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("beterbievvsbivol-countdown").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
//adds expired once timer runs out
    if (distance < 0) {
        clearInterval(timerBeterbievVsBivol);
        document.getElementById("beterbievvsbivol-countdown").innerHTML = "EXPIRED";
    }
}, 1000);
