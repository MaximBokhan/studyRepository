// первое задание
do{
    var clientNumber = Number(prompt('Введите число', ''))
    } while (isNaN(clientNumber)==true);
    do{
    var sum = Number(prompt('Сколько прибавить к предыдущему результату?', ''))
    } while (isNaN(sum)==true);
    do{
    var difference = Number(prompt('Сколько отнять от предыдущего результата?', ''))
    } while (isNaN(difference)==true);
    do{
    var multiplication = Number(prompt('На сколько умножить предыдущий результат?', ''))
    } while (isNaN(multiplication)==true);
    do{
    var division = Number(prompt('На сколько разделить предыдущий результат?', ''))
    } while (isNaN(division)==true);
    var result = (clientNumber + sum - difference) * multiplication / division;
    alert('Формула: (' + clientNumber + '+' + sum + '-' + difference + ')*' + multiplication + '/' + division + '\n' + 'Результат: ' + result);
    // второе задание
    var login = prompt('Введите логин', '');
    if (login === 'Админ') {
        var password = prompt('Введите пароль', '')
        if (password === 'Черный Властелин') {
            alert('Добро пожаловать');
        }
        else {
            if (password === null) {
                alert('Вход отменен')
            }
            else {
                alert('Пароль неверен')
            }
        }
    }
    else {
        if (login === null) {
            alert('Вход отменен')
        }
        else {
            alert('Я Вас не знаю')
        }
    }
    // третье задание
    var message;

    if (login === 'Вася') {
        message = 'Привет';
    } else if (login === 'Директор') {
        message = 'Здравствуйте';
    } else if (login === '') {
        message = 'Нет логина';
    } else {
        message = '';
    }
    message = (login === 'Вася')?'Привет':(login === 'Директор')?'Здравствуйте':(login === '')?'Нет логина':'';
    // четвертое задание
    do {
        var surname = prompt('Введите фамилию', '')
        if (surname === null || surname.trim() === '') {
            alert('Ошибка! Попробуйте еще раз!')
        }
    } while (surname === null || surname.trim() === '');
    do {
        var name = prompt('Введите имя', '')
        if (name === null || name.trim() === '') {
            alert('Ошибка! Попробуйте еще раз!')
        }
    } while (name === null || name.trim() === '');
    do {
        var secondname = prompt('Введите отчество', '')
        if (secondname === null || secondname.trim() === '') {
            alert('Ошибка! Попробуйте еще раз!')
        }
    } while (secondname === null || secondname.trim() === '');
    do {
        var age = prompt('Введите возраст в годах', '')
        if (isNaN(age) === true || age < 10 || age > 110) {
            alert('Ошибка! Попробуйте еще раз!')
        }
    } while (isNaN(age) === true || age < 10 || age > 110);
    var sex = confirm('Ваш пол мужской?');
    var sex1 = (sex === true) ? 'мужской' : 'женский';
    // Создание переменной с текущей датой и прверка пенсионного возраста до момента его максимального увеличения (2022 год - 63 года)
    var now = new Date();
    var old;
    if (sex === true && age>62 && now.getFullYear() === 2020 || sex === false && age > 57 && now.getFullYear() === 2020) {
        old = 'да'
    } else {
        if (sex === true && age > 62.5 && now.getFullYear() === 2021 || sex === false && age > 57.5 && now.getFullYear() === 2021) {
            old = 'да'
        } else {
            if (sex === true && age > 63 || sex === false && age > 58) {
                old = 'да'
            } else {
                old = 'нет'
            }
        }
    };
    // Вычисление количества високосных годов
    var addDays = 0;
    for (i = now.getFullYear() - parseInt(age); i<=now.getFullYear(); i++){
        if ( i%4 == 0 ){
            ++addDays
        }
    }
        alert('Ваше ФИО: ' + surname + ' ' + name + ' ' + secondname + '\n'
            + 'Ваш возраст в годах: ' + age + '\n'
            + 'Ваш возраст в днях: ' + (365 * age + addDays) + '\n'
            + 'Через 5 лет вам будет: ' + (Number(age) + 5) + '\n'
            + 'Ваш пол: ' + sex1 + '\n'
            + 'Вы на пенсии: ' + old);