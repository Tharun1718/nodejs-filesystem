function getTimeStamp(){
    let d = Date.now();
    let date = new Date(d);
    // console.log(date);
    let day = date.getDate();
    // console.log("day", day);
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    // console.log(month,year)
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let time = `${hours}:${minutes}:${seconds}`;
    // console.log(time);
    let fileName =`${day}-${month}-${year}_${time}`
    // console.log(fileName);
    return {time, fileName};
}

let { time, fileName } = getTimeStamp();
console.log(time, fileName);

