import { types } from '../types/types';
import { blankState } from './state';

const reducer = (state, action) => {
	let draft;
	switch (action.type) {
		case types.login: {
			draft = {
				...state,
				user: action.payload.user,
				isLogging: true,
			};
			break;
		}
		case types.logout: {
			// localStorage.removeItem('user');
			draft = {
				...state,
				user: blankState.user,
				isLogging: false,
			};
			break;
		}
		default:
			throw new Error();
	}

	localStorage.setItem('user', JSON.stringify(draft));
	return draft;
};
export default reducer;
