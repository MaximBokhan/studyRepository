// Задание 1
var x;

do 
    x = prompt('Введите основание')
while
    (x===null || x.trim()==='' || isNaN(Number(x)));
var n;

do 
    n = prompt('Введите степень')
while
(n===null || n.trim()==='' || isNaN(Number(n)) || !Number.isInteger(Number(n)) || Number(n)<1);

function pow(x,n) {
    var result=1;

    for (i=1; i<=n; i++){
        result =result*x
    }
    return result;

}
console.log(pow(x,n));

// При помощи рекурсии

var x;

do 
x = prompt('Введите основание')
while
(x===null || x.trim()==='' || isNaN(Number(x)));
var n;

do 
n = prompt('Введите степень')
while
(n===null || n.trim()==='' || isNaN(Number(n)) || !Number.isInteger(Number(n)) || Number(n)<1);

console.log(pow(x,n));  

function pow(x,n) {
if(n===1){
    return x
} else{
    return x * pow(x, n - 1);
}
    }
// Задание 2
// 1-ый вариант
var n;

do 
n =prompt('Введите конец интервала');
while
(n===null || n.trim()==='' || isNaN(+n));

function sumTo (n){
var sum=1;

if (+n===1){
    return sum;
} if (+n>1){
      for(i=2; i<=(+n); i++){
        sum = sum+i;
      }
        return sum;

    //   Проверка отрицательного числа
  } for(i=(+n); i<1; i++){
        sum = sum+i;
  }
        return sum;
  
}

console.log(sumTo(n));

//  2-ой вариант
var n;

do 
    n =prompt('Введите конец интервала');
while
    (n===null || n.trim()==='' || isNaN(Number(n)));
    function sumTo (n){
        return (+n===1)? 1 : (+n>1)? (+n+sumTo (+n-1)) : (+n+sumTo (+n+1));

        }
console.log(sumTo(n));
// 3-й вариант ( S=(a1+an)/2*n )
var n;

do 
    n =prompt('Введите конец интервала');
while
    (n===null || n.trim()==='' || isNaN(+n));
    function sumTo (n){

    if (+n===1){
        return +n;

    } if (+n>1){
        return  (1+(+n))/2*(+n);

          }
            
      if (+n<1){
          return  (+n+1)/2*(-(+n)+2);

            }
    
    }
console.log(sumTo(n));
// Самый быстрый вариант, используя формулу арифметической прогрессии(выполняется только одно вычисление - итерация)
// Самый медленный вариант, используя рекурсию(создается дополнительный стек контекстов выполнения для каждого вызова функции, затем идет обращение к стеку в обратном порядке) 
// При помощи рекурсии посчитать sumTo(100000) нельзя - переполнение стека вызовов (Uncaught RangeError: Maximum call stack size exceeded).
// Задание 3
var arr = [5, 7, [4, [2], 8, [1, 3], 2], [9, []], 1, 8]

function treeSum(x){
var sum=0;

for(var i=0; i<x.length; i++){

    if(typeof(x[i])==='number' && !isNaN(x[i])){
        sum+=x[i]
    } if(typeof(x[i])==='object' && typeof(x[i].length) ==='number'){
        sum+=treeSum(x[i]);
    }
}
return sum;

}  


// function treeSum(x){
//     var sum=0;
//     for(var i=0; i<x.length; i++){
//         sum+=(x[i] === 'number') ? x[i] : treeSum(x[i]);
//     }
//     return sum;
// } 
console.log(treeSum(arr));