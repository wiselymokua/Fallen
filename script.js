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
                fetch(`https://api.github.com/users/${githubUsername}/repos?type=owner&sort=updated&per_page=100`, { headers })
            ]);

            if (!profileResponse.ok || !reposResponse.ok) {
                throw new Error("GitHub API request failed");
            }

            const profile = await profileResponse.json();
            const repos = await reposResponse.json();
            const profileUrl = `https://github.com/${encodeURIComponent(profile.login)}`;
            const avatarLink = document.createElement("a");
            avatarLink.className = "github-avatar-link";
            avatarLink.href = profileUrl;
            avatarLink.target = "_blank";
            avatarLink.rel = "noopener noreferrer";

            const avatar = document.createElement("img");
            avatar.src = profile.avatar_url;
            avatar.alt = `${profile.login} GitHub avatar`;
            avatar.className = "github-avatar";
            avatar.loading = "lazy";
            avatarLink.append(avatar);

            const profileInfo = document.createElement("div");
            profileInfo.className = "github-profile-info";

            const name = document.createElement("h3");
            name.textContent = profile.name || profile.login;
            profileInfo.append(name);

            const bio = document.createElement("p");
            bio.textContent = profile.bio || "Developer sharing projects and experiments.";
            profileInfo.append(bio);

            const stats = document.createElement("div");
            stats.className = "github-stats";
            [
                `${profile.public_repos} repos`,
                `${profile.followers} followers`,
                `${profile.following} following`
            ].forEach((label) => {
                const stat = document.createElement("span");
                stat.textContent = label;
                stats.append(stat);
            });
            profileInfo.append(stats);

            const profileLink = document.createElement("a");
            profileLink.className = "github-link";
            profileLink.href = profileUrl;
            profileLink.target = "_blank";
            profileLink.rel = "noopener noreferrer";
            profileLink.textContent = "View profile on GitHub";
            profileInfo.append(profileLink);

            githubProfile.replaceChildren(avatarLink, profileInfo);

            const repositories = repos
                .filter((repo) => !repo.fork)
                .slice(0, 6);

            if (repositories.length === 0) {
                const emptyState = document.createElement("li");
                emptyState.className = "github-repo-item";
                emptyState.textContent = "No public repositories to display yet.";
                githubReposList.replaceChildren(emptyState);
                return;
            }

            githubReposList.replaceChildren(...repositories.map((repo) => {
                const item = document.createElement("li");
                item.className = "github-repo-item";

                const link = document.createElement("a");
                link.href = repo.html_url;
                link.target = "_blank";
                link.rel = "noopener noreferrer";
                link.textContent = repo.name;
                item.append(link);

                const description = document.createElement("p");
                description.textContent = repo.description || "No description available yet.";
                item.append(description);

                const metadata = document.createElement("div");
                metadata.className = "github-repo-meta";
                [
                    repo.language || "Code",
                    `★ ${repo.stargazers_count}`,
                    `⎇ ${repo.forks_count}`
                ].forEach((label) => {
                    const value = document.createElement("span");
                    value.textContent = label;
                    metadata.append(value);
                });
                item.append(metadata);
                return item;
            }));
        } catch {
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
