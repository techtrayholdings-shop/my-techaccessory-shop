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

    await loadFile("header", "header.html");
    await loadFile("footer", "footer.html");

    if (typeof initialiseNavigation === "function") {
        initialiseNavigation();
    }

});