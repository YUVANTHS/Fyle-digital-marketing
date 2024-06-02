document.addEventListener("DOMContentLoaded", function() {
    var popupForm = document.getElementById("popupForm");
    var closeBtn = document.getElementById("closeBtn");

    // Show the pop-up form when the page loads
    popupForm.style.display = "block";

    closeBtn.addEventListener("click", function() {
        popupForm.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target == popupForm) {
            popupForm.style.display = "none";
        }
    });
});
