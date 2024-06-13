import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const instance = axios.create({
	baseURL: 'https://taskpro-api-nmqb.onrender.com/',
});

// const token =
// 	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2Njg2Mzk5OGI5MGNkZTFhZTE3MDdmYyIsImlhdCI6MTcxODI5NzYwNywiZXhwIjoxNzE4MzQwODA3fQ.JAkjFKPn1HXBNPFlIILveNkTT1Xe_TSXROIOJ1SIieI';

const setAuthHeader = (token) => {
	instance.defaults.headers.common[
		'Authorization'
	] = `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2Njg2Mzk5OGI5MGNkZTFhZTE3MDdmYyIsImlhdCI6MTcxODI5NzYwNywiZXhwIjoxNzE4MzQwODA3fQ.JAkjFKPn1HXBNPFlIILveNkTT1Xe_TSXROIOJ1SIieI'}`;
};
