import { createSlice } from '@reduxjs/toolkit';
import data from './data/theme.json';

const initialState = {
	allThemes: [...data],
	loader: false,
	error: null,
};

export const themesSlice = createSlice({
	name: 'themes',
	initialState,
});

export const selectThemes = (state) => state.themes.allThemes;
