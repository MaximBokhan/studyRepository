// Задание 1
var Arr = [-1, 0, 2, 34, -2];
var newArr = [];

Arr.forEach(function(item) {
    if (item > 0) {
        newArr[newArr.length] = item;
    }      
});

console.log(newArr);

// Задание 2
var Arr = [-1, 0, 2, 34, -2];
var newArr = [];

function positive(Arr){
    Arr.forEach(function(item) {
        if (item > 0) {
            newArr[newArr.length] = item;
        }      
    });
return newArr[0];
};

positive(Arr);

// Задание 3
var str = 'толот';

function polindrom(str){
    var arr = str.split('');
    var clone = arr.slice(0);
    var a = clone.reverse().join();
    var b = arr.join();
    if (a == b) {
        return true;
    }else{
        return false;
        }
    }
polindrom(str);

// Задание 4
var str1 = 'кот';
var str2 = 'ток';

function anagr(str1, str2){
    var arr1 = str1.split('');
    var arr2 = str2.split('');
    function und(number) {
        if (number == undefined){
            return true;
        }
    };
    
    if (arr1.length == arr2.length) {
        for (var i = 0; i < arr1.length; i++) {
                for (var j = 0; j < arr2.length; j++){
                    if (arr1[i] == arr2[j]){
                        delete arr2[j]
                    }
                };
        } if (arr2.every(und)){
            return true;
            } else{
                 return false; 
                }
    } else{
        return false;
    }
} 
    
anagr(str1, str2);

// Задание 5
var newArr = [];

function divideArr (arr, number) {
    for (var i = 0; i < arr.length; i++){
        newArr[i] = arr.slice((i*number), (i*number) + number);
    }
    return newArr;
}
divideArr([1, 2, 3, 4], 2);