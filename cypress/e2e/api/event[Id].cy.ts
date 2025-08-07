export {}

describe('API Route: /api/events/[eventId]', () => {
  const adminUserEmail = 'admin.user@example.com';
  const regularUserEmail = 'test.user@example.com';
  let testEventId: string;

  const eventData = {
    event_name: 'Event for Single-ID Tests',
    event_date: '2026-01-15T12:00:00Z',
  };

  // create a fresh event to operate on
  beforeEach(() => {
    cy.request({
      method: 'POST',
      url: '/api/events',
      body: eventData,
      headers: { 'X-Cypress-Mock-User-Email': adminUserEmail },
    }).then((response) => {
      testEventId = response.body.event_id;
    });
  });

  //delete the event to ensure a clean state
  afterEach(() => {
    if (testEventId) {
      cy.request({
        method: 'DELETE',
        url: `/api/events/${testEventId}`,
        headers: { 'X-Cypress-Mock-User-Email': adminUserEmail },
        failOnStatusCode: false,
      });
    }
  });

  context('GET /api/events/[eventId]', () => {
    it('should fetch a single event successfully', () => {
      cy.request(`/api/events/${testEventId}`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.event.event_id).to.eq(testEventId);
        expect(response.body.event.event_name).to.eq(eventData.event_name);
      });
    });

    it('should return 404 for a non-existent event', () => {
      cy.request({
        url: '/api/events/00000000-0000-0000-0000-000000000000',
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(404);
      });
    });
  });

  context('PUT /api/events/[eventId]', () => {
    const updateData = { event_name: 'Updated Event Name', event_date: '2026-02-20T14:00:00Z' };

    it('should be forbidden for non-admin users', () => {
      cy.request({
        method: 'PUT',
        url: `/api/events/${testEventId}`,
        body: updateData,
        headers: { 'X-Cypress-Mock-User-Email': regularUserEmail },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(403);
      });
    });

    it('should update an event successfully for an admin', () => {
      cy.request({
        method: 'PUT',
        url: `/api/events/${testEventId}`,
        body: updateData,
        headers: { 'X-Cypress-Mock-User-Email': adminUserEmail },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.success).to.be.true;
      });
    });
  });

  context('DELETE /api/events/[eventId]', () => {
    it('should be forbidden for non-admin users', () => {
      cy.request({
        method: 'DELETE',
        url: `/api/events/${testEventId}`,
        headers: { 'X-Cypress-Mock-User-Email': regularUserEmail },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(403);
      });
    });

    it('should delete an event successfully for an admin', () => {
      cy.request({
        method: 'DELETE',
        url: `/api/events/${testEventId}`,
        headers: { 'X-Cypress-Mock-User-Email': adminUserEmail },
      }).then((response) => {
        expect(response.status).to.eq(200);
        cy.request({ url: `/api/events/${testEventId}`, failOnStatusCode: false }).then((res) => {
          expect(res.status).to.eq(404);
        });
      });
    });
  });
});