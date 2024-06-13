import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// export const instance = axios.create({
// 	baseURL: 'https://taskpro-api-59hg.onrender.com',
// });

// const setAuthHeader = (token) => {
// 	instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
// };

export const updateTheme = createAsyncThunk(
	'theme/updateTheme',
	async ({ theme, thunkAPI }) => {
		try {
			const response = await axios.patch(`/theme`, theme);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
