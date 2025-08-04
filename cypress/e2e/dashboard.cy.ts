describe('User Dashboard and Profile Editing Flow', () => {

  beforeEach(() => {
    // Intercept the session check for a consistent authenticated user
    cy.intercept('GET', '/api/auth/session', {
      statusCode: 200,
      body: {
        user: { name: 'Test User', email: 'test.user@gitam.in' },
        expires: new Date(Date.now() + 3600 * 1000).toISOString(),
      },
    }).as('session');

    // Mock the initial profile data based on your UserData type
    cy.intercept('GET', '/api/user-profile', {
      statusCode: 200,
      body: {
        user_name: 'Test User',
        user_email: 'test.user@gitam.in',
        roll_no: '221710300001',
        semester: '6',
        branch: 'CSE',
        profile_pic: '/avatars/default.png',
      },
    }).as('getProfile');

    // Mock the event registration API call made by the RegisteredEvents component
    cy.intercept('GET', '/api/event-registration', {
      statusCode: 200,
      body: [],
    }).as('getEvents');
  });

  it('should display the user profile information on the dashboard', () => {
    cy.visit('/user-dashboard');
    cy.wait(['@session', '@getProfile']);
    cy.contains('h2', 'Test User').should('be.visible');
    cy.contains('p', 'test.user@gitam.in').should('be.visible');
    cy.contains('button', 'Edit Profile').should('be.visible');
  });

  it('should allow a user to edit their profile and see the updated information', () => {
    cy.intercept('PUT', '/api/user-profile', {
      statusCode: 200,
      body: { message: 'Profile updated successfully' },
    }).as('updateProfile');

    cy.visit('/user-dashboard/edit-profile');
    cy.wait('@getProfile');
    cy.get('input[name="user_name"]').clear().type('Updated Name');
    cy.contains('button', 'Save Profile').click();

    cy.wait('@updateProfile');
    cy.url().should('include', '/user-dashboard');
  });

  it('should show validation errors for invalid data on the edit profile page', () => {
    cy.visit('/user-dashboard/edit-profile');
    cy.wait('@getProfile');
    cy.get('input[name="user_name"]').clear();
    cy.contains('button', 'Save Profile').click();
  });

  it('should allow a user to select a new avatar from a list and save it', () => {
    cy.intercept('PUT', '/api/user-profile', {
      statusCode: 200,
      body: { message: 'Profile updated successfully' },
    }).as('updateProfile');

    cy.visit('/user-dashboard/edit-profile');
    cy.wait('@getProfile');

    cy.get('[title="Change Avatar"]').click();
    cy.contains('Choose Your Avatar').should('be.visible');

    const secondAvatarUrl = "https://drive.google.com/uc?export=view&id=1XS3n7EeSWKG-8S8ZdW_9Z5_DNHwWsUKV";
    cy.get(`[alt="Avatar 2"]`).click();

    cy.contains('button', 'Save Profile').click();
    cy.wait('@updateProfile').its('request.body').should('deep.include', {
      profile_pic: secondAvatarUrl
    });

    cy.on('window:alert', (str) => {
      expect(str).to.equal('Profile updated successfully!');
    });
    cy.url().should('include', '/user-dashboard');
  })
});