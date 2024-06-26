import { createSlice } from '@reduxjs/toolkit';
import { refreshUser, updateUserTheme } from './operations';

export const authSlice = createSlice({
	name: 'auth',
	initialState: {
		user: {
			name: null,
			email: null,
			avatarURL: null,
			theme: null,
		},
		token: null,
		isLoggedIn: false,
		isRefreshing: false,
		isLoading: false,
	},
	reducers: {
		setCurrentTheme: (state, action) => {
			state.user.theme = action.payload;
		},
	},
	extraReducers: (builder) =>
		builder
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
			})
			.addCase(updateUserTheme.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(updateUserTheme.fulfilled, (state, action) => {
				state.isLoading = false;
				state.user.theme = action.payload;
			})
			.addCase(updateUserTheme.rejected, (state) => {
				state.isLoading = false;
			}),
});

export const { setCurrentTheme } = authSlice.actions;

export default authSlice.reducer;
