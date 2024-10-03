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

function loadImage(url) {
    return fetch(url, { method: 'GET', cache: 'no-cache' })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.blob(); // Повертає blob-об'єкт
        })
        .then(blob => {
            const imgUrl = URL.createObjectURL(blob);
            return imgUrl; // Повертає новий URL
        });
}

function loadImage(url) {
    return fetch(url, { method: 'GET', cache: 'no-cache' })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.blob(); // Повертає blob-об'єкт
        })
        .then(blob => {
            const imgUrl = URL.createObjectURL(blob);
            return imgUrl; // Повертає новий URL
        });
}

function updateBackgrounds(slideNumber) {
    const slides = document.querySelectorAll('.slide');

    slides.forEach(slide => {
        slide.style.setProperty('--background-left', 'none');
        slide.style.setProperty('--background-right', 'none');
    });

    let leftImageUrl, rightImageUrl;

    switch (slideNumber) {
        case 1:
            leftImageUrl = '../img/girls/girl-slide1-l.svg';
            rightImageUrl = '../img/girls/girl-slide1-r.svg';
            break;
        case 3:
            leftImageUrl = '../img/girls/girl-slide3left.svg';
            rightImageUrl = '../img/girls/girl-slide3right.svg';
            break;
        default:
            console.warn('Невідомий номер слайду: ' + slideNumber);
            return; // Вихід, якщо номер слайду невідомий
    }

    loadImage(leftImageUrl).then(leftImgUrl => {
        slides[slideNumber - 1].style.setProperty('--background-left', `url(${leftImgUrl})`);
    });

    loadImage(rightImageUrl).then(rightImgUrl => {
        slides[slideNumber - 1].style.setProperty('--background-right', `url(${rightImgUrl})`);
    });
}
