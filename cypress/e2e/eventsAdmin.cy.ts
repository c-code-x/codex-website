describe('Events Page - Admin Flow', () => {
  // --- Mock Data ---
  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + 7);
  const mockEvents = {
    events: [
      { event_id: 1, event_name: 'Upcoming Tech Conference', event_date: futureDate.toISOString(), duration: 180, venue: 'Online', poster: '/assets/memories/mem_event1.png', visibility: true, event_description: 'A conference about future tech.', participants: 150 },
      { event_id: 2, event_name: 'Past Workshop 2024', event_date: new Date(new Date().setFullYear(new Date().getFullYear() - 1)).toISOString(), duration: 120, venue: 'Auditorium', poster: '/assets/memories/mem_event1.png', visibility: true, event_description: 'A workshop from last year.', participants: 80 },
    ]
  };
  const setupAdminIntercepts = () => {
    cy.intercept('GET', '/api/auth/session', { statusCode: 200, body: { user: { name: 'Admin User' } } }).as('session');
    cy.intercept('GET', '/api/user-profile', { statusCode: 200, body: { role: 'admin' } }).as('profile');
    cy.intercept('GET', '/api/events', { statusCode: 200, body: mockEvents }).as('getEvents');
  };

  beforeEach(() => { setupAdminIntercepts();});

  it('should display admin controls on the events page', () => {
    cy.visit('/events');
    cy.wait('@getEvents');
    cy.contains('button', 'Add Events').should('be.visible');
    cy.contains('button', 'Update Events').should('be.visible');
    cy.contains('button', 'Download').should('be.visible');
  });

  it('should allow an admin to add a new event', () => {
    cy.intercept('POST', '/api/events', { statusCode: 200 }).as('addEvent');
    cy.visit('/events/add-events');
    cy.get('input[name="event_name"]').type('New Admin Event');
    cy.get('input[name="event_date"]').type(futureDate.toISOString().slice(0, 16));
    cy.get('input[name="event_description"]').type('Description for the new event.');
    cy.get('input[name="poster"]').type('https://example.com/poster.png');
    cy.get('input[name="whatsapp_link"]').type('https://chat.whatsapp.com/newgroup');
    cy.get('input[name="duration"]').type('60');
    cy.contains('button', 'Add Event').click();
    cy.wait('@addEvent');
    cy.contains('Event added!').should('be.visible');
    cy.url().should('include', '/events');
  });

  it('should allow an admin to update an existing event', () => {
    cy.intercept('POST', '/api/events', (req) => {
      if (req.body.action === 'fetch') {
        req.reply({ statusCode: 200, body: { event: mockEvents.events[1] } });
      }
    }).as('fetchEventDetails');
    cy.intercept('PUT', '/api/events', { statusCode: 200 }).as('updateEvent');
    cy.visit('/events/update-event');
    cy.wait('@getEvents');
    cy.get('select').select('Past Workshop 2024');
    cy.wait('@fetchEventDetails');
    cy.get('input[name="event_name"]').clear().type('Updated Past Workshop');
    cy.get('input[name="duration"]').clear().type('150');
    cy.contains('button', 'Update Event').click();
    cy.wait('@updateEvent').its('request.body').should('include', {
      event_name: 'Updated Past Workshop',
      duration: 150
    });
    cy.contains('Event updated!').should('be.visible');
  });
});