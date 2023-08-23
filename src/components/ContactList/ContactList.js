import React, { Component } from 'react';
import { ListContainer, ListItem } from './ContactList.styled';

export default class ContactList extends Component {
  render() {
    return (
      <ListContainer>
        {this.props.contacts.map(contact => (
          <ListItem key={contact.id}>
            {contact.name}: {contact.number}
            <button onClick={() => this.props.deleteContact(contact.id)}>
              Delete
            </button>
          </ListItem>
        ))}
      </ListContainer>
    );
  }
}
