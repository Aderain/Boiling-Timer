const timerInput = document.querySelector(".timer-input");
const timerBtn = document.querySelector(".btn");
const boilingTimer = document.querySelector(".boiling-timer");

timerBtn.addEventListener("click", (e) => {
  event.preventDefault();
  createTimer();
});

function createTimer() {
  let counter = timerInput.value;

  if (counter < 0) {
    alert("Enter number higher than 0!");
  } else if (counter > 0) {
    const timer = document.createElement("div");
    timer.classList.add("timer");
    boilingTimer.appendChild(timer);
    timer.innerHTML = counter;

    setInterval(() => {
      counter = counter - 1;
      timer.innerHTML = counter;
      if (counter === 0) {
        timer.classList.add("remove-timer");

        setTimeout(() => {
          timer.remove();
        }, 500);
      }
    }, 1000);
  }
  timerInput.value = "";
}
