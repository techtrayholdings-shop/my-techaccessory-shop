/*==================================================
    TECHTRAY HOLDINGS
    INCLUDE SYSTEM
==================================================*/

document.addEventListener("DOMContentLoaded", async () => {

    /*==============================================
        LOAD HTML COMPONENT
    ==============================================*/

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

            console.error(`TechTray Include Error:`, error);

        }

    }


    /*==============================================
        LOAD HEADER & FOOTER
    ==============================================*/

    await loadFile("header", "header.html");

    await loadFile("footer", "footer.html");


    /*==============================================
        INITIALISE NAVIGATION
    ==============================================*/

    if (typeof initialiseNavigation === "function") {

        initialiseNavigation();

    }

});