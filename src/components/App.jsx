import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';
import { Container } from './Container/Container';

import { useLocalStorage } from 'hooks/useLocalStorage';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const CONTACTS_KEY = 'contacts';

// const getInitialContacts = () => {
//   const savedContacts = localStorage.getItem(CONTACTS_KEY);

//   if (savedContacts !== null) {
//     return JSON.parse(savedContacts);
//   }

//   return initialContacts;
// };

export const App = () => {
  const [contacts, setContacts] = useLocalStorage(
    CONTACTS_KEY,
    initialContacts
  );
  const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
  // }, [contacts]);

  const addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(contacts => [contact, ...contacts]);
  };

  const removeContact = contactId => {
    setContacts(contacts => contacts.filter(({ id }) => id !== contactId));
  };

  const formSubmitHandle = data => {
    const isContactRepeat = contacts.find(
      contact => contact.name === data.name
    );

    if (isContactRepeat) {
      alert(`${data.name} is alredy in contacts`);
      return;
    }

    addContact(data);
  };

  const handleFilterChange = event => {
    return setFilter(event.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();
  const visibleContactsLength = visibleContacts.length;
  const contactsLength = contacts.length;

  return (
    <>
      <GlobalStyle />
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={formSubmitHandle} />
      </Container>
      <Container>
        <h2>Contacts</h2>
        <Filter value={filter} onChange={handleFilterChange} />
        {contactsLength === 0 ? (
          <p>You have no contacts yet...</p>
        ) : visibleContactsLength === 0 ? (
          <p>No results in your contacts...</p>
        ) : (
          <ContactsList
            contacts={visibleContacts}
            onRemoveContact={removeContact}
          />
        )}
      </Container>
    </>
  );
};
