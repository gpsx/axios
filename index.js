const axios = require("axios")

axios.get("http://webcode.me").then(response => {
    console.log(response.data);
})