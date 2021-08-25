import axios from 'axios';

const KEY = 'AIzaSyCSHSvFNNQ8ZsjIg5eQ0DGBstvjADAooBE';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        type : 'video',
        maxResults : 5,
        key : KEY
    }
});