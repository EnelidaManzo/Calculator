var number1;
var number2;
var operation;

function variables(){
    //declaration of the variables 
    var result = document.getElementById("result");
    var reset = document.getElementById("reset");
    var sum = document.getElementById("sum");
    var rest = document.getElementById("rest");
    var multiply = document.getElementById("multiply");
    var divide = document.getElementById("divide");
    var equal = document.getElementById("equal");
    var one = document.getElementById("one");
    var two = document.getElementById("two");
    var three = document.getElementById("three");
    var four = document.getElementById("four");
    var five = document.getElementById("five");
    var six = document.getElementById("six");
    var seven = document.getElementById("seven");
    var eight = document.getElementById("eight");
    var nine = document.getElementById("nine");
    var zero = document.getElementById("zero");
 
//Events for the numbers
    zero.onclick= function(e) {
        result.textContent = result.textContent + "0";
    }
    one.onclick= function(e){
        result.textContent = result.textContent + "1";
    }
    two.onclick= function(e){
        result.textContent = result.textContent + "2";
    }
    three.onclick= function(e){
        result.textContent = result.textContent + "3";
    }
    four.onclick= function(e){
        result.textContent = result.textContent + "4";
    }
    five.onclick= function(e){
        result.textContent = result.textContent + "5";
    }
    six.onclick= function(e){
        result.textContent = result.textContent + "6";
    }
    seven.onclick= function(e){
        result.textContent = result.textContent + "7";
    }
    eight.onclick= function(e){
        result.textContent = result.textContent + "8";
    }
    nine.onclick= function(e){
        result.textContent = result.textContent + "9";
    }
    //operations
    rest.onclick= function(e){
        number1=result.textContent;
        operation = "-";
        clean();
    }
    divide.onclick= function(e){
        number1=result.textContent;
        operation = "/";
        clean();
    }
    multiply.onclick= function(e){
        number1=result.textContent;
        operation = "x";
        clean();
    }
    sum.onclick= function(e){
        number1=result.textContent;
        operation = "+";
        clean();
    }
    equal.onclick= function(e){
        number2 = result.textContent;
        resultOpe();
    }
    reset.onclick= function(e){
        erase();
    }
}
function resultOpe(){
    var resu=0;
    switch(operation){
        case"+":
        resu= parseFloat(number1) + parseFloat(number2);
        break;
        case"-":
        resu= parseFloat(number1)- parseFloat(number2);
        break;
        case"/":
        resu= parseFloat(number1)/ parseFloat(number2);
        break;
        case"x":
        resu= parseFloat(number1) * parseFloat(number2);
        break;
    }
    erase();
    result.textContent=resu;
}
function erase(){
    result.textContent="";
    number1=0;
    number2=0;
    operation="";
}
function clean(){
    result.textContent="";
}
