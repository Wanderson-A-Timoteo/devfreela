import axios from 'axios';

const url = 'https://devfreela.herokuapp.com';

export const ApiService = axios.create({
  baseURL: url,
  headers: {
    'Content-Type': 'application/json'
  }
});