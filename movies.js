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
const title = localStorage.getItem("title");

async function onSearchChange(event) {
  const title = event.target.value;
  renderMovie(title);
}

async function renderMovie(title) {
  const title = await fetch(
    `https://www.omdbapi.com/?apikey=dcd04354&s=${title}`
  );
  const titleData = await title.json();
  searchListEl.innerHTML = titleData.map((title) => titleHTML(title)).join("");
}

function titleHTML(title) {
  return `
     <div class="search-card__container">
        <div class="card">
            <div class="title">${title.title}</div>
            <a href="${poster}" class="poster"></a>
            <div class="year">Year of Release: ${title.year} </div>
    </div>    
    `;
}

renderMovie();
