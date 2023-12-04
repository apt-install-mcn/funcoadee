// document.addEventListener('DOMContentLoaded', function () {
//     var dropdownToggles = document.querySelectorAll('.dropdown-toggle');

//     dropdownToggles.forEach(function (toggle) {
//         toggle.addEventListener('click', function (event) {
//             var parent = this.parentElement;
//             var isActive = parent.classList.contains('show');

//             dropdownToggles.forEach(function (t) {
//                 t.parentElement.classList.remove('show');
//             });

//             if (!isActive) {
//                 parent.classList.add('show');
//             }

//             event.stopPropagation();
//         });
//     });

//     document.addEventListener('click', function (event) {
//         if (!event.target.matches('.dropdown-toggle')) {
//             dropdownToggles.forEach(function (toggle) {
//                 toggle.parentElement.classList.remove('show');
//             });
//         }
//     });
// });

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const scrolled = window.scrollY > 0;

    if (scrolled) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


