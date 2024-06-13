import Button from '../../shared/Button/Button';

export default function Theme({ data }) {
	console.log(data);
	return (
		<div>
			<Button>{data.theme}</Button>
		</div>
	);
}
