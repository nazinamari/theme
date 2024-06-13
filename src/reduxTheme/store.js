import { configureStore } from '@reduxjs/toolkit';
import { themesSlice } from './themeRedux/themeSlice';
import { authSlice } from './authRedux/authSlice';

const store = configureStore({
	reducer: {
		themes: themesSlice.reducer,
		auth: authSlice.reducer,
	},
});

export default store;
