document.querySelectorAll('.article-preview .share-button').forEach(elem => {
    elem.addEventListener("click", event => {
        document.querySelector('.article-preview .footer').classList.toggle('sharing');
    });
});