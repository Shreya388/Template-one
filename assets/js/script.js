// Set the playback rate of the video to slow it down
const video = document.getElementById('background-video');

// Change navbar color on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


// When the user scrolls down 100px from the top of the page, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    let scrollTopButton = document.getElementById("scrollTopButton");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTopButton.style.display = "block";
    } else {
        scrollTopButton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
document.getElementById("scrollTopButton").addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Wait for the entire page to load
window.addEventListener("load", function () {
    // Hide the loader
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");

    if (loader) {
        loader.classList.add("fade-out");

        setTimeout(() => {
            loader.style.display = "none"; // Only apply style if loader exists
            if (content) {
                content.style.display = "block";
            }
        }, 500);
    } else {
        // If loader doesn't exist, just show the content
        if (content) {
            content.style.display = "block";
        }
    }
});

// for scrolling the animation
document.addEventListener('DOMContentLoaded', () => {
    // Initialize ScrollReveal
    ScrollReveal().reveal('.animate__animated', {
        reset: true, // Resets the animation when the element leaves and re-enters the viewport
        distance: '20px',
        duration: 1000,
        easing: 'ease-in-out'
    });
});


// for typing effect
document.addEventListener('DOMContentLoaded', function () {
    var typed = new Typed('#typed', {
        strings: ['Today', 'Tomorrow'],
        typeSpeed: 100,
        backSpeed: 20,
        loop: true
    });
});
