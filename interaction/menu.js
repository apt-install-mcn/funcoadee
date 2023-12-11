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

let scrollpos = window.scrollY;
const navbar = document.querySelector("#navbar");
const header_height = navbar.offsetHeight;

const add_class_on_scroll = () => navbar.classList.add("scrolled", "shadow-sm");
const remove_class_on_scroll = () => navbar.classList.remove("scrolled", "shadow-sm");

window.addEventListener('scroll', function () {
  scrollpos = window.scrollY;

  if (scrollpos >= header_height) {
    add_class_on_scroll();
  } else {
    remove_class_on_scroll();
  }

  console.log(scrollpos);
});






 $(document).ready(function(){
     // Inicia el carrusel
     $('#carouselExampleIndicators').carousel();

     // Establece el intervalo para el cambio automático
     $('#carouselExampleIndicators').carousel({
       interval: 3000 // Cambia cada 3 segundos (3000 milisegundos)
     });
   });

  