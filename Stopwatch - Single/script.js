//Define vars to hold time values
let seconds = 0;
let minutes = 0;
let hours = 0;

//Define vars to hold "display" value
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

//Define vars for alarm
let alarm1Minutes = 3;
let alarm1Seconds = 00;
let alarm2Minutes = 4;
let alarm2Seconds = 30;

//Define var to hold setInterval() function
let interval = null;

//Define var to hold stopwatch status
let status = "stopped";

function add10seconds(){
    seconds = seconds + 10;
    displaySeconds = "0" + seconds.toString()+10;
}

function add20seconds(){
    seconds = seconds + 20;
    displaySeconds = "0" + seconds.toString()+10;
}

function add30seconds(){
    seconds = seconds + 30;
    displaySeconds = "0" + seconds.toString()+10;
}

//Stopwatch function (logic to determine when to increment next value, etc.)
function stopWatch(){
    seconds++;

    //Logic to determine when to increment next value
    if(seconds / 60 === 1){
        seconds = 0;
        minutes++;

        if(minutes / 60 === 1){
            minutes = 0;
            hours++;
        }
    }

    //If seconds/minutes/hours are only one digit, add a leading 0 to the value
    if(seconds < 10){
        displaySeconds = "0" + seconds.toString();
    }
    else{
        displaySeconds = seconds;
    }

    if(minutes < 10){
        displayMinutes = "0" + minutes.toString();
    }
    else{
        displayMinutes = minutes;
    }

    if(hours < 10){
        displayHours = "0" + hours.toString();
    }
    else{
        displayHours = hours;
    }

    //Display updated time values to user
    var displayText = displayMinutes + ":" + displaySeconds;
    document.getElementById("display").innerHTML = displayText;
    console.log(displayText)

    if(seconds == alarm1Seconds && minutes == alarm1Minutes){
        audio1.play()
    }
    if(seconds == alarm2Seconds && minutes == alarm2Minutes){
        audio2.play()
    }
}

function startStop(){

    if(status === "stopped"){
        //Start the stopwatch (by calling the setInterval() function)
        interval = window.setInterval(stopWatch, 1000);
        document.getElementById("startStop").innerHTML = "Stop";
        status = "started";
    }
    else{
        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        status = "stopped";
    }

}

//Function to reset the stopwatch
function reset(){

    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerHTML = "00:00";
    document.getElementById("startStop").innerHTML = "Start";

}
