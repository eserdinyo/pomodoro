$('.start').click(() => {
    let counter = setInterval(() => {
        let presentTime = $('#timer').text();
        let timeArray = presentTime.split(/[:]+/);
        let m = timeArray[0];
        let s = checkSecond((timeArray[1] - 1));
        if (s == 59) { m = m - 1 }
        if (m <= 0 && s == 0) {
            m = "05"; s = "00";
            clearInterval(counter);
            $('#music').play();
            $('#timer').text(m + ":" + s);
        }
        $('#timer').text(m + ":" + s);
    }, 1000);
    function checkSecond(sec) {
        if (sec < 10 && sec >= 0) { sec = "0" + sec }; // add zero in front of numbers < 10 
        if (sec < 0) { sec = "59" };
        return sec;
    }
    $('.stop').click(() => {
        clearInterval(counter);
    });
    $('.pomodoro').click(() => {
        clearInterval(counter);
        $('#timer').text("25:00");
    });
    $('.reset').click(() => {
        clearInterval(counter);
        $('#timer').text("25:00");
    });
});
$('.long').click(() => {
    $('#timer').text("30:00");
});
$('.short').click(() => {
    $('#timer').text("05:00");
});
