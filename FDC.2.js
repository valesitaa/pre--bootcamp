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
