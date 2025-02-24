document.addEventListener('DOMContentLoaded', function() {
    const size13Button = document.getElementById('size-13');
    const size15Button = document.getElementById('size-15');
    const productImage = document.getElementById('product-image');

    function selectSize(sizeButton, imagePath) {
        size13Button.classList.remove('selected');
        size15Button.classList.remove('selected');
        sizeButton.classList.add('selected');
        productImage.src = imagePath;
    }

    size13Button.addEventListener('click', function() {
        selectSize(size13Button, './img/large-hero-screen-size.jpg');
    });

    size15Button.addEventListener('click', function() {
        selectSize(size15Button, './img/large-hero-screen-size2.jpg');
    });

    // Seleccionar por defecto el botón de 13 pulgadas
    selectSize(size13Button, './img/large-hero-screen-size.jpg');
});
