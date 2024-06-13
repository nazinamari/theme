import { useDispatch, useSelector } from 'react-redux';
import List from '../../shared/List/List';
import css from './ThemeSwitcher.module.css';
import {
	selectCurrentTheme,
	selectThemes,
	setCurrentTheme,
	setUser,
} from '../../reduxTheme/themeRedux/themeSlice';
import Theme from '../Theme/Theme';
import { useEffect } from 'react';
import { selectUser } from '../../reduxTheme/authRedux/selectors';
import { updateTheme } from '../../reduxTheme/themeRedux/operations';

export default function ThemeSwitcher() {
	const dispatch = useDispatch();
	const themes = useSelector(selectThemes);
	const currentUser = useSelector(selectUser);
	const currentTheme = useSelector(selectCurrentTheme);

	useEffect(() => {
		if (currentUser) {
			const userTheme =
				themes.find((theme) => theme.userId === currentUser.id) || themes[0];
			dispatch(setUser(currentUser.id));
			dispatch(setCurrentTheme(userTheme));
		}
	}, [currentUser, themes, dispatch]);

	useEffect(() => {
		if (currentTheme) {
			document.body.classList.remove(...themes.map((theme) => theme.theme));
			document.body.classList.add(currentTheme.theme);
		}
	}, [currentTheme, themes]);

	const handleThemeChange = (theme) => {
		dispatch(setCurrentTheme(theme));
		dispatch(updateTheme({ theme }));
	};

	return (
		<List className={css.listContainer}>
			{themes.map((item) => (
				<li key={item.theme} onClick={() => handleThemeChange(item)}>
					<Theme data={item} />
				</li>
			))}
		</List>
	);
}

// можна зробити перевірку, якщо в нас не буде теми то показувати повідомлення
