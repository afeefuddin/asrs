const axios = require('axios');

async function getFact(n) {
  try {
    const config = {
        headers: {
            'X-Api-Key': process.env.YOUR_API_KEY
        }
    }
    const resp = await axios.get(`https://api.api-ninjas.com/v1/facts?limit=${n}`,config);
    return resp.data; // Return the actual data from the response
  } catch (error) {
    if (error.response) {
      console.error('Error:', error.response.status, error.response.statusText);
    } else {
      console.error('Error:', error.message);
    }
    return null;
  }
}

module.exports = { getFact };
