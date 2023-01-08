

const startColor = document.querySelector('button[data-start]')
const stoptColor = document.querySelector('button[data-stop]')
const body = document.querySelector('body')
let changeColor = body.style.backgroundColor = 'white'; 

startColor.addEventListener('click',runColor)
stoptColor.addEventListener('click', closeColor)

function runColor() {
  changeColor = setInterval(() => { body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`; }, 1000)
  startColor.disabled = true
    stoptColor.disabled = false

}

function closeColor() {
  clearInterval(changeColor)
   startColor.disabled = false
    stoptColor.disabled = true
}

