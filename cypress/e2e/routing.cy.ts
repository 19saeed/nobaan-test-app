describe('routing spec', () => {
  it('should navigate to /verification url and mount verification component when click on verification nav button', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy="verification-nav-button"]').click()
    cy.url().should('include', '/verification')
    cy.get('.verification-section').should('exist')
  })
  it('should navigate to /products url and mount products component when click on products nav button', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy="products-nav-button"]').click()
    cy.url().should('include', '/products')
    cy.get('.products-section').should('exist')
  })
  it('should navigate to /users url and mount users component when click on users nav button', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy="users-nav-button"]').click()
    cy.url().should('include', '/users')
    cy.get('.users-section').should('exist')
  })
})