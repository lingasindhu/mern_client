describe('register page e2e testing', function() {
    beforeEach(function() {
        // Load the user fixture data before each test
        cy.fixture('user').then((user) => {
            // Use the fixture data to set the initial form state
            this.userData = user;
        });
    });

    it('testing register fun', function() {
        cy.visit('/register');
        cy.get('h1').should('contain', 'Register Here!');
        cy.get('input[name="name"]').type(this.userData.name);
        cy.get('input[name="email"]').type(this.userData.email);
        cy.get('input[name="password"]').type(this.userData.password);
        cy.get('button[type="submit"]').click({ multiple: true });

        cy.contains('User Registered Successfully !').should('be.visible');
        cy.log('register functionality working successfully');
    });
});
