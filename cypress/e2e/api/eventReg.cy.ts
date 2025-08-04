describe('API Route: /api/event-registration', () => {
  const testUserEmail = 'test.user@example.com';
  const nonExistentUserEmail = 'ghost@example.com';
  let testEventId: string;

  // This cleans the DB and creates the user and event needed for the tests.
  before(() => {
    cy.task('seedTestUserAndEvent').then((data: any) => {
      if (data && data.eventId) {
        testEventId = data.eventId;
      } else {
        throw new Error("Failed to get eventId from seed task.");
      }
    });
  });

  after(() => {
    // Clean up the event that was created for the test suite
    cy.task('cleanTestEvent', testEventId);
  });
  
  context('POST /api/event-registration', () => {
    // clean up registrations to ensure test isolation.
    afterEach(() => {
      cy.task('cleanUserRegistrations', testUserEmail);
    });

    it('should return 401 Unauthorized if no session is provided', () => {
      cy.request({
        method: 'POST',
        url: '/api/event-registration',
        body: { event_id: testEventId },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(401);
      });
    });

    it('should successfully register a user for an event', () => {
      cy.request({
        method: 'POST',
        url: '/api/event-registration',
        body: { event_id: testEventId },
        headers: { 'X-Cypress-Mock-User-Email': testUserEmail },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('success', true);
      });
    });

    it('should return 400 if the user is already registered', () => {
      // First, register the user to set up
      cy.request({
        method: 'POST',
        url: '/api/event-registration',
        body: { event_id: testEventId },
        headers: { 'X-Cypress-Mock-User-Email': testUserEmail },
      });

      // register again and expect a failure
      cy.request({
        method: 'POST',
        url: '/api/event-registration',
        body: { event_id: testEventId },
        headers: { 'X-Cypress-Mock-User-Email': testUserEmail },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(400);
        expect(response.body).to.have.property('error', 'User already registered for this event');
      });
    });

    it('should return 404 if the event does not exist', () => {
      cy.request({
        method: 'POST',
        url: '/api/event-registration',
        body: { event_id: '00000000-0000-0000-0000-000000000000' }, // A non-existent event UUID
        headers: { 'X-Cypress-Mock-User-Email': testUserEmail },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(404);
        expect(response.body).to.have.property('error', 'Event not found');
      });
    });
  });

  context('GET /api/event-registration', () => {
    it('should return 401 Unauthorized if no session is provided', () => {
      cy.request({
        method: 'GET',
        url: '/api/event-registration',
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(401);
      });
    });

    it('should return 404 Not Found if the authenticated user does not exist in the DB', () => {
      cy.request({
        method: 'GET',
        url: '/api/event-registration',
        headers: { 'X-Cypress-Mock-User-Email': nonExistentUserEmail },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(404);
        expect(response.body).to.have.property('error', 'User not found');
      });
    });

    it('should return an empty array if the user has no registrations', () => {
      cy.request({
        method: 'GET',
        url: '/api/event-registration',
        headers: { 'X-Cypress-Mock-User-Email': testUserEmail },
      }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.events).to.be.an('array').that.is.empty;
      });
    });
  });
});