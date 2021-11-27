import { v4 as uuidv4 } from 'uuid';
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsActions } from 'redux/contacts';
// import { filterContact } from 'redux/contacts/filterSlice';

export default function Component() {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const changeFilter = useCallback(
    e => {
      dispatch(contactsActions.filterContact(e.target.value));
      // dispatch(filterContact(e.target.value));
    },
    [dispatch],
  );

  return (
    <div>
      <label htmlFor={uuidv4()}>Find contacts by name</label>
      <input type="text" value={filter} id={uuidv4()} onChange={changeFilter} />
    </div>
  );
}
