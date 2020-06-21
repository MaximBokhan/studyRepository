var obj = {name: 'Vasya', name1: 'Piotr', name2: 'Alex', name3: 'Piotr', name4: 'Alex'};
var temp={};

function change(input){
    // создаем объект с повторяющимися именами
    for (var key in input){
      if(input[key] in temp){
          temp[input[key]]++;
      }  else{
          temp[input[key]]=1;
        }
    }

    for (var key1 in temp){
        if(temp[key1]===1){
            delete temp[key1];
        }
    }

    // меняем ключи и значения
    for (var key3 in input){
        input[key3+'_length']=input[key3].length;
        delete input[key3];
    }

input['Duplicate values']=temp;
return input;

}
console.log(change(obj));



// 2-ая задача
function isRomantic(gender) {
    return (gender==='Мужской' || gender!=='Женский' && gender!=undefined && gender!=='Неизвестно')?
        false: (gender===undefined || gender==='Неизвестно')? alert('Неизвестно'): true;
}

console.log(isRomantic('Женский'));