const galleryContainer = document.getElementById('galleryContainer');
const slides = document.querySelectorAll('.slide');
let currentSlideIndex = 0; // Starts on the first slide (index 0)

function scrollSlide(direction) {
    // 1. Calculate the new index
    let newIndex = currentSlideIndex + direction;

    // 2. Wrap the index for infinite scrolling (optional, but looks like your image does this)
    if (newIndex < 0) {
        newIndex = slides.length - 1; // Go to last slide
    } else if (newIndex >= slides.length) {
        newIndex = 0; // Go to first slide
    }

    currentSlideIndex = newIndex;

    // 3. Get the target slide element
    const targetSlide = slides[currentSlideIndex];

    // 4. Scroll the container to the target slide's position
    // alignToCenter: true is important for centering the snap point
    targetSlide.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
}

// Ensure the gallery starts centered on load (optional)
window.addEventListener('load', () => {
    // Scroll to the second slide (index 1) on load to show the 3-image view properly
    slides[1].scrollIntoView({ behavior: 'auto', block: 'nearest', inline: 'center' });
    currentSlideIndex = 1;
});


// Wait until the entire page content is loaded
window.addEventListener('load', function () {
    // Get the elements we need
    const galleryContainer = document.getElementById('galleryContainer');
    const firstSlide = document.getElementById('slide-1');

    // Check if the elements exist to avoid errors
    if (galleryContainer && firstSlide) {
        // Calculate the width of the first slide plus its horizontal margins (10px on each side)
        const scrollOffset = firstSlide.offsetWidth + 20;

        // Set the initial scroll position of the container
        galleryContainer.scrollLeft = scrollOffset;
    }
});