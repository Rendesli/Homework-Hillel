function substringExists(str) {
    let lowerStr = str.toLowerCase();

    return lowerStr.includes('люблю');
}

alert(substringExists('Я люблю круассаны'));
alert(substringExists('мне нравятся апельсины'));
