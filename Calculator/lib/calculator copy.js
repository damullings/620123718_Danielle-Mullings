

  // select all the buttons
  const buttons = document.querySelectorAll('button');
  // select the <input type="text" class="display" disabled> element
  const display = document.querySelector('.display');

  // add eventListener to each button
  function startUpCalculator(){
    buttons.forEach(function(button) {
      button.addEventListener('click', calculate);
    });
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
        screen = display.value;
      }
    } else if (clickedButtonValue === 'C') {
      // clear everything on display
      display.value = '';
    } else if (clickedButtonValue === 'sqrt'){
      display.value = Math.sqrt(display.value);
    
    } else if (clickedButtonValue === '%') {
      display.value = display.value/100;
  
    } else if (clickedButtonValue === 'MRC') {
      if (count !== 2)
      {
        display.value = screen;
        count ++;
      } else 
      {
        screen = '';
        display.value = screen;
        count = 0;
      }
      //push twice to clear memory
  
    } else if (clickedButtonValue === 'M+') {
      screen = eval(screen + "+" + display.value);
      display.value = screen;
  
    } else if (clickedButtonValue === 'M-') {
      screen = eval(screen + "-" + display.value);
      display.value = screen;
  
    } else if (clickedButtonValue === '+/-') {
      if(display.value<0){
        display.value = Math.abs(display.value);
      }else{
        display.value = -Math.abs(display.value);
      }
    } else {
      // otherwise concatenate it to the display
      display.value += clickedButtonValue;
    }
  }

  startUpCalculator();


