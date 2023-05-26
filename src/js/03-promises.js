import Notiflix from "notiflix";

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(position);
      }, delay);
    });
  } else {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(position);
      }, delay);
    });
  }
}
const form = document.querySelector("form");
const delay = document.getElementsByName("delay")[0];
const step = document.getElementsByName("step")[0];
const amount = document.getElementsByName("amount")[0];


form.addEventListener("submit",(e) => {
e.preventDefault();
  const delayVal = parseInt(delay.value);
  const stepVal = parseInt(step.value);
  const amountVal = parseInt(amount.value);
  let currentDelay = delayVal;
  for (let i = 0; i <=amountVal; i++) {
    createPromise(i, currentDelay)
      .then(event => {
        Notiflix.Notify.success(`Fulfilled promise ${i} in ${delay}ms`);
        console.log(event);
      })
      .catch(error => {
        Notiflix.Report.failure(`❌ Rejected promise ${i} in ${delay}ms`);
        console.log(error);
      });
    currentDelay += stepVal;
  }
});
  


