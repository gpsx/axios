const axios = require('axios');
const fs = require('fs');

var config = {
    responseType: 'stream'
};

async function getImage() {
    let gitRequest = await axios.get('https://api.github.com/users/gpsx');
    let url = gitRequest.data.avatar_url
    
    let resp = await axios.get(url, config);
    resp.data.pipe(fs.createWriteStream('avatar.jpg'));
}

getImage();