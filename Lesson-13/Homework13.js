const { join } = require("path");

// Задание 1
var arr = ['Вася', 'Лена', 'Вова'];

function getObj(arr){
    var newArr = arr.map(function (item) { 
        var a = item;
        return item = {name:a}
    });
    return newArr;
};
getObj(arr);

// Задание 2
var arr = ['00', '13', '24'];
function getTime(arr){
    var str = arr.reduce(function (time, item, i) { 
        return time + ' : ' + item;
    });
    return 'Текущее время : ' + str;
};
getTime(arr);

// Задание 3 (не совсем понял, что значит не "топорный" метод, надо было преобразовать строку в массив?)
var str = 'Шла САшА пО шоссе и сосала сушку';
var sum = 0;

for(var i=0; i < str.length; i++){
    
    if(str[i].toLowerCase() == 'а' || str[i].toLowerCase() == 'у' || str[i].toLowerCase() == 'о'
     || str[i].toLowerCase() == 'ы' || str[i].toLowerCase() == 'и' || str[i].toLowerCase() == 'э' 
     || str[i].toLowerCase() == 'я' || str[i].toLowerCase() == 'ю' || str[i].toLowerCase() == 'ё' 
     || str[i].toLowerCase() == 'е'){
        sum++;
    };
};
console.log(sum);

// Задание 4
var str = 'Привет, студент! Студент... Как дела, студент?';

function getText(str){
    var arr = str.split(/\?|\!|\./);
    for(var i = 0; i < arr.length; i++){
        var sum = 0;
        var cor = arr[i].length;

         if(arr[i] == ''){
                arr.splice(i, 1);
                continue;
            }
        for(var j = 0; j < cor; j++){
            var newStr = arr[i];

            if(newStr[j].toLowerCase() == 'а' || newStr[j].toLowerCase() == 'у' || newStr[j].toLowerCase() == 'о'
     || newStr[j].toLowerCase() == 'ы' || newStr[j].toLowerCase() == 'и' || newStr[j].toLowerCase() == 'э' 
     || newStr[j].toLowerCase() == 'я' || newStr[j].toLowerCase() == 'ю' || newStr[j].toLowerCase() == 'ё' 
     || newStr[j].toLowerCase() == 'е' || newStr[j].toLowerCase() == 'б' || newStr[j].toLowerCase() == 'в'
     || newStr[j].toLowerCase() == 'г' || newStr[j].toLowerCase() == 'д' || newStr[j].toLowerCase() == 'ж' 
     || newStr[j].toLowerCase() == 'з' || newStr[j].toLowerCase() == 'й' || newStr[j].toLowerCase() == 'к' 
     || newStr[j].toLowerCase() == 'л' || newStr[j].toLowerCase() == 'м' || newStr[j].toLowerCase() == 'н'
     || newStr[j].toLowerCase() == 'п' || newStr[j].toLowerCase() == 'р' || newStr[j].toLowerCase() == 'с' 
     || newStr[j].toLowerCase() == 'т' || newStr[j].toLowerCase() == 'ф' || newStr[j].toLowerCase() == 'х' 
     || newStr[j].toLowerCase() == 'ц' || newStr[j].toLowerCase() == 'ч' || newStr[j].toLowerCase() == 'ш' 
     || newStr[j].toLowerCase() == 'щ' || newStr[j].toLowerCase() == 'ь' || newStr[j].toLowerCase() == 'Ъ'){
        sum++;
    };
        }
        console.log(arr[i] +': Letters quantity is: ' + sum);
    }
};
getText(str);


