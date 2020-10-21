



let ul = document.querySelector('#ul');
ul.addEventListener('mousedown', function (e) {
    e.preventDefault();
})

ul.addEventListener('click', function (e) {
    console.log(e);

    if (e.target == this) {
        return false;
    }
    if (!e.ctrlKey) {
        clearSelected(Array.from(this.children).filter(i => i !== e.target));
    } 
    addSelected(e.target);
});

function clearSelected(elems) {
    for (let elem of elems) {
        console.log(elem.classList.remove('selected'));
    }
}

function addSelected(target) {
    target.classList.toggle('selected');
}





let createLi = document.createElement('li');
let menu = document.querySelector('#menu');
 let arrayTask = ['Убрать дома', 'Почитать книгу', 'Послушать музыку', 'Поиграть с братом', 'Сходить на курсы'];
let rand=arrayTask[Math.floor(arrayTask.length * Math.random())];
// let modal = document.getElementById('openModal');
class Menu {
    constructor(elem) {
      this._elem = elem;
    elem.onclick = this.onClick.bind(this); // (*)

    }

    addToTheBeginning() {
      createLi.textContent=`${rand}`;
    ul.prepend(createLi);
   // modal.classList.add('open');
    }

    addToTheEnd() {
        createLi.textContent=`${rand}`;
        ul.append(createLi);
    }

    removeLi() {

    }
    sortLi() {
        alert('ищу');
      }

    onClick(event) {
      let action = event.target.dataset.action;
      if (action) {
        this[action]();
      }
    };
  }

console.log(new Menu(menu));
  