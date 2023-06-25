import { ContactInfo, ContactItem, DeletButton, List } from "./ContactsList.styled";

export const ContactsList = ({contacts, onClick})=> {
    
    return (
        <List>
            {contacts.map(({ id, name, number }) => (
                <ContactItem key={id}>
                    <ContactInfo>{name}:{number}</ContactInfo>
                    <DeletButton onClick={() => onClick(id)}>Delete</DeletButton>
                </ContactItem>
            ))}
        </List>
    );
};


