const month = document.querySelector(".month");
const dayName = document.querySelector(".day-name");
const dayNumber = document.querySelector(".day-number");
const year = document.querySelector(".year");

const months = ["January","February","March","April","May","June","July",
"August","September","October","November","December"];

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function updateDate(){
    let date = new Date();

    let monthAsNumber = date.getMonth();
    let dayNameAsNumber = date.getDay();

    let monthAsText = months[monthAsNumber];
    let dayNameAsText = days[dayNameAsNumber];

    month.innerHTML = monthAsText;
    dayName.innerHTML = dayNameAsText;
    dayNumber.innerHTML = date.getDate();
    year.innerHTML = date.getFullYear();

    setTimeout(updateDate,60*60*1000*24);
}

updateDate();