$(document).ready(function () {
  // Hero Slider Initialization
  $(".hero-slider").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 1000,
    animateOut: "fadeOut",
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
  });

  // Testimonial Carousel Initialization
  $(".testimonial-carousel").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      768: {
        items: 2,
        nav: true,
      },
      992: {
        items: 3,
        nav: true,
      },
    },
  });
});

// Stats counter animation
const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
  const target = parseInt(counter.innerText);
  let count = 0;
  const duration = 2000;
  const increment = target / (duration / 16);

  const updateCount = () => {
    count += increment;
    if (count < target) {
      counter.innerText =
        Math.ceil(count) + (counter.innerText.includes("%") ? "%" : "+");
      requestAnimationFrame(updateCount);
    } else {
      counter.innerText =
        target + (counter.innerText.includes("%") ? "%" : "+");
    }
  };

  updateCount();
});

// Gallery data
const galleryImages = [
  { id: 1, img: "./image/approach-1.jpeg" },
  { id: 2, img: "./image/approach-2.jpeg" },
  { id: 3, img: "./image/approach-3.jpeg" },
  { id: 4, img: "./image/approach-main.jpeg" },
  { id: 5, img: "./image/approach-main1.jpg" },
  { id: 6, img: "./image/approach-1.jpeg" },
  // Add more images as needed
];

// Function to create gallery items
function createGalleryItem(image) {
  return `
            <div class="col-12 col-md-6 col-lg-4">
                <div class="position-relative gallery-item">
                    <div class="skeleton-loader"></div>
                    <img src="${image.img}" 
                         class="img-fluid rounded gallery-img" 
                         alt="Gallery Image ${image.id}"
                         data-bs-toggle="modal"
                         data-bs-target="#imageModal"
                         onload="this.previousElementSibling.style.display='none'">
                </div>
            </div>
        `;
}

// Populate galleries
// Check if element exists before setting innerHTML
const bredaGallery = document.getElementById("bredaGallery");
if (bredaGallery) {
  bredaGallery.innerHTML = galleryImages
    .map((img) => createGalleryItem(img))
    .join("");
}
document.getElementById("privateGallery").innerHTML = galleryImages
  .map((img) => createGalleryItem(img))
  .join("");

// Update modal image
document.querySelectorAll(".gallery-img").forEach((img) => {
  img.addEventListener("click", function () {
    document.getElementById("modalImage").src = this.src;
  });
});
