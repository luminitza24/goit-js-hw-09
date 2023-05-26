
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix'

let currentDate = new Date();
let selectedDate = "";
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
      selectedDate = selectedDates[0];
      if (selectedDate <= currentDate)
      Notiflix.Notify.failure('Please choose a date in the future!');
      else {
        document.querySelector('[data-start]').disabled = false;
      }
    },
  };

const startDate = document.getElementById('datetime-picker');
flatpickr(startDate, options);

const startButton = document.querySelector('[data-start]');

const addLeadingZero = (string) => {
    if (string.length == 1)
        return "0" + string;
    else return string;
};

const timer = () => {
    const timerId = setInterval(()=>{
        currentDate = new Date();
        let time = selectedDate - currentDate;
        let {days, hours, minutes, seconds } = convertMs(time);
        const Days = document.querySelector('[data-days]');
        const Hours = document.querySelector('[data-hours]');
        const Minutes = document.querySelector('[data-minutes]');
        const Seconds = document.querySelector('[data-seconds]');
        Days.innerHTML = addLeadingZero("" + days);
        Hours.innerHTML = addLeadingZero("" + hours);
        Minutes.innerHTML = addLeadingZero("" + minutes);
        Seconds.innerHTML = addLeadingZero("" + seconds);
    }, 1000);
}

startButton.addEventListener('click', timer);
  function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);

    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    return { days, hours, minutes, seconds };
  }
  
  console.log(convertMs(2000)); 
  console.log(convertMs(140000)); 
  console.log(convertMs(24140000));
