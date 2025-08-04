describe('Events Page - Regular User Flow', () => {
  // --- Mock Data ---
  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + 7);
  const mockEvents = {
    events: [
      { event_id: 1, event_name: 'Upcoming Tech Conference', event_date: futureDate.toISOString(), duration: 180, venue: 'Online', poster: '/assets/memories/mem_event1.png', visibility: true, event_description: 'A conference about future tech.', participants: 150 },
      { event_id: 2, event_name: 'Past Workshop 2024', event_date: new Date(new Date().setFullYear(new Date().getFullYear() - 1)).toISOString(), duration: 120, venue: 'Auditorium', poster: '/assets/memories/mem_event1.png', visibility: true, event_description: 'A workshop from last year.', participants: 80 },
    ]
  };
  const setupUserIntercepts = () => {
    cy.intercept('GET', '/api/auth/session', { statusCode: 200, body: { user: { name: 'Test User' } } }).as('session');
    cy.intercept('GET', '/api/user-profile', { statusCode: 200, body: { role: 'user' } }).as('profile');
    cy.intercept('GET', '/api/events', { statusCode: 200, body: mockEvents }).as('getEvents');
    cy.intercept('GET', '/api/event-registration', { statusCode: 200, body: { events: [] } }).as('getRegistered');
  };

  beforeEach(() => { setupUserIntercepts(); });

  it('should display upcoming and past events but no admin controls', () => {
    cy.visit('/events');
    cy.wait('@getEvents');
    cy.contains('h3', 'Upcoming Tech Conference').should('be.visible');
    cy.contains('button', 'Register Now').should('be.visible');
    cy.contains('h2', 'Past Events').should('be.visible');
    cy.contains('h3', 'Past Workshop 2024').should('be.visible');
    cy.contains('button', 'Add Events').should('not.exist');
    cy.contains('button', 'Update Events').should('not.exist');
  });

  it('should allow a user to register for an event', () => {
    cy.intercept('POST', '/api/event-registration', { statusCode: 200 }).as('registerEvent');
    cy.visit('/events');
    cy.wait('@getEvents');
    cy.contains('button', 'Register Now').click();
    cy.wait('@registerEvent').its('request.body').should('deep.equal', {
      event_id: 1,
      event_name: 'Upcoming Tech Conference'
    });
    cy.on('window:alert', (str) => expect(str).to.equal('Registration successful!'));
    cy.contains('span', '✓ Registered').should('be.visible');
  });
});