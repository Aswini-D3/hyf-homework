const calculateTime = [
    {
      title: 'a',
      days: 9, 
      hours: 22,
      minutes: 32,
    },
    {
      title: 'b',
      days: 3,
      hours: 14,
      minutes: 0,
    },
    {
      title: 'c',
      days: 6,
      hours: 8,
      minutes: 0,
    }
  ]
  for (let {title, days, hours, minutes} of calculateTime) {
    let fraction = ((days*24 + hours)*60 + minutes) / (365*24*60*80);
    console.log(title  + " took" + (fraction * 100).toFixed(2) + "% of my life");
}