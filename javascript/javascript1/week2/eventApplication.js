function eventDay(daysToEvent){
    const d= new Date();
    const weekDay = new Array(7);
    weekDay[0] = "Sunday";
    weekDay[1] = "Monday";
    weekDay[2] = "Tuesday";
    weekDay[3] = "Wednesday";
    weekDay[4] = "Thursday";
    weekDay[5] = "Friday";
    weekDay[6] = "Saturday";
    const presentDay = d.getDay();

    const indexOfday = (presentDay+daysToEvent) % 7;
    return weekDay[indexOfday];
    }
    const result = eventDay(3);
    console.log(result);
    
