function validateCheckbox(checkbox) {
    let valid = true;
    let count = 0;
    // let ingridient = [];
    for (let elem of checkbox) {
        if (elem.checked == true) {
            count = count + 1;
        }
    }
    if (count < 3) {
        valid = false;
    }
    return valid;
}
