import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { addContact } from 'redux/contactsSlice';
import { Form } from 'components/App.styled';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const contactsInStore = useSelector(state => state.contacts.contact);

  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const searchContacts = contactsInStore.find(
      contactInStore =>
        contactInStore.name.toLowerCase() === contact.name.toLowerCase()
    );

    if (searchContacts) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    dispatch(addContact(contact));
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />

      <label htmlFor="number">Number</label>
      <input
        id="number"
        type="tel"
        name="number"
        value={number}
        onChange={e => setNumber(e.target.value)}
        required
      />

      <button type="submit">Add contact</button>
    </Form>
  );
};

export default ContactForm;
