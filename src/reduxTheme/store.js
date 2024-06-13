import { configureStore } from '@reduxjs/toolkit';
import { themesSlice } from './themeSlice';

const store = configureStore({
	reducer: {
		themes: themesSlice.reducer,
	},
});

export default store;
