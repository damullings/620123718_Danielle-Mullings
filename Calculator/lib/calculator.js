var numClicks = 0;
var timeout = 0;

const main = () =>
{
  
  // select all the buttons
  const buttons = document.querySelectorAll('button');
  // select the <input type="text" class="display" disabled> element
  const display = document.querySelector('.display');
  const mrecallButton = document.getElementById('mrecall');

  memoryStack = [];
  // add eventListener to each button
  function startUpCalculator()
  {
      //mrecallButton.addEventListener('dblclick',updateClick);
      buttons.forEach(function(button) 
      {
        button.addEventListener('click', calculate);
      });
      
  }
function dbl(){
  console.log("FNALLLSYS");
}
// calculate function
function calculate(event) {
  // current clicked buttons value
  const clickedButtonValue = event.target.value;

  
  console.log("# clicks outside MRC",numClicks);
  if (clickedButtonValue === '=') {
    // check if the display is not empty then only do the calculation
    if (display.value !== '') {
      // calculate and show the answer to display
      display.value = eval(display.value);
      memoryStack.push(display.value);
    }
  } else if (clickedButtonValue === 'C') {
    // clear everything on display
    display.value = '';

  
  }else if (clickedButtonValue === "+/-"){
      display.value = (display.value)*-1;
      memoryStack.push(display.value);


  }else if (clickedButtonValue === "sqrt")
  
  {
      display.value = Math.sqrt(display.value);
      memoryStack.push(display.value);
  } 
  
  else if (clickedButtonValue === "%")
  {
      display.value = (display.value/100);
      memoryStack.push(display.value);
  }

  else if (clickedButtonValue === "MRC")
  {

    var num1;
    numClicks++;
    console.log("# clicks inside MRC",numClicks);
    console.log(event.details)
    var timer = setTimeout((
        function()
        {
          numClicks = numClicks;
          console.log(event.details);
        }),500);

    if (numClicks==2){
          clearTimeout(timer);
          display.value = '';
          console.log("dbl");
          numClicks = 0;
    }
    else{
      console.log("singl MRC");
        memoryStack.pop();
        num1 = memoryStack.pop();
        console.log(num1);
        numClicks++;
        display.value = "";
        display.value = num1;
        if (display.value==="undefined")
        {
            display.value="";
        }
        
    }
    numClicks = 0;
  }
  else if (clickedButtonValue === "M-")
  {
      x = memoryStack.pop();
      y = memoryStack.pop();
      display.value = eval(y+"-"+x);
      memoryStack.push(y);
      memoryStack.push(x);
      memoryStack.push(display.value);
  }

  else if (clickedButtonValue === "M+")
  {
    x = memoryStack.pop();
    y = memoryStack.pop();
    display.value = eval(y+"+"+x);
    memoryStack.push(y);
    memoryStack.push(x);
    memoryStack.push(display.value);
  }

  else {
    // otherwise concatenate it to the display
    display.value += clickedButtonValue;
  }

  
  console.log(memoryStack);
}

  startUpCalculator();

}

main();

