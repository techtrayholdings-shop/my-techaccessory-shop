function initialiseNavigation() {

    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    // Highlight active page
    document.querySelectorAll(".navigation a").forEach(link => {

        const href = link.getAttribute("href");

        if (href === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }

    });

    // Mobile menu toggle
    const menuToggle = document.getElementById("menu-toggle");
    const navigation = document.getElementById("navigation");

    if (menuToggle && navigation) {
        menuToggle.addEventListener("click", () => {
            navigation.classList.toggle("show");
        });
    }

}