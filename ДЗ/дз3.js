//  Задание 1
var styles = ['Джаз','Блюз'];
styles.push('Рок-н-Ролл');
styles[styles.length-2] = 'Класика';
alert(styles.shift());
styles.unshift('Рэп','Регги');
// Задание 2
1.
    for(var i=2; i<=10; i+=2){
        console.log(i);
    }
2.
    for(var i=2; i<=10; i++){
        if (i%2===0){
            console.log(i);
        }
    }
3.
    for(var i=2; i<=10; i++){
        if (!(i & 1))
        console.log(i);   
    }
// Задание 3
var obj = {};
function keyInObj(object){
    var counterElem = 0;
    for (var k in obj){
        counterElem+=1;
    }
     if (counterElem===0){
         console.log(true)
     } else {console.log(false)}
} 
keyInObj(obj);
// Задание 4
var arr = [];
var sum = 0;
numUser = prompt('Введите значение')
while ( !(numUser===null || numUser.length === 0 || isNaN (Number(numUser) )) ) {
    arr.push(numUser)
    numUser = prompt('Введите значение')
}
for(var i=0; i<arr.length; i++){
    sum+=Number(arr[i])
}
console.log(sum)
// Задание 5
var arr = [];
do{
    var start = prompt('Введите начало интервала');
    var finish = prompt('Введите конец интервала');
}
while(Number(start)<=1 || Number(finish)<=1 || Number(start)>Number(finish) || isNaN(Number(finish)) || isNaN(Number(start)));
label: for (var i = Number(start); i<=Number(finish); i++){
            for (var j= 2; j<i; j++){
                if( i%j===0) continue label;
            }
       arr.push(i)
        }
console.log(arr);