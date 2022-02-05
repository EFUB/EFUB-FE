import axios from 'axios';
const client = axios.create();
client.defaults.baseURL = 'http://52.79.53.200:8080/api/';
export default client;
