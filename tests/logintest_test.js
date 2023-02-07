Feature('login');

Scenario('test something',  ({ I }) => {
    I.amOnPage('https://kickbooster.me/');
    I.click('Log In');
    pause(5);
});
