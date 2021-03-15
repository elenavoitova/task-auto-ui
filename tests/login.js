
import AuthPage from '../src/pages/authPage';
import {assert} from 'chai';
import {argv} from 'yargs';
import getDriver from '../src/driverutil/driverutil';
import AccountPage from '../src/pages/accountPage';
import { users } from '../src/data/vars/usersQueue';


describe('Logout Suit', function () {
    let driver;
    let authPage;
    let accountPage;
    let user;

    before(async () => {
        driver = await getDriver(argv.browser)
        authPage = new AuthPage(driver);
        accountPage = new AccountPage(driver);;
        await authPage.launch();
    });

    beforeEach(async () => {
        await authPage.navigate();
    });

    it('Login with empty fields', async function () {
      await authPage.navigate();
      await authPage.login();
      assert.isTrue(await accountPage.isLoggedOut(), 'User isn\'t logged in');
    });

    it('Login with empty password', async function () {
      await authPage.navigate();
      await authPage.login(users[0].email);
      assert.isTrue(await accountPage.isLoggedOut(), 'User isn\'t logged in');
    });

    it('Login with swaped credentials', async function () {
      await authPage.navigate();
      await authPage.login(users[0].password, users[0].email);
      assert.isTrue(await accountPage.isLoggedOut(), 'User isn\'t logged in');
    });

    it('Login with valid credentials', async function () {
      await authPage.navigate();
      user = await authPage.loginWithUsersQ();
      assert.isTrue(await authPage.isLoggedIn(), 'User isn\'t logged in');
    });

    after(() => driver.close());
    
});

