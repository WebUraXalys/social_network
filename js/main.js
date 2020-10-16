window.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.m-meny');
    const menu = document.querySelector('.menu-sidebar');
    const postButtonLike = document.querySelector('.like');
    const postButtonText = document.querySelector('.post-button-text');

    menuBtn.addEventListener('click', function() {
        menu.classList.toggle('active')
    });

    postButtonLike.addEventListener('click', function() {
        // console.log('eeeee');
        // postButtonText.classList.toggle('post-button-like-b');
        // const pat = createElement('path');

    })

});