import { AddButton, Box, Input, Title } from "./CreateContacts.styled";
import PropTypes from 'prop-types';

export const CreateContacts = props => { 
    const { text, value, onChange } = props;
    return (
        <Box>
            <Title>{text}</Title>
            <Input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={value}
                onChange={onChange} />
            <AddButton>Add contact</AddButton>
        </Box>
    );
};