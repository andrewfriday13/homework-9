// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

const startTimer = document.querySelector('button[type="button"]')
startTimer.addEventListener('click', timer)

  startTimer.disabled = true



const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      startTimer.disabled = true
      alert("бери десь в майбутньому")
    } else {
      console.log(selectedDates[0].getTime());
      startTimer.disabled = false

    }
      return selectedDates
  },

};


flatpickr('#datetime-picker',options)     

function timer(evt) {
  setInterval(() => {
    console.log('hello')
  },1000)

}


 function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

