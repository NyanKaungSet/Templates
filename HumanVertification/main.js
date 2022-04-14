var checkbox = document.getElementById("checkbox");
var submit_Button = document.querySelector("button");
var elements = document.querySelectorAll(".element");
var colorSelected = document.querySelector("#colorSelected");

checkbox.disabled = true;
submit_Button.disabled = true;

elements.forEach((element) => {
  const color = getRandomcolor();
  element.style.backgroundColor = color;
  element.innerHTML = color;
  colorSelected.innerHTML = color;
});

function getRandomcolor() {
  const letter = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letter[Math.floor(Math.random() * 16)];
  }
  return color;
}

// if statement
elements.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.innerHTML === colorSelected.innerHTML) {
      checkbox.checked = true;
      submit_Button.disabled = false;
      submit_Button.classList.remove("btn-default");
      submit_Button.classList.add("btn-success");
      alert("You are Human");
    } else {
      alert("Please Verify you are human");
      location.reload(true);
    }
  });
});
