import WizardForm from './WizardForm.vue'

describe('<WizardForm />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(WizardForm)
  })
})