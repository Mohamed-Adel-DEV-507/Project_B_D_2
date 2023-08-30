    var number1 = 10;
    var number2 = 4;
    var sum = number1 + number2;
    var sub = number1 - number2;
    var mult = number1 * number2;
    var div = number1 / number2;
    var mod = number1 % number2;

    var message = `Frist Number is: ${number1}\nSecond Number is: ${number2}\n=================\nSum is: ${sum}\nSub is: ${sub}\nMult is: ${mult}\nDiv is: ${div}\nMod is: ${mod}`;


    document.getElementById("user").innerHTML = message
    console.log(message);
    