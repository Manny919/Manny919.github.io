document.addEventListener("DOMContentLoaded", function () {
  var galleryImages = document.querySelectorAll(".gallery img");
  var modal = document.getElementById("image_modal");
  var modalImage = document.getElementById("modalImage");
  galleryImages.forEach(function (image) {
    image.addEventListener("click", function () {
      modalImage.src = image.src;
      modal.style.display = "block";
    });
  });
  var closeButton = document.getElementsByClassName("close")[0];
  closeButton.addEventListener("click", function () {
    modal.style.display = "none";
  });
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
