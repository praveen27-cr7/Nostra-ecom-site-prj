let closePopup = document.getElementById("close-popup");
let popup = document.getElementById("popup");
let sideNav = document.getElementById('sidenav')
let closeSideNav = document.getElementById('close-sidenav') 
let menuBtn = document.getElementById('menuBtn')

closePopup.addEventListener('click', () => {
    popup.style.display = "none"
})

closeSideNav.addEventListener('click', () => {
    sideNav.style.left = "-400px"
})

menuBtn.addEventListener('click', () => {
    sideNav.style.left = 0
})

const sliderContainer = document.getElementById('slider-image-container');
const sliderImages = sliderContainer.children;
const totalImages = sliderImages.length;
let currentIndex = 0;

   const moveSlider = (index) => {
       sliderContainer.style.transform = `translateX(-${index * 100}vw)`;
     };

// Auto-slide every 5 seconds
    setInterval(() => {
          currentIndex = (currentIndex + 1) % totalImages;
          moveSlider(currentIndex);
           }, 3000);