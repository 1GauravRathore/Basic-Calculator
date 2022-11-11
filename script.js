 class Calculator
 {
   constructor(previousOperandTextElement,currentOperandTextElement){
     this.previousOperandTextElement=previousOperandTextElement;
     this.currentOperandTextElement=currentOperandTextElement;
     this.clear();
   }

   clear(){
     this.currentOperand='';
     this.previousOperand='';
     this.opration=undefined;
   }
    delete(){
      this.currentOperand=this.currentOperand.toString().slice(0,-1);
    }
    chooseOperation(operation)
    {
      if(this.currentOperand=== '')
      return ;
      if(this.previousOperand !== '')
      {
        this.compute();
      }
      this.operation=operation;
      this.previousOperand=this.currentOperand;
      this.currentOperand='';
    }
    appendNumber(number) {
      if (number === '.' && this.currentOperand.includes('.')) return
      this.currentOperand = this.currentOperand.toString() + number.toString();
    }
    compute(){
      let computation;
      const prev=parseFloat(this.previousOperand);
      const curr=parseFloat(this.currentOperand);
      if(isNaN(prev) || isNaN(curr))
      return
      switch(this.operation)
      {
      case '+':
        computation=prev+curr;
        break;
      case '-':
        computation=prev-curr;
        break;
      case '*':
        computation=prev*curr;
        break;
      case '÷':
        computation=prev/curr;
        break;
      default:
      return;
      }
      this.previousOperand='';
      this.currentOperand=computation;
      this.operation=undefined;
    }
    updateDisplay(){
      // this.currTextElement.innerText=this.currentOperand;
      this.currentOperandTextElement.innerText =this.currentOperand;
          this.previousOperandTextElement.innerText =this.previousOperand;
          if(this.operation!= null)
          this.previousOperandTextElement.innerText =this.previousOperand+this.operation;

    }
 }
 // How to select a element using data attribute in JavaScript
const numberButton=document.querySelectorAll('[data-number]');
const operation=document.querySelectorAll('[data-operation]');
const equalButton=document.querySelector('[data-equal]');
const allClearButton=document.querySelector('[data-clear]');
const deleteButton=document.querySelector('[data-delete]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')
// console.log(button);
const calculator=new Calculator(previousOperandTextElement,currentOperandTextElement);

numberButton.forEach(button => {
button.addEventListener('click',() =>{
  calculator.appendNumber(button.innerText);
  calculator.updateDisplay();
})
})

operation.forEach(button => {
button.addEventListener('click',() =>{
  calculator.chooseOperation(button.innerText);
  calculator.updateDisplay();
})
})

equalButton.addEventListener('click',() =>{
  calculator.compute();
  calculator.updateDisplay();
})

allClearButton.addEventListener('click',() =>{
  calculator.clear();
  calculator.updateDisplay();
})

deleteButton.addEventListener('click',() =>{
  calculator.delete();
  calculator.updateDisplay();
})
//
//
///
//
//
