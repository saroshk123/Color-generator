const btn1 = document.querySelector(".r");
const btn2 = document.querySelector(".g");
const btn3 = document.querySelector(".b");
const btn4 = document.querySelector(".a");
const btn5 = document.querySelector(".s");
const sec = document.querySelector(".section");

btn1.addEventListener("click", function () {
  sec.classList.add("red");
  if (sec.classList.contains("green") || sec.classList.contains("blue")) {
    sec.classList.remove("green");
    sec.classList.remove("blue");
  } else {
    sec.removeAttribute("style");
  }
});

btn2.addEventListener("click", function () {
  sec.classList.add("green");
  if (sec.classList.contains("red") || sec.classList.contains("blue")) {
    sec.classList.remove("red");
    sec.classList.remove("blue");
  } else {
    sec.removeAttribute("style");
  }
});

btn3.addEventListener("click", function () {
  sec.classList.add("blue");
  if (sec.classList.contains("red") || sec.classList.contains("green")) {
    sec.classList.remove("red");
    sec.classList.remove("green");
  } else {
    sec.removeAttribute("style");
  }
});

btn4.addEventListener("click", function () {
  sec.style.backgroundColor = getRandomColor();
});

btn5.addEventListener("click", function () {
  if (
    sec.classList.contains("red") ||
    sec.classList.contains("green") ||
    sec.classList.contains("blue")
  ) {
    sec.classList.remove("red");
    sec.classList.remove("green");
    sec.classList.remove("blue");
  } else {
    sec.removeAttribute("style");
  }
});

function getRandomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let color = `rgb(${red}, ${green}, ${blue})`;
  return color;
}
