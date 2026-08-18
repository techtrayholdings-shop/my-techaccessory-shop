/*==================================================
    TECHTRAY HOLDINGS
    NAVIGATION SYSTEM
==================================================*/

function initialiseNavigation() {

    /*==============================================
        ACTIVE PAGE
    ==============================================*/

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll(".navigation a").forEach(link => {

        const href = link.getAttribute("href");

        if (href === currentPage) {

            link.classList.add("active");

        } else {

            link.classList.remove("active");

        }

    });


    /*==============================================
        MOBILE MENU
    ==============================================*/

    const menuToggle =
        document.getElementById("menu-toggle");

    const navigation =
        document.getElementById("navigation");

    if (!menuToggle || !navigation) return;


    menuToggle.addEventListener("click", () => {

        navigation.classList.toggle("show");

        const isOpen =
            navigation.classList.contains("show");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    /*==============================================
        CLOSE MENU AFTER CLICKING A LINK
    ==============================================*/

    navigation.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navigation.classList.remove("show");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}