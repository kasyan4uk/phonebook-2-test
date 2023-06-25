import { AddButton, Box, Input, Title } from "./CreateContacts.styled";
import PropTypes from 'prop-types';
import { Component } from "react";

class CreateContacts extends Component {
    static propTypes = {
        name: PropTypes.string,
        number: PropTypes.string,
    };

    state = {
        name: '',
        number: '',
    };

    handleSubmit = e => {
        e.preventDefault();

        this.props.onSubmit({
            name: this.state.name,
            number: this.state.number,
        });
        this.setState({ name: '', number: '' });
    };

    handleChange = e => {
        const { name, value } = e.currentTarget;

        this.setState({ [name]: value });
    };
    render() { 
        const { name, number } = this.state;
        return (
            <Box onSubmit={this.handleSubmit}>
                <Title>Name
                    <Input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={name}
                    onChange={this.handleChange}
                />
                </Title>
                <Title>Number
                    <Input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={number}
                    onChange={this.handleChange}
                />
                </Title>
                <AddButton type="submit">Add contact</AddButton>
            </Box>
        );
    }
}
 
export default CreateContacts;
