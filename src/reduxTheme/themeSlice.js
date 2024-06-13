import { createSlice } from '@reduxjs/toolkit';
import data from '../components/ThemeSwitcher/data/theme.json';

const initialState = {
	allThemes: [...data],
	currentTheme: data[0],
	loader: false,
	error: null,
	user: 'id-1',
};

// console.log(initialState.allThemes);

export const themesSlice = createSlice({
	name: 'themes',
	initialState,
	reducers: {},
});

export const selectThemes = (state) => state.themes.allThemes;
