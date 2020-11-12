const url = 'https://jsonplaceholder.typicode.com/';
const postUrl = 'posts';
const commentsUrl = 'comments'
let postHistory = [];

let postString = document.querySelector('.post')
let request = document.querySelector('#request');
let postInput = document.querySelector('#postInput');
request.addEventListener('click', main);
postInput.addEventListener('keyup', (event) => {
    if (event.key === "Enter") {
        main()
    } else {
        event.preventDefault()
    }
});

function main() {
    let id = postInput.value;
    if (!isNaN(id)) {
        postInput.disabled = true;
    }
    getPostById(id).then(async dataPost => {
        let postId = id;
        console.log(dataPost)
        let data = await getCommentsByPostId(postId);
        console.log(data);
        let post = document.createElement('p');
        post.classList.add('postStyle');
        let comments = document.createElement('p')
        dataPost = convertToString(dataPost);
        data = convertToString(data);
        post.textContent = 'Post: ' + dataPost;
        comments.textContent = `Comments on post ${postId}: ` + data;
        postString.append(post);
        postString.append(comments);
        postHistory.push(dataPost, data);
        console.log(postHistory);
        postInput.disabled = false;
        postInput.focus();
    })
}

function convertToString(someData) {
    someData = JSON.stringify(someData);
    console.log(someData);
    return someData;
}

async function getPostById(id) {
    const response = await fetch(`${url}${postUrl}/${id}`);
    console.log(response);
    return response.json();

}

async function getCommentsByPostId(postId) {
    const response = await fetch(`${url}${postUrl}/${postId}/${commentsUrl}`);
    console.log(response);
    return response.json();
}