function ready(fn) {
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

function addActionsToFormButtons() {
    var form = document.querySelector('.form-container');

    form.open = function () {
        form.classList.remove('is-hidden');

        document.querySelector('.form__close-button').addEventListener('click', (event) => {
            event.preventDefault();
            form.classList.add('is-hidden');
        });
    };

    document.querySelector('.arrow-down').addEventListener('click', function (e) {
        e.preventDefault();
        form.open();
    });
}

ready(addActionsToFormButtons);


let navList = document.getElementById('js-menu');
let navBarLink = document.getElementById('js-navbar-toggle');

navBarLink.addEventListener('click', function () {

    navList.classList.toggle('active');
});