export {}

describe('Login Page UI', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should display the login page elements correctly', () => {
    cy.contains('h1', 'Login').should('be.visible');     // title check
    cy.contains('button', 'Sign in with Google').should('be.visible'); // Google Sign-In button check
    
  });
});

describe('Post-Authentication Flow for Google Users', () => {
  // Test Case 1: A completely new user logs in for the first time.
  it('should direct a new user to the registration form after first-time Google login', () => {
    // Successful Google login by intercepting the session check.
    cy.intercept('GET', '/api/auth/session', {
      statusCode: 200,
      body: {
        user: { name: 'New Google User', email: 'new.user@google.com' },
        expires: new Date(Date.now() + 3600 * 1000).toISOString(),
      },
    }).as('session');

    // Mock the user profile API to return an incomplete profile,
    cy.intercept('GET', '/api/user-profile', {
      statusCode: 200,
      body: { roll_no: null, semester: null, branch: null, user_name: 'New Google User' }
    }).as('getProfile');

    // detect the session and check the profile.
    cy.visit('/login');
    cy.wait(['@session', '@getProfile']);
    cy.contains('h2', 'Join with us').should('be.visible');
    cy.contains('button', 'Complete Profile').should('be.visible');
    cy.url().should('not.include', '/user-dashboard');
  });

  // Test Case 2: An existing user logs in again.
  it('should redirect an existing user directly to the dashboard after Google login', () => {
    // Simulate a successful Google login.
    cy.intercept('GET', '/api/auth/session', {
      statusCode: 200,
      body: {
        user: { name: 'Returning User', email: 'returning.user@google.com' },
        expires: new Date(Date.now() + 3600 * 1000).toISOString(),
      },
    }).as('session');

    // Mock the user profile API to return a COMPLETE profile.
    cy.intercept('GET', '/api/user-profile', {
      statusCode: 200,
      body: { roll_no: '22123', semester: 6, branch: 'CSE', user_name: 'Returning User' }
    }).as('getProfile');

    cy.visit('/login');
    cy.wait(['@session', '@getProfile']);
    cy.url().should('include', '/user-dashboard'); // Verify redirection to the dashboard
    cy.contains('Complete Profile').should('not.exist'); // Ensure registration form is not shown
  });
});