const Frisbee = require('frisbee');

// create a new instance of Frisbee
const api = new Frisbee({
    baseURI: 'https://api.github.com', // optional
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });

  export default api;