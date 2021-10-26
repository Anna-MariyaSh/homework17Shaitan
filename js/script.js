function exponentiation(arg1, arg2) {
  const result = arg1**arg2;
  return alert(result);
}

function multiplay(arg1, arg2) {
  const mult = arg1*arg2;
  return alert(mult);
}

function division(arg1, arg2) {
  const div = arg1/arg2;
  return alert(div);
}

function modulo(arg1, arg2) {
  const mod = arg1%arg2;
  return alert(mod);
}



function mainFunction(callback) {
  let firstNumber = prompt("put your first number");
  let secondNumber = prompt("put your second number");
  if(firstNumber === null || isNaN(firstNumber) || firstNumber === "") return alert("error in firt number");
  if(secondNumber === null || isNaN(secondNumber) || secondNumber === "") return alert("error in second number");
  return callback(firstNumber, secondNumber);
}

mainFunction(exponentiation);

mainFunction(multiplay);

mainFunction(division);

mainFunction(modulo);
