// Импортируем библиотеку изонификаций
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const delay = Number(event.currentTarget.elements.delay.value);
  const state = event.currentTarget.elements.state.value;
  createPromise(delay, state)
    .then(({ value }) => {
      iziToast.success({
        title: "Success",
        message: value,
      });
    })
    .catch(({ value }) => {
      iziToast.error({
        title: "Error",
        message: value,
      });
    });
  form.reset();
});

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === "fulfilled") {
        resolve({ value: `Fulfilled after ${delay}ms` });
      } else {
        reject({ value: `Rejected after ${delay}ms` });
      }
    }, delay);
  });
}
