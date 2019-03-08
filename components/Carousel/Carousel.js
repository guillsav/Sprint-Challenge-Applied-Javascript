class Carousel {
  constructor(carousel) {
    this.carousel = carousel;
    this.previousBtn = document.querySelector('.left-button');
    this.nextBtn = document.querySelector('.right-button');
    this.imgRef = {
      img: document.querySelectorAll('.carousel img')
    };
    this.index = 0;
    this.imgRef.img[this.index].style.display = 'block';
    this.nextBtn.addEventListener('click', () => this.next());
    this.previousBtn.addEventListener('click', () => this.previous());
  }
  next() {
    this.index++;
    if (this.index >= this.imgRef.img.length) {
      this.index = 0;
    }
    this.imgRef.img.forEach(img => (img.style.display = 'none'));
    this.imgRef.img[this.index].style.display = 'block';
  }

  previous() {
    this.index--;
    if (this.index < 0) {
      this.index = this.imgRef.img.length - 1;
    }
    this.imgRef.img.forEach(img => (img.style.display = 'none'));
    this.imgRef.img[this.index].style.display = 'block';
  }
}

let carousel = document.querySelector('.carousel');
carousel = new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
