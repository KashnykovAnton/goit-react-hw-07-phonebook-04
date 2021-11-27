import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import ContactListItem from './ContactListItem';
import { useGetContactsQuery } from 'redux/contacts/RTK';

export default function ContactList() {
  const {
    data = [],
    error,
    isFetching,
  } = useGetContactsQuery(undefined, {
    refetchOnFocus: true,
  });

  const filter = useSelector(state => state.filter);

  const filteredContacts = useMemo(() => {
    const normalizedFilter = filter.toLowerCase();
    return data.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  }, [filter, data]);

  if (error) return <h1>Sory, we have some troubles: {error.data}</h1>;

  return (
    <>
      {isFetching && <h1>Loading...</h1>}

      <ul>
        {!isFetching &&
          filteredContacts.map(({ id, name, number }) => (
            <ContactListItem key={id} id={id} name={name} number={number} />
          ))}
      </ul>
      {data.length === 0 && !isFetching && (
        <h1>There are no contacts in phonebook!</h1>
      )}
    </>
  );
}
