const formatTime = (a) => {
    let day;
    let hours;
    let minutes;
    if (a < 60) {
        minutes = a;
        return console.log(`0 days, 0 hours, ${minutes} minutes`);
    } else if (a < 1440 && a >= 60) {
        hours = a / 60;
        min = a % 60;
        return console.log(`0 days, ${Math.floor(hours)} hours, ${min} minutes`);
    } else if (a >= (24 * 60)) {
        day = a / (24 * 60);
        hours = (a % (24 * 60)) / 60;
        min = a % (24 * 60)
        if (min < 60) {
            min = min;
        } else if (min >= 60) {
            min = min % 60;
        }
        return console.log(`${Math.floor(day)} days, ${Math.floor(hours)} hours, ${min} minutes`);
    } else console.log(`error`)
}

formatTime(443);