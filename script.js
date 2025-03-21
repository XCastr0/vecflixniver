document.addEventListener("DOMContentLoaded", () => {
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const movieList = document.querySelector(".movie-list");
    
    let scrollAmount = 0;
    const scrollStep = 200;
    
    nextButton.addEventListener("click", () => {
        movieList.scrollTo({ left: (scrollAmount += scrollStep), behavior: "smooth" });
    });
    
    prevButton.addEventListener("click", () => {
        movieList.scrollTo({ left: (scrollAmount -= scrollStep), behavior: "smooth" });
    });
    
    document.querySelectorAll(".movie-item").forEach(item => {
        item.addEventListener("mouseenter", () => {
            let video = item.querySelector(".preview");
            if (video) {
                video.play();
            }
        });
        item.addEventListener("mouseleave", () => {
            let video = item.querySelector(".preview");
            if (video) {
                video.pause();
                video.currentTime = 0;
            }
        });
    });
});
