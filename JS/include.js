/* ==========================================
   TECHTRAY HOLDINGS
   INCLUDE.JS
========================================== */

document.addEventListener("DOMContentLoaded", async function () {

    async function loadFile(id, file) {

        const element = document.getElementById(id);

        if (!element) {
            console.error("Element not found:", id);
            return;
        }

        try {

            const response = await fetch(file);

            if (!response.ok) {
                throw new Error("Unable to load " + file);
            }

            element.innerHTML = await response.text();

        } catch (error) {

            console.error(error);

        }
    }


    /* ==========================================
       LOAD HEADER
    ========================================== */

    await loadFile("header", "header.html");


    /* ==========================================
       LOAD FOOTER
    ========================================== */

    await loadFile("footer", "footer.html");


    /* ==========================================
       INITIALISE MOBILE NAVIGATION
    ========================================== */

    const menuToggle = document.getElementById("menu-toggle");
    const navigation = document.getElementById("navigation");


    if (menuToggle && navigation) {

        menuToggle.addEventListener("click", function () {

            navigation.classList.toggle("show");

            menuToggle.classList.toggle("open");

        });


        /* Close menu when a navigation link is clicked */

        const navigationLinks =
            navigation.querySelectorAll("a");

        navigationLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navigation.classList.remove("show");
                menuToggle.classList.remove("open");

            });

        });

    } else {

        console.error(
            "TechTray mobile navigation could not find menu-toggle or navigation."
        );

    }


    /* ==========================================
       ACTIVE PAGE
    ========================================== */

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";


    const navigationLinks =
        document.querySelectorAll("#navigation a");


    navigationLinks.forEach(function (link) {

        const href = link.getAttribute("href");

        if (href === currentPage) {

            link.classList.add("active");

        }

    });

});