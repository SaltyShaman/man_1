const modal = document.getElementById("myModal");
const btn = document.getElementById("openModal");
const span = document.getElementsByClassName("close")[0];

// Open
btn.onclick = function() {
  modal.style.display = "block";
}

// Close by x
span.onclick = function() {
  modal.style.display = "none";
}

// Close modal when clicking outside the modal content
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}