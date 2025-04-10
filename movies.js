https://www.omdbapi.com/?apikey=dcd04354&s=fast


window.onload = function() {
    let progressBar = document.getElementById("progress-bar");
    let width = 0;
    let interval = setInterval(frame, 100);

    function frame() {
        if (width >= 100) {
            width = 0;
        } else {
            width++;
            progressBar.style.width = width + '%';
        }
    }
}

async function results() {
    const search = await fetch("https://www.omdbapi.com/?apikey=dcd04354&s=fast")
    const searchData = await search.json();
    const results = searchData.Search;
    const searchListEL = document.querySelector('.search-list');
    searchListEL.innerHTML = searchData.Search.map((search) => searchHTML(search)).join("");
}

results();

function searchHTML(search) {
    return `<div class="search-card">
        <div class="search-card__container">
            <p>${search.title}</p>
            <p><a href="https://${search.poster}" target="_blank">
            ${search.poster}</a></p>
            <p><b>Year of Release:</b>${search.year}</p>
        </div>
    </div>`;
}


