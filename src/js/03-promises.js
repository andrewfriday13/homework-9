import Notiflix from 'notiflix';


const create = document.querySelector('.form')
const delay = document.querySelector('input[name="delay"]')
const step = document.querySelector('input[name="step"]')
const amount = document.querySelector('input[name="amount"]')

 
  

create.addEventListener('submit', submitForm)

function submitForm(evt) {
  evt.preventDefault()

  const delayValue = Number(delay.value)
  const stepValue = Number(step.value)

  for (let i = 0; i < amount.value; i += 1) {

    const index = i + 1
    const firstStep = delayValue + stepValue * i

    createPromise(index, firstStep).then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });;
  }

  evt.target.reset()
}

function createPromise(position, delay) {

  return new Promise((resol, reject) => {
    
    setTimeout(() => {
   const shouldResolve = Math.random() > 0.3;

    if (shouldResolve) {
   resol({ position, delay });
  } else {
reject({ position, delay });  }  
}, delay)
  })
  
}



// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
