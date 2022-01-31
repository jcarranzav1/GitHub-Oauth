export const initialState = {
  user: JSON.parse(localStorage.getItem('user')).user || null,
  isLogging: JSON.parse(localStorage.getItem('user')).isLogging || false,
};
