import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// export const instance = axios.create({
// 	baseURL: 'https://taskpro-api-59hg.onrender.com',
// });

// const setAuthHeader = (token) => {
// 	instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
// };

// token
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
// 	.eyJpZCI6IjY2Njg2Mzk5OGI5MGNkZTFhZTE3MDdmYyIsImlhdCI6MTcxODI5NzYwNywiZXhwIjoxNzE4MzQwODA3fQ
// 	.JAkjFKPn1HXBNPFlIILveNkTT1Xe_TSXROIOJ1SIieI;

export const updateTheme = createAsyncThunk(
	'theme/updateTheme',
	async ({ theme }, thunkAPI) => {
		try {
			const response = await axios.patch(`/theme`, theme);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
