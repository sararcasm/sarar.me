/*
	Big Picture by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$all = $body.add($header);

	// Breakpoints.
		breakpoints({
			xxlarge: [ '1681px',  '1920px' ],
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '1001px',  '1280px' ],
			medium:  [ '737px',   '1000px' ],
			small:   [ '481px',   '736px'  ],
			xsmall:  [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);

		// Auto-update copyright year.
			$('.currentYear').text(new Date().getFullYear());
		});

	// Touch mode.
		if (browser.mobile)
			$body.addClass('is-touch');
		else {

			breakpoints.on('<=small', function() {
				$body.addClass('is-touch');
			});

			breakpoints.on('>small', function() {
				$body.removeClass('is-touch');
			});

		}

	// Fix: IE flexbox fix.
		if (browser.name == 'ie') {

			var $main = $('.main.fullscreen'),
				IEResizeTimeout;

			$window
				.on('resize.ie-flexbox-fix', function() {

					clearTimeout(IEResizeTimeout);

					IEResizeTimeout = setTimeout(function() {

						var wh = $window.height();

						$main.each(function() {

							var $this = $(this);

							$this.css('height', '');

							if ($this.height() <= wh)
								$this.css('height', (wh - 50) + 'px');

						});

					});

				})
				.triggerHandler('resize.ie-flexbox-fix');

		}

	// Gallery.
	$window.on('load', function() {
	    var $gallery = $('.gallery');

	    $gallery.poptrox({
	        baseZIndex: 10001,
			useBodyOverflow: !breakpoints.active('<small'),
			usePopupEasyClose: !(browser.mobile || $body.hasClass('is-touch')),
	        overlayColor: '#1f2328',
	        overlayOpacity: 0.85,
	        usePopupDefaultStyling: false,
			usePopupCaption: !breakpoints.active('<small'),
	        popupLoaderText: '',
	        windowMargin: 50,
	        usePopupNav: !browser.mobile,

			onPopupOpen: function () {
				if (browser.mobile) {
					$('.poptrox-popup').off('click.open-img').on('click.open-img', 'img', function (e) {
						e.preventDefault();
						const src = $(this).attr('src');
						if (src) {
							window.location.href = src;
						}
					});
				}
			}
	    });

	    breakpoints.on('>small', function() {
	        $gallery.each(function() {
	            $(this)[0]._poptrox.windowMargin = 50;
	        });
	    });

	    breakpoints.on('<=small', function() {
	        $gallery.each(function() {
	            $(this)[0]._poptrox.windowMargin = 5;
	        });
	    });
	});

	// Data attributes: Get background images and positions
	$window.on('load', function () {
		$('[data-bg]').each(function () {
			var $this = $(this),
				bgUrl = $this.attr('data-bg');

			// Set background image
			if (bgUrl && bgUrl.trim() !== '') {
				$this.css('background-image', 'url(' + bgUrl + ')');

				// Preload the image
				$('<img/>').attr('src', bgUrl);
			}

			// Set background position
			var bgPosition = $this.attr('data-bg-position'); 
			if (bgPosition && bgPosition.trim() !== '') { 
				$this.css('background-position', bgPosition);
			}
		});
	});

	// Auto-sync social icons
	$(document).ready(function () {
		const $socialIcons = $('#social .icons').clone();
		$('#footer .icons').replaceWith($socialIcons);

		// Optional: Add footer-specific class for styling
		$('#footer .icons').addClass('footer-social');
	});

	// Section transitions.
		if (browser.canUse('transition')) {

			var on = function() {

				// Galleries.
					$('.gallery')
						.scrollex({
							top:		'30vh',
							bottom:		'30vh',
							delay:		50,
							initialize:	function() { $(this).addClass('inactive'); },
							terminate:	function() { $(this).removeClass('inactive'); },
							enter:		function() { $(this).removeClass('inactive'); },
							leave:		function() { $(this).addClass('inactive'); }
						});

				// Generic sections.
					$('.main.style1')
						.scrollex({
							mode:		'middle',
							delay:		100,
							initialize:	function() { $(this).addClass('inactive'); },
							terminate:	function() { $(this).removeClass('inactive'); },
							enter:		function() { $(this).removeClass('inactive'); },
							leave:		function() { $(this).addClass('inactive'); }
						});

					$('.main.style2')
						.scrollex({
							mode:		'middle',
							delay:		100,
							initialize:	function() { $(this).addClass('inactive'); },
							terminate:	function() { $(this).removeClass('inactive'); },
							enter:		function() { $(this).removeClass('inactive'); },
							leave:		function() { $(this).addClass('inactive'); }
						});

				// Contact.
					$('#contact')
						.scrollex({
							top:		'50%',
							delay:		50,
							initialize:	function() { $(this).addClass('inactive'); },
							terminate:	function() { $(this).removeClass('inactive'); },
							enter:		function() { $(this).removeClass('inactive'); },
							leave:		function() { $(this).addClass('inactive'); }
						});

			};

			var off = function() {

				// Galleries.
					$('.gallery')
						.unscrollex();

				// Generic sections.
					$('.main.style1')
						.unscrollex();

					$('.main.style2')
						.unscrollex();

				// Contact.
					$('#contact')
						.unscrollex();

			};

			breakpoints.on('<=small', off);
			breakpoints.on('>small', on);

		}

	// Events.
		var resizeTimeout, resizeScrollTimeout;

		$window
			.on('resize', function() {

				// Disable animations/transitions.
					$body.addClass('is-resizing');

				clearTimeout(resizeTimeout);

				resizeTimeout = setTimeout(function() {

					// Update scrolly links.
						$('a[href^="#"]').scrolly({
							speed: 1500,
							// offset: $header.outerHeight() - 1
						});

					// Re-enable animations/transitions.
						setTimeout(function() {
							$body.removeClass('is-resizing');
							$window.trigger('scroll');
						}, 0);

				}, 100);

			})
			.on('load', function() {
				$window.trigger('resize');
			});

})(jQuery);