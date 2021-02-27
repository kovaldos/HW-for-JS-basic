"use strict";
/*
1.1
Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных видео
 -> 3 примеры наследования -> типы на es5 и es6), конструктор Product,
который принимает параметры name и price, сохраните
их как свойства объекта. Также объекты типа Product должны иметь
метод make25PercentDiscount, который будет
уменьшать цену в объекте на 25%. Имейте в виду,
что метод make25PercentDiscount не должен быть внутри
функции-конструктора, и также не нужно создавать
 ---> отдельный объект-прототип (как объект transport в уроке). <--
 Вот это последнее условие меня смутило. Но в итоге я все равно использовал прототип
 В чем разница между тем, что было на уроке (объект transport) и данным заданием?
 В том, что здесь мы задаем поведение, а там просто создаем отдельный объект?
 Или я все не так понимаю?
 */
    //Решение на ES5

    function Product(name, price) {
        this.name = name;
        this.price = price;
    }

    Product.prototype.make25PercentDiscount = function () {
        this.price *= 0.75;
    }

    const product1 = new Product("Phone", "100");

    product1.make25PercentDiscount ();
    console.log(product1);


    //Решение на ES6

    class Product2 {
        constructor(name, price) {
            this.name = name;
            this.price = price;
        }
        make25PercentDiscount = function () {
            this.price *= 0.75;
        }
    }
    const prod = new Product2("Tablet", "200");
    prod.make25PercentDiscount ();
    console.log(prod);