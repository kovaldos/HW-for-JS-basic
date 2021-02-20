"use strict";
/*
6**. (Это задание не является частью курса, можете его не делать, оно для тех кому мало
обычных заданий, требует времени и возможно гугления, делайте по желанию.)
Программа должна спросить у пользователя число, это будет количество денег, которое он хочет
положить на счет в банке. Затем программа должна выдать примерно такое сообщение:
"Ваша сумма в 101 рубль успешно зачислена." - в случае если пользователь ввел 101
"Ваша сумма в 10020 рублей успешно зачислена." - в случае если пользователь ввел 10020
"Ваша сумма в 120104 рубля успешно зачислена." - в случае если пользователь ввел 120104
То есть ваша задача выводить слово «рубль» в правильном падеже, в зависимости от введенного
числа.
 */

/**
 * Переменная, в которую записывается запрошенная у пользователя сумма
 * @type {number} число, которое вводит пользователь
 */
let depo = +prompt("Введите сумму депозита");
/**
 * Переменная, которая принимает приведенную к строке сумму
 * @type {string} строка для дальнейшего обращения к её отдельным символам
 */
let strDepo = String(depo);
/**
 * Переменная, принимающая строку со значением последнего символа
 * @type {string} строка с последней цифрой введенной пользователем суммы
 */
let lastDigitOfDepo = strDepo.charAt(strDepo.length - 1);
/**
 * Переменная, принимающая строку со значением предпоследнего символа
 * @type {string} строка с предпоследней цифрой введенной пользователем суммы
 */
let beforeLastDigitOfDepo = strDepo.charAt(strDepo.length - 2)

/**
 * Функция, возвращающая соответствующий падеж слова "рубль"
 * @param strDepo приведенная к строке пользовательская сумма
 * @returns {string} строка "рубль" в нужном падеже
 */
function getRobleCases(strDepo) {

    if (lastDigitOfDepo == "1")
        return "рубль";
    else if (lastDigitOfDepo == "0" || beforeLastDigitOfDepo == "1")
        return "рублей";
    else if (lastDigitOfDepo == "2" || lastDigitOfDepo == "3" || lastDigitOfDepo == "4")
        return "рубля";
    else
        return "рублей";
}

alert(`Ваш депозит в сумме ${depo} ${getRobleCases(strDepo)} успешно зачислен.`);