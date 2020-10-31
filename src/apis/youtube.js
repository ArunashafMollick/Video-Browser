import axios from 'axios';

const API_KEY = 'AIzaSyAhbbcOw0iOb0lJqMXHp2GQmKHgnJjccEo';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 10,
		type: 'video',
		key: API_KEY,
	},
});
