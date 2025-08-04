describe('API Route: /api/events', () => {
  const adminUserEmail = 'admin.user@example.com';
  const regularUserEmail = 'test.user@example.com';
  let createdEventId: string;

  const testEventData = {
    event_name: 'Cypress Test Event',
    event_date: '2025-12-25T10:00:00Z',
    event_description: 'An event created by a Cypress test.',
    duration: 120,
    whatsapp_link: 'https://chat.whatsapp.com/test',
    poster: '/posters/test-poster.png',
  };

  // After all tests, clean up the event created by the POST test
  after(() => {
    if (createdEventId) {
      cy.request({
        method: 'DELETE',
        url: `/api/events/${createdEventId}`,
        headers: { 'X-Cypress-Mock-User-Email': adminUserEmail },
      });
    }
  });

  context('GET /api/events', () => {
    it('should return a list of events and a 200 status code', () => {
      cy.request('/api/events').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('events');
        expect(response.body.events).to.be.an('array');
      });
    });
  });

  context('POST /api/events', () => {
    it('should return 403 Forbidden if no session is provided', () => {
      cy.request({
        method: 'POST',
        url: '/api/events',
        body: testEventData,
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(403);
      });
    });

    it('should return 403 Forbidden for a non-admin user', () => {
      cy.request({
        method: 'POST',
        url: '/api/events',
        body: testEventData,
        headers: { 'X-Cypress-Mock-User-Email': regularUserEmail },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(403);
      });
    });

    it('should return 400 Bad Request if required fields are missing', () => {
      const incompleteData = { ...testEventData, event_name: '' };
      cy.request({
        method: 'POST',
        url: '/api/events',
        body: incompleteData,
        headers: { 'X-Cypress-Mock-User-Email': adminUserEmail },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(400);
        expect(response.body).to.have.property('error', 'Event name and date are required');
      });
    });

    it('should successfully create an event for an admin user and return 201', () => {
      cy.request({
        method: 'POST',
        url: '/api/events',
        body: testEventData,
        headers: { 'X-Cypress-Mock-User-Email': adminUserEmail },
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('success', true);
        expect(response.body).to.have.property('event_id');
        createdEventId = response.body.event_id;
      });
    });
  });
});