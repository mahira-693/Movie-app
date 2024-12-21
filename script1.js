const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=107a17bd";

const searchMovies = async (title) => {
const response = await fetch(`${API_URL}&s=${title}`);
const data = await response.json();
console.log(data);
return data;
};

// Get the search input and button elements
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

// Get the container element
const container = document.getElementById("movie-container");

// Add event listener to the search button
searchButton.addEventListener("click", () => {
  const title = searchInput.value.trim();
  if (title) {
    searchMovies(title).then((data) => {
      // Clear the container
      container.innerHTML = "";

      // Loop through each movie and create a card
      data.Search.forEach((movie) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const poster = document.createElement("img");
        poster.src = movie.Poster;
        poster.alt = movie.Title;

        const titleElement = document.createElement("h4");
        titleElement.textContent = movie.Title;

        const yearElement = document.createElement("p");
        yearElement.textContent = movie.Year;

      
        card.appendChild(poster);
        card.appendChild(titleElement);
        card.appendChild(yearElement);
        container.appendChild(card);
      });
    });
  } else {
    container.innerHTML = "<p>No results found.</p>";
  }
});
