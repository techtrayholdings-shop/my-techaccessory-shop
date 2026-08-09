/* =========================================================
   TECHTRAY HERO SLIDESHOW
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const slides = document.querySelectorAll(".hero-slide");
    const dots = document.querySelectorAll(".hero-dot");

    const nextButton = document.getElementById("heroNext");
    const prevButton = document.getElementById("heroPrev");

    if (!slides.length) {
        return;
    }

    let currentSlide = 0;

    let slideTimer;


    /* =====================================================
       SHOW SLIDE
    ===================================================== */

    function showSlide(index) {

        slides.forEach(function (slide) {
            slide.classList.remove("active");
        });

        dots.forEach(function (dot) {
            dot.classList.remove("active");
        });


        if (index >= slides.length) {
            currentSlide = 0;
        }

        if (index < 0) {
            currentSlide = slides.length - 1;
        }


        slides[currentSlide].classList.add("active");

        if (dots[currentSlide]) {
            dots[currentSlide].classList.add("active");
        }

    }


    /* =====================================================
       NEXT SLIDE
    ===================================================== */

    function nextSlide() {

        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        showSlide(currentSlide);

        restartTimer();

    }


    /* =====================================================
       PREVIOUS SLIDE
    ===================================================== */

    function previousSlide() {

        currentSlide--;

        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }

        showSlide(currentSlide);

        restartTimer();

    }


    /* =====================================================
       DOT NAVIGATION
    ===================================================== */

    dots.forEach(function (dot, index) {

        dot.addEventListener("click", function () {

            currentSlide = index;

            showSlide(currentSlide);

            restartTimer();

        });

    });


    /* =====================================================
       ARROWS
    ===================================================== */

    if (nextButton) {

        nextButton.addEventListener(
            "click",
            nextSlide
        );

    }


    if (prevButton) {

        prevButton.addEventListener(
            "click",
            previousSlide
        );

    }


    /* =====================================================
       AUTOMATIC SLIDESHOW
    ===================================================== */

    function startTimer() {

        slideTimer = setInterval(
            nextSlide,
            6000
        );

    }


    function restartTimer() {

        clearInterval(slideTimer);

        startTimer();

    }


    /* =====================================================
       PAUSE WHEN MOUSE IS OVER HERO
    ===================================================== */

    const hero = document.getElementById("heroSlider");

    if (hero) {

        hero.addEventListener(
            "mouseenter",
            function () {

                clearInterval(slideTimer);

            }
        );


        hero.addEventListener(
            "mouseleave",
            function () {

                startTimer();

            }
        );

    }


    /* =====================================================
       TOUCH / SWIPE SUPPORT
    ===================================================== */

    let touchStartX = 0;

    let touchEndX = 0;


    if (hero) {

        hero.addEventListener(
            "touchstart",
            function (event) {

                touchStartX =
                    event.changedTouches[0].screenX;

            },
            { passive: true }
        );


        hero.addEventListener(
            "touchend",
            function (event) {

                touchEndX =
                    event.changedTouches[0].screenX;

                handleSwipe();

            },
            { passive: true }
        );

    }


    function handleSwipe() {

        const swipeDistance =
            touchEndX - touchStartX;


        if (Math.abs(swipeDistance) < 50) {
            return;
        }


        if (swipeDistance < 0) {

            nextSlide();

        } else {

            previousSlide();

        }

    }


    /* =====================================================
       START
    ===================================================== */

    showSlide(currentSlide);

    startTimer();

});