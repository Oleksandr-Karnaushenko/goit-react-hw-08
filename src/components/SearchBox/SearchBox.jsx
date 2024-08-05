import { useDispatch, useSelector } from 'react-redux';

import { changeFilter, changeType } from '../../redux/filters/slice';
import { selectFilter, selectType } from '../../redux/filters/selectors';

import styles from './SearchBox.module.css';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const type = useSelector(selectType);

  const handleChangeFilter = e => {
    dispatch(changeFilter(e.target.value));
  };
  const handleChangeType = e => {
    dispatch(changeType(e.target.value));
  };

  return (
    <div className={styles.search}>
      <p>Find contacts</p>
      <input type="text" value={filter} onChange={handleChangeFilter}></input>
      <div className={styles.radio}>
        <label>
          <input
            type="radio"
            name="name"
            value="name"
            checked={type === 'name'}
            onChange={handleChangeType}
          />
          name
        </label>
        <label>
          <input
            type="radio"
            name="number"
            value="number"
            checked={type === 'number'}
            onChange={handleChangeType}
          />
          number
        </label>
      </div>
    </div>
  );
}
