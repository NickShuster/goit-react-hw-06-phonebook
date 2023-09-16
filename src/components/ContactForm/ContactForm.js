import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from '../Redux/contactsSlice';
import { store } from '../Redux/store';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [error, setError] = useState(null);

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleNumberChange = event => {
    setNumber(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    if (name.trim() === '' || number.trim() === '') return;

    try {
      const newContact = {
        id: nanoid(),
        name,
        number,
      };

      await dispatch(addContact(newContact));

      console.log('Поточний стан стору:', store.getState());

      setName('');
      setNumber('');
      setError(null);
    } catch (error) {
      setError('Помилка при додаванні контакту');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
      </div>
      <div>
        <label>
          Phone Number:
          <input type="text" value={number} onChange={handleNumberChange} />
        </label>
      </div>
      <div>
        <button type="submit">Add Contact</button>
      </div>
      {error && <p>{error}</p>}
    </form>
  );
};

export default ContactForm;