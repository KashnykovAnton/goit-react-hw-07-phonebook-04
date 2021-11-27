import { useDeleteContactMutation } from 'redux/contacts/RTK';

export default function ContactList({ id, name, number }) {
  const [deleteContact] = useDeleteContactMutation();

  const onDelete = id => deleteContact(id);

  return (
    <li>
      <span>{name}:</span>
      <span>{number}</span>
      <button
        type="button"
        id={id}
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </li>
  );
}
