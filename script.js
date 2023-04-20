let firstOperand = ''
let secondOperand = ''
let currentOperation = null
let shouldResetScreen = false

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

numberButtons.forEach((button) => button.addEventListener('click', () => 
appendNumber(button.textContent)))

operationButtons.forEach((button) =>
  button.addEventListener('click', () => setOperation(button.textContent))
)

function appendNumber(number){
    if (currentOperandTextElement.textContent === '0' || shouldResetScreen)
    resetScreen()
    currentOperandTextElement.textContent += number
}

function resetScreen() {
    currentOperandTextElement.textContent = ''
    shouldResetScreen = false
  }

function setOperation(operator) {
    if (currentOperation !== null) evaluate()
    firstOperand = currentOperandTextElement.textContent
    currentOperation = operator
    previousOperandTextElement.textContent = `${firstOperand} ${currentOperation}`
    shouldResetScreen = true
  }

function evaluate() {
    if (currentOperation === null || shouldResetScreen) return
    if (currentOperation === '÷' && currentOperandTextElement.textContent === '0') {
      alert("You can't divide by 0!")
      return
    }
    secondOperand = currentOperandTextElement.textContent
    currentOperandTextElement.textContent = roundResult(
      operate(currentOperation, firstOperand, secondOperand)
    )
    lastOperationScreen.textContent = `${firstOperand} ${currentOperation} ${secondOperand} =`
    currentOperation = null
  }

  function roundResult(number) {
    return Math.round(number * 1000) / 1000
  }

  function add(a, b) {
    return a + b
  }
  
  function substract(a, b) {
    return a - b
  }
  
  function multiply(a, b) {
    return a * b
  }
  
  function divide(a, b) {
    return a / b
  }
  
  function operate(operator, a, b) {
    a = Number(a)
    b = Number(b)
    switch (operator) {
      case '+':
        return add(a, b)
      case '−':
        return substract(a, b)
      case '×':
        return multiply(a, b)
      case '÷':
        if (b === 0) return null
        else return divide(a, b)
      default:
        return null
    }
  }