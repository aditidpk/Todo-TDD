describe('Input form', () => {

    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })

    /*Tests if the focused element belongs to the defined class*/
    it('focuses input on load', () => {
        cy.focused()
        .should('have.class', 'new-todo')
    })

    /*Ensures that text input has exactly what the user types*/
    it('accepts input', () => {
        const typedText = 'Complete Prereads'

        cy.get('.new-todo')
          .type(typedText)
          .should('have.value', typedText)
    })
})