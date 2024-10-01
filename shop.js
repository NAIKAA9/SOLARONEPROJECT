// shop.js

// Get the modal
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("imgModal");
var closeModal = document.getElementsByClassName("close")[0];

// Get all product images
var images = document.getElementsByClassName("product-image");

// Add click event to each image
for (let i = 0; i < images.length; i++) {
    images[i].onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src; // Set the modal image source to the clicked image
    };
}

// Close the modal when the 'x' is clicked
closeModal.onclick = function() {
    modal.style.display = "none";
}

// Close the modal when clicking outside the image
modal.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Item added to cart');
    });
});
