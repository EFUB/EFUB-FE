import axios from 'axios';
const client = axios.create();
client.defaults.baseURL = 'https://efub-api.attiary.net:443/api/';
export default client;
