import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://16.171.9.239:8000/',
 
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});


export default instance;