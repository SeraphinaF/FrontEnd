let form = document.getElementById('form');
let button = document.getElementById('button');
let phone = window.matchMedia("screen and (min-width: 340px)");
let tablet = window.matchMedia("screen and (min-width: 720px)");
let laptop = window.matchMedia("screen and (min-width: 1100px)");

function displayForm(phone) {
    setTimeout(() => {
        if (form.style.display === 'none') {
            form.style.display = 'none';
        } else {
            form.style.display = 'block';
            button.style.display = 'none';
        }
    }, 100);
}

function displayForm(tablet) {
    setTimeout(() => {
        if (form.style.display === 'none') {
            form.style.display = 'none';
        } else {
            form.style.display = 'block';
            button.style.display = 'none';
        }
    }, 100);
}

function displayForm(laptop) {
    setTimeout(() => {
        if (form.style.display === 'none') {
            form.style.display = 'none';
        } else {
            form.style.display = 'block';
            button.style.display = 'none';
        }
    }, 100);
}




