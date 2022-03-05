/**
 * Unit Test for Pre-Existing Functionality of Calculatorß
 * 
 */


 describe('Calculator', function() {
    // adding the HTML layout for the tests
    beforeEach(function () {
        var fixture = '<div class="calculator">'+
        '<input type="text" id="display" class="display" disabled>'+
        '<div class="keys">'+
        '<div class="row">'+
          '<button value="7">7</button>'+
          '<button value="8">8</button>'+
          '<button value="9">9</button>'+
          '<button id="add" value="+" class="operator">+</button>'+
        '</div>'+
        '<div class="row">'+
          '<button value="4">4</button>'+
          '<button value="5">5</button>'+
          '<button value="6">6</button>'+
          '<button id="sub" value="-" class="operator">-</button>'+
        '</div>'+
        '<div class="row">'+
          '<button value="1">1</button>'+
          '<button value="2">2</button>'+
          '<button value="3">3</button>'+
          '<button id="mul" value="*" class="operator">*</button>'+
        '</div>'+
        '<div class="row">'+
          '<button id="cancel" value="C" class="operator">C</button>'+
          '<button id="zero" value="0">0</button>'+
          '<button id="div" value="/" class="operator">/</button>'+
          '<button id="equal" value="=" class="operator">=</button>'+
        '</div>'+
      '</div>'+
      '<div class="row">'+
      '<button id="sign" value="+/-" class="operator">+/-</button>'+
      '<button id="sqrt" value="sqrt" class="operator">√</button>'+
      '<button id="percent" value="%" class="operator">%</button>'+
    '</div>'+
    '<div class="row">'+
      '<button id="mrecall" value="MRC" class="operator">MRC</button>'+
      '<button id="mminus" value="M-" class="operator">M-</button>'+
      '<button id="mplus" value="M+" class="operator">M+</button>'+
    '</div>'+

    '</div>'
    //'<script type="text/javascript" src="lib/calculator.js"></script>' //enabling this removes clickability for some reason

    //insert HTML
    document.body.insertAdjacentHTML(
        'afterbegin', 
        fixture);
        main();
    
    });

    // remove the html fixture from the DOM
    afterEach(function() {
        document.body.removeChild(document.getElementsByClassName('calculator')[0]);
    });



  //Test for Addition with one digit values
  it('should return 7 for 4 + 3', function() {
    document.querySelectorAll("button")[4].click();//This is the button with value 4
    document.getElementById('add').click(); //This is the addition button
    document.querySelectorAll("button")[10].click(); //This is the button with value 3
    document.getElementById('equal').click(); //This is the equal button
    expect(document.getElementById('display').value).toBe('7');
  });

  //Test for Addition #2
  it('should return 76 for 44 + 32', function() {
    document.querySelectorAll("button")[4].click();//This is the button with value 4
    document.querySelectorAll("button")[4].click();//This is the button with value 4
    document.getElementById('add').click(); //This is the addition button
    document.querySelectorAll("button")[10].click(); //This is the button with value 3
    document.querySelectorAll("button")[9].click(); //This is the button with value 2
    document.getElementById('equal').click(); //This is the equal button
    expect(document.getElementById('display').value).toBe('76');
  });

  //Test for Subtraction
  it('should return 12 for 63 - 53', function() {
    document.querySelectorAll("button")[6].click();//This is the button with value 6
    document.querySelectorAll("button")[10].click(); //This is the button with value 3
    document.getElementById('sub').click(); //This is the subtraction button
    document.querySelectorAll("button")[5].click(); //This is the button with value 5
    document.querySelectorAll("button")[9].click(); //This is the button with value 2
    document.getElementById('equal').click(); //This is the equal button
    expect(document.querySelector('.display').value).toBe('11');
  });

  //Test for Subtraction #2 with negative numbers
  it('should return -1 for 6 - 7', function() {
    document.querySelectorAll("button")[6].click();//This is the button with value 6
    document.getElementById('sub').click(); //This is the subtraction button
    document.querySelectorAll("button")[0].click(); //This is the button with value 2
    document.getElementById('equal').click(); //This is the equal button
    expect(document.querySelector('.display').value).toBe('-1');
  });

  //Test for Multiplication with two positive numbers
  it('should return 8 for 4 * 2', function() {
    document.querySelectorAll("button")[4].click();//This is the button with value 4
    document.getElementById('mul').click(); //This is the multiplication button
    document.querySelectorAll("button")[9].click(); //This is the button with value 2
    document.getElementById('equal').click(); //This is the equal button
    expect(document.querySelector('.display').value).toBe('8');
  });

  //Test for Multiplication with one negative number
  it('should return 8 for -4 * 2', function() {
    document.getElementById('sub').click(); //This is the subtraction button
    document.querySelectorAll("button")[4].click();//This is the button with value 4
    document.getElementById('mul').click(); //This is the multiplication button
    document.querySelectorAll("button")[9].click(); //This is the button with value 
    document.getElementById('equal').click(); //This is the equal button
    expect(document.querySelector('.display').value).toBe('-8');
  });

  //Test for Multiplication with two negative numbers
  it('should return 8 for -4 * -2', function() {
    document.getElementById('sub').click(); //This is the subtraction button
    document.querySelectorAll("button")[4].click();//This is the button with value 4
    document.getElementById('mul').click(); //This is the multiplication button
    document.getElementById('sub').click(); //This is the subtraction button
    document.querySelectorAll("button")[9].click(); //This is the button with value 2
    document.getElementById('equal').click(); //This is the equal button
    expect(document.querySelector('.display').value).toBe('8');
  });

  //Test for Division
  it('should return 20 for 100 / 5', function() {
    document.querySelectorAll("button")[8].click();//This is the button with value 1
    document.getElementById('zero').click();//This is the button with value 0
    document.getElementById('zero').click();//This is the button with value 0
    document.getElementById('div').click(); //This is the addition button
    document.querySelectorAll("button")[5].click(); //This is the button with value 3
    document.getElementById('equal').click(); //This is the equal button
    expect(document.querySelector('.display').value).toBe('20');
  });
 
    //Test for Order of Mathematical Precedence PEMDAS
      it('return -146 for 23-2*87+15/3 ', function () {
        document.querySelectorAll("button")[9].click(); // This is the button with value 2
        document.querySelectorAll("button")[10].click(); // This is the button with value 3
        document.getElementById('sub').click(); //This is the subtraction button
        document.querySelectorAll("button")[9].click(); // This is the button with value 2
        document.getElementById('mul').click(); //This is the multiplication button
        document.querySelectorAll("button")[1].click(); // This is the button with value 8
        document.querySelectorAll("button")[0].click(); // This is the button with value 7
        document.getElementById('add').click(); //This is the addition button
        document.querySelectorAll("button")[8].click(); // This is the button with value 1
        document.querySelectorAll("button")[5].click(); //This is the button with value 5
        document.getElementById('div').click(); //This is the division button
        document.querySelectorAll("button")[10].click(); // This is the button with value 3
        document.getElementById('equal').click(); //This is the equal button
        expect(document.getElementsByClassName('display')[0].value).toBe('-146');
    });

    //Test for Division of Zero
    it('return Infinity for 75/0 ', function () {
        document.querySelectorAll("button")[0].click(); // This is the button with value 7
        document.querySelectorAll("button")[5].click(); //This is the button with value 5
        document.getElementById('div').click(); //This is the division button
        document.getElementById('zero').click(); //This is the division button
        document.getElementById('equal').click(); //This is the equal button
        expect(document.getElementsByClassName('display')[0].value).toBe('Infinity');
    });

    //Test for Addition of Zero
    it('return 8 for 8+0 ', function () {
        document.querySelectorAll("button")[1].click(); // This is the button with value 8
        document.getElementById('add').click(); //This is the addition button
        document.getElementById('zero').click(); //This is the addition button
        document.getElementById('equal').click(); //This is the equal button
        expect(document.getElementsByClassName('display')[0].value).toBe('8');
    });

    //Test for Subtraction of 0
    it('return 8 for 8+0 ', function () {
        document.querySelectorAll("button")[1].click(); // This is the button with value 8
        document.getElementById('sub').click(); //This is the subtraction button
        document.getElementById('zero').click(); //This is the addition button
        document.getElementById('equal').click(); //This is the equal button
        expect(document.getElementsByClassName('display')[0].value).toBe('8');
    });

    //Test for Multiplication by 0
    it('return 0 for 5*0 ', function () {
        document.querySelectorAll("button")[8].click(); // This is the button with value 1
        document.getElementById('mul').click(); //This is the division button
        document.getElementById('zero').click(); //This is the division button
        document.getElementById('equal').click(); //This is the equal button
        expect(document.getElementsByClassName('display')[0].value).toBe('0');
    });

    //Test for Clearing Display
    it('return for 71+3 C', function () {
        document.querySelectorAll("button")[0].click(); // This is the button with value 7
        document.querySelectorAll("button")[8].click(); // This is the button with value 1
        document.getElementById('add').click(); //This is the addition button
        document.querySelectorAll("button")[10].click(); // This is the button with value 3
        document.getElementById('cancel').click(); //This is the cancel button
        expect(document.getElementsByClassName('display')[0].value).toBe('');
    });

    //TESTS FOR NEW FUCNTIONALITY

    //Test for MRC double click
    it('return blank for 71 MRC', function () {
      document.querySelectorAll("button")[0].click(); // This is the button with value 7
      document.querySelectorAll("button")[8].click(); // This is the button with value 1
      document.getElementById('mrecall').click(); //This is the addition button
      document.getElementById('mrecall').click(); //This is the addition button
      expect(document.getElementsByClassName('display')[0].value).toBe('');
  });

 //Test for MRC single click
  it('return for 78 + 2 = then 3+4 = then MRC', function () {
    document.querySelectorAll("button")[0].click(); // This is the button with value 7
    document.querySelectorAll("button")[1].click(); // This is the button with value 8
    document.getElementById('add').click(); //This is the addition button
    document.querySelectorAll("button")[9].click(); // This is the button with value 2
    document.getElementById('equal').click(); //This is the equsl button
    document.getElementById('cancel').click(); //This is the cancel button
    document.querySelectorAll("button")[10].click(); // This is the button with value 3
    document.getElementById('add').click(); //This is the addition button
    document.querySelectorAll("button")[4].click(); // This is the button with value 4
    document.getElementById('equal').click(); //This is the equsl button
    document.getElementById('mrecall').click(); //This is the addition button
    expect(document.getElementsByClassName('display')[0].value).toBe('80');
}); 

 //Test for +/- single click
 it('return -8 for 8 then +/-', function () {
  document.querySelectorAll("button")[1].click(); // This is the button with value 8
  document.getElementById('sign').click(); //This is the sign button
  expect(document.getElementsByClassName('display')[0].value).toBe('-8');
});

//Test for +/- single click
it('return 8 for -8 then +/-', function () {
  document.getElementById('sub').click(); //This is the negative button
  document.querySelectorAll("button")[1].click(); // This is the button with value 8
  document.getElementById('sign').click(); //This is the sign button
  expect(document.getElementsByClassName('display')[0].value).toBe('8');
});

//Test for sqrt
it('return 2 for sqrt 4 ', function () {
  document.querySelectorAll("button")[4].click(); // This is the button with value 4
  document.getElementById('sqrt').click(); //This is the equsl button
  expect(document.getElementsByClassName('display')[0].value).toBe('2');
});

//Test for sqrt 2
it('return 2 for sqrt -4 ', function () {
  document.getElementById('sub').click(); //This is the negative button
  document.querySelectorAll("button")[4].click(); // This is the button with value 4
  document.getElementById('sqrt').click(); //This is the equsl button
  expect(document.getElementsByClassName('display')[0].value).toBe('NaN');
});

//Test for percentage
it('return 0.07 for 7 then %', function () {
  document.querySelectorAll("button")[0].click(); // This is the button with value 7
  document.getElementById('percent').click(); //This is the sqrt button
  expect(document.getElementsByClassName('display')[0].value).toBe('0.07');
});

//Test for percentage
it('return 80 for 8000 then %', function () {  
  document.getElementById('sub').click(); //This is the negative button
  document.querySelectorAll("button")[1].click(); // This is the button with value 8
  document.getElementById('zero').click(); //This is the zero button
  document.getElementById('zero').click(); //This is the zero button
  document.getElementById('zero').click(); //This is the zero button
  document.getElementById('percent').click(); //This is the sqrt button
  expect(document.getElementsByClassName('display')[0].value).toBe('-80');
});

});