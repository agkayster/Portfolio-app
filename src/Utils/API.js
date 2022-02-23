import axios from 'axios';

const endpoint = 'http://localhost:4000';

export const axiosInstance = axios.create({
	baseURL: endpoint,
});
