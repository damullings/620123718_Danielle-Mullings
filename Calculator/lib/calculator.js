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
      }
      );

      

  }

  function updateClick(e)
  {
    numClicks=2;
  }

// calculate function
function calculate(event) {
  // current clicked buttons value
  const clickedButtonValue = event.target.value;


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
    if (numClicks == 0)
    {
        display.value = memoryStack.pop();
        display.value = memoryStack.pop();
        if (display.value==="undefined")
        {
            display.value="No items in memory";
        }
    }
    else if(numClicks == 2)
    {
      display.value = '';
      console.log("dbl");
      numClicks = 0;
    }    
      
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

