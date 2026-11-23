(() => {
    "use strict";

    const contents = document.querySelector("[data-document-toc]");
    if (!contents) return;

    const smallScreen = window.matchMedia("(max-width: 900px)");
    const updateContents = () => {
        contents.open = !smallScreen.matches;
    };

    updateContents();
    smallScreen.addEventListener("change", updateContents);

    contents.addEventListener("click", (event) => {
        if (smallScreen.matches && event.target.closest('a[href^="#"]')) {
            contents.open = false;
        }
    });
})();
