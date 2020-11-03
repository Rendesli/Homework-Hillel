import {
    Order,
    store
} from './class-Order.js';
import validateCheckbox from './validate.js';
window.onload = init;

function init() {
    let globDivClose = document.querySelector('.div-radio');
    let dataOfPizza = document.getElementById('data-of-pizza'); //form
    let orderPizza = document.querySelector('.but_zakaz'); //button
    let checkbox = document.getElementsByName('ingridient'); //ingridient
    let radioInput = document.getElementsByName('size');
    let modal = document.getElementById('openModal'); //подтвердить оплату
    let modal2 = document.getElementById('openModal2'); //оценка сервиса 
    let closeBut = document.querySelector('.close');
    let nextBut = document.querySelector('.next');
    let closeBut1 = document.querySelector('.close1');
    let nextBut1 = document.querySelector('.next1');
    let errorSpan = document.createElement('span');
    errorSpan.classList.add('message');
    let createSpanStatus = document.createElement('div');
    let order = {};

    orderPizza.onclick = function () {
        if (!validateCheckbox(checkbox)) {
            errorSpan.classList.add('error');
            errorSpan.textContent = 'Добавьте минимум 3 ингридиента!';
            dataOfPizza.append(errorSpan);
            return false;
        } else {
            errorSpan.classList.remove('error');
            let size = getSize(radioInput);
            let ingridient = getIngridients(checkbox);
            order = new Order({
                size,
                ingridient,
                status
            });
            globDivClose.classList.add('close');

            checkPaidForm().then((result) => {
                nextBut.onclick = function () {
                        modal.classList.remove('open');
                        checkOrderStatus().then((result) => {
                            orderCooking()
                            console.log(result);
                        }).catch((error) => {
                            console.log(error);
                        });
                        store.setItem(order);
                        console.log(store);
                    },
                    closeBut.onclick = function () {
                        modal.classList.remove('open');
                        globDivClose.classList.remove('close');
                        errorSpan.classList.add('error');
                        errorSpan.textContent = 'Вы отменили оплату!';
                        dataOfPizza.append(errorSpan);
                    }
                console.log(result);
            }, (error) => {
                console.log(error);
            })
        }
    }

    function checkPaidForm() {
        return new Promise((resolve, reject) => {
            modal.classList.add('open');
            setTimeout(() => {
                    resolve('success');
                }, 1000),
                setTimeout(() => {
                    reject(new Error('error'));
                }, 2000);
        })
    }

    closeBut1.onclick = function () {
        saidThanksForReview();
    }

    nextBut1.onclick = function () {
        saidThanksForReview();
    }

    function saidThanksForReview() {
        createSpanStatus.classList.add('check-status');
        createSpanStatus.textContent = 'Спасибо за Ваш отзыв!';
        modal2.classList.remove('open');
        document.body.append(createSpanStatus);
        setTimeout(closeTheThanksWindow, 2000);
    }

    function closeTheThanksWindow() {
        let review = document.getElementsByClassName('check-status');
        while (review[0]) {
            review[0].parentNode.removeChild(review[0]);
        }
        globDivClose.classList.remove('close');
    }

    let review = function () {
        modal2.classList.add('open');
        let paras = document.getElementsByClassName('check-status');
        while (paras[0]) {
            paras[0].parentNode.removeChild(paras[0]);
        }
    }

    let orderOnYou = function () {
        order.status = "delivered";
        createDiv("Курьер доставил пиццу");
        setTimeout(review, 1000);
    }

    let orderOnTheWay = function () {
        order.status = "coocked";
        createDiv("Курьер забрал пиццу")
        setTimeout(orderOnYou, 2000);
    }

    let orderCooking = function () {
        order.status = "ordered";
        createDiv("Пицца готовиться");
        setTimeout(orderOnTheWay, 3000);
    }


    function createDiv(text) {
        let div = document.createElement('div');
        document.body.append(div);
        div.textContent = text;
        div.classList.add('check-status');
    }

    function checkOrderStatus() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                    resolve('success');
                }, 1000),
                setTimeout(() => {
                    reject(new Error('error'));
                }, 2000);
        })
    }


    function getIngridients(checkbox) {
        let ingridient = [];
        for (let elem of checkbox) {
            if (elem.checked == true) {
                ingridient.push(elem.value)
            }
        }
        return ingridient;
    }

    function getSize(radioInput) {
        let size;
        for (let i = 0; i < radioInput.length; i++) {
            if (radioInput[i].checked == true) {
                size = radioInput[i].value;
                // console.log(size);
            }
        }
        return size;
    }
}
