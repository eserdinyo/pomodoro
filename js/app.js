document.querySelector('.start').addEventListener("click", () => {

    let counter = setInterval(() => {
        let presentTime = document.getElementById('timer').innerHTML;
        let timeArray = presentTime.split(/[:]+/);
        let m = timeArray[0];
        let s = checkSecond((timeArray[1] - 1));
        if (s == 59) { m = m - 1 }
        if (m <= 0 && s == 0) {
            m = "05";
            s = "00";
            clearInterval(counter);
            document.getElementById('music').play();
            document.getElementById('timer').innerHTML = m + ":" + s;
        }

        document.getElementById('timer').innerHTML = m + ":" + s;
    }, 1000);

    function checkSecond(sec) {
        if (sec < 10 && sec >= 0) { sec = "0" + sec }; // add zero in front of numbers < 10
        if (sec < 0) { sec = "59" };
        return sec;
    }

    document.querySelector('.stop').addEventListener("click", () => {
        clearInterval(counter);

    });


    document.querySelector('.pomodoro').addEventListener("click", () => {
        clearInterval(counter);
        document.getElementById('timer').innerHTML = "25:00";

    });

    document.querySelector('.reset').addEventListener("click", () => {
        clearInterval(counter);
        document.getElementById('timer').innerHTML = "25:00";

    });




});

document.querySelector('.long').addEventListener("click", () => {

    document.getElementById('timer').innerHTML = "30:00";


});

document.querySelector('.short').addEventListener("click", () => {

    document.getElementById('timer').innerHTML = "05:00";


});










