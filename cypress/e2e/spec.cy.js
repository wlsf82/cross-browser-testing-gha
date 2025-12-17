describe('Sample Test Suite', () => {
  beforeEach(() => {
    cy.log('Visiting https://example.com')
  })

  it('works', () => {
    cy.log('Ensuring everything works')
    cy.log(`Getting secret data from an env. Data: ${Cypress.env('SECRET')}`)
    cy.wrap(true).should('eq', true)
  })
})
