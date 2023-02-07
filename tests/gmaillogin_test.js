Feature('Login to Gmail');

Scenario('Login with valid credentials', ({I}) => {
  I.amOnPage('https://www.gmail.com');
  I.fillField('identifier', 'your_email@gmail.com');
  I.click('Next');
  I.waitForElement('[name="password"]');
  I.fillField('[name="password"]', 'your_password');
  I.click('Next');
  I.waitForElement('[role="main"]');
  I.seeInTitle('Inbox');
});
