import Email from './Email.vue'

describe('<Email />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Email)
  })
})