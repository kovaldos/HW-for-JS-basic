    "use strict";

    let game = {
        score: 0,
        nextQuestionIndex: 0,
        run() {
            if (!this.isQuetionExists()) {
                console.log(`Игра окончена. Ваш счет ${this.score}`);
                this.nextQuestionIndex = 0;
                this.score = 0;
                if (confirm("Хотите сыграть еще раз?")) {
                    this.run();
                }
                return;
            }
            let result = presenter.askQuestion(questions[this.nextQuestionIndex]);
            if (result) {
                this.score++;
            }
            this.nextQuestionIndex++;
            this.run();
        },
        isQuetionExists() {
            return questions[this.nextQuestionIndex] !== undefined;
        }

    };

    console.log("Для старта игры введите game.run() и нажмите клавишу Enter");