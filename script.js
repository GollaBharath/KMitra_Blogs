let posts = [{
    "title": "Keshav Memorial Institute of Technology",
    "image": "./images/kmit_img.png",
    "description" : "lorem",
    "author": "Bharath",
    "date": "15th June 2025",
    "tags": ["#KMIT", "#Filler", "#Trash"]
},
{
    "title": "My reasoning Behind this Stack",
    "image": "./images/stack.png",
    "description" : "lorem",
    "author": "Bharath",
    "date": "15th June 2025",
    "tags": ["#Me", "#Discussion", "#Filler"]
}]

posts.forEach((post) => {
    let blogpost = document.createElement("div");
    blogpost.classList.add("blog-post");
    let blogContent = document.createElement("div");
    blogContent.classList.add("blog-content");
    blogpost.appendChild(blogContent);
    blogContent.innerHTML = `<div class="tags"><p class="tag">${post.tags.forEach((tag) => tag)}</p></div>
    <h2>${post.title}</h2>
    <p>${post.description}</p>
    <div class="author"><em> - ${post.author}</em> • <i>${post.date}</i></div>`;
    let postImg = document.createElement("div");
    postImg.classList.add("post-img");
    blogpost.appendChild(postImg);
    postImg.innerHTML = `<img src="${post.image}">`;
    document.querySelector("main").appendChild(blogpost);
})