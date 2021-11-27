import './App.css';
import ContactsSection from './components/ContactsSection';
import ContactsList from './components/ContactsList';
import ContactsForm from './components/ContactsForm';
import ContactsFilter from './components/ContactsFilter';
// import Test from './components/Test';

export default function App() {
  return (
    <div>
      <ContactsSection title="Phonebook">
        {/* <Test /> */}
        <ContactsForm />
      </ContactsSection>
      <ContactsSection title="Contacts">
        <ContactsFilter />
        <ContactsList />
      </ContactsSection>
    </div>
  );
}
