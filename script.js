document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".carousel-container").forEach(container => {
        const prevButton = container.querySelector(".prev");
        const nextButton = container.querySelector(".next");
        const movieList = container.querySelector(".movie-list");

        const scrollStep = 300; // Distância a ser rolada a cada clique

        function updateButtons() {
            prevButton.style.display = movieList.scrollLeft > 0 ? "block" : "none";
            nextButton.style.display = 
                movieList.scrollLeft + movieList.clientWidth < movieList.scrollWidth ? "block" : "none";
        }

        nextButton.addEventListener("click", () => {
            movieList.scrollBy({ left: scrollStep, behavior: "smooth" });
            setTimeout(updateButtons, 300); // Espera a rolagem para atualizar
        });

        prevButton.addEventListener("click", () => {
            movieList.scrollBy({ left: -scrollStep, behavior: "smooth" });
            setTimeout(updateButtons, 300);
        });

        // Atualiza os botões quando a rolagem é feita manualmente
        movieList.addEventListener("scroll", updateButtons);

        // Inicializa a visibilidade dos botões
        updateButtons();
    });
});

document.querySelectorAll('.movie-item').forEach(item => {
    const img = item.querySelector('img');
    const video = item.querySelector('.preview');

    item.addEventListener('mouseover', () => {
        if (video) {
            video.style.opacity = '1';
            video.play();
        }
        if (img) {
            img.style.opacity = '0';
        }
    });

    item.addEventListener('mouseleave', () => {
        if (video) {
            video.style.opacity = '0';
            video.pause();
            video.currentTime = 0; // Reinicia o vídeo quando o mouse sai
        }
        if (img) {
            img.style.opacity = '1';
        }
    });
});

