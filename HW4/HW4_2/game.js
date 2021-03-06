    /*
    2 и 3 задания практически полностью набраны под диктовку из ответов.
    Но. Я прохожусь в отладчике по точкам остановки,
    чтобы учиться понимать, как это работает. Пока понимание теории приходит
    долго и туго...
     */
    "use strict";

    let game = {
        run() {
            while (true) {
                //Получаем направление от игрока
                const direction = mover.getDirection();
                if (direction === null) {
                    console.log("Игра окончена");
                    return;
                }
                const nextPoint = mover.getNextPosition(direction);
                if (mover.playerCanMakeStep(nextPoint)) {
                renderer.clear();
                player.move(nextPoint);
                renderer.render();
                }
            }
        },

        init() {
            console.log("Ваше положение на поле обозначено как о.");
            renderer.render();
            console.log("Для старта игры введите game.run() и нажмите клавишу Enter");
        },

    };

    game.init();