const axios = require('axios')

async function getMeaning(word){
  try {
    const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error; 
  }
}

module.exports = {
    getMeaning
}