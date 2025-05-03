//Task15
let num1=prompt('Enter the First Number');
let num2=prompt('Enter the Seconed Number');
let op=prompt('Enter the Operation to clac');
switch(op)
{
    case '+':
        {
            console.log(`The Sum = ${num1+num2}`);
            break;
        }
    case '-':
        {
            console.log(`The Diffrence = ${num1-num2}`);
            break;
        }
    case '*':
        {
            console.log(`The Multiplication = ${num1*num2}`);
            break;
        }
    case '/':
        {
            console.log(`The Devision = ${num1/num2}`);
            break;
        }
    default:
         console.log('Wrong Choice Please Try Again');
}