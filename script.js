var swiper = new Swiper('.swiper-container.two', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    effect: 'cards',
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    cardsEffect: {
        slideShadows: false,
    },
    coverflow: {
        rotate: 0,
        stretch: 100,
        depth: 150,
        modifier: 1.5,
        slideShadows: false,
    }
});