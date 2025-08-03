import React from 'react';
import LoginForm from '../../src/components/loginPage';
import * as NextAuth from 'next-auth/react';

describe('<LoginForm /> Component Tests', () => {

  // Test Case 1: Component Rendering
  // Verifies that the UI elements, like text and the login button, render correctly.
  it('should render the welcome text and the Google login button', () => {
    cy.mount(<LoginForm />);

    cy.contains('Welcome').should('be.visible');
    cy.contains('LOGIN into CodeX').should('be.visible');

    const googleButton = cy.contains('button', 'Sign in with Google');
    googleButton.should('be.visible');
    googleButton.find('img[alt="Google"]').should('be.visible');
  });

  // Test Case 2: Login Action
  // To Verify that clicking the button calls the `signin` function from next-auth.
  it('should call the signIn function with "google" when the button is clicked', () => {
    // replace the `signIn` function from the 'next-auth/react' module
    cy.stub(NextAuth, 'signIn').as('signInStub');
    cy.mount(<LoginForm />);
    cy.contains('button', 'Sign in with Google').click();

    // Assert that our stubbed function was called with the correct provider
    cy.get('@signInStub').should('have.been.calledOnceWith', 'google');
  });
});