const accordions = document.querySelectorAll(".accordion");

accordions.forEach(accordion => {
  const header = accordion.querySelector(".accordion-header");
  const content = accordion.querySelector(".accordion-content");

  header.addEventListener("click", () => {
    content.classList.toggle("active");
  });
});


const playButton = document.querySelector('.btn.play');
const video = document.getElementById('homeVideo');
const image = document.querySelector('.imgs');

playButton.addEventListener('click', () => {
// Hide the image only if it's visible (optional)
if (image.style.display !== 'none') {
    image.style.display = 'none';
}
// Play the video
video.style.display = 'block'; // Show the video
video.play();
});