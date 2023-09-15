import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../Redux/contactsSlice'; 

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li>
      {name}: {number}
      <button onClick={handleDeleteContact}>Delete</button>
    </li>
  );
};

export default Contact;