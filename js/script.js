
const allNews = async() =>{
    const respons = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await respons.json();
    console.log(data.posts);

    const postContainer = document.getElementById('post-container')
    data.posts.forEach((item) =>{
        const div = document.createElement("div");
        div.classList.add("post-item");
        div.innerHTML = `
        <div id="post-item" class="border-2 border-red-300 flex gap-14 w-[70%]">
        <div class="relative rounded-lg">
            <img class="w-44 h-52 shadow-lg border-2 border-black " src="${data.posts.images}" alt="">
            <div class="w-8 h-8 bg-green-600 border-2 border-red-500 rounded-full absolute top-0 right-0"></div>
        </div>
        <div>
            <div class="flex gap-6">
            <h4>#Music</h4>
            <p>Author:<h3>${author.name} </h3></p>
            </div>
            <h2 class="text-2xl font-bold py-3">${data.posts.title}</h2>
            <p class="py-4">It’s one thing to subject yourself to ha Halloween costume mishap because, <br> hey that’s your prerogative</p>
            <div class="flex gap-4">
                <img src="./images/tabler-icon-message-2.png" alt="">
                <p>560</p>
                <img src="./images/tabler-icon-eye.png" alt="">
                <p>1568</p>
                <img src="./images/tabler-icon-clock-hour-9.png" alt="">
                <p>5min</p>
            </div>
        </div>
    </div>
        `;
        postContainer.appendChild(div);
    });

}


// const latestNews = async() =>{
//     const respons = await fetch(' https://openapi.programming-hero.com/api/retro-forum/latest-posts');
//     const data = await respons.json();
//     console.log(data)
// }

// latestNews();
allNews();