document.addEventListener('DOMContentLoaded', function () {
    const slides = [
        {
            title: "Ваш путеводитель по миру русского искусства",
            description: "Окройте для себя тщательно подобранные коллекции, начинающих художников и эксклюзивные сведения о современной российской арт-сцене. Зарегистрируйтесь, чтобы узнать:",
            buttonText: "Зарегистрироваться",
            imageUrl: "/images/image.png"
        },
        {
            title: "Познакомьтесь с современными художниками из России и других стран",
            description: "Познакомьтесь с тщательно отобранными молодыми современными художниками. Откройте для себя смелые видения, уникальные стили и аутентичные голоса, формирующие мир современного искусства",
            buttonText: "Все художники",
            imageUrl: "/images/painting.jpg"
        },
        {
            title: "Откройте для себя современное Русское искусство",
            description: "Погрузитесь в мир русского искусства с тщательно отобранными работами ведущих художников",
            buttonText: "Все произведения",
            imageUrl: "/images/image.png"
        }
    ];

    const titleElement = document.querySelector('.slider-content h1');
    const descriptionElement = document.querySelector('.slider-content p');
    const buttonElement = document.querySelector('.slider-button');
    const imageElement = document.querySelector('.slider-image');
    const dots = document.querySelectorAll('.slider-dot');

    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        const slide = slides[index];
        titleElement.textContent = slide.title;
        descriptionElement.textContent = slide.description;
        buttonElement.textContent = slide.buttonText;
        imageElement.style.backgroundImage = `url('${slide.imageUrl}')`;

        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');

        currentSlide = index;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function startSlider() {
        slideInterval = setInterval(nextSlide, 3000); 
    }

    function resetInterval() {
        clearInterval(slideInterval);
        startSlider();
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            resetInterval();
        });
    });

    showSlide(0);
    startSlider();

    const sliderContainer = document.querySelector('.slider-container');
});