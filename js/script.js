
const allNews = async() =>{
    const respons = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await respons.json();
    // console.log(data.posts);

    const postContainer = document.getElementById('post-container')
    data.posts.forEach((item) =>{
        const div = document.createElement("div");
        div.classList.add("post-item");
        div.innerHTML = `
        
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

const loadLatestPost = async() =>{
    const response = await fetch(' https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await response.json();
    // console.log(data);
   
    const latestPostContainer = document.getElementById("latest-post-container");
    data.forEach((item) =>{
        // console.log(item);
        const div = document.createElement("div");
        div.classList.add("latest-post-item");
        div.innerHTML = `
         <div id="latest-post-item" class="card w-96 h-[500px] bg-base-100 shadow-xl">
            <figure class = "object-cover h-[100%]"><img src="${item.cover_image}" alt="Shoes" /></figure>
            <div class="card-body">
            <div class="flex gap-6">
                <img src="./images/tabler-icon-message-2.png" alt="">
                <p>${item.author.posted_date
                    
                }</p>
            </div>
            <h2 class="card-title">${item.title
            }</h2>
            <p>${item.description
            }</p>
            <div class="flex gap-4 ">
                <div class=" w-[50px] h-[50px]">
                <img class="rounded-full "  src="${item.profile_image
                } " alt="">
                </div> 
                <div class="">
                <h4>${item.author.name
                }</h4>
                <p>${item.author.designation
                }</p>
                </div>
            </div>
            </div>
        </div>
        `;

        latestPostContainer.appendChild(div);
    });
   
}

loadLatestPost()