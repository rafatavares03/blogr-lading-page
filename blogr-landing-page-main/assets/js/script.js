document.querySelector('#menu-button').addEventListener('click', (e) => {
    e.target.classList.replace('open-menu', 'close-menu');

    document.querySelector('#menu').classList.add('isOpen');
});

document.querySelector('#menu').addEventListener('click', (e) => {
    const menuButton = document.querySelector('#menu-button');

    if (e.target === document.querySelector('.mobile-menu.isOpen')) {
        menuButton.classList.replace('close-menu', 'open-menu');

        e.target.classList.remove('isOpen');
    }
})
