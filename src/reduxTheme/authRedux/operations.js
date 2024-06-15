import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const instance = axios.create({
	baseURL: 'https://taskpro-api-nmqb.onrender.com/',
});

// const token =
//  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NjRjYzY5Yjk2MmIxMGI3NjA3Y2VhZiIsImlhdCI6MTcxODQzOTAzNSwiZXhwIjoxNzE4NDgyMjM1fQ.nFFH2dc1D7Nitcxhlg1bwCmb0O3oXp0L4yOF3FcyKCQ';

const setAuthHeader = (token) => {
	instance.defaults.headers.common[
		'Authorization'
	] = `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NjRjYzY5Yjk2MmIxMGI3NjA3Y2VhZiIsImlhdCI6MTcxODQzOTAzNSwiZXhwIjoxNzE4NDgyMjM1fQ.nFFH2dc1D7Nitcxhlg1bwCmb0O3oXp0L4yOF3FcyKCQ'}`;
};

setAuthHeader();

export const refreshUser = createAsyncThunk(
	'auth/refreshUser',
	async (_, thunkApi) => {
		const reduxState = thunkApi.getState();
		const savedToken = reduxState.auth.token;
		setAuthHeader(savedToken);
		try {
			const response = await instance.get('/users/current');
			return response.data;
		} catch (error) {
			return thunkApi.rejectWithValue(error.message);
		}
	},
	{
		condition: (_, { getState }) => {
			const reduxState = getState();
			const savedToken = reduxState.auth.token;
			return savedToken !== null;
		},
	}
);

export const updateUserTheme = createAsyncThunk(
	'auth/updateUserTheme',
	async (theme, thunkAPI) => {
		try {
			await instance.patch(`/theme`, theme);
			return theme;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
