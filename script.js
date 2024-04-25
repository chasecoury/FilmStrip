document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll('.grid-item img');
    var imageTexts = document.querySelectorAll('.image-text');


    images.forEach(function(image) {
        image.addEventListener('animationend', function() {

            image.style.opacity = 0;

            document.body.style.backgroundColor = 'white';
        });
    });


    imageTexts.forEach(function(imageText) {
        imageText.addEventListener('animationend', function() {
            imageText.style.opacity = 0;
        });
    });
});
