
function rotateSlides() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    let nextSlide;

    setInterval(() => {
        do {
            nextSlide = Math.floor(Math.random() * slides.length);
        } while (nextSlide === currentSlide);
        for (let i = 0; i < slides.length; i++) {
            if (i !== nextSlide) {
                slides[i].classList.remove('active');
            }
        }

        if (currentSlide !== nextSlide) {
            slides[nextSlide].classList.add('active');
            currentSlide = nextSlide;
        }
    }, 5000);
}
rotateSlides()

function toggleAnimation(animationClass, targetElements) {
    targetElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;

        if (elementTop < (window.innerHeight - 100) && elementBottom >= 0) {
            element.classList.remove(animationClass);
            element.classList.add('reset');
        }
        else if (element.classList.contains('reset')) {
            element.classList.remove('reset');
        }
        else {
            element.classList.add(animationClass);
            element.classList.remove('reset');
        }
    });
}
// Get the dropdown icon and the menu items
const dropDownIcon = document.querySelector('.drop-down');
const menuItems = document.querySelector('nav ul');

// Toggle the 'open' class when the dropdown icon is clicked
dropDownIcon.addEventListener('click', () => {
    menuItems.classList.toggle('open');
});

const animateUpElements = document.querySelectorAll('.animate-up');
const animateLeftElements = document.querySelectorAll('.animate-left');
const animateRightElements = document.querySelectorAll('.animate-right');

// Call toggleAnimation() once immediately after page load
toggleAnimation('animate-up', animateUpElements);
toggleAnimation('animate-left', animateLeftElements);
toggleAnimation('animate-right', animateRightElements);

window.addEventListener('scroll', () => {
    toggleAnimation('animate-up', animateUpElements);
    toggleAnimation('animate-left', animateLeftElements);
    toggleAnimation('animate-right', animateRightElements);
});