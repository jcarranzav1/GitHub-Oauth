export const blankState = {
	user: null,
	isLogging: false,
};

let initialState = blankState;
const storedState = localStorage.getItem('user');

if (storedState) {
	initialState = JSON.parse(storedState);
}
export default initialState;
