# Sarar's Art Portfolio

A modern, responsive art portfolio website built for Sarar.

## Usage Guide

Most of this website's front-end functionality can be modified exclusively from the `index.html` file. 

### Slideshow Images

File path: `/images/slideshow/`

The slideshow will cycle through five images semi-randomly, prioritizing images that have not been shown recently. 

HTML:

```html
<div class="slide" slideshowImage="images/slideshow/YOUR_IMAGE_1.png"></div>
<div class="slide" slideshowImage="images/slideshow/YOUR_IMAGE_2.png"></div>
<div class="slide" slideshowImage="images/slideshow/YOUR_IMAGE_3.png"></div>
<div class="slide" slideshowImage="images/slideshow/YOUR_IMAGE_4.png"></div>
<div class="slide" slideshowImage="images/slideshow/YOUR_IMAGE_5.png"></div>
```

### Gallery Art

Gallery images thumbnails are auto-cropped from the full image uploaded in `/images/gallery/`. Clicking on these thumbnails will display the full-sized image.

You may upload as many images as you want, but for best results, display an even number of images.

HTML:

```html
<article class="from-left">
    <a href="images/gallery/YOUR_IMAGE.png" class="image fit"><img src="images/gallery/YOUR_IMAGE.png" title="This title displays as a caption under the image" alt="Add an alt text description of the image for accessibility" /></a>
</article>

<article class="from-right">
    <a href="images/gallery/YOUR_IMAGE.png" class="image fit"><img src="images/gallery/YOUR_IMAGE.png" title="My amazing artwork" alt="Description of my amazing artwork" /></a>
</article>
```

### Section Background Images

The 'About Me' and 'Social Media' sections can have background images uploaded in `/images/`.

HTML:

```html
<!-- About Me -->
<section id="me" data-bg="images/YOUR_IMAGE.png">

...

<!-- Social Media -->
<section id="me" data-bg="images/YOUR_IMAGE.png">
```

### Header Navigation

These links can be changed to anything.

HTML:

```html
<li><a href="#me">About Me</a></li>
<li><a href="#art">My Art</a></li>
<li><a href="#social">Socials</a></li>
<li><a href="#contact">Contact Me</a></li>
<li><a href="https://example.com">External Link</a></li>
```

### Social Media Icons

All of the icons you add to this section will automatically populate in the website's footer, as well.

By default, any icon available in Font Awesome Free 5.15.4 should work.

## Features

- Fullscreen slideshow header with semi-random auto-cycling
- Responsive layout optimized for desktop and mobile
- Interactive, animated art gallery

## Technologies

- HTML5
- CSS3
- JavaScript
- jQuery

## License

This website contains components from Big Picture by @ajlkn at [HTML5 UP](https://html5up.net), and is licensed under [Creative Commons Attribution 3.0](https://creativecommons.org/licenses/by/3.0/).
