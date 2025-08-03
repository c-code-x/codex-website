import React from 'react';
import RegistrationForm from '../../src/components/registrationForm';

// A stateful wrapper to test the controlled component
const StatefulRegistrationForm = () => {
  const [form, setForm] = React.useState({
    rollNo: '',
    semester: '',
    branch: '',
    username: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <RegistrationForm
      {...form} collegename="GITAM" onChange={handleChange} handleSubmit={() => {}}
    />
  );
};


describe('<RegistrationForm /> Component Tests', () => {
  
  it('should render all input fields with the provided values', () => {
    // ... existing code ...
    const props = {
      rollNo: '12345',
      semester: '5',
      branch: 'CSE',
      username: 'testuser',
      collegename: 'GITAM',
      onChange: () => {},
      handleSubmit: () => {},
    };

    cy.mount(<RegistrationForm {...props} />);

    cy.get('input[name="username"]').should('have.value', 'testuser');
    cy.get('input[name="rollNo"]').should('have.value', '12345');
    cy.contains('button', 'Complete Profile').should('be.visible');
  });

  // This is the corrected test
  it('should allow a user to type into the input fields', () => {
    cy.mount(<StatefulRegistrationForm />);

    // Now Cypress can type and the state will update, changing the input's value
    cy.get('input[name="username"]').type('new_user').should('have.value', 'new_user');
    cy.get('input[name="rollNo"]').type('54321').should('have.value', '54321');
    cy.get('input[name="semester"]').type('6').should('have.value', '6');
    cy.get('input[name="branch"]').type('ECE').should('have.value', 'ECE');
  });
});