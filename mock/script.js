var swiper = new Swiper('.swiper-container.two', {
    // Current properties
    pagination: '.swiper-pagination',
    paginationClickable: true,
    effect: 'cards',
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    cardsEffect: {
        slideShadows: false,
        perSlideOffset: 18,     // Controls spacing between cards
        perSlideRotate: 4,     // Adds rotation to non-active cards
        rotate: true,          // Enable/disable rotation
        modifier: 1            // Intensity of the effect
    },
    
    // Additional properties you can add
//    speed: 400,               // Transition speed in ms
//    direction: 'horizontal',  // 'horizontal' or 'vertical'
//    grabCursor: false,        // Changes cursor to grab when hovering
//    initialSlide: 0,         // Starting slide index
//    spaceBetween: 30,        // Space between slides in px
    
    // Navigation arrows
    
    
//    // More pagination options
//    pagination: {
//        el: '.swiper-pagination',
//        type: 'bullets',      // 'bullets', 'fraction', 'progressbar'
//        clickable: true
//    },
//    
//    // Autoplay settings
//    autoplay: {
//        delay: 2500,
//        disableOnInteraction: false
//    }
});
