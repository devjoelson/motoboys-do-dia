const carouselElement = document.querySelector('#motoboyCarousel');

if (carouselElement) {
  const carousel = new bootstrap.Carousel(carouselElement, {
    interval: 4000, // muda a cada 4 segundos
    ride: 'carousel',
    pause: 'hover'
  });
}
