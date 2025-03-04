document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleButton");
    const dropdownContent = document.getElementById("dropdownContent");
    
    let isDropdownOpen = false;

    const toggleDropdown = () => {
        isDropdownOpen = !isDropdownOpen;
        dropdownContent.style.display = isDropdownOpen ? "block" : "none";
    };

    toggleButton.addEventListener("click", () => {
        toggleDropdown();
    });

    // Configuración de Popper.js para posicionar el menú desplegable
    const popperInstance = new Popper(toggleButton, dropdownContent, {
        placement: "bottom-start",
    });
});
