const turns = 5;

function getRandomNumber(min, max) {
    let rand = Math.floor(Math.random() * (max - min));
    return Math.floor(rand);
}

function checkProgress() {
    const rand = getRandomNumber(0, 100);
    for (let i = 1; i <= turns; i++) {
        let counter = turns - i;

        let guess = getNumberMassege();

        if (guess < rand) {
            alert(`Недолет, введите число больше! Попыток осталось ${counter}`);
        } else if (guess > rand) {
            alert(`Перелет, введите число меньше! Попыток осталось ${ counter}`);
        } else {
            alert(`Вы угадали, на ${i} попытке`);
            break;
        }
    }
    alert('Игра закончена!' + '\n' + `Это было число ${rand}`);
}

checkProgress();

function getNumberMassege() {
    let guess = prompt('Угадайте число');
    if (validateMassege(guess)) {
        return +guess;
    }
    return -1;
}

function validateMassege(guess) {

    let valid = false;
    if (isNaN(guess)) {
        log('Введите число', 'error');
    } else if (guess == null) {
        log('Вы отменили', 'info');
    } else {
        valid = true;
    }
    return valid;
}

function log(message, type = null) {
    if (type == 'info') {
        console.info(message);
    } else if (type == 'error') {
        console.error(message);
    } else {
        console.log(message);
    }
}
