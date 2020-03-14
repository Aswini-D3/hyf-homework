function timeToTravel(speed, distance)
    {
        var time=distance/speed;
        return time;
    }

var myTime=timeToTravel(50,100);
console.log(myTime);