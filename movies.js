//www.omdbapi.com/?apikey=dcd04354&

https: window.onload = function () {
  let progressBar = document.getElementById("progress-bar");
  let width = 0;
  let interval = setInterval(frame, 100);

  function frame() {
    if (width >= 100) {
      width = 0;
    } else {
      width++;
      progressBar.style.width = width + "%";
    }
  }
};


const searchListEl = document.querySelector(".search");

async function onSearchChange(event) {
  const searchTerm = event.target.value;
  renderMovie(searchTerm);
}

async function renderMovie(searchTerm = "") {
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=dcd04354&s=${searchTerm}`
    );
    
    const data = await response.json();
    console.log("API Response:", data);
    
    if (!data || data.Response === "False") {
      searchListEl.innerHTML = `<div class="no-results">No movies found. Try another search term.</div>`;
      return;
    }
    
    searchListEl.innerHTML = data.Search.map((movie) => {
      console.log("Movie data:", movie);
      return titleHTML(movie);
    }).join("");
  } catch (error) {
    console.error("Error fetching movie data:", error);
    searchListEl.innerHTML = `<div class="error">Something went wrong. Please try again.</div>`;
  }
}

function titleHTML(movie) {
  // Make sure we have valid data
  const posterUrl = movie.Poster && movie.Poster !== "N/A" 
    ? movie.Poster 
    : '/no_poster.png';
    
  return `
     <div class="search-card__container">
        <div class="card">
            <div class="title">${movie.Title || 'Unknown Title'}</div>
            <a class="poster">
              <img src="${posterUrl}" alt="${movie.Title || 'Movie poster'}">
            </a>
            <div class="year">Year of Release: ${movie.Year || 'Unknown'}</div>
        </div>    
     </div>
  `;
}