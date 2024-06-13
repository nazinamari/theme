import { useSelector } from 'react-redux';
import Button from '../../shared/Button/Button';
import List from '../../shared/List/List';
import css from './ThemeSwitcher.module.css';
import { selectThemes } from '../../reduxTheme/themeSlice';
import Theme from '../Theme/Theme';

export default function ThemeSwitcher() {
	const themes = useSelector(selectThemes);

	// console.log(themes);

	return (
		<List className={css.listContainer}>
			{themes.map((item) => (
				<li key={item.theme}>
					<Theme data={item} />
				</li>
			))}
		</List>
	);
}

{
	/* <li>
				<Button className={css.btn}>1</Button>
			</li>
			<li>
				<Button className={css.btn}>2</Button>
			</li> */
}

// можна зробити перевірку, якщо в нас не буде теми то показувати повідомлення
