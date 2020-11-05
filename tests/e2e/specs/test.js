// https://docs.cypress.io/api/introduction/api.html

describe("Navigation Tests", () => {
  it("Visits the app root url", () => {
    cy.visit("/#/");
    cy.contains("h4", "Meeting Log");
  });
  it("Allows users to register", () => {
    cy.visit("/#/register");
    cy.contains("h1", "Register");
  });
  it("Allows users to login", () => {
    cy.visit("/#/login");
    cy.contains("h1", "Login");
  });
  it("Allows users to see their meetings", () => {
    cy.visit("/#/meetings");
    cy.contains("h1", "Meetings");
  });
  it("Global redirect works", () => {
    cy.visit("*");
    cy.contains("h4", "Meeting Log");
  });
});
