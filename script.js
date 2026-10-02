document.addEventListener("DOMContentLoaded", () => {
    const projectCards = document.querySelectorAll(".project-card");
    const projectDialog = document.querySelector("#project-dialog");
    const dialogTitle = document.querySelector("#project-dialog-title");
    const dialogImage = document.querySelector("#project-dialog-image");
    const dialogDescription = document.querySelector("#project-dialog-description");
    const dialogGithub = document.querySelector("#project-dialog-github");
    const closeButton = document.querySelector(".project-dialog-close");

    if (!projectDialog || !dialogTitle || !dialogImage || !dialogDescription || !dialogGithub || !closeButton) {
        console.error("Project dialog elements are missing from the page.");
        return;
    }

    projectCards.forEach((card) => {
        card.addEventListener("click", () => {
            dialogTitle.textContent = card.dataset.title || "";
            dialogImage.src = card.dataset.image || "";
            dialogImage.alt = `${card.dataset.title || "Project"} project preview`;
            dialogDescription.textContent = card.dataset.description || "";

            if (card.dataset.github) {
                dialogGithub.href = card.dataset.github;
                dialogGithub.hidden = false;
            } else {
                dialogGithub.removeAttribute("href");
                dialogGithub.hidden = true;
            }

            if (typeof projectDialog.showModal === "function") {
                projectDialog.showModal();
            }
        });
    });

    closeButton.addEventListener("click", () => {
        if (typeof projectDialog.close === "function") {
            projectDialog.close();
        }
    });

    projectDialog.addEventListener("click", (event) => {
        if (event.target === projectDialog && typeof projectDialog.close === "function") {
            projectDialog.close();
        }
    });
});
