const apiUrl = 'http://universities.hipolabs.com/search?country=United States';

async function getUniversities() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const universityList = document.getElementById('university-list');

        if (data.length > 0) {
            data.forEach((university) => {
                const listItem = document.createElement('li');
                listItem.classList.add('university');
                const name = document.createElement('h3');
                name.textContent = university.name;
                listItem.appendChild(name);
                const country = document.createElement('p');
                country.textContent = `Country: ${university.country}`;
                listItem.appendChild(country);
                const website = document.createElement('p');
                const websiteLink = document.createElement('a');
                websiteLink.href = university.web_pages[0];
                websiteLink.textContent = `Website: ${university.web_pages[0]}`;
                website.appendChild(websiteLink);
                listItem.appendChild(website);
                universityList.appendChild(listItem);
            });
        } 
    } catch (error) {
        console.error('Error fetching universities:', error);
    }
}

getUniversities();