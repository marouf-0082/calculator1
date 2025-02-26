const buttonValues = [
  "AC", "+/-", "%", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "=", 
];

const rightSymbols = ["/", "*", "-", "+", "=",];
const topSymbols = ["AC", "+/-", "%",];

for (let i = 0; i < buttonValues.length; i++) {
  // <button>AC</button>
  let value = buttonValues[i];
  let button = document.createElement('button');
  button.innerText = value;

  // styling button colors
  if (value === '0') {
    button.style.width = "200px";
    button.style.gridColumn = "span 2";
  }
  if (rightSymbols.includes(value)) {
    button.style.backgroundColor = "#ff9500";
  } else if (topSymbols.includes(value)) {
    button.style.backgroundColor = "#D4D4D2";
    button.style.color = "#1c1c1c";
  }

  // add buttons to calculator
  document.getElementById('buttons').appendChild(button);
}