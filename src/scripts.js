document.getElementById('toggleButton').addEventListener('click', function() {
    const image = document.getElementById('toggleImage');
    const button = document.getElementById('toggleButton');

    console.log(image);
    console.log(button);
    if (image.src.includes('bruh.jpg')) {
        image.src = 'img/SHORDAN.jpg';
        button.textContent = 'Revert';
    } else {
        image.src = 'img/bruh.jpg';
        button.textContent = 'Enhance';
    }
});