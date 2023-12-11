async function fetchDataFromAPI() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

fetchDataFromAPI();
