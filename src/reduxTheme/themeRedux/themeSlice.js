import { createSlice } from '@reduxjs/toolkit';
import data from './data/theme.json';
import { updateTheme } from './operations';

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
	extraReducers: (builder) => {
		builder
			.addCase(updateTheme.pending, (state) => {
				state.loader = true;
				state.error = null;
			})
			.addCase(updateTheme.fulfilled, (state, action) => {
				state.loader = false;
				state.currentTheme = action.payload;
			})
			.addCase(updateTheme.rejected, (state, action) => {
				state.loader = false;
				state.error = action.payload;
			});
	},
});

export const { setCurrentTheme, setUser } = themesSlice.actions;

export const selectThemes = (state) => state.themes.allThemes;
export const selectCurrentTheme = (state) => state.themes.currentTheme;
