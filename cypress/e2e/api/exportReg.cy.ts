describe('API Route: /api/export-registration', () => {
  const adminUserEmail = 'admin.user@example.com';
  const regularUserEmail = 'test.user@example.com';
  let testEventId: string;

  before(() => {
    cy.task('seedTestUserAndEvent').then((data: any) => {
      testEventId = data.eventId;
    });
  });

  it('should return 403 Forbidden for non-admin users', () => {
    cy.request({
      url: `/api/export-registration?event_id=${testEventId}`,
      headers: { 'X-Cypress-Mock-User-Email': regularUserEmail },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(403);
    });
  });

  it('should return 403 Forbidden for unauthenticated users', () => {
    cy.request({
      url: `/api/export-registration?event_id=${testEventId}`,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(403);
    });
  });

  it('should return 400 Bad Request if event_id is missing', () => {
    cy.request({
      url: '/api/export-registration',
      headers: { 'X-Cypress-Mock-User-Email': adminUserEmail },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400);
    });
  });

  it('should return 404 Not Found for a non-existent event', () => {
    cy.request({
      url: '/api/export-registration?event_id=00000000-0000-0000-0000-000000000000',
      headers: { 'X-Cypress-Mock-User-Email': adminUserEmail },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });

  it('should return an Excel file for an admin user', () => {
    cy.request({
      url: `/api/export-registration?event_id=${testEventId}`,
      headers: { 'X-Cypress-Mock-User-Email': adminUserEmail },
      encoding: 'binary', // Important for file downloads
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.headers['content-type']).to.eq('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
      expect(response.headers['content-disposition']).to.include('.xlsx');
      // The body will be the binary content of the Excel file
      expect(response.body.length).to.be.greaterThan(100);
    });
  });
});