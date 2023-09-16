import React from 'react';
import { useSelector } from 'react-redux';
import Contact from './Contact';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items) || [];

  return (
    <ul>
      {contacts.map(contact => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </ul>
  );
};

export default ContactList;