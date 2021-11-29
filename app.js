function calculator() {
  var a = parseInt(document.querySelector('#firstNumber').value)
  var b = parseInt(document.querySelector('#secondNumber').value)
  var c = document.querySelector('#operator').value

  var calculate

  if (c == 'add') {
    calculate = a + b
  } else if (c == 'subtract') {
    calculate = a - b
  } else if (c == 'multiply') {
    calculate = a * b
  } else if (c == 'divide') {
    calculate = a / b
  } else {
    calculate = 'Please select an operator'
  }

  const result = document.querySelector('#result')
  result.innerHTML = calculate
}

function clearAll() {
  document.querySelector('#firstNumber').value = ''
  document.querySelector('#secondNumber').value = ''
  document.querySelector('#operator').value = ''
  const result = document.querySelector('#result')
  result.innerHTML = ''
}

document.querySelector('#calculate').addEventListener('click', calculator)
document.querySelector('#clear').addEventListener('click', clearAll)
