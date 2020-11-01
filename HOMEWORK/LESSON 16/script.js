window.addEventListener('DOMContentLoaded', init);
let span = document.createElement('span');
span.classList.add('span');
let inputEmail = document.getElementById('inputEmail');

function init() {
    let form = document.getElementById('form');

    console.log(form.children);

    let name = form.elements.name,
        email = form.elements.email,
        psw = form.elements.psw,
        pswrepeat = form.elements.pswRepeat;

    form.oninput = function () {
        testingValidEmail(email);
        checkPasswordMatching(psw, pswrepeat);
    }
    form.onsubmit = function (event) {
        event.preventDefault();
        let object = {};
        [].forEach.call(form.elements, (elem) => {
            if (elem.type != "submit") {
                object[elem.name] = elem.value;
            }
        })
        console.log(object);
    }
    console.log(name, email, psw, pswrepeat);

}

function testingValidEmail(email) {
    let regExp = /^(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})+$/;
    if (!regExp.test(email.value)) {
        document.getElementById('btn').setAttribute("disabled", "true");
        email.classList.add('error');
    } else {
        email.classList.remove('error');
        document.getElementById('btn').removeAttribute("disabled");
    }
}

function checkPasswordMatching(psw, pswrepeat) {
    if (psw.value !== pswrepeat.value) {
        psw.classList.add('error');
        pswrepeat.classList.add('error');
        document.getElementById('btn').setAttribute("disabled", "true");
    } else {
        psw.classList.remove('error');
        pswrepeat.classList.remove('error');
        document.getElementById('btn').removeAttribute("disabled");
    }


}