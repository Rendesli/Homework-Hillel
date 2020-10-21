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



let menu = document.querySelector('#menu');
let arrayTask = ['Убрать дома', 'Почитать книгу', 'Послушать музыку', 'Поиграть с братом', 'Сходить на курсы', 'Помыть посуду', 'Погулять', 'Поиграть в игру', 'Выучить 10 слов на английском'];
let rand;

class Menu {
  constructor(elem) {
    this._elem = elem;
    elem.onclick = this.onClick.bind(this); // (*)
  }

  addToTheBeginning() {
    let createLi = document.createElement('li');
    addLi(createLi);
    ul.prepend(createLi);

  }

  addToTheEnd() {
    let createLi = document.createElement('li');
    addLi(createLi);
    ul.append(createLi);
  }

  removeLi() {
    let classSelected = document.querySelectorAll('.selected');
    classSelected.forEach(element => {
      element.remove();
    });
  }

  sortLi() {
    let classSelected = document.querySelectorAll('.selected');
    let array = Array.from(classSelected);
    array = array.sort((firstEl, secondEl) => firstEl.textContent > secondEl.textContent ? 1 : -1);
    [].forEach.call(ul.children, (elem) => {
      if (elem.classList.contains('selected')) {
        let ulSort = document.querySelector('#ulSort');
        let createLi = document.createElement('li');
        createLi.textContent = array.shift().textContent;
        ulSort.append(createLi);
      }
    });
  }

  onClick(event) {
    let action = event.target.dataset.action;
    if (action) {
      this[action]();
    }
  };
}

function addLi(createLi) {
  for (let i = 0; i < arrayTask.length; i++) {
    rand = arrayTask[Math.floor(arrayTask.length * Math.random())];
    createLi.textContent = rand;

  }
}
console.log(new Menu(menu));

