// URL for fetching universities from a specific country (e.g., the United States)
const apiUrl = 'http://universities.hipolabs.com/search?country=United States';

// Function to fetch and display the universities
async function getUniversities() {
  try {
    const response = await fetch(apiUrl); // Fetch the data from the API
    const data = await response.json(); // Parse the JSON response

    if (data.length > 0) {
      // Loop through the universities and display their names
      data.forEach((university, index) => {
        console.log(`${index + 1}. ${university.name}`);
        console.log(`Country: ${university.country}`);
        console.log(`Website: ${university.web_pages[0]}`);
        console.log('---');
      });
    } else {
      console.log('No universities found for the specified country.');
    }
  } catch (error) {
    console.error('Error fetching universities:', error);
  }
}

// Call the function to fetch universities
getUniversities();