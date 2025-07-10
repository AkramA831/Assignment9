const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const LoginPage = require("../../pages/LoginPage");
const DashboardPage = require("../../pages/DashboardPage");
const AdminPage = require("../../pages/AdminPage"); 

Given('user is on the login page', () => {
  LoginPage.visit();
});

When('user logs in using username {string} and password {string}', (username, password) => {
  LoginPage.enterUsername(username);
  LoginPage.enterPassword(password);
  LoginPage.clickLogin();
});

Then('user should see the dashboard page', () => {
  DashboardPage.verifyDashboard();
});


Given('user is logged in as {string} with {string}', (username, password, newUsername) => {
  LoginPage.visit();
  LoginPage.enterUsername(username);
  LoginPage.enterPassword(password);
  LoginPage.clickLogin();   
  DashboardPage.verifyDashboard();
});

Given('user navigates to Admin page', () => {
  DashboardPage.navigateToAdmin();
  AdminPage.clickAddUser();
});
When('user adds a new admin {string} with role {string}', (newUsername, role) => {
  const uniqueId = String(Date.now()).slice(-5);
  const uniqueUsername = `${newUsername}${uniqueId}`;
  Cypress.env('createdUsername', uniqueUsername); 

  AdminPage.selectUserRole(role);
  AdminPage.enterEmployeeName(newUsername); 

  AdminPage.selectStatus('Enabled');
  AdminPage.enterUsername(uniqueUsername);
 
  AdminPage.enterPassword('admin123');
  AdminPage.confirmPassword('admin123');

  AdminPage.clickSave();
});

Then('the admin {string} should appear in the user list', (newUsername) => {
const createdUsername = Cypress.env('createdUsername');
AdminPage.verifyUserInList(createdUsername);

});

