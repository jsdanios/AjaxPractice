const ajaxCall = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(json => console.log(json))
}

const ajaxCallPost10 = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/10")
    .then(response => response.json())
    .then(json => console.log(json))
}

const ajaxCallComment14 = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/14/comments")
    .then(response => response.json())
    .then(json => console.log(json))
}

const ajaxCallPost2 = () => {
    fetch("https://jsonplaceholder.typicode.com/posts?userId=2")
    .then(response => response.json())
    .then(json => console.log(json))
}

const ajaxNewPost = () => {
    fetch("https://jsonplaceholder.typicode.com/todos", {
        method: 'POST',
        body: JSON.stringify({
            title: 'new post',
            completed: true,
        }),
        headers: {
            "Content-type": "applications/json;charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(json => console.log(json))
}

const ajaxReplacePost14 = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/14', {
        method: 'PUT',
        body: JSON.stringify({
            title: 'new post',
            completed: false,
        }),
        headers: {
            "Content-type": "application/json;charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(json => console.log(json))
}

const ajaxUpdatePost14 = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/14', {
        method: 'PUT',
        body: JSON.stringify({
            title: 'new title',
        }),
        headers: {
            "Content-type": "application/json;charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(json => console.log(json))
}

const ajaxDeletePost14 = () => {
    fetch('http://jsonplaceholder.typicode.com/todos/14', {
        method: 'DELETE'
    })
    .then(document.getElementById("display").innerHTML = "Post deleted");
}

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");

btn1.addEventListener("click", ajaxCall);
btn2.addEventListener("click", ajaxCallPost10);
btn3.addEventListener("click", ajaxCallComment14);
btn4.addEventListener("click", ajaxCallPost2);
btn5.addEventListener("click", ajaxNewPost);
btn6.addEventListener("click", ajaxReplacePost14);
btn7.addEventListener("click", ajaxUpdatePost14);
btn8.addEventListener("click", ajaxDeletePost14);

fetch('http://jsonplaceholder.typicode.com/posts') 
    .then(res => res.json())
    .then(data => {
      var all = "";
      for (var i = 0; i < data.length; i++) {
        all += "<p>" + data[i].id + " " + data[i].title.link("https://jsonplaceholder.typicode.com/comments?postId=" + data[i].id) + "</p>";
        document.getElementById("data").innerHTML = all;
      }
    });
