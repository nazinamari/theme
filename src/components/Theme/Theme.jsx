import Button from '../../shared/Button/Button';

export default function Theme({ data }) {
	return (
		<div>
			<Button>{data.theme}</Button>
		</div>
	);
}
