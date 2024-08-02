import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';

export default function UserMenu() {
  const dispatch = useDispatch();
  return (
    <>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </>
  );
}
