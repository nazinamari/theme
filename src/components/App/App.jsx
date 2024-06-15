import { useDispatch } from 'react-redux';
import Header from '../Header/Header';
import { useEffect } from 'react';
import { refreshUser } from '../../reduxTheme/authRedux/operations';

export default function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(refreshUser());
	});
	return <Header />;
}
