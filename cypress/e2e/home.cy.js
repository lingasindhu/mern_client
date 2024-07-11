describe('Home page test',()=>{
    it('check the input field',()=>{
        cy.visit('/');
        
            cy.get('input').type('ravi')
       
        
        cy.get('button').click();
        cy.contains('Welcome,ravi')
    })
})