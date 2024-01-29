var swiper = new Swiper(".swiper-container", { /* Een variabele is een opslagplaats voor gegevens die je in je code kunt gebruiken en manipuleren*/
    mousewheel: true,  /* Staat gebruikers toe om door de slides te scrollen met het muiswiel. */
    slidesPerView: 4, /*Toont vier slides tegelijk in de viewport.*/
    spaceBetween: 60, /*Stelt een ruimte van 60 pixels in tussen elke slide.*/
    paginationClickable: true, /* Centreert slides in de viewport.*/
    centeredSlides: true, /*Centreert slides in de viewport.*/ 
    loop: true, /* Zorgt ervoor dat de slider in een lus draait, dus als je aan het einde komt, ga je automatisch terug naar het begin.*/
    pagination: {
      el: ".swiper-pagination", /*Configureert de paginering van de slide*/
      clickable: true, /*het element is voor paginering*/
      dynamicBullets: false, /* betekent dat de bulletstijl niet dynamisch verandert.*/
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
    on: {
      slideChangeTransitionStart: function () { /*Voert animaties uit met de anime-bibliotheek op verschillende elementen binnen de actieve slide wanneer een slide-overgang begint.*/
        anime({
          targets: ".swiper-slide-active .tag",
          scale: [0.1, 1],
          opacity: [0, 1], /*doorzichtigheid*/
          easeing: "easeInOutQuart",
          delay: 500,
        });
        anime({
          targets: ".swiper-slide-active img",
          scale: [0, 1],
          opacity: [0, 1],
          easeing: "easeInOutQuart",
          delay: 500,
        });
        anime({
          targets: ".swiper-slide-active .elmt",
          opacity: [0, 1],
          translateY: [100, 1],
          easeing: "easeInOutQuart",
          delay: anime.stagger(170, { start: 100 }), /* aar een techniek waarbij animaties met een kleine vertraging op opeenvolgende elementen*/
        });
      },
    },
    breakpoints: {  /*Hiermee wordt de responsiviteit van de slider ingesteld, zodat het aantal slides per view en de ruimte tussen slides verandert afhankelijk van de schermgrootte.*/
      240: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      500: {
        slidesPerView: 1,
        spaceBetween: 50,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      996: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1224: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });
