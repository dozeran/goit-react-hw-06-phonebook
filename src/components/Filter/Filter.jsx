import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        required
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </>
  );
};

export default Filter;
