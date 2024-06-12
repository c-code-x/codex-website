describe('CP Problem Sheet Generator Workflow', () => {
  beforeEach(() => {
    // Set the viewport size to 1920 x 1080
    cy.viewport(1920, 1080);
  });
  it('should navigate to the CP generator page and generate a sheet', () => {
      cy.visit('/');
      cy.contains('Resources').click();
      cy.get('a[href="/resources/cp"]').click();
      cy.contains('Practice Now').click();
      cy.visit('/resources/cp/generator'); 
      cy.get('input[name="codeforcesHandle"]').type('sampleHandle'); 
      cy.get('input[name="minRating"]').type('1000'); 
      cy.get('input[name="maxRating"]').type('2000'); 
      cy.get('input[name="prevContests"]').type('5'); 
      cy.get('.generateBTN').click(); 
      cy.get('table tbody tr').should('have.length.greaterThan', 0); 
  });
});
