    "use strict";
    let presenter = {
        askQuestion(question) {
            let options = "";
            for (let key in question.answerOptions) {
                options += `${key}: ${question.answerOptions[key]}\n`;
            }
            let answer = prompt(`${question.text}. Варианты ответа:\n${options}`);
            return answer === question.correctAnswerIndex;
        }
    };