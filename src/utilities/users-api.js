// This is the base path of the Express route we'll define
import { getToken } from './users-service'
const BASE_URL = '/api/users';

export const signUp = async(userData) => {
	return sendRequest(BASE_URL, 'POST', userData);
}

export const login = async(credentials) => {
	return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

export function checkToken() {
	return sendRequest(`${BASE_URL}/check-token`)
}

/*--- Helper Functions ---*/
const sendRequest = async(url, method = 'GET', payload = null) => {
	// Fetch takes an optional options object as the 2nd argument
	// used to include a data payload, set headers, etc.
	const options = { method };
	if (payload) {
		options.headers = { 'Content-Type': 'application/json' };
		options.body = JSON.stringify(payload);
	}
	const token = getToken();
	if (token) {
		// Ensure the headers object exists
		options.headers = options.headers || {}
		// Add token to an Authorization header
		// Prefacing it with 'Bearer', recommended in the HTTP specifications
		options.headers.Authorization = `Bearer ${token}`;
	}
	const res = await fetch(url, options);
	if (res.ok) return res.json();
	throw new Error('Bad Request');
}