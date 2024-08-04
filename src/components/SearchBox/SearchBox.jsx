import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import { selectFilter } from '../../redux/filters/selectors';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <div className={css.search}>
      <p>Find contacts by name</p>
      <input type="text" value={filter} onChange={handleChange}></input>
    </div>
  );
}
