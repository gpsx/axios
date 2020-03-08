const axios = require('axios');

async function getNumberOfFollowers() {

    let res = await axios.get('https://api.github.com/users/gpsx');

    let nOfFollowers = res.data.followers;
    let location = res.data.location;

    console.log(res.data);
    console.log(`# of followers: ${nOfFollowers}`)
    console.log(`Location: ${location}`)
}

getNumberOfFollowers();