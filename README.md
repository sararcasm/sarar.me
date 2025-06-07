# Sarar's Art Portfolio

Welcome to your new portfolio website! This guide will walk you through how to update and personalize your site's content.

All the changes described here can be made by editing the `index.html` file. I recommend using a text editor like [VS Code](https://code.visualstudio.com/) or [Sublime Text](https://www.sublimetext.com/) to do so.

## How to Update Your Website

You can use this guide to add content and make changes to your site. Guide sections:

* [Slideshow Images](#slideshow-images)
* [Gallery Art](#gallery-art)
* [Section Backgrounds](#section-background-images)
* [Header Navigation](#header-navigation)
* [Social Media Links](#social-media-links)
* [Contact Form](#contact-form)
* [Browser Icon (Favicon)](#favicon)

### Slideshow Images

The slideshow at the top of the website cycles through five images from the `/images/slideshow/` folder. For it to function properly, it **requires** exactly five images.

> [!NOTE]
> A subtle dark overlay is applied to these images to ensure the introductory text remains clear and readable.

**To change the images:**

1. Upload your new images to the `/images/slideshow/` folder.
2. In `index.html`, find this block of code:

```html
<div class="slide" slideshowImage="images/slideshow/YOUR_IMAGE_1.png"></div>
<div class="slide" slideshowImage="images/slideshow/YOUR_IMAGE_2.png"></div>
<div class="slide" slideshowImage="images/slideshow/YOUR_IMAGE_3.png"></div>
<div class="slide" slideshowImage="images/slideshow/YOUR_IMAGE_4.png"></div>
<div class="slide" slideshowImage="images/slideshow/YOUR_IMAGE_5.png"></div>
```

3. Replace `YOUR_IMAGE_1.png`, etc., with the exact filenames of your new images.

#### Fine-Tuning Image Position (Optional)

If a slideshow image seems awkwardly cropped, you can adjust its focus. Add the `slideshowImagePosition` attribute to change where the image is centered.

**Examples:**

```html
<div class="slide" slideshowImage="images/slideshow/YOUR_IMAGE.png" slideshowImagePosition="top center"></div>
<div class="slide" slideshowImage="images/slideshow/ANOTHER_IMAGE.png" slideshowImagePosition="center 25%"></div>
```

Common values are `top`, `center`, `bottom`, `left`, `right`. For a more in depth explanation and for further fine-tuning, read the documentation on [`background-position`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position).

### Gallery Art

Gallery images thumbnails are auto-cropped from the full image uploaded in `/images/gallery/`. Clicking on these thumbnails will display the full-sized image.

You may upload as many images as you want, but for best results, display an **even number of images**.

#### Gallery Art Captions

This is the main portfolio section. Clicking a thumbnail opens the full-sized image.

**To add a new piece to the gallery:**

1. Upload the full-sized image to the `/images/gallery/` folder.
2. In `index.html`, find the gallery section (it starts with `id="art"`).
3. Copy an existing `<article>...</article>` block and paste it to create a new entry.
    1. Update the new block with your image's information:
        1. Change both `href` and `src` to your new filename.
        2. Update the `title` to create the art's caption.
        3. Update the `alt` text with a brief accessibility description.
        4. **Optional:** Add external links in the caption with `data-caption-icons`.

```html
<article class="from-right">
    <a href="images/gallery/MY_COOL_IMAGE.png" class="image fit"
       data-caption-icons='[
           {"type": "instagram", "link": "https://example.com/instagram"},
           {"type": "tumblr", "link": "https://example.com/tumblr"},
       ]'>
       <img src="images/gallery/MY_COOL_IMAGE.png" title="All links!" alt="Accessibility description" />
    </a>
</article>
```
> [!TIP]
> For the best visual layout, display an **even number** of images in the gallery. `article` classes need to alternate between `from-right` and `from-left` for the gallery to function properly.

The gallery section of the `index.html` file includes all possible external link icons on every gallery piece. You can add multiple links to a piece, or none. Here are all available icon type options: `instagram`, `youtube`, `facebook`, `twitter`, `bluesky`, `mastodon`, `pinterest`, `vimeo`, `tumblr`, `linkedin`, `ko-fi`, `patreon`, `link` (a generic link icon), and `info`.

### Section Background Images

The "About Me" and "Social Media" sections can have background images.

1. Upload your image to the main `/images/` folder.
2. In `index.html`, find the `<section>` tag for either `id="me"` or `id="social"`.
3. Add your image's path to the `data-bg` attribute.

You can also use `data-bg-position` to adjust the focus, just like with slideshow images.

```html
<!-- About Me -->
<section id="me" data-bg="images/YOUR_IMAGE.png">
```

```html
<!-- Social Media -->
<section id="social" data-bg="images/YOUR_IMAGE.png" data-bg-position="top right">
```

### Header Navigation

These are the links that display at the very top of the page on desktop. Change these to anything.

```html
<li><a href="#me">About Me</a></li>
<li><a href="#art">My Art</a></li>
<li><a href="#social">Socials</a></li>
<li><a href="#contact">Contact Me</a></li>
<li><a href="https://example.com">External Link</a></li>
```

* Links starting with `#` will scroll to a section on the page.
* Links starting with `https://` will go to an external website.

### Social Media Links

In the "Socials" section, you can add links to your profiles. These will also automatically appear in the footer at the bottom of the page.

Common social media sites are included in the `index.html` by default. To add a new icon, find the `<a>` line that includes the social media site that you would like to link to, and change the `href` to your profile's URL.

If you would like to use an icon that is not present, search for it in the [Font Awesome 6 Free](https://fontawesome.com/search?ic=free) library, and then add its `<i>` code into the HTML.

### Contact Form

To enable the contact form, you need a free account from [Formspree](https://formspree.io/).

1. Sign up and create a "New Form" on Formspree. Give it a name like "Art Portfolio".
2. Formspree will give you a unique URL for your form. Copy it.
3. In `index.html`, find the `<form>` tag and paste your URL into the `action` attribute.

```html
<form method="post" action="https://formspree.io/f/example">
```

### Favicon 

A favicon is the small icon that appears in the browser tab.

1. Create a square image (512x512 for best results) to be your icon.
2. Use a free tool like [favicon.io](https://favicon.io/) to convert your image into a `.ico` file.
3. Upload the generated `favicon.ico` file in the main (root) folder of the website. Web browser will automatically detect it.

## License

This website was built by [@kitbur](https://github.com/kitbur) and uses assets from the "Big Picture" template by @ajlkn at [HTML5 UP](https://html5up.net), which is licensed under the [Creative Commons Attribution 3.0](https://creativecommons.org/licenses/by/3.0/).