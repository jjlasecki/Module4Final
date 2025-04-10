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
    let searchData = await search.json();
    
    searchData.map(search => `<div class="search-card">
        <div class="search-card__container">
            <p>movie.title</p>
            <p><a href="https://posterurl.com"></a></p>
            <p><b>Year of Release:</b>9999</p>
        </div>
    </div>`)
    
}

results();