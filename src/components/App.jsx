import { Component } from "react";
import { Conteiner } from "utils/Container";
import { Section } from "./Section/Section";
import CreateContacts from "./CreateContacts/CreateContacts";
import { ContactsList } from "./ContactsList/ContactsList";
import { nanoid } from 'nanoid'
import initialState from './contacts.json'
import { FilterContact } from "FilterContact/FilterContact.styled";


export class App extends Component {
  state = {
    contacts: initialState,
    filter: '',
  };

  addContact = ({name, number})  => { 
    if (this.state.contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts!`)
    } else {
      const newContact = {
        name,
        number,
        id: nanoid,
      };
      this.setState(prevState => ({
        contacts: [newContact, ...prevState.contacts]
      }))
    }
  };

  deletContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }

  changeFilter = e => { 
    this.setState({filter: e.currentTarget.value})
  };

  getFilteredContact = () => { 
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({name}) => name.toLowerCase().includes(normalizedFilter))
  };

  render() { 
    const filteredContact = this.getFilteredContact();
    return (
      <Conteiner>
        <Section title="Phonebook">
          <CreateContacts onSubmit={ this.addContact} />
        </Section>
        <Section title="Contacts">
          <FilterContact onChange={this.changeFilter} filter={this.state.filter} />
          {filteredContact.length > 0 ?
            <ContactsList
            contacts={filteredContact}
            onClick={this.deletContact}
            /> :
            <>You don't have contacts</>
        }
        </Section>
      </Conteiner>
    );
  };
};

