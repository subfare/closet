document.addEventListener("DOMContentLoaded", () => {
    // Wait for the document to be ready
    setTimeout(() => {
        // Add the class to animate the doors opening
        document.querySelector('.closet-container').classList.add('opened');
    }, 500); // Delay the opening a little to create a better effect
    
    // Optionally, if you want to trigger content visibility after animation
    setTimeout(() => {
        document.querySelector('.main-content').style.display = 'block';
    }, 2500); // Wait until the doors are fully opened
});
