import axios from 'axios';

const query = new URLSearchParams({
    key: "3fb6637d-9c29-4d6e-92e0-f49a3e0815c3",
}).toString();


const instance = axios.create({
    baseURL: 'https://graphhopper.com/api/1/route?'+query,
    timeout: 1000,
});

export default instance;