
document.addEventListener("DOMContentLoaded", function () {
    const button1 = document.querySelector(".glass-button-1");
    const button2 = document.querySelector(".glass-button-2");
    const firstImage = document.querySelector(".my_image");
    const secondImage = document.querySelector(".my_image2");
    const first_description = document.querySelector(".first-description");
    const second_description = document.querySelector(".second-description");

    function activateButton(active, inactive) {
        active.classList.add("selected");
        inactive.classList.remove("selected");
    }

    button1.classList.add("selected");

    button1.addEventListener("click", function () {
        activateButton(button1, button2);
        firstImage.style.display = "block";
        secondImage.style.display = "none";
        first_description.style.display = "block";
        second_description.style.display = "none";

        
    });
    button2.addEventListener("click", function () {
        activateButton(button2, button1);
        firstImage.style.display = "none";
        secondImage.style.display = "block";
        first_description.style.display = "none";
        second_description.style.display = "block";

    });
});