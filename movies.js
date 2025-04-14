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
const currentMovies = [];

document.addEventListener("DOMContentLoaded", function() {
const searchBarEl = document.querySelector("#searchBar");
if (searchBarEl) {
  searchBarEl.addEventListener("input", onSearchChange);
}

const filterEl = document.querySelector("#movieFilter");
if (filterEl) {
  filterEl.addEventListener("change", filterResults);
}
});

async function onSearchChange(event) {
  const searchTerm = event.target.value;
  renderMovie(searchTerm);
}
async function renderMovie(searchTerm = "") {
  try {
    const loadingEl = document.querySelector('.loading');
    if (loadingEl) loadingEl.style.display = 'block';
    
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=dcd04354&s=${searchTerm}`
    );
    
    const data = await response.json();
    console.log("API Response:", data);
    
    if (loadingEl) loadingEl.style.display = 'none';

    if (!data || data.Response === "False") {
      searchListEl.innerHTML = `<div class="no-results">No movies found. Try another search term.</div>`;
      return;
    }

    const limitedResults = data.Search.slice(0, 8);

    currentMovies.length = 0;
    currentMovies.push(...limitedResults);

    displayMovies(currentMovies);
} catch (error) {
  console.error("Error fetching movie data:", error);
  searchListEl.innerHTML = `<div class="error">Something went wrong. Please try again.</div>`;
  
  // Hide loading indicator
  const loadingEl = document.querySelector('.loading');
  if (loadingEl) loadingEl.style.display = 'none';
}
}
    
    function displayMovies(movie){
        searchListEl.innerHTML = movie.map((movie) => {
            return titleHTML(movie);
        }).join("");
    }

function titleHTML(movie) {
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

function filterResults(event) {
    const filterValue = event.target.value;

    if (!currentMovies.length) {
        return; 
    }

    let filteredMovies = [...currentMovies];

    if (filterValue === "LOW_TO_HIGH") {
        filteredMovies.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));
    } else if (filterValue === "HIGH_TO_LOW") {
        filteredMovies.sort((a, b) => parseInt(a.Year) - parseInt(b.Year));
    }

    displayMovies(filteredMovies);
}