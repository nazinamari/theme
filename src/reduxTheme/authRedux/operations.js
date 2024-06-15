import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const instance = axios.create({
	baseURL: 'https://taskpro-api-nmqb.onrender.com/',
});

const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NjRjYzY5Yjk2MmIxMGI3NjA3Y2VhZiIsImlhdCI6MTcxODM3MDM1MCwiZXhwIjoxNzE4NDEzNTUwfQ.a-vuU9Naabjoc1uyFvUYJ7SJ2LPRG9NVm8ve24jn-k0`;

instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export const getUserData = createAsyncThunk(
	'user/Current',
	async (_, thunkAPI) => {
		try {
			const response = await instance.get('/users/current');
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);
