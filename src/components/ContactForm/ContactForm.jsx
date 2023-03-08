import { Formik } from 'formik';
import PropTypes from 'prop-types';

import {
  Form,
  FormInput,
  FormBtn,
  FormLabel,
  FormErrorMessage,
} from './ContactForm.styles';

export const ContactForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={(values, actions) => {
        onSubmit(values);
        actions.resetForm();
      }}
    >
      <Form>
        <label htmlFor="name">
          <FormLabel>Name</FormLabel>
          <FormInput
            id="name"
            name="name"
            type="text"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <FormErrorMessage name="name" component="span" />
        </label>

        <label htmlFor="number">
          <FormLabel>Number</FormLabel>
          <FormInput
            id="number"
            name="number"
            type="tel"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <FormErrorMessage name="number" component="span" />
        </label>

        <FormBtn type="submit">Add contact</FormBtn>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
