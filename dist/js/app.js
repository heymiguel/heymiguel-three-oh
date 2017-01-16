function listeners() {
   const introPhoto = document.querySelector(".intro-pic");
   introPhoto.addEventListener('mouseover', function() {
      introPhoto.classList.remove("scanlines");
   });

   introPhoto.addEventListener('mouseout', function() {
      introPhoto.classList.add("scanlines");
   });
};



document.addEventListener('DOMContentLoaded', function() {
   listeners();
});