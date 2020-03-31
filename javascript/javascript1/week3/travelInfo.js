function timeToTravel(speed, distance)
    {
        var time=distance/speed;
        return time;
    }
    function timeConvert(time) {
        var num = time;
        var hours = (num / 60);
        var rhours = Math.floor(hours);
        var minutes = (hours - rhours) * 60;
        var rminutes = Math.round(minutes);
        return num + " minutes = " + rhours + " hour(s) and " + rminutes + " minute(s).";
        }


var myTime=timeToTravel(50,432);
console.log(myTime);
console.log(timeConvert(myTime));