// Gallery functionality for intro section
$(function() {
    const $gallery = $('#intro .gallery');
    const $slides = $('.slide');
    const $dots = $('.navDot');
    let currentIndex = 0, interval;

    function goToSlide(index) {
        $slides.removeClass('active').eq(index).addClass('active');
        $dots.removeClass('active').eq(index).addClass('active');
        currentIndex = index;
    }

    function nextSlide() {
        goToSlide((currentIndex + 1) % $slides.length);
    }

    function startSlider() {
        interval = setInterval(nextSlide, 5000);
    }

    // Initialize
    goToSlide(0);
    startSlider();

    // Event handlers
    $dots.on('click', function() {
        clearInterval(interval);
        goToSlide($(this).index());
        startSlider();
    });

    $gallery.hover(
        () => clearInterval(interval),
        startSlider
    );
});