import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://13.48.56.231:8000/',
 
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});


export default instance;