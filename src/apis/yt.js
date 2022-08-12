import axios from 'axios';



const API_KEY = 'AIzaSyANY3guJiZthhyn1SNQTm5nD7l4TJrWBFs';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: { part: 'snippet', type: 'video', maxResults: 5, key: API_KEY}
});