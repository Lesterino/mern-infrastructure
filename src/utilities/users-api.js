// This is the base path of the Express route we'll define
const BASE_URL = '/api/users';

export const signUp = async(userData) => {
	// Fetch uses an options object as a second arg to make requests
	// other than the basic GET requests, include data, headers, etc
	const res = await fetch(BASE_URL, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		// Fetch requires data payloads to be stringified
		// and assigned to a body property on the options object
		body: JSON.stringify(userData),
	});
	// Check if request was successful
	if (res.ok) {
		// res.json() will resolve the JWT
		return res.json();
	} else {
		throw new Error('Invalid Sign Up');
	}
}

export const login = async(credentials) => {
	// Fetch uses an options object as a second arg to make requests
	// other than the basic GET requests, include data, headers, etc
	const res = await fetch(`${BASE_URL}/login`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		// Fetch requires data payloads to be stringified
		// and assigned to a body property on the options object
		body: JSON.stringify(credentials),
	});
	// Check if request was successful
	if (res.ok) {
		// res.json() will resolve the JWT
		return res.json();
	} else {
		throw new Error('Invalid Login');
	}
}