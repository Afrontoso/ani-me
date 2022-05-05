$('.owl-carousel').owlCarousel({
    loop:true,
    margin:15,
    nav:false, /* tira a navegação */
    dots:false, /*tira as bolinhas de navegação*/
    responsive:{
        0:{
            items:3
        },
        600:{
            items:5
        },
        1000:{
            items:7
        }
    }
})

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 0) {
    document.getElementById("home").className = "scroll_inicial";
  } else {
    document.getElementById("home").className = "scroll_final";
  }
}