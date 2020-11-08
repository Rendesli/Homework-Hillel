const url = 'https://jsonplaceholder.typicode.com/';
const photoUrl = 'photos';
let photoHistory = [];

let photContainer = document.querySelector('.photo-container');
let request = document.querySelector('#request');
let add = document.querySelector('#add');
let photoInput = document.querySelector('#photoInput');

request.addEventListener('click', main);
photoInput.addEventListener('keyup', (event) => {
    if (event.key === "Enter") {
        main()
    } else {
        event.preventDefault()
    }
});

async function main() {

    let id = photoInput.value;
    if (!isNaN(id)) {
        photoInput.disabled = true;

        let response = await fetch(`${url}${photoUrl}/${id}`);
        console.log(response);
        let data = await response.json();
        console.log(data);
        let {
            image
        } = await loadImage(data);
        console.log(image);
        photContainer.append(image);
        photoHistory.push(data);
        console.log(photoHistory);
        photoInput.disabled = false;
        photoInput.focus();

    }

}

function loadImage(data) {
    return new Promise(function (resolve, reject) {
        let image = new Image();
        image.src = data.url;
        image.onload = () => resolve({
            image,
            data
        });
        image.onerror = () => reject();
    })
}

let newPhoto = {
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952"
}

function addPhoto(imgObj) {
    imgObj = JSON.stringify(imgObj);
    fetch(`${url}${photoUrl}`, {
            method: 'PUT',
            body: imgObj
        })
        .then(res => {
            console.log(res);
        })
        .catch(error => {
            console.log(error);
        })
}

add.onclick = () => {
    addPhoto(newPhoto);
}
