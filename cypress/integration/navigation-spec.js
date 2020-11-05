it('shows the Home page correctly', () => {
  cy.visit('/')

  cy.get('.h1')
    .should('contain', 'Meeting Log')
})

it('allows users to see their meetings', () => {
  cy.visit('/#/meetings')

  cy.get('.h1')
    .should('contain', 'Meetings')
})

it('allows users to login', () => {
  cy.visit('/login')

  cy.get('.h1')
    .should('contain', 'Login')
})

it('allows users to see their meetings', () => {
  cy.visit('/#/meetings')

  cy.get('.h1')
    .should('contain', 'Meetings')
})
