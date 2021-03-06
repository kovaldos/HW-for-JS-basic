    "use strict";

    const player = {
        x: 0,
        y: 0,
        /**
         * Объект отвечает за движение игрока
         * @param nextPoint Следующая точка движения игрока
         */
        move(nextPoint) {
            this.x = nextPoint.x;
            this.y = nextPoint.y;
        },
    };