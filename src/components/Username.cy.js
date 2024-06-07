import Username from './Username.vue'

describe('<Username />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Username)
  })
})