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

let pptDate = new Date(2020, 5, 26, 5, 30);
const year = pptDate.getFullYear();
const day = pptDate.getDate();
const month = months[pptDate.getMonth()];
const weekday = weekdays[pptDate.getDay()];
let hours = pptDate.getHours();
let text = "am";
if (hours > 12) {
  hours -= 12;
  text = "pm";
}
const minutes = pptDate.getMinutes();
presentation.textContent = `PPT begins on ${weekday} ${day} ${month} ${year}, ${hours}:${minutes}${text}`;

const pptTime = pptDate.getTime();
getRemaindingTime = () => {
  const currentTime = new Date().getTime();

  const time = pptTime - currentTime; // returns miliseconds

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  const daysLeft = Math.floor(time / oneDay);
  const hoursLeft = Math.floor((time % oneDay) / oneHour);
  const minsLeft = Math.floor((time % oneHour) / oneMinute);
  const secsLeft = Math.floor((time % oneMinute) / 1000);

  const values = [daysLeft, hoursLeft, minsLeft, secsLeft];

  deadlineFormats.forEach((text, index) => {
    text.innerHTML = format(values[index]);
  })
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  if (time < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
  }
}
let countdown = setInterval(getRemaindingTime, 1000);
getRemaindingTime();

/* Learnings:
    1. date() and its methods
    2. SetInterval() method
*/