// example.cy.js
describe('open the home page', () => {
    it('open home page', () => {
        cy.visit('/');
        cy.contains('welcome');
    });
});