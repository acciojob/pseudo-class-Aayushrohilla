//your JS code here. If required.
it('testing pseudo class "before" content and color', () => {
  cy.get('#container')
    .should('have.css', 'color', 'rgb(255, 0, 0)') // Check if color is red
    .and('have.css', 'content', '"Before element"'); // Ensure content is as expected
});
