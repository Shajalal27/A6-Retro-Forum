
const allNews = async() =>{
    const respons = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`);
    const data = await respons.json();
    console.log(data);
   
    const postContainer = document.getElementById('post-container')
    postContainer.innerHTML = ''
    data.posts.forEach((item) =>{
        const div = document.createElement("div");
        div.classList.add("post-item");
        div.innerHTML = `
        <div class="bg-gray-100 p-8 rounded-lg border-2 border-gray-300 flex gap-14 w-[70%]">
            <div class="relative rounded-lg">
                <img class="w-44   " src="${item.image}" alt="">
                <div class="w-4 h-4 bg-green-600 border-2 border-gray-400 rounded-full absolute -top-2 -right-2"></div>
            </div>
            <div>
                <div class="flex gap-6">
                <h4>#${item.category}</h4>
                <p>Author:<h3>${item.author.name} </h3></p>
                </div>
                <h2 class="text-2xl font-bold py-3">${item.title}</h2>
                <p class="py-4">${item.description}</p>
                <hr>
                <div class="flex justify-between pt-4">
                    <div class="flex gap-4">
                      <img src="./images/tabler-icon-message-2.png" alt="">
                      <p>${item.comment_count
                      }</p>
                      <img src="./images/tabler-icon-eye.png" alt="">
                      <p>${item.view_count}
                      </p>
                      <img src="./images/tabler-icon-clock-hour-9.png" alt="">
                      <p>${item.posted_time
                      }min</p>
                    </div>
                    <div id ="mail-btn" onclick="emaiBtn()" class = "mail-item">
                        <img src="./images/email 1.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        `;
        postContainer.appendChild(div);
    });

}
    

const emaiBtn =(() =>{
    const mailItem = document.querySelectorAll(".mail-item")
    let postCount = 1;

    for(let index = 0; index < mailItem.length; index++ ){
        const post = mailItem[index];
        // console.log('click',post);

        post.addEventListener('click', function(){
            // const mailBtn = document.getElementById('mail-btn')
            const postCountvalue = document.getElementById('mail-btn');
            postCountvalue.innerText = postCount;
            postCount++;
        })

    }
    
});
emaiBtn()

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

const searchPostCategory = async() =>{
    const response = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts/=categoryName`);
    const data = await response.json();
    console.log(data.item)
}

searchPostCategory();



allNews()
loadLatestPost()

