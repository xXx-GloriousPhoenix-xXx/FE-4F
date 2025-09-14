const contentDiv = document.getElementById('content-wrapper');
const reloadButton = document.getElementById('reload-button');

const profilesQuantity = 5;

window.addEventListener('load', () => updateContent());
const updateContent = async () => {
    contentDiv.innerHTML = '';

    const profilesData = await getProfiles(profilesQuantity);

    for (let i = 0; i < profilesQuantity; i++) {
        const profile = document.createElement('div');
        profile.className = 'profile';

        const picture = document.createElement('img');
        picture.src = profilesData[i].picture;
        profile.appendChild(picture);

        const info = document.createElement('p');
        info.innerHTML += `Phone number: ${profilesData[i].cell}<br>`;
        info.innerHTML += `City: ${profilesData[i].city}<br>`;
        info.innerHTML += `Country: ${profilesData[i].country}<br>`;
        info.innerHTML += `Postcode: ${profilesData[i].postcode}`;
        profile.appendChild(info);

        contentDiv.appendChild(profile);
    }
}
const getProfiles = async (resultsQuantity) => {
    if (resultsQuantity === undefined || resultsQuantity <= 0) {
        console.error('Invalid results quantity');
        return;
    }
    const response = await fetch(`https://randomuser.me/api/?results=${resultsQuantity}`);
    if (!response.ok) {
        console.error('Failed to fetch profiles');
        return;
    }
    const data = await response.json();
    return data.results.map(result => {
        return {
            picture: result.picture.large,
            cell: result.cell,
            city: result.location.city,
            country: result.location.country,
            postcode: result.location.postcode
        }
    })
}
reloadButton.addEventListener('click', async () => updateContent());