import { useSelector } from 'react-redux';
import { selectError } from '../../redux/contacts/slice';

export default function ErrorMessage() {
  const message = useSelector(selectError);
  return (
    <div style={{ marginTop: ' 10px' }}>
      <h3>Something wrong! Please reload page</h3>
      <p>Error: {message}</p>
    </div>
  );
}
