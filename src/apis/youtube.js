import axios from 'axios';

const KEY = 'AIzaSyBLXsE23cawhzNWMpSoVwrbKwJiD2KS2vw';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
