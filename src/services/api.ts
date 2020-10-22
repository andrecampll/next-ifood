import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/andrecampll/api-project',
});

export default api;
