const accesskey = "kaF3h3F-b4D5gReKGccJ0K7srERrZoGOO0W6N0R80u4";

const form = document.getElementById("form");
const search = document.getElementById("search");
const searchBtn = document.getElementById("search-btn");
const showMore = document.getElementById("show-more");
const images = document.getElementById("images");


let keyword="";
let page = 1;


async function searchImage (){
    keyword= search.value;
    console.log(keyword);
    const url = `https://api.unsplash.com/search/photos?page=1$&query=${keyword}&client_id=${accesskey}&per_page=12`;

    const responce = await fetch(url);
    const data = await responce.json();
     console.log(data)
    
     if(page === 1){
        images.innerHTML = "";
    }
    const results = data.results;

    

    results.map((result)=>{

        const image = document.createElement('img');
        image.src = result.urls.small;
        const a = document.createElement('a');
        a.href = result.links.html;
        a.target = "_blank";

        a.appendChild(image);

        images.appendChild(a);


 
    })

      showMore.style.display = "block";


}

   form.addEventListener(
    "submit",
    (e)=>{
        e.preventDefault();
        page = 1;
        searchImage();
    }
   )

   showMore.onclick = function(){
    page++;
    searchImage()
   }