https://www.omdbapi.com/?apikey=dcd04354&s=fast


window.onload = function() {
    let progressBar = document.getElementById("progress-bar");
    let width = 0;
    let interval = setInterval(frame, 100);

    function frame() {
        if (width >= 100) {
            clearInterval(interval);
        } else {
            width++;
            progressBar.style.width = width + '%';
        }
    }
}

async function main() {
    const movie = await fetch(`https://www.omdbapi.com/?apikey=dcd04354&s=fast`)
    const movieData =  await movie.json();
    const movieListEl = document.querySelector('.movie-list');
    console.log(movieData);
    movieListEl.innerHTML = movieData.map((movie) => movieHTML(movie)).join("");
}

main();


