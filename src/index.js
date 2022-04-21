import "./styles.css";

// const start = document.getElementById("start");
// const reset = document.getElementById("reset");

//const progressBar = document.querySelector(".progress-inner");

const container = document.createElement("container");
container.className = "container";
document.body.appendChild(container);

const min = document.createElement("input");
min.className = "min";
min.type = "number";
min.value = "0";
min.max = "60";
min.min = "0";
// min.placeholder = "min";
min.innerText = min.value;
container.appendChild(min);

const colon = document.createElement("span");
colon.className = "min";
colon.innerText = ":";
container.appendChild(colon);

const sec = document.createElement("input");
sec.className = "min";
sec.type = "number";
sec.value = "0";
sec.max = "60";
sec.min = "0";
// sec.placeholder = "sec";
sec.innerText = min.value;
container.appendChild(sec);

const btndiv = document.createElement("div");
btndiv.className = "btndiv";
container.appendChild(btndiv);

const start = document.createElement("button");
start.className = "btn";
start.innerText = "Start";
btndiv.appendChild(start);

const reset = document.createElement("button");
reset.className = "btn";
reset.innerText = "Reset";
btndiv.appendChild(reset);

let bar = document.createElement("div");
bar.className = "progress";
bar.innerText = "";
container.appendChild(bar);

let startTimer = null;

function timer() {
  if (sec.value === 0 && min.value === 0) {
    min.value = 0;
    sec.value = 0;
    start.innerHTML = "Start";
    bar.innerText = "TimeOut";

    clearInterval(startTimer);
  } else if (sec.value != 0) {
    sec.value--;
  } else if (min.value != 0 && sec.value == 0) {
    sec.value = 59;
    min.value--;
  }

  return;
}

start.addEventListener("click", () => {
  if (startTimer == null) {
    start.innerHTML = "Pause";

    startTimer = setInterval(() => {
      timer();

      let progressWidth = (sec.value / 60) * 100;
      bar.style.width = progressWidth + "%";
    }, 1000);
  } else {
    start.innerHTML = "Start";
    clearInterval(startTimer);
    startTimer = null;
    bar.style.width = "0%";
  }
});

reset.addEventListener("click", () => {
  start.innerHTML = "Start";
  bar.innerText = "";
  min.value = 0;
  sec.value = 0;
  bar.style.width = 100 + "%";
  clearInterval(startTimer);
});
