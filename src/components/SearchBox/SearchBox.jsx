import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import { useId } from 'react';
import { changeFilter } from '../../redux/filters/slice';
import { selectFilter } from '../../redux/filters/selectors';
export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const nameId = useId();
  return (
    <div>
      <h2 className={css.title}>Find contact by filter</h2>
      <div className={css.wrap}>
        <div className={css.container}>
          <label htmlFor={nameId} className={css.label}>
            Find contacts
          </label>
          <input
            type="text"
            className={css.input}
            name="filter"
            id={nameId}
            value={filter}
            onChange={e => dispatch(changeFilter(e.target.value))}
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  );
}
