import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://13.60.46.96:8000/',
 
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});


export default instance;