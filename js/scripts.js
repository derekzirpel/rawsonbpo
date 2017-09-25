/* ****************** LEER ANTES DE EMPEZAR ****************** */
/* En este fichero se debe incluir la funcionalidad de pliegue y despliegue de bloques */
/* HACER SOLO SI SE TIENE TIEMPO, ULTIMA PRIORIDAD */

$(document).ready(main);

var contador = 1;

function main () {
   $('.menu_bar').click(function(){
       if (contador == 1) {
           $('nav').animate({
               left: '0'
           });
           contador = 0;
       } else {
           contador = 1;
           $('nav').animate({
               left: '-100%'
           });
       }
   });

   // Mostramos y ocultamos submenus
   $('.submenu').click(function(){
       $(this).children('.children').slideToggle();
   });
}