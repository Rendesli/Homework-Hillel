window.addEventListener('DOMContentLoaded', init);
let span = document.createElement('span');
span.classList.add('span');

function init() {
    let form = document.getElementById('form');



    let name = form.elements.name,
        email = form.elements.email,
        psw = form.elements.psw,
        pswrepeat = form.elements.pswRepeat;
    document.getElementById('btn').setAttribute("disabled", "true");
    form.oninput = function () {
        testingValidEmail(email);
        checkPasswordMatching(psw, pswrepeat);
        console.log(form.children);
        if (email.classList == 'novalidEmail' && psw.classList == 'validPSW') {
            document.getElementById('btn').removeAttribute("disabled");
        }
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
        email.classList.add('error');

    } else {
        email.classList.remove('error');

    }
}

function checkPasswordMatching(psw, pswrepeat) {
    if (psw.value !== pswrepeat.value) {
        psw.classList.add('error');
        pswrepeat.classList.add('error');

    } else {
        psw.classList.remove('error');
        pswrepeat.classList.remove('error');

    }


}