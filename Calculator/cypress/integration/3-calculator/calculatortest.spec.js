context('Calculator',()=> {
    beforeEach( () => {
        cy.visit('index.html')
    })

    
    describe("General Functions",function(){

        //Test for Addition with one digit values
        it('Addition with one digit values - should return 7 for 4 + 3', function() {
            cy.contains('4').click(); //This is the button with value 4
            cy.get('#add').click(); //This is the addition button
            cy.contains('3').click(); //This is the button with value 3
            cy.get('#equal').click();
            cy.get('.display').should('have.value', '7');
        })

        //Test for Addition #2
        it('Addition with two digit values - should return 76 for 44 + 32', function() {
            cy.contains('4').click(); //This is the button with value 4            
            cy.contains('4').click(); //This is the button with value 4
            cy.get('#add').click(); //This is the addition button
            cy.contains('3').click(); //This is the button with value 3           
            cy.contains('2').click(); //This is the button with value 2            
            cy.get('#equal').click(); //This is the equal button
            cy.get('.display').should('have.value', '76');
        });



        //Test for Subtraction
        it('Subtraction - Should return 12 for 63 - 51', function() {
            cy.contains("6").click();//This is the button with value 6
            cy.contains("3").click(); //This is the button with value 3
            cy.get('#sub').click(); //This is the subtraction button
            cy.contains("5").click(); //This is the button with value 5
            cy.contains("1").click(); //This is the button with value 1
            cy.get('#equal').click(); //This is the equal button
            cy.get('.display').should('have.value', '12');
        });

        //Test for Subtraction #2 with negative numbers
        it("Test for Subtraction #2 with negative numbers: should return -1 for 84-85", function(){
            cy.contains("8").click(); //This is the button with value 8
            cy.contains("4").click();
            cy.get("#sub").click();
            cy.contains("8").click();
            cy.contains("5").click();
            cy.get('#equal').click(); //This is the equal button
            cy.get(".display").should("have.value","-1");
        })

        //Test for Multiplication with two positive numbers
        it('Multiplication with two positive numbers: should return 18 for 6 * 3', function() {
            cy.contains("6").click();//This is the button with value 6
            cy.get('#mul').click(); //This is the multiplication button
            cy.contains("3").click(); //This is the button with value 3
            cy.get('#equal').click(); //This is the equal button
            cy.get('.display').should("have.value",'18');
        });

        //Test for Multiplication with one negative number
        it('Multiplication with one negative number: should return -8 for -4 * 2', function() {
            cy.get("#sub").click();
            cy.contains("4").click();
            cy.get('#mul').click();
            cy.contains("2").click(); 
            cy.get('#equal').click();
            cy.get('.display').should("have.value",'-8');
        });

        ///Test for Multiplication with two negative numbers
        it('Multiplication with two negative numbers: should return 8 for -4 * -2', function() {
            cy.get("#sub").click();
            cy.contains("4").click();
            cy.get('#mul').click();
            cy.get("#sub").click();
            cy.contains("2").click(); 
            cy.get('#equal').click();
            cy.get('.display').should("have.value",'8');
        });

        //Test for Division
        it('Division: should return 20 for 100 / 5', function() {
            cy.contains("1").click();
            cy.contains("0").click();
            cy.contains("0").click();
            cy.get('#div').click();
            cy.contains("5").click(); 
            cy.get('#equal').click();
            cy.get('.display').should("have.value",'20');
        });

    })

    describe("Outliers or Identity Tests", function (){
        //Test for Division of Zero
        it('Division: return Infinity for 75/0', function() {
            cy.contains("7").click();
            cy.contains("5").click();
            cy.get('#div').click();
            cy.contains("0").click(); 
            cy.get('#equal').click();
            cy.get('.display').should("have.value",'Infinity');
        });

        //Test for Addition of Zero
        it('Addition of Identity - return 9 for 9+0', function() {
            cy.contains('9').click(); 
            cy.get('#add').click(); 
            cy.contains('0').click(); 
            cy.get('#equal').click();
            cy.get('.display').should('have.value', '9');
        })

        //Test for Subtraction of 0
        it('Subtraction of Identity - return 21 for 21-0', function() {
            cy.contains('2').click(); 
            cy.contains('1').click(); 
            cy.get('#add').click(); 
            cy.contains('0').click(); 
            cy.get('#equal').click();
            cy.get('.display').should('have.value', '21');
        })

        //Test for Multiplication by 0
        it('Multiplication by Identity - return 93 for 93*0', function() {
            cy.contains('9').click(); 
            cy.contains('3').click(); 
            cy.get('#mul').click(); 
            cy.contains('0').click(); 
            cy.get('#equal').click();
            cy.get('.display').should('have.value', '0');
        })
    })

    describe("Combined Functions",function(){

        //Test for Order of Mathematical Precedence PEMDAS
        it('PEMDAS - return -146 for 23-2*87+15/3 ', function () {
            cy.contains("2").click();
            cy.contains("3").click();
            cy.get("#sub").click();
            cy.contains("2").click();
            cy.get("#mul").click();
            cy.contains("8").click();
            cy.contains("7").click();
            cy.get("#add").click();
            cy.contains("1").click();
            cy.contains("5").click();
            cy.get("#div").click();
            cy.contains("3").click();
            cy.get('#equal').click();
            cy.get('.display').should("have.value",'-146');

        });

    
    })

    describe("Special Buttons/New Functionality",function(){

        //Test for Clearing Display
            it('Clearing Display: return blank for 71+3 C', function () {
                cy.contains('7').click(); 
                cy.contains('1').click(); 
                cy.get('#add').click(); 
                cy.contains('3').click(); 
                cy.get('#cancel').click();
                cy.get('.display').should('have.value', '');
            });
            
        //Test for MRC double click
        it('MRC double click - return blank for 71 MRC', function () {
            cy.contains('7').click(); 
            cy.contains('1').click(); 
            cy.get('#mrecall').click(); 
            cy.get('#mrecall').click(); 
            setTimeout(function(){},600);
            cy.get('.display').should('have.value', '');
        });

        //Test for MRC single click
        it('MRC single click - return 80 for 78 + 2 then MRC', function () {
            cy.contains('7').click(); 
            cy.contains('8').click(); 
            cy.get('#add').click(); 
            cy.contains('2').click(); 
            cy.get('#equal').click();
            cy.contains('7').click(); 
            cy.contains('8').click(); 
            cy.get('#add').click(); 
            cy.contains('3').click(); 
            cy.get('#equal').click();
            cy.get('#cancel').click();
            cy.get('#mrecall').click(); 
            //setTimeout(function(){},600);
            cy.get('.display').should('have.value', '80');
        });


         //Test for +/- single click
        it('+/- Single Click: return -8 for 8 then +/-', function () {
            cy.contains('8').click();  // This is the button with value 8
            cy.get('#sign').click();
            cy.get('.display').should('have.value', '-8');
        });

        //Test for +/- single click
        it('+/- Single Click #2: return 8 for -8 then +/-', function () {
            cy.get('#sub').click();
            cy.contains('8').click();  // This is the button with value 8
            cy.get('#sign').click();
            cy.get('.display').should('have.value', '8');
        });

        //Test for sqrt
        it('Square Root Test: return 2 for sqrt 4 ', function () {
            cy.contains('4').click();  // This is the button with value 8
            cy.get('#sqrt').click();
            cy.get('.display').should('have.value', '2');
        });

        //Test for sqrt 2
        it('Square Root Test #2: return NaN for sqrt -4 ', function () {
            cy.get('#sub').click();
            cy.contains('4').click();  // This is the button with value 8
            cy.get('#sqrt').click();
            cy.get('.display').should('have.value', 'NaN');
        });

        //Test for percentage
        it('Percentage: return 0.07 for 7 then %', function () {
            cy.contains('7').click();  // This is the button with value 8
            cy.get('#percent').click();
            cy.get('.display').should('have.value', '0.07');
        });
  
        //Test for percentage 2
        it('Percentage for Negative Numbers: return -80 for -8000 then %', function () {  
            cy.get('#sub').click();
            cy.contains('8').click();  
            cy.contains('0').click();  // This is the button with value 8
            cy.contains('0').click();  
            cy.contains('0').click();
            cy.get('#percent').click();
            cy.get('.display').should('have.value', '-80');
        });



    })

})
