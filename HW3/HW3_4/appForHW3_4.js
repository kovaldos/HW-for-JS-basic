'use strict';
/*
4. Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
1 Получить все товары, у которых есть фотографии, можете использовать метод filter https://mzl.la/2qROQkT
2 Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort
https://mzl.la/2Y79hbZ , как устроен sort можно посмотреть например здесь https://youtu.be/O2pusOp0gC0 или в
дополнительных видео в материалах урока.
 */

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];
//Решение 1
const productsWithPhotos = products.filter(function (item) {
    return item.photos !== undefined && item.photos.length > 0

})
console.log(productsWithPhotos);

//Решение 2

const productsPriceIncrease = products.sort(function (a, b) {
    return a.price - b.price;
})
console.log(productsPriceIncrease);

/*Как работает, мне понятно, за исключением одного.
Как метод понимает, что параметры коллбэк-функции относятся к нему.
К примеру во 2 решении параметры a и b.
Мне этот вопрос не давал покоя пока все доп видео смотрел, ибо там так повсюду.
Не понимаю привязку этих параметров, и соответственно, не могу запомнить.

 */