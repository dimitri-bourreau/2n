import React from 'react';
import { mount } from 'cypress-react-unit-test';
import App from '../../src/App';

describe('App', () => {
  it('renders', () => {
    mount(<App />);
    cy.get('#app').should('exist');
  });
});
