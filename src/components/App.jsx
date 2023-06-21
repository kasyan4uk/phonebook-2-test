import { Component } from "react";
import { Conteiner } from "utils/Container";
import { Section } from "./Section/Section";
import { CreateContacts } from "./CreateContacts/CreateContacts";
import { ContactsList } from "./ContactsList/ContactsList";

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChangeName = evt => {
    this.setState({name: evt.currentTarget.value})
  };

  render() { 
    return (
      <Conteiner>
        <Section title="Phonebook">
          <CreateContacts
            text='Name'
            value={this.state.name}
            onChange={this.handleChangeName}
          />
        </Section>
        <Section title="Contacts">
          <ContactsList/>
        </Section>
      </Conteiner>
    );
  };
};

