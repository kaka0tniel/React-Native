const Axios = require('axios');

// create a new instance of Frisbee
const axiosApi = new Axios({
    baseURI: 'https://api.github.com', // optional
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });

  export default axiosApi;