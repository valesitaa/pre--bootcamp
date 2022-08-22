function hello() {
    console.log('hello');
}
hello();
console.log('Dojo');
//console.log imprime; hello
//console.log imprime; dojo

function hello() {
    console.log('hello');
    return 15;
}
var result = hello();
console.log('result is', result);
//console.log impeime; hello
//console.log imprime; result is, 15

/*----Diagrama en T-----

Variable                  Valor 
hello                       15
*/

function numPlus(num) {
    console.log('num is', num);
    return num+15;
}

//la funcion ingresa un numero, y le suma 15.
var result = numPlus(3);
console.log('result is', result);
//La funcion numPlus ingresa un numero 3 por lo cual le sumara 15 
//y el resultado es 18. 

/*----Diagrama en T-----

Variable                  Valor 
numPlus                     3
numPlus                    18
*/

var num = 15;
console.log(num);

function logAndReturn(num2){
   console.log(num2);   
   return num2;
}
//se agrega una funcion num2.
var result = logAndReturn(10);
console.log(result);
console.log(num);
//le asigna un valor de 10 a logAndReturn
//console.log; 15
//console.log;10
//console.log;10
//console.log;15

/*----Diagrama en T-----

Variable                  Valor
num                        15
num2                       10
*/ 
var num = 15;
console.log(num);



function timesTwo(num2){
   console.log(num2);   
   return num2*2;
}
var result = timesTwo(10);
console.log(result);
console.log(num);
/*console.log num = 15
ingresa funcion timestwo
se le asigna valor de 10 a la funcion timestwo
console.log num2 = 10 
console.log num2*2 = 20
console.log num = 15 */

/*----Diagrama en T-----

Variable                  Valor 
num                        15
num2                       10
num2                       20
*/

function timesTwoAgain(num) {
    console.log('num is', num);
    var y = num*2;
    return y;
}
var result = timesTwoAgain(3) + timesTwoAgain(5);
console.log('result is', result);

/* la var result nos pide que sumemos los valores de la funcion num 3+5
la variable y pide multiplicar num*2
  console.log 5, 3
  console.log result is, 16 
  
    ----Diagrama en T-----

Variable                  Valor 
result (num)               3+5
result (num)                8
 y                         8*2 
 result                    16
  */


  function sumNums(num1, num2) {  
    return num1+num2;
 }
 console.log(sumNums(2,3))
 console.log(sumNums(3,5))
/* la funcion pide sumar los numeros en el parentecis
console.log 5
console.log 8*/ 

function printSumNums(num1, num2) {
    console.log(num1);   
    return num1+num2;
 }
 console.log(printSumNums(2,3))
 console.log(printSumNums(3,5))
/*
console.log 2
console.log 5
console.log 3
console.log 8

*/ 

function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,5);
console.log('result is', result);
/*
la funcion nos precenta dos numeros que se suman 
y que luego se suman entre si para un reslutado final
console.log sum is 5
console.log sum is 8
console.log result is 13

----Diagrama en T-----

Variable                  Valor 
num1                       2,3
num1                        5 
num2                       3,5
num2                        8
result                    2,3+3,5
result                       13

*/

function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,sumNums(2,1)) + sumNums(sumNums(2,1),sumNums(2,3));
console.log('result is', result);
/*
console.log sum is 5
console.log sum is 3
console.log sum is 6
console.log sum is 3
console.log sum is 5
console.log sum is 8
Console.log result is 19

----Diagrama en T-----

Variable                  Valor 
sum                      num1+num2
result                     2+3
result                      3
result                     2,1
result                     2,1
result                     2,3
result                      19                      

 */