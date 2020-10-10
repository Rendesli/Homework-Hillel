window.onload=init;
class Order{
    shalter=[];
    constructor ({small,medium,big,tomato,salami,mushrooms,cheese,olives}){
     this.small=small,
     this.medium=medium,
     this.big=big,
     this.tomato=tomato,
     this.salami=salami,
     this.mushrooms=mushrooms,
     this.cheese=cheese,
     this.olives=olives
    }
    getOrder(data){
     Order.setOrder(new Order(data));
    }
    setOrder(pizza){
        console.log(pizza);
        Order.shalter.push(pizza);
        console.log(Order.shalter);
    }
 }
function init(){
    let dataOfPizza=document.getElementById('data-of-pizza');
    let orderPizza=document.querySelector('.but_zakaz');
    let checkbox =document.getElementsByName('ingridient')
    let errorSpan = document.createElement('span');
    errorSpan.classList.add('message');
   /*  let successSpan = document.createElement('span');
    successSpan.classList.add('message'); */

orderPizza.onclick=function(){
if(!validateCheckbox(checkbox)){
     errorSpan.classList.add('error');
            errorSpan.textContent = 'Заполните все поля!';
            dataOfPizza.append(errorSpan);
            return false;
}else{
    
    errorSpan.classList.remove('error');
    /* successSpan.classList.add('success');
    successSpan.textContent = `Ваш заказ состоит из ингридиентов ${ingridient} `;
    dataOfPizza.append(successSpan); */
}
}

function validateCheckbox(checkbox) {
    let valid = true;
    let count = 0;
    let ingridient=[];
    for (let elem of checkbox) {
        if (elem.checked == true) {
            count = count + 1;
           /*  ingridient.push(elem.value);
            console.log(ingridient); */
        }
    }
    if (count < 3) {
        valid = false;
    }
    return valid;
    
}



}
