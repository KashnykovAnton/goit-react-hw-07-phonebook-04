import './App.css';
import Section from './components/Section';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
// import Test from './components/Test';

export default function App() {
  return (
    <div>
      <Section title="Phonebook">
        {/* <Test /> */}
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </div>
  );
}
