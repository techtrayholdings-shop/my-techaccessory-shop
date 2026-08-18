/*==================================================
    TECHTRAY HOLDINGS
    INCLUDE SYSTEM
==================================================*/

document.addEventListener("DOMContentLoaded", async () => {

    async function loadFile(id, file) {

        const element = document.getElementById(id);

        if (!element) return;

        try {

            const response = await fetch(file);

            if (!response.ok) {
                throw new Error(`Unable to load ${file}`);
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
       INITIALISE NAVIGATION
       AFTER HEADER HAS LOADED
    ========================================== */

    if (typeof initialiseNavigation === "function") {

        initialiseNavigation();

    } else {

        console.error("initialiseNavigation() was not found.");

    }

});