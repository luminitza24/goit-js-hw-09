
const startButton = document.querySelector('[data-start]');
const endButton = document.querySelector('[data-stop]');
let timer = null;


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

startButton.addEventListener('click', () => {
     timer = setInterval(() => {
        const body = document.getElementsByTagName('body')[0];
        body.style.backgroundColor = "" + getRandomHexColor();
    }, 1000);
});


endButton.addEventListener('click', () => {
    clearInterval(timer);
    console.log('Stop ! ');
})
