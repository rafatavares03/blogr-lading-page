document.querySelector('#menu-button').addEventListener('click', (e) => {
    e.target.classList.replace('open-menu', 'close-menu');

    document.querySelector('#menu').classList.add('isOpen');
});

document.querySelector('#menu').addEventListener('click', (e) => {
    const menuButton = document.querySelector('#menu-button');
    
    if (e.target === document.querySelector('.mobile-menu.isOpen')) {
        menuButton.classList.replace('close-menu', 'open-menu');
        
        e.target.classList.remove('isOpen');
        CloseDropdown();
    }
});

document.querySelector('#product').addEventListener('click', (e) => {
    const element = e.target;
    OpenDropdown(element);
});

document.querySelector('#company').addEventListener('click', (e) => {
    const element = e.target;
    OpenDropdown(element);
});

document.querySelector('#connect').addEventListener('click', (e) => {
    const element = e.target;
    OpenDropdown(element);
});



function OpenDropdown(element) {
    if(!element.classList.contains('active')) {
        const navParent = element.parentElement;
        const dropdown = navParent.lastElementChild;
        element.classList.add('active');
        dropdown.classList.add('open');
    } else {
        CloseDropdown();
    }
}

function CloseDropdown() {
    const contents = document.querySelectorAll('.menu-content');
    const dropdowns = document.querySelectorAll('.menu-dropdown');

    for( let i = 0; i < contents.length; i++) {
        if (contents[i].classList.contains('active')){
            contents[i].classList.remove('active');
        }
        
        if (dropdowns[i].classList.contains('open')) {
            dropdowns[i].classList.remove('open');
        }
    }
}