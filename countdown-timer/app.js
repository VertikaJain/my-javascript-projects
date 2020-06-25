const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const deadline = document.querySelector(".deadline");
const presentation = document.querySelector(".presentation");
const deadlineFormats = document.querySelectorAll(".deadline-format h4");

// taking dates dynamically: whenever the application is opened, it sets timer to 10 days after the current date.
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
const pptDate = new Date(tempYear, tempMonth, tempDay + 10, 15, 30, 0);

// let pptDate = new Date(2020, 5, 27, 15, 30, 0); // static date values

const year = pptDate.getFullYear();
const day = pptDate.getDate();
const month = months[pptDate.getMonth()];
const weekday = weekdays[pptDate.getDay()];
let hours = pptDate.getHours();
if (hours >= 12) {
  hours -= 12;
}
let minutes = pptDate.getMinutes();
if (hours < 10) {
  hours = `0${hours}`;
}
if (minutes < 10) {
  minutes = `0${minutes}`;
}
presentation.textContent = `PPT begins on ${weekday} ${day} ${month} ${year}, ${hours}:${minutes} hrs.`;

const pptTime = pptDate.getTime(); // returns miliseconds

let countdown = setInterval(getRemainingTime = () => {
  const currentTime = new Date().getTime();
  const time = pptTime - currentTime; 

  // convert miliseconds to required values
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  const daysLeft = Math.floor(time / oneDay);
  const hoursLeft = Math.floor((time % oneDay) / oneHour);
  const minsLeft = Math.floor((time % oneHour) / oneMinute);
  const secsLeft = Math.floor((time % oneMinute) / 1000);

  const values = [daysLeft, hoursLeft, minsLeft, secsLeft];
  format = (item) => {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }
  deadlineFormats.forEach((text, index) => {
    text.innerHTML = format(values[index]);
  })
  if (time < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">Presentation already given!</h4>`;
  }
}, 1000);

/* Learnings:
    1. date() and its methods
    2. SetInterval() & clearInterval() method
*/