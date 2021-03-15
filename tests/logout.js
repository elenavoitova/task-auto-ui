
// import AuthPage from '../src/pages/authPage';
// import {assert} from 'chai';
// import {argv} from 'yargs';
// import getDriver from '../src/driverutil/driverutil';
// import AccountPage from '../src/pages/accountPage';


// describe('Logout Suit', function () {
//     let driver;
//     let authPage;
//     let accountPage;
//     let user;

//     before(async () => {
//         driver = await getDriver(argv.browser)
//         authPage = new AuthPage(driver);
//         accountPage = new AccountPage(driver);;
//         await authPage.launch();
//     });

//     beforeEach(async () => {
//         await authPage.navigate();
//         user = await authPage.loginWithUsersQ();
    
//     });

//     it('Logout UI test', async function () {
//         await accountPage.logoutWithUsersQ(user);
//         assert.isTrue(await accountPage.isLoggedOut(), 'User isn\'t logged out');
//     });

//     it('Logout URL test', async function () {
//         await accountPage.quickLogoutWithUsersQ(user);
//         assert.isTrue(await accountPage.isLoggedOut(), 'User isn\'t logged out');
//     });

//     after(() => driver.close());
    
// });

