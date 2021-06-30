import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:5001/challenge-59232/us-central1/api' // THE API URL (clound function) URL
});

export default instance;