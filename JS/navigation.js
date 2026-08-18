/* ==========================================
   TECHTRAY HOLDINGS
   NAVIGATION.JS
========================================== */

function initialiseNavigation() {

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";


    const navigationLinks =
        document.querySelectorAll("#navigation a");


    navigationLinks.forEach(function (link) {

        const href = link.getAttribute("href");

        if (href === currentPage) {

            link.classList.add("active");

        } else {

            link.classList.remove("active");

        }

    });

}

    /* ==========================================
       MOBILE MENU
    ========================================== */

    const menuToggle =
        document.getElementById("menu-toggle");

    const navigation =
        document.getElementById("navigation");


    console.log("Menu button:", menuToggle);
    console.log("Navigation:", navigation);


    if (!menuToggle || !navigation) {

        console.error("Mobile navigation elements not found.");

        return;

    }


    /* ==========================================
       MOBILE MENU TOGGLE
    ========================================== */

    menuToggle.onclick = function () {

        navigation.classList.toggle("show");

        console.log(
            "Menu status:",
            navigation.classList.contains("show")
        );

    };


    /* ==========================================
       CLOSE MENU AFTER LINK CLICK
    ========================================== */

    navigationLinks.forEach(link => {

        link.onclick = function () {

            navigation.classList.remove("show");

        };

    });

}