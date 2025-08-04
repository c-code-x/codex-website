describe('API Route: /api/user-profile', () => {
  const regularUserEmail = 'test.user@example.com';

  // Seed the database before running tests to ensure the user exists
  before(() => {
    cy.task('seedTestUserAndEvent');
  });

  context('GET /api/user-profile', () => {
    it('should return 401 if the user is not authenticated', () => {
      cy.request({
        url: '/api/user-profile',
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(401);
      });
    });

    it('should return the user profile for an authenticated user', () => {
      cy.request({
        url: '/api/user-profile',
        headers: { 'X-Cypress-Mock-User-Email': regularUserEmail },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('user_email', regularUserEmail);
        expect(response.body).to.have.property('user_name');
      });
    });
  });

  context('PUT /api/user-profile', () => {
    const profileUpdateData = {
      user_name: 'Updated Test User',
      roll_no: 'CS12345',
      semester: '6',
      branch: 'Computer Science',
      college_name: 'Test University',
      profile_pic: '/avatars/new-avatar.png',
    };

    it('should return 401 if the user is not authenticated', () => {
      cy.request({
        method: 'PUT',
        url: '/api/user-profile',
        body: profileUpdateData,
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(401);
      });
    });

    it('should return 400 if required fields (e.g., user_name) are missing', () => {
      cy.request({
        method: 'PUT',
        url: '/api/user-profile',
        body: { ...profileUpdateData, user_name: '' },
        headers: { 'X-Cypress-Mock-User-Email': regularUserEmail },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(400);
        expect(response.body.error).to.contain('Username and Roll Number are required');
      });
    });

    it('should successfully update the profile for an authenticated user', () => {
      cy.request({
        method: 'PUT',
        url: '/api/user-profile',
        body: profileUpdateData,
        headers: { 'X-Cypress-Mock-User-Email': regularUserEmail },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('message', 'Profile updated successfully');

        // Follow-up GET request to verify the data updation in the DB
        cy.request({
          url: '/api/user-profile',
          headers: { 'X-Cypress-Mock-User-Email': regularUserEmail },
        }).then((res) => {
          expect(res.body.user_name).to.eq(profileUpdateData.user_name);
          expect(res.body.roll_no).to.eq(profileUpdateData.roll_no);
          expect(res.body.branch).to.eq(profileUpdateData.branch);
        });
      });
    });
  });
});