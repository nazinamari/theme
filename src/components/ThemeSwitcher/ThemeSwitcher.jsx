import { useDispatch, useSelector } from 'react-redux';
import List from '../../shared/List/List';
import css from './ThemeSwitcher.module.css';
import { selectThemes } from '../../reduxTheme/themeRedux/themeSlice';
import Theme from '../Theme/Theme';
import { useEffect } from 'react';
import { selectUser } from '../../reduxTheme/authRedux/selectors';
import { updateUserTheme } from '../../reduxTheme/authRedux/operations';

export default function ThemeSwitcher() {
	const dispatch = useDispatch();
	const themes = useSelector(selectThemes);
	const user = useSelector(selectUser);
	const currentTheme = user.theme;

	useEffect(() => {
		if (currentTheme) {
			document.body.classList.remove(...themes.map((theme) => theme.theme));
			document.body.classList.add(currentTheme.theme);
		}
	}, [currentTheme, themes]);

	const handleThemeChange = (theme) => {
		dispatch(updateUserTheme(theme));
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
