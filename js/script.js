
const latestNews = async() =>{
    const respons = await fetch(' https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await respons.json();
    console.log(data.posts);

    const getPostId = document.getElementById('post-id');
}


latestNews();