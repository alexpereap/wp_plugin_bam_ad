/**
 * Initiates an interval to update the AD timer
 * @param id string AD html ID
 * @param sDate string YYYY-MM-DD HH:MM:SS format, must be a date in the future
 */
function bamTestSetTimer(id, sDate){
    var time = bamTestGetTimeObject(sDate);
    bamUpdateTimer(id, time);
    
    var interval = setInterval(function(){
        time = bamTestGetTimeObject(sDate);
        bamUpdateTimer(id, time);
        if(time === false){
            clearInterval(interval);
        }
    }, 1000);
}

/**
 * Updates the AD timer html
 * @param id string AD html ID
 */
function bamUpdateTimer(id, time){
    var leading_0 = '';

    if ( time === false ){
        
        $('#' + id + ' .counter .days').text('00');
        $('#' + id + ' .counter .hours').text('00');
        $('#' + id + ' .counter .mins').text('00');
        $('#' + id + ' .counter .secs').text('00');

    } else {
        leading_0 = time.days <= 9 ? '0':'';
        $('#' + id + ' .counter .days').text(leading_0 + time.days);
        leading_0 = time.hours <= 9 ? '0':'';
        $('#' + id + ' .counter .hours').text(leading_0 + time.hours);
        leading_0 = time.minutes <= 9 ? '0':'';
        $('#' + id + ' .counter .mins').text(leading_0 + time.minutes);
        leading_0 = time.seconds <= 9 ? '0':'';
        $('#' + id + ' .counter .secs').text(leading_0 + time.seconds);
    }  
}

/**
 * Transforms date into seconds and determinates if it is a valid date
 * @param sDate string YYYY-MM-DD HH:MM:SS format, must be a date in the future
 */
function bamTestGetTimeObject(sDate){
    var date = new Date(sDate);

    if( date == 'Invalid Date' ){
        console.log('Invalid Date ' + sDate);
        return false;
    }

    var currentDate = new Date();

    // transforms date into seconds and get the difference
    var seconds = Math.floor(
        (date.getTime() / 1000) - (currentDate.getTime() / 1000)
    );
    
    // if seconds are negative, that means the given date is not set in the future
    if(seconds < 0){
        console.log('Date: ' + sDate + ' not set in the future');
        return false;
    }

    return bamTestGetRemainingTime(seconds);

}

/**
 * Gets the remaining time (days, hours, minutes, seconds)
 * @param seconds int
 * @returns object representing remaining time {d:n, h:n, m:n, s:n}
 * 
 */
function bamTestGetRemainingTime(seconds){
    var remainingTime = seconds;
    
    var days = Math.floor((seconds) / (24 * 3600));
    remainingTime -= (24 * 3600) * days;
    
    var hours = Math.floor(remainingTime / 3600);
    remainingTime -= 3600 * hours;

    var mins = Math.floor(remainingTime / 60);
    remainingTime -= 60 * mins;

    var secs = remainingTime;
    
    time = {
        days : days,
        hours: hours,
        minutes: mins,
        seconds: secs
    };

    return time;
}

/**
 * Sets the background color for the ad
 * @param bgcolor string hexadecimal color
 * 
 */
function setBackgroundColor(bgColor){
    $("#bamAD").css('background-color', bgColor);
}