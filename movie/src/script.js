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

// show dialog function
addMovieBtn.addEventListener("click", () => {
    popUp.showModal();
    // showModal() is the method that will display that dialog.
});

// cancel dialog function 
