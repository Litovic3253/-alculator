let display = document.querySelector(".display");  //дисплей

let buttons = Array.from(document.querySelectorAll(".button")); //кнопки в массив

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {  //получение данных на дисплее и логика
      case "C":
        display.innerText = "0";
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch (e) {
          display.innerText = "Error!";
        }
        break;

      default:
        if (display.innerText === "0" && e.target.innerText !== ".") {
          display.innerText = e.target.innerText;
        } else {
          display.innerText += e.target.innerText;
        }
    }
  });
});
