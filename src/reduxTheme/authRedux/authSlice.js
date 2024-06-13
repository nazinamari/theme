import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	user: {
		name: null,
		email: null,
		avatarURL: null,
		theme: 'violet',
		id: '1',
	},
	token: null,
	isLoggedIn: false,
	isRefreshing: false,
	isLoading: false,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
});
