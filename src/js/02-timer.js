// Описаний в документації
import flatpickr from "flatpickr";
import Notiflix from 'notiflix';
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

const startTimer = document.querySelector('button[type="button"]')
const choiseDate = document.querySelector('input[type="text"]')
startTimer.addEventListener('click', timer)

const day = document.querySelector('span[data-days]')
const hour = document.querySelector('span[data-hours]')
const minute = document.querySelector('span[data-minutes]')
const second = document.querySelector('span[data-seconds]')

 startTimer.disabled = true


let selectDate 

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      startTimer.disabled = true
      Notiflix.Notify.failure("бери десь в майбутньому")
    } else {
      startTimer.disabled = false
    }    
    selectDate = selectedDates[0].getTime()

  },
};



flatpickr('#datetime-picker', options)

function timer() {
  const timerId = setInterval(() => {
  
    startTimer.disabled = true
    const dataTime = selectDate - Date.now()
    const { days, hours, minutes, seconds } = convertMs(dataTime)

    day.textContent = days
    hour.textContent = hours
    minute.textContent = minutes
    second.textContent = seconds

    if (selectDate <= 1000) {
      clearInterval(timerId)
    startTimer.disabled = false

    }
  }, 1000)
}


function addZero(value) {
  return String(value).padStart(2, '0')
}

 function convertMs(ms) {

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;


  const days = addZero(Math.floor(ms / day));

  const hours = addZero(Math.floor((ms % day) / hour));

  const minutes = addZero(Math.floor(((ms % day) % hour) / minute));

  const seconds = addZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
