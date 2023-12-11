const fetch = require('node-fetch'); // If running in Node.js, you need to import the 'node-fetch' library

async function fetchDataFromTwoAPIs() {
    try {

        const [todoResponse, postResponse] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/todos/1'),
            fetch('https://jsonplaceholder.typicode.com/posts/1')
        ]);


        if (!todoResponse.ok || !postResponse.ok) {
            throw new Error('Error fetching data from one or more APIs');
        }


        const todoData = await todoResponse.json();
        const postData = await postResponse.json();


        const combinedData = {
            todo: todoData,
            post: postData
        };


        console.log(combinedData);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

fetchDataFromTwoAPIs();
