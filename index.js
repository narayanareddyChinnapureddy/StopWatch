function showCurrentTime(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    var meridiem = "AM"

    if(hours == 0) {
        hours = 12;
    }

    if(hours > 12) {
        hours = hours - 12
        meridiem = "PM"
    }

    hours = (hours < 10) ? "0"+hours : hours
    minutes = (minutes < 10) ? "0"+min : minutes
    seconds = (seconds < 10) ? "0"+seconds : seconds

    var currentTime = `${hours}:${minutes}:${seconds} ${meridiem}`

    document.getElementById('stopWatch').innerHTML = currentTime;

    setInterval(showCurrentTime, 1000)
    
}

showCurrentTime();