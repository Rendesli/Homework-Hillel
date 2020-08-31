function randomInteger(min, max) {

    let rand = Math.floor(Math.random() * (max - min));

    function checkCounterGuess() {
        for (let i = 1; i <= 5; i++) {
            let counter = 5 - i;
            let guess = +prompt(' Попробуй угадать число от 0 до 100!');

            if (guess < rand) {
                alert(`Недолет, введите число больше! Попыток ${counter}`);
            } else if (guess > rand) {
                alert(`Перелет, введите число меньше! Попыток ${ counter}`);
            } else {
                alert(`Вы угадали, на ${counter} попытке`);
                break;
            }
        }
        alert('Игра закончена!' + '\n' + `Это было число ${rand}`);
    }
    checkCounterGuess();
    return Math.floor(rand);
}
console.log(randomInteger(0, 100));

