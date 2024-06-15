import { createSlice } from '@reduxjs/toolkit';
import { getUserData } from './operations';

const initialState = {
	user: {
		name: null,
		email: null,
		avatarURL: null,
		theme: null,
	},
	token: null,
};

export const authSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setTheme: (state, action) => {
			state.user.theme = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getUserData.fulfilled, (state, action) => {
			state.user = action.payload;
		});
	},
});

export const { setTheme } = authSlice.actions;
