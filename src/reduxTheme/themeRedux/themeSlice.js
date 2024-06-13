import { createSlice } from '@reduxjs/toolkit';
import data from './data/theme.json';

const initialState = {
	allThemes: [...data],
	currentTheme: null,
	loader: false,
	error: null,
	user: 'id-1',
};

export const themesSlice = createSlice({
	name: 'themes',
	initialState,
	reducers: {
		setCurrentTheme: (state, action) => {
			state.currentTheme = action.payload;
		},
		setUser: (state, action) => {
			state.user = action.payload;
		},
	},
});

export const { setCurrentTheme, setUser } = themesSlice.actions;

export const selectThemes = (state) => state.themes.allThemes;
export const selectCurrentTheme = (state) => state.themes.currentTheme;
