const axios = require('axios');

async function makeRequests() {

    let [u1, u2] = await Promise.all([
        axios.get('https://api.github.com/users/gpsx'),
        axios.get('https://api.github.com/users/luker64')
    ]);

    console.log(`Sarky: ${u1.data.created_at}`);
    console.log(`Leléo: ${u2.data.created_at}`);
}

makeRequests();