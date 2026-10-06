const hasDocument = typeof document !== "undefined";

if (hasDocument) {
    const projectCards = document.querySelectorAll(".project-card");
    const projectDialog = document.querySelector("#project-dialog");
    const dialogTitle = document.querySelector("#project-dialog-title");
    const dialogImage = document.querySelector("#project-dialog-image");
    const dialogDescription = document.querySelector("#project-dialog-description");
    const dialogGithub = document.querySelector("#project-dialog-github");
    const closeButton = document.querySelector(".project-dialog-close");

    if (projectDialog && dialogTitle && dialogImage && dialogDescription && dialogGithub) {
        projectCards.forEach((card) => {
            card.addEventListener("click", () => {
                dialogTitle.textContent = card.dataset.title;
                dialogImage.src = card.dataset.image;
                dialogImage.alt = `${card.dataset.title} project preview`;
                dialogDescription.textContent = card.dataset.description;

                if (card.dataset.github) {
                    dialogGithub.href = card.dataset.github;
                    dialogGithub.hidden = false;
                } else {
                    dialogGithub.removeAttribute("href");
                    dialogGithub.hidden = true;
                }

                if (typeof projectDialog.showModal === "function") {
                    projectDialog.showModal();
                } else {
                    projectDialog.setAttribute("open", "open");
                }
            });
        });

        if (closeButton) {
            closeButton.addEventListener("click", () => {
                if (typeof projectDialog.close === "function") {
                    projectDialog.close();
                } else {
                    projectDialog.removeAttribute("open");
                }
            });
        }

        projectDialog.addEventListener("click", (event) => {
            if (event.target === projectDialog) {
                if (typeof projectDialog.close === "function") {
                    projectDialog.close();
                } else {
                    projectDialog.removeAttribute("open");
                }
            }
        });
    }

    const githubUsername = "wiselymokua";
    const githubProfile = document.querySelector("#github-profile");
    const githubReposList = document.querySelector("#github-repos");

    async function loadGitHubData() {
        if (!githubProfile || !githubReposList) return;

        const headers = { Accept: "application/vnd.github+json" };

        try {
            const [profileResponse, reposResponse] = await Promise.all([
                fetch(`https://api.github.com/users/${githubUsername}`, { headers }),
                fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=6`, { headers })
            ]);

            if (!profileResponse.ok || !reposResponse.ok) {
                throw new Error("GitHub API request failed");
            }

            const profile = await profileResponse.json();
            const repos = await reposResponse.json();

            githubProfile.innerHTML = `
                <a class="github-avatar-link" href="${profile.html_url}" target="_blank" rel="noopener noreferrer">
                    <img src="${profile.avatar_url}" alt="${profile.login} GitHub avatar" class="github-avatar" loading="lazy">
                </a>
                <div class="github-profile-info">
                    <h3>${profile.name || profile.login}</h3>
                    <p>${profile.bio || "Developer sharing projects and experiments."}</p>
                    <div class="github-stats">
                        <span><strong>${profile.public_repos}</strong> repos</span>
                        <span><strong>${profile.followers}</strong> followers</span>
                        <span><strong>${profile.following}</strong> following</span>
                    </div>
                    <a class="github-link" href="${profile.html_url}" target="_blank" rel="noopener noreferrer">View profile on GitHub</a>
                </div>
            `;

            githubReposList.innerHTML = repos
                .filter((repo) => !repo.fork)
                .slice(0, 6)
                .map((repo) => `
                    <li class="github-repo-item">
                        <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">${repo.name}</a>
                        <p>${repo.description || "No description available yet."}</p>
                        <div class="github-repo-meta">
                            <span>${repo.language || "Code"}</span>
                            <span>★ ${repo.stargazers_count}</span>
                            <span>⎇ ${repo.forks_count}</span>
                        </div>
                    </li>
                `)
                .join("");
        } catch (error) {
            githubProfile.innerHTML = `
                <div class="github-error">
                    <p>GitHub profile could not be loaded right now.</p>
                    <a href="https://github.com/${githubUsername}" target="_blank" rel="noopener noreferrer">Open GitHub profile</a>
                </div>
            `;
            githubReposList.innerHTML = "";
        }
    }

    loadGitHubData();
}
