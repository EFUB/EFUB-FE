import axios from 'axios';
const client = axios.create();
client.defaults.baseURL = 'https://efub.co.kr/api/';
export default client;
