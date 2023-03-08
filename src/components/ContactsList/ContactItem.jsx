import PropTypes from 'prop-types';
import {
  Contact,
  ContactName,
  ContactNumber,
  ContactBtn,
} from './ContactItem.styled';

export const ContactItem = ({ contact, onClick }) => {
  const { name, number } = contact;
  return (
    <Contact>
      <div>
        <ContactName>{name}</ContactName>
        <ContactNumber>Tel: {number}</ContactNumber>
      </div>
      <ContactBtn type="button" onClick={() => onClick(contact.id)}>
        Delete
      </ContactBtn>
    </Contact>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onClick: PropTypes.func.isRequired,
};
