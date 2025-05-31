// Gallery functionality for intro section

$(function() {
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

    function goToSlide(index) {
        $slides.removeClass('active').eq(index).addClass('active');
        $dots.removeClass('active').eq(index).addClass('active');
        currentIndex = index;
        viewCounts[index]++;
    }

    // "Fake" random swapping between each gallery image
    function getNextLeastViewedIndex() {
        const minViews = Math.min(...viewCounts);
        const candidates = viewCounts
            .map((count, index) => (count === minViews && index !== currentIndex ? index : -1))
            .filter(index => index !== -1);
        return candidates.length > 0
            ? candidates[Math.floor(Math.random() * candidates.length)]
            // Fallback if images are the same
            : currentIndex;
    }

    function nextSlide() {
        const nextIndex = getNextLeastViewedIndex();
        goToSlide(nextIndex);
    }

    function startSlider() {
        interval = setInterval(nextSlide, 5000);
    }

    // Initialize
    goToSlide(currentIndex);
    startSlider();

    // Dot click handler
    $dots.on('click', function() {
        clearInterval(interval);
        const index = $(this).index();
        goToSlide(index);
        startSlider();
    });

    // Pause on hover
    $gallery.hover(
        () => clearInterval(interval),
        startSlider
    );
});