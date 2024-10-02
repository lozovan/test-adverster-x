function nextStep(slideNumber) {
    const allSlides = document.querySelectorAll('.slide');

    allSlides.forEach(slide => {
        slide.classList.remove('active');
    });

    const nextSlide = document.getElementById('slide-' + slideNumber);
    if (nextSlide) {
        nextSlide.classList.add('active');
        // Оновити фонові зображення для активного слайду
        updateBackgrounds(slideNumber);
    } else {
        console.error('Слайд з номером ' + slideNumber + ' не знайдено');
    }
}

function updateBackgrounds(slideNumber) {
    const slides = document.querySelectorAll('.slide');

    slides.forEach(slide => {
        slide.style.setProperty('--background-left', 'none');
        slide.style.setProperty('--background-right', 'none');
    });

    switch (slideNumber) {
        case 1:
            slides[0].style.setProperty('--background-left', 'url(../img/girls/girl-slide1-l.svg)');
            slides[0].style.setProperty('--background-right', 'url(../img/girls/girl-slide1-r.svg)');
            break;
        case 3:
            slides[2].style.setProperty('--background-left', 'url(../img/girls/girl-slide3left.svg)');
            slides[2].style.setProperty('--background-right', 'url(../img/girls/girl-slide3right.svg)');
            break;
        // Якщо у вас з'являться інші слайди, ви можете додати їх сюди.
        default:
            console.warn('Невідомий номер слайду: ' + slideNumber);
            break;
    }
}
