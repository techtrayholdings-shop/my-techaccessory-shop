/* ==========================================
   TECHTRAY HOLDINGS
   NAVIGATION.JS
========================================== */

function initialiseNavigation() {

    /* ==========================================
       CURRENT PAGE
    ========================================== */

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";


    /* ==========================================
       NAVIGATION LINKS
    ========================================== */

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


    /* ==========================================
       MOBILE MENU
    ========================================== */

    const menuToggle =
        document.getElementById("menu-toggle");

    const navigation =
        document.getElementById("navigation");


    console.log("Menu button:", menuToggle);
    console.log("Navigation:", navigation);


    /* ==========================================
       CHECK MOBILE MENU
    ========================================== */

    if (!menuToggle || !navigation) {

        console.warn(
            "TechTray mobile navigation could not find menu-toggle or navigation."
        );

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

    navigationLinks.forEach(function (link) {

        link.onclick = function () {

            navigation.classList.remove("show");

        };

    });

}


/* ==========================================
   INITIALISE NAVIGATION
========================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        initialiseNavigation();

    }
);