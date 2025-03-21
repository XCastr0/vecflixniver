/* script.js */
document.addEventListener("DOMContentLoaded", () => {
    const movieList = document.querySelector(".movie-list");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    
    nextButton.addEventListener("click", () => {
        movieList.scrollBy({ left: 200, behavior: "smooth" });
    });
    
    prevButton.addEventListener("click", () => {
        movieList.scrollBy({ left: -200, behavior: "smooth" });
    });
});