import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import { useId } from 'react';
import {
  changeFilterName,
  changeFilterNumber,
} from '../../redux/filters/slice';
import {
  selectFilterName,
  selectFilterNumber,
} from '../../redux/filters/selectors';
export default function SearchBox() {
  const dispatch = useDispatch();
  const filterName = useSelector(selectFilterName);
  const filterNumber = useSelector(selectFilterNumber);
  const nameId = useId();
  const numberId = useId();
  return (
    <div>
      <h2 className={css.title}>Find contact by filters</h2>
      <div className={css.wrap}>
        <div className={css.container}>
          <label htmlFor={nameId} className={css.label}>
            Find contacts by name
          </label>
          <input
            type="text"
            className={css.input}
            name="name"
            id={nameId}
            value={filterName}
            onChange={e => dispatch(changeFilterName(e.target.value))}
            autoComplete="off"
          />
        </div>
        <div className={css.container}>
          <label htmlFor={numberId} className={css.label}>
            Find contacts by number
          </label>
          <input
            type="text"
            className={css.input}
            name="number"
            id={numberId}
            value={filterNumber}
            onChange={e => dispatch(changeFilterNumber(e.target.value))}
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  );
}
