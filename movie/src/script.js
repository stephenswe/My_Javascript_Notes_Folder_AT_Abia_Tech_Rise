let movieList = [
  {
    id: 1,
    title: "Interstellar",
    genre: "Sci-Fi",
    year: 2014,
    rating: 8.7,
    poster: "https://picsum.photos/300/420?1",
    description: "Space adventure",
  },
  {
    id: 2,
    title: "The Dark Knight",
    genre: "Action",
    year: 2008,
    rating: 9.0,
    poster: "https://picsum.photos/300/420?2",
    description: "Batman vs Joker",
  },
  {
    id: 3,
    title: "The Pursuit of Happyness",
    genre: "Drama",
    year: 2006,
    rating: 8.0,
    poster: "https://picsum.photos/300/420?3",
    description: "Inspirational",
  },
  {
    id: 4,
    title: "Rush Hour",
    genre: "Comedy",
    year: 1998,
    rating: 7.5,
    poster: "https://picsum.photos/300/420?4",
    description: "Buddy cop",
  },
];
const addMovieBtn = document.querySelector("#addMovie");
const popUp = document.querySelector("dialog");
const closeBtn = document.querySelector("#cancel");
const movieSection = document.querySelector("#movie-grid");

// show Dialog function
addMovieBtn.addEventListener("click", () => {
  popUp.showModal();
});

// close dialog function
closeBtn.addEventListener("click", () => {
  popUp.close();
});

// movie render function

function render(movies = movieList) {
  movieSection.innerHTML = "";
  movies.forEach((m) => {
    const movieDiv = document.createElement("div");
    movieDiv.classList.add("card");
    movieDiv.innerHTML = `
    <img src=${m.poster} width=${500} height=${100} alt=${m.title}  class="object-cover"/>
    <div class="px-4 py-2">
    <h2 class="text-2xl font-bold">${m.title}</h2>
    <p>${m.description}</p>
    <p class="text-gray-600">${m.genre}</p>
    <p class="text-yellow-600">${m.rating}/10</p>
    <div class="flex justify-between items-center">
    <p>${m.year}</p>
    <button id="deleteBtn">Delete</button>
    </div>
    </div>`;

    // Delete button
    const deleteBtn=movieDiv.querySelector("#deleteBtn");
    deleteBtn.addEventListener("click", () => {
      render(movies.filter((x) => x.id !==m.id));
    })
    movieSection.append(movieDiv);
  });
}
render();

//Search function
const searchInput = document.querySelector("#search");
searchInput.addEventListener("input", (e) => {
  render(movieList.filter((m) =>m.title.toLowerCase().includes(e.target.value.toLowerCase()),
  ));
})