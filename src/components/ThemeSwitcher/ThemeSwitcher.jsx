import { useDispatch, useSelector } from 'react-redux';
import List from '../../shared/List/List';
import css from './ThemeSwitcher.module.css';
import {
	selectCurrentTheme,
	selectAllthemes,
	setCurrentTheme,
} from '../../reduxTheme/themeRedux/themeSlice';
import Theme from '../Theme/Theme';
import { useEffect } from 'react';

import { selectTheme, selectUser } from '../../reduxTheme/authRedux/selectors';
import { updateTheme } from '../../reduxTheme/themeRedux/operations';
import { setTheme } from '../../reduxTheme/authRedux/authSlice';

export default function ThemeSwitcher() {
	const dispatch = useDispatch();
	const themesAll = useSelector(selectAllthemes);
	const user = useSelector(selectUser);
	const currentTheme = useSelector(selectCurrentTheme);
	const theme = useSelector(selectTheme);

	useEffect(() => {
		if (user && user.theme) {
			const userTheme =
				themesAll.find((item) => item.theme === user.theme) || themesAll[0];
			dispatch(setCurrentTheme(userTheme));
		}
	}, [user, themesAll, dispatch]);

	useEffect(() => {
		if (theme) {
			document.body.classList.remove(...themesAll.map((theme) => theme));
			document.body.classList.add(theme);
		}
	}, [theme, themesAll]);

	console.log('Current theme applied:', currentTheme); //

	const handleThemeChange = (theme) => {
		dispatch(setCurrentTheme(theme));
		dispatch(setTheme(theme));
		dispatch(updateTheme({ theme }));
	};

	return (
		<List className={css.listContainer}>
			{themesAll.map((item) => (
				<li key={item} onClick={() => handleThemeChange(item)}>
					<Theme data={item} />
				</li>
			))}
		</List>
	);
}
