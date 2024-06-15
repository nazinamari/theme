import { createSlice } from '@reduxjs/toolkit';
import { getUserData, refreshUser } from './operations';

const initialState = {
	user: {
		name: null,
		email: null,
		avatarURL: null,
		theme: null,
	},
	token: null,
	isRefreshing: false,
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
		builder
			.addCase(getUserData.fulfilled, (state, action) => {
				state.user = action.payload;
			})
			.addCase(refreshUser.pending, (state) => {
				state.isRefreshing = true;
			})
			.addCase(refreshUser.fulfilled, (state, action) => {
				state.user = action.payload;
				state.isLoggedIn = true;
				state.isRefreshing = false;
			})
			.addCase(refreshUser.rejected, (state) => {
				state.isLoading = false;
			});
	},
});

export const { setTheme } = authSlice.actions;
