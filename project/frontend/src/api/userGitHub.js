import http from './http';

export async function signIn() {
  try {
    const { data: response } = await http.get('/login', {
      withCredentials: true,
    });

    return response;
  } catch (error) {
    return error;
  }
}

export async function signOut() {
  await http.get('/logout', {
    withCredentials: true,
  });
}
