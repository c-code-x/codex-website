import React from 'react';
import RegistrationForm from '../../src/components/registrationForm';

// A stateful wrapper to test the controlled component
const StatefulRegistrationForm = () => {
  const [form, setForm] = React.useState({
    roll_no: '',
    semester: '',
    branch: '',
    user_name: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <RegistrationForm
      {...form} college_name="GITAM" onChange={handleChange} handleSubmit={() => {}}
    />
  );
};


describe('<RegistrationForm /> Component Tests', () => {
  
  it('should render all input fields with the provided values', () => {
    const props = {
      roll_no: '12345',
      semester: '5',
      branch: 'CSE',
      user_name: 'testuser',
      college_name: 'GITAM',
      onChange: () => {},
      handleSubmit: () => {},
    };

    cy.mount(<RegistrationForm {...props} />);

    cy.get('input[name="user_name"]').should('have.value', 'testuser');
    cy.get('input[name="roll_no"]').should('have.value', '12345');
    cy.get('select[name="branch"]').should('have.value', 'CSE');
    cy.contains('button', 'Complete Profile').should('be.visible');
  });

  it('should allow a user to type into the input fields and select from dropdown', () => {
    cy.mount(<StatefulRegistrationForm />);

    cy.get('input[name="user_name"]').type('new_user').should('have.value', 'new_user');
    cy.get('input[name="roll_no"]').type('54321').should('have.value', '54321');
    cy.get('input[name="semester"]').type('6').should('have.value', '6');
    cy.get('select[name="branch"]').select('ECE').should('have.value', 'ECE');
  });
});