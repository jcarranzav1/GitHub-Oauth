import axios from 'axios';
import { BASE_URL } from './consts';
// import { clearSession, getSession } from './session';

const instance = axios.create({
  baseURL: BASE_URL,
});

/* instance.interceptors.request.use(
	function (config) {
		// Do something before request is sent
		const token = getSession();
		if (token) {
			config.headers['Authorization'] = `Bearer ${token}`;
		}
		return config;
	},
	function (error) {
		// Do something with request error
		return Promise.reject(error);
	}
);

instance.interceptors.response.use(
	function (response) {
		return response;
	},
	function (error) {
		console.log(error);

		if (error.response.status === 401) {
			clearSession();
			document.location = `${BASE_URL}/login`; //aqui no usamos navigate, porque no estamos en la capa de React, estamos en la capa de red
		}
		return Promise.reject(error);
	}
); */

export default instance;
