import { useState } from 'react';
import {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} from 'redux/contacts/contactsSlice';

function App() {
  const [newContact, setNewContact] = useState('');
  const { contacts = [], isFetching } = useGetContactsQuery();
  const [addContact, error] = useAddContactMutation();
  const [deleteContact] = useDeleteContactMutation();

  if (isFetching) return <h1>Loading...</h1>;
  if (error) return <h1>We have a problem {error.data}</h1>;

  console.log('newContact: ', newContact);

  const handleAddContact = async () => {
    if (newContact) {
      await addContact({ name: 'newContact' });
      setNewContact('');
    }
  };

  const handleDeleteContact = async id => {
    await deleteContact(id);
  };

  return (
    <div>
      <input
        type="text"
        value={newContact}
        onChange={e => {
          setNewContact(e.target.value);
        }}
      />
      <button onClick={handleAddContact}>Add Contact</button>

      <ul>
        {contacts.map(item => (
          <li key={item.id}>
            <span>{item.name}:</span>
            <span>{item.number}</span>
            <button
              onClick={() => {
                handleDeleteContact(item.id);
              }}
            >
              Delete Contact
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
