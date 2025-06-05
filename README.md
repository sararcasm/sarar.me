# Sarar's Art Portfolio

A modern, responsive art portfolio website built for Sarar.

## Usage Guide

Most of this website's front-end functionality can be modified exclusively from the `index.html` file. 

### Slideshow Images

> [!IMPORTANT]  
> To keep the intro text readable, a **dark overlay** appears on top of the slideshow images, dimming them.

File path: `/images/slideshow/`

The slideshow will cycle through five images semi-randomly, prioritizing images that have not been shown recently. 

```html
<div class="slide" slideshowImage="images/slideshow/YOUR_IMAGE_1.png"></div>
<div class="slide" slideshowImage="images/slideshow/YOUR_IMAGE_2.png"></div>
<div class="slide" slideshowImage="images/slideshow/YOUR_IMAGE_3.png"></div>
<div class="slide" slideshowImage="images/slideshow/YOUR_IMAGE_4.png"></div>
<div class="slide" slideshowImage="images/slideshow/YOUR_IMAGE_5.png"></div>
```

#### OPTIONAL: Positioning Slideshow Images

By default, slideshow images center from the **middle** of the image and spread to fill the slideshow container. They might crop themselves in unintended ways. 

To manually change the position of a specific slideshow image, add the `slideshowImagePosition` attribute to the slide's HTML. This will change the image's [`background-position`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position) property.

```html
<div class="slide" slideshowImage="images/slideshow/YOUR_IMAGE.png" slideshowImagePosition="top center"></div>
<div class="slide" slideshowImage="images/slideshow/ANOTHER_IMAGE.png" slideshowImagePosition="center 25%"></div>
```

### Gallery Art

Gallery images thumbnails are auto-cropped from the full image uploaded in `/images/gallery/`. Clicking on these thumbnails will display the full-sized image.

You may upload as many images as you want, but for best results, display an **even number of images**.


#### Gallery Art Captions

Whatever text you put in the `title` attribute on the image tag will render as the image's caption. 

`data-caption-icons` allows you to add custom links to each image in the gallery. This attribute is **optional**. Below is an example that contains all of the icons you can add. 

```html
<article class="from-right">
    <a href="images/gallery/MY_COOL_IMAGE.png" class="image fit"
       data-caption-icons='[
           {"type": "instagram", "link": "https://example.com/instagram"},
           {"type": "youtube", "link": "https://example.com/youtube"},
           {"type": "facebook", "link": "https://example.com/facebook"},
           {"type": "twitter", "link": "https://example.com/twitter"},
           {"type": "pinterest", "link": "https://example.com/pinterest"},
           {"type": "vimeo", "link": "https://example.com/vimeo"},
           {"type": "tumblr", "link": "https://example.com/tumblr"},
           {"type": "linkedin", "link": "https://example.com/linkedin"},
           {"type": "ko-fi", "link": "https://example.com/ko-fi"},
           {"type": "patreon", "link": "https://example.com/patreon"},
           {"type": "link", "link": "https://example.com/link"},
           {"type": "info", "link": "https://example.com/infoicon"}
       ]'>
       <img src="images/gallery/MY_COOL_IMAGE.png" title="All links!" alt="Accessibility description" />
    </a>
</article>
```

### Section Background Images

The 'About Me' and 'Social Media' sections can have background images uploaded in `/images/`. They can optionally be positioned with `data-bg-position`, which modifies the [`background-position`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position) property.

```html
<!-- About Me -->
<section id="me" data-bg="images/YOUR_IMAGE.png">

...

<!-- Social Media -->
<section id="me" data-bg="images/YOUR_IMAGE.png" data-bg-position="top right">
```

### Header Navigation

These links can be changed to anything.

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


### Favicon 

Upload `favicon.ico` to the root directory `/`.

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