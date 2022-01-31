import http from './http';

export async function signIn() {
	try {
		const { data: response } = await http.get('/login', {
			withCredentials: true,
		});

		const { meta } = response;
		const { token } = meta;

		return response;
	} catch (error) {
		return error;
	}
}

export async function signOut() {
	try {
		await http.get('/logout', {
			withCredentials: true,
		});
	} catch (error) {
		return error;
	}
}
