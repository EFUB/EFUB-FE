import axios from 'axios';
const client = axios.create();
client.defaults.baseURL = 'http://13.125.136.136:8080/api/';
export default client;
