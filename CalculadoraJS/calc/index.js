const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.getAttribute("data-value");

    if (btn.id === "clear") {
      display.value = "";
    } 
    else if (btn.id === "equals") {
      try {
        display.value = eval(display.value) || "";
      } catch {
        display.value = "Erro";
        setTimeout(() => (display.value = ""), 1500);
      }
    } 
    else if (value) {
      display.value += value;
    }
  });
});
