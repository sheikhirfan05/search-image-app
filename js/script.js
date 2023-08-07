const accessKey = "O3F9O5qdbYNOsLVJP_Gjz-dXgm2_ZC32icvG9h_Lkbk";

const formEl = document.querySelector('form');
const inputEl = document.getElementById('search_input');
const searchResults = document.querySelector('.search_results');
const showMore = document.getElementById('show_more_button');

let inputData = "";
let page = 1;

async function searchImages() {
    inputData = inputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;

    if (page === 1) {
        searchResults.innerHTML = "";
    }

    results.forEach((result) => {
        // Create the main wrapper div for each search result
        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add('search_result');
    
        // Create an <img> element for the image
        const image = document.createElement('img');
        image.src = result.urls.small;
        image.alt = result.alt_description;
    
        // Create an <a> element for the image link
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description;
    
        // Append the image and link elements to the wrapper
        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
    
        // Append the wrapper to the search results container
        searchResults.appendChild(imageWrapper);
    });

    page++;

    if (page > 1) {
        showMore.style.display = "block";
    }
}

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    page = 1;
    searchImages();
});

showMore.addEventListener("click", () => {
    searchImages();
});

const list = document.getElementById('list');
const bars = document.querySelector('.bars');
const bar1 = document.querySelector('.bar1');
const bar2 = document.querySelector('.bar2');
const bar3 = document.querySelector('.bar3');

function myNav(){
    if(list.style.display == "none"){
        list.style.display = "flex";
        bars.style.height = '26px';
        bars.style.transform = 'rotate(45deg)';
        bar3.style.display = 'none';
        bar1.style.height = '100%';
        bar1.style.position = 'relative';
        bar1.style.left = '-1px';
        bar1.style.width = '2px';
        bar2.style.position = 'relative';
        bar2.style.height = '2px';
        bar2.style.bottom = '13px';

    }
    else{
        list.style.display="none";
        bars.style.height = '17px';
        bars.style.transform = 'none';
        bar3.style.display = 'block';
        bar1.style.height = '2px';
        bar1.style.position = 'relative';
        bar1.style.left = '0';
        bar1.style.width = '100%';
        bar2.style.position = 'relative';
        bar2.style.height = '2px';
        bar2.style.bottom = '0';
    }
}