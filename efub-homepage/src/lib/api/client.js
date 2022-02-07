import axios from 'axios';
const client = axios.create();
client.defaults.baseURL = '/api/';
export default client;
