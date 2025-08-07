export {}

describe('Events Page - UI and Interaction Flow', () => {
  // --- Mock Data ---
  const pastDate1 = new Date();
  pastDate1.setFullYear(pastDate1.getFullYear() - 1);
  const pastDate2 = new Date();
  pastDate2.setMonth(pastDate2.getMonth() - 2);
  const mockEvents = {
    events: [
      { event_id: 1, event_name: 'Upcoming Tech Conference', event_date: new Date(new Date().setDate(new Date().getDate() + 7)).toISOString(), duration: 180, venue: 'Online', poster: '/assets/memories/mem_event1.png', visibility: true, event_description: 'A conference about future tech.', participants: 150 },
      { event_id: 2, event_name: 'Past Workshop 2024', event_date: pastDate1.toISOString(), duration: 120, venue: 'Auditorium', poster: '/assets/memories/mem_event1.png', visibility: true, event_description: 'A workshop from last year.', participants: 80 },
      { event_id: 3, event_name: 'Past Seminar 2025', event_date: pastDate2.toISOString(), duration: 90, venue: 'Room 101', poster: '/assets/memories/mem_event1.png', visibility: true, event_description: 'A recent seminar.', participants: 120 },
    ]
  };
  const setupBaseIntercepts = () => {
    cy.intercept('GET', '/api/auth/session', { statusCode: 200, body: { user: { name: 'Test User' } } }).as('session');
    cy.intercept('GET', '/api/user-profile', { statusCode: 200, body: { role: 'user' } }).as('profile');
    cy.intercept('GET', '/api/events', { statusCode: 200, body: mockEvents }).as('getEvents');
    cy.intercept('GET', '/api/event-registration', { statusCode: 200, body: { events: [] } }).as('getRegistered');
  };

  beforeEach(() => { setupBaseIntercepts(); });

  it('should filter events by search term', () => {
    cy.visit('/events');
    cy.wait('@getEvents');
    cy.contains('h3', 'Past Workshop 2024').should('be.visible');
    cy.contains('h3', 'Past Seminar 2025').should('be.visible');
    cy.get('input[placeholder="Search past events..."]').type('Workshop');
    cy.contains('h3', 'Past Workshop 2024').should('be.visible');
    cy.contains('h3', 'Past Seminar 2025').should('not.exist');
  });

  it('should navigate through pages', () => {
    const manyPastEvents = Array.from({ length: 5 }, (_, i) => ({
      ...mockEvents.events[1],
      event_id: 10 + i,
      event_name: `Past Event ${i + 1}`
    }));
    cy.intercept('GET', '/api/events', { events: [mockEvents.events[0], ...manyPastEvents] }).as('getManyEvents');
    cy.visit('/events');
    cy.wait('@getManyEvents');
    cy.contains('h3', 'Past Event 1').should('be.visible');
    cy.contains('h3', 'Past Event 3').should('be.visible');
    cy.contains('h3', 'Past Event 4').should('not.exist');
    cy.get('button > svg > path[d="M9 5l7 7-7 7"]').parent().parent().click();
    cy.contains('h3', 'Past Event 1').should('not.exist');
    cy.contains('h3', 'Past Event 4').should('be.visible');
    cy.contains('h3', 'Past Event 5').should('be.visible');
  });
});