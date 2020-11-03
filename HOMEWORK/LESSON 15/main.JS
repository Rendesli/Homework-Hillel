let boxSize = 32;
let borderSize = 2;
let gridCount = 13;

let speed = 1000;

let processGame;
let snake = createSnakeData(Math.floor(gridCount / 2), Math.floor(gridCount / 2), 5);
let food = createFood();
let direction = 'left';

let gridContainer;
let messageBox;
let score;

let startBtn;
let endBtn;

document.addEventListener('DOMContentLoaded', init);
document.addEventListener('keydown', snakeHandler);

function snakeHandler(event) {
    updateDirection(event);
}

function startHandler(event) {
    startGame();

    let score = find('.score > b');
    let endBtn = document.getElementById('end-game');

    score.textContent = '0';

    event.currentTarget.style = 'display: none';
    endBtn.style = 'display: block';
}

function endHandler(event) {
    endGame();

    let startBtn = document.getElementById('start-game');

    event.currentTarget.style = 'display: none';
    startBtn.style = 'display: block';
}

function updateDirection(event) {
    if (event.keyCode == 37 && direction != 'right')
        direction = 'left';
    if (event.keyCode == 38 && direction != 'down')
        direction = 'up';
    if (event.keyCode == 39 && direction != 'left')
        direction = 'right';
    if (event.keyCode == 40 && direction != 'up')
        direction = 'down';
}

function initSpeed() {
    [].forEach.call(speedOptions.children, (item) => {
        if (item.selected) {
            speed = item.value;
        }
    })
}

function init() {
    gridContainer = find('#snake-container');
    messageBox = find('#message');
    speedOptions = find('#stacked-state');
    score = find('.score > b');
    startBtn = document.getElementById('start-game');
    endBtn = document.getElementById('end-game');

    initGrid(gridCount, gridContainer);

    startBtn.addEventListener('click', startHandler);
    endBtn.addEventListener('click', endHandler);
}

function createSnakeData(cell, row, count) {
    let arr = [];
    for (let index = 0; index < count; index++) {
        arr.push({
            cell: cell + index,
            row
        })
    }
    return arr;
}

function createFood() {
    let food = new Image(boxSize - 7, boxSize - 7);
    food.setAttribute('src', 'https://github.com/vadkuze/group-19-08-2020-/blob/master/Lesson%2015/img/apple.png?raw=true');
    food.classList.add('snake-food');

    return food;
}

function startGame() {
    messageBox.textContent = 'Welcome to Snake';
    let randomBox = generateBoxForEat();
    initSpeed();

    updateSnake();
    processGame = setInterval(() => {
        let {
            cell,
            row
        } = noWallMode(snake[0]);

        switch (direction) {
            case 'left': {
                snake.unshift({
                    cell: cell - 1,
                    row
                })
            };
            break;
        case 'up': {
            snake.unshift({
                cell,
                row: row - 1
            })
        };
        break;
        case 'right': {
            snake.unshift({
                cell: cell + 1,
                row
            })
        };
        break;
        case 'down': {
            snake.unshift({
                cell,
                row: row + 1
            })
        };
        break;
        }

        snake.pop()
        updateSnake();
    }, speed);



    function updateSnake() {
        clearSnake();

        checkOnEated(randomBox.dataset);

        if (!checkOnTailCrush()) {
            for (const [index, snakePart] of snake.entries()) {
                let cell = findByCoords(snakePart.cell, snakePart.row);
                if (cell) {
                    if (index == 0) {
                        cell.classList.add('snake-head', 'snake');
                    } else {
                        cell.classList.add('snake-body', 'snake');
                    }
                }
            }
        }
    }

    function noWallMode(headSnake) {
        if (headSnake.cell <= -1) {
            headSnake.cell = gridCount;
        } else if (headSnake.cell >= gridCount) {
            headSnake.cell = -1;
        }

        if (headSnake.row <= -1) {
            headSnake.row = gridCount;
        } else if (headSnake.row >= gridCount) {
            headSnake.row = -1;
        }

        return headSnake;
    }

    function checkOnTailCrush() {
        let crushed = false;
        let headCell = snake[0].cell;
        let headRow = snake[0].row;

        for (let i = 1; i < snake.length; i++) {
            if (headCell == snake[i].cell && headRow == snake[i].row) {
                endGame();
                endBtn.style = 'display: none';
                startBtn.style = 'display: block';

                crushed = true;
            }
        }

        return crushed;
    }

    function checkOnEated(dataset) {
        let plusScore = Number.parseInt(score.textContent);

        if (snake[0].cell == dataset.cell && snake[0].row == dataset.row) {
            randomBox.removeChild(food);

            snake.push({
                cell: snake[snake.length - 1].cell + 1,
                row: snake[snake.length - 1].row
            });

            plusScore++;

            score.textContent = plusScore;

            randomBox = generateBoxForEat();
        }
    }

    function generateBoxForEat() {
        let cell = getRandomInt(0, gridCount);
        let row = getRandomInt(0, gridCount);
        let randomBox = findByCoords(cell, row);
        randomBox.append(food);
        return randomBox;
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
}

function endGame() {
    messageBox.textContent = 'Game Over!';
    let score = find('.score > b');
    score.textContent = '0';
    clearTimeout(processGame);
    clearSnake();
    food.remove();
    createSnakeData(Math.floor(gridCount / 3), Math.floor(gridCount / 2), 5);
}

function clearSnake() {
    let cells = gridContainer.querySelectorAll('.snake');
    for (const cell of cells) {
        cell.className = 'snake-cell';
    }
}

function initGrid(gridCount, target) {
    target.style.width = target.style.height = (boxSize * gridCount) + 'px';
    for (let index = 0; index < gridCount; index++) {
        target.append(createSnakeRow('snake-cell', gridCount, index));
    }
}

function createSnakeRow(snakeClass, gridCount, row) {
    let fragment = new DocumentFragment();
    for (let index = 0; index < gridCount; index++) {
        fragment.append(createSnakeCell(snakeClass, row, index))
    }

    return fragment;
}

function createSnakeCell(snakeClass, row, cell) {
    let div = document.createElement('div');
    div.classList.add(snakeClass);
    div.setAttribute('data-cell', cell);
    div.setAttribute('data-row', row);
    div.style.width = div.style.height = boxSize + 'px';
    return div;
}

function find(selector) {
    return document.querySelector(selector);
}

function findByCoords(cell, row) {
    return document.querySelector(`[data-cell = "${cell}"][data-row = "${row}"]`);
}