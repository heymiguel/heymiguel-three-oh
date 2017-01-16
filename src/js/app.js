function listeners() {
  const introPhoto = document.querySelector(".intro-pic");
  const portfolioPhoto = document.querySelectorAll(".item");

  introPhoto.addEventListener('mouseover', function() {
    introPhoto.classList.remove("scanlines");
  });

  introPhoto.addEventListener('mouseout', function() {
    introPhoto.classList.add("scanlines");
  });

  portfolioPhoto.forEach((item) => {
    item.addEventListener('mouseover', () => {
      item.classList.remove('scanlines');
    });
    item.addEventListener('mouseout', () => {
      item.classList.add('scanlines');
    });
  });
};

document.addEventListener('DOMContentLoaded', function() {
  listeners();
});