let posts = [{
    "title": "Keshav Memorial Institute of Technology",
    "image": "./images/kmit_img.png",
    "description" : "When was this image taken? Where are all the trees lol.",
    "author": "Bharath",
    "date": "15th June 2025",
    "tags": ["#KMIT", "#Filler", "#Trash"]
},
{
    "title": "My reasoning Behind this Stack",
    "image": "./images/stack.png",
    "description" : "I considered vibe coding a really fancy website using React, NodeJS, Tailwindcss, and typescript. But then again i thougt it would be better to build the site from scratch. I did use docs and google but didn't use any AI to write the code for me. I did type all the code in here, so hope you like it :)",
    "author": "Bharath",
    "date": "15th June 2025",
    "tags": ["#Me", "#Discussion"]
}]

function displayPosts(posts) {
    if (posts.length == 0) {
        document.querySelector(".home").innerHTML = `
            <h2>There are no posts yet.</h2>
        `;
    }
    for (post of posts) {
        let blogPost = document.createElement("div");
        blogPost.classList.add("blog-post");
        blogPost.innerHTML = `
            <div class="blog-content">
                <div class="tags">
                    ${post.tags.map(tag => `<p class="tag">${tag}</p>`).join("")}
                </div>
                <h2>${post.title}</h2>
                <p>${post.description}</p>
                <div class="author"><em> - ${post.author}</em> • <i>${post.date}</i></div>
            </div>
            <div class="post-img">
                <img src="${post.image}">
            </div>
        `;
        document.querySelector(".home").appendChild(blogPost);
    }
}

displayPosts(posts);

function newpost(){
    form = document.querySelector(".newpost");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let title = document.querySelector("#title").value;
        let image = document.querySelector("#image").value;
        let description = document.querySelector("#description").value;
        let author = document.querySelector("#author").value;
        let date = document.querySelector("#date").value;
        let tags = document.querySelector("#tags").value;
        posts.push({
            "title": title,
            "image": image,
            "description" : description,
            "author": author,
            "date": date,
            "tags": tags.split(",")
        });
        form.reset();
    });
}