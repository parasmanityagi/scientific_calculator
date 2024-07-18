let display = document.getElementById("display");

function clearDisplay() {
  display.value = "0";
}

function deleteLast() {
  if (display.value.length != 1) {
    display.value = display.value.slice(0, -1);
  } else {
    display.value = "0";
  }
}

function appendNumber(number) {
  if (display.value === "0") {
    display.value = number;
  } else {
    display.value += number;
  }
}

function advOpr(val) {
  if (display.value === "0") {
    display.value = val;
  } else {
    if (display.value[0] === `√`) {
      display.value += appendNumber(display.value.slice(1));
    }
  }
}

function appendOperator(operator) {
  if (operator === "=") {
    // sqrt
    if (display.value[0] === `√`) {
      display.value = Math.sqrt(display.value.slice(1));
    }
    // log
    else if (display.value.slice(0, 3) === "log") {
      display.value = Math.log10(display.value.slice(3));
    }
    // sin
    else if (display.value.slice(0, 3) === "sin") {
      display.value = Math.sin(display.value.slice(3));
    }
    // cos
    else if (display.value.slice(0, 3) === "cos") {
      display.value = Math.cos(display.value.slice(3));
    }
    // tan
    else if (display.value.slice(0, 3) === "tan") {
      display.value = Math.tan(display.value.slice(3));
    }
    // sin inverse
    else if (display.value.slice(0, 4) === "asin") {
      display.value = Math.asin(display.value.slice(4));
    }
    // cos inverse
    else if (display.value.slice(0, 4) === "acos") {
      display.value = Math.acos(display.value.slice(4));
    }
    // tan inverse
    else if (display.value.slice(0, 4) === "atan") {
      display.value = Math.atan(display.value.slice(4));
    }
    // power
    else if (display.value.slice(0, 2) === "x^") {
      let base = Number(display.value.slice(2));
      display.value = Math.pow(base, 2);
    }
    // expression
    else {
      display.value = eval(display.value);
    }
  } else if (operator === "(" && display.value === "0") {
    display.value = operator;
  } else if (operator === ")" && display.value === "0") {
    display.value = "INV";
  } else {
    display.value += operator;
  }
}