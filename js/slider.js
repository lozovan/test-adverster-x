function nextStep(slideNumber) {
    const allSlides = document.querySelectorAll('.slide');

    allSlides.forEach(slide => {
        slide.classList.remove('active');
    });

    const nextSlide = document.getElementById('slide-' + slideNumber);
    if (nextSlide) {
        nextSlide.classList.add('active');
        updateBackgrounds(slideNumber);
    } else {
        console.error('Слайд з номером ' + slideNumber + ' не знайдено');
    }
}


function loadImage(url) {
    return fetch(url, { method: 'GET', cache: 'no-cache' })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load image: ${url}, status: ${response.status}`);
            }
            return response.blob();
        })
        .then(blob => {
            const imgUrl = URL.createObjectURL(blob);
            return imgUrl;
        });
}

function updateBackgrounds(slideNumber) {
    const slides = document.querySelectorAll('.slide');

    slides.forEach(slide => {
        slide.style.setProperty('--background-left', 'none');
        slide.style.setProperty('--background-right', 'none');
    });

    switch (slideNumber) {
        case 1:
            slides[slideNumber - 1].style.setProperty('--background-left', 'var(--background-left-slide1)');
            slides[slideNumber - 1].style.setProperty('--background-right', 'var(--background-right-slide1)');
            break;
        case 3:
            slides[slideNumber - 1].style.setProperty('--background-left', 'var(--background-left-slide3)');
            slides[slideNumber - 1].style.setProperty('--background-right', 'var(--background-right-slide3)');
            break;
        default:
            console.warn('Невідомий номер слайду: ' + slideNumber);
            return; 
    }
}

