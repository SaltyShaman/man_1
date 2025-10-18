document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("imageModal");
    const img = document.getElementById("wishlistImage");
    const modalImg = document.getElementById("modalImg");
    const captionText = document.getElementById("caption");
    const span = document.querySelector(".close");


    //find image trying to make it bigger
    if (img) {
        img.onclick = () => {
            modal.style.display = "block";
            modalImg.src = img.src;
            captionText.innerHTML = img.alt;
        };
    }

    if (span) {
        span.onclick = () => modal.style.display = "none";
    }

    window.onclick = (event) => {
        if (event.target === modal) modal.style.display = "none";
    };
});
