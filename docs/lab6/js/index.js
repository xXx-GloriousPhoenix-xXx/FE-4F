const PRELOAD_COUNT = 10;
let profilesQueue = [];
let isLoading = false;

const card = document.getElementById("profile-card");
const front = document.getElementById("front-face");
const back = document.getElementById("back-face");

let showingFront = true;

// ----------------- API -----------------

async function fetchProfiles(q) {
    const response = await fetch(`https://randomuser.me/api/?results=${q}`);
    const data = await response.json();
    return data.results.map(r => ({
        picture: r.picture.large,
        cell: r.cell,
        city: r.location.city,
        country: r.location.country,
        postcode: r.location.postcode
    }));
}

async function preloadIfNeeded() {
    if (isLoading) return;
    if (profilesQueue.length >= PRELOAD_COUNT) return;

    isLoading = true;
    const newProfiles = await fetchProfiles(PRELOAD_COUNT);
    profilesQueue.push(...newProfiles);
    isLoading = false;
}

// ----------------- UI -----------------

function renderProfile(element, profile) {
    element.innerHTML = `
        <img src="${profile.picture}">
        <p>
            Phone: ${profile.cell}<br>
            City: ${profile.city}<br>
            Country: ${profile.country}<br>
            Postcode: ${profile.postcode}
        </p>
    `;
}

function showNext() {
    if (profilesQueue.length === 0) {
        console.warn("No profiles available yet, waiting for API…");
        return; 
    }

    const next = profilesQueue.shift();

    if (showingFront) {
        renderProfile(back, next);
    } else {
        renderProfile(front, next);
    }

    showingFront = !showingFront;
    card.classList.toggle("flipped");

    preloadIfNeeded();
}

// ----------------- START -----------------

window.addEventListener("load", async () => {
    await preloadIfNeeded();

    if (profilesQueue.length === 0) await preloadIfNeeded();

    const first = profilesQueue.shift();
    renderProfile(front, first);
});

card.addEventListener("click", showNext);
