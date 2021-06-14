////////////////// Slider /////////////////

$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        autoplay: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        slidesToShow: 1,
        centerMode: true,
        adaptiveHeight: true,
        waitForAnimate: false,
        focusOnSelect: true,
        fade: true,
        appendDots: $('.thumbnail'),
        responsive: [{
            breakpoint: 320,
            settings: {}
        }]  
    });
});

////////////////////////////////////////////

//////////////   MENU //////////////////////
(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
      header: document.querySelector('header'),
    };
    refs.header.addEventListener('click', toggleModal);
    function toggleModal(e) {
      if (
        e.target.closest('button') === refs.openModalBtn ||
        e.target.closest('button') === refs.closeModalBtn
      ) {
        refs.modal.classList.toggle('is-hidden');
      } else if (e.target.href) {
        refs.modal.classList.add('is-hidden');
      }
    }
  })();

  ////////////////////////////////