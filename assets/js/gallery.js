// Gallery functionality for intro section

const $gallery = $('#intro .gallery');
const $slides = $('.slide');
const $dots = $('.navDot');
const viewCounts = Array($slides.length).fill(0);
let currentIndex = Math.floor(Math.random() * $slides.length);
let interval;

// Assign background images in HTML
$slides.each(function() {
    const bg = $(this).attr('galleryImage');
    if (bg) {
        $(this).css('background-image', `url(${bg})`);
    }
});

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

    function getRandomIndexExcluding(excludeIndex) {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * $slides.length);
        } while (newIndex === excludeIndex);
        return newIndex;
    }

    function nextSlide() {
        const nextIndex = getRandomIndexExcluding(currentIndex);
        goToSlide(nextIndex);
    }

    function startSlider() {
        interval = setInterval(nextSlide, 5000);
    }

    // Initialize
    goToSlide(0);
    startSlider();

    // Dot click handler
    $dots.on('click', function() {
        clearInterval(interval);
        goToSlide($(this).index());
        startSlider();
    });

    // Pause on hover
    $gallery.hover(
        () => clearInterval(interval),
        startSlider
    );
});