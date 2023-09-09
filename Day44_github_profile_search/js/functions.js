import * as v from "./variables.js";

// get users
export async function getUser(username) {
    const response = await fetch(v.apiURL + username);
    const data = await response.json();
    if (response.status !== 200) {
        errorMessage("User not found, try another");
    } else {
        displayData(data);
        getRepos(username);
        // console.log(data);
    }
};

// get repos
async function getRepos(username) {
    const response = await fetch(v.apiURL + username + "/repos");
    const data = await response.json();
    console.log(data);

    displayRepos(data);
};

// display repo
function displayRepos(repoData) {
    let repo_data = repoData.map((repo) => {
        return `
        <span class="repo border border-rounded p3">
            <a href="${repo.html_url}" target="_blank" rel="noopener">${repo.name}</a>
            <p>
            <strong>Stars: ${repo.stargazers_count} |</strong>
            <strong>Watchers: ${repo.watchers_count} |</strong>
            <strong>Forks: ${repo.forks_count} |</strong>
            </p>
      </span>
        `;
    })
    // v.repos.innerHTML = repo_data;
    v.repos.innerHTML = repo_data.slice(0,6).join("");
    document.querySelector(".hide").style.display = 'block';
}

export function errorMessage(msg) {
    v.profile.innerHTML = "";
    document.querySelector(".hide").style.display = 'none';
    v.repos.innerHTML = `
    <p class="alert alert-danger">${msg}</p>
    `;
}

function displayData(user){
    const html = `
        <img 
            src="${user.avatar_url}" 
            alt="${user.name}" 
            class="img-thumbnail rounded-circle"
        >
        <h2>${user.name}</h2>
        <p>${user.login}</p>
        <div class="d-grid">
            <a href="https://github.com/${user.login}" 
            target="_blank" rel="noopener"
            class="btn btn-outline-secondary">View Profile</a>
        </div>
        <p class="pt-2">
        <span>${user.followers} Followers</span>
        <span>${user.following} Following</span>
        <span>${user.public_repos} Repositories</span>
        <p>
            <i class="fas fa-marker-alt"></i>
            ${user.location}
        </p>
        </p>

    `;

    v.profile.innerHTML = html;
}

