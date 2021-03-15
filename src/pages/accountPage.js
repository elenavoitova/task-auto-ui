import locators from '../data/locators/header';
import AbstractPage from './abstractPage';
import { path } from '../data/vars/envs';
import { unuse, use } from '../data/vars/usersQueue';


export default class AccountPage extends AbstractPage {
  constructor(webdriver) {
    super(webdriver);
    this.logoutBtn = locators.logoutBtn;
  }

  async logout() {
    await super.click(this.logoutBtn);
  }

  async quickLogout() {
    super.navigate(path.logout, this.logoutBtn);
  }

  async logoutWithUsersQ(userID) {
    await super.click(this.logoutBtn);
    unuse(userID);
  }

  async quickLogoutWithUsersQ(userID) {
    super.navigate(path.logout, this.logoutBtn);
    unuse(userID);
  }

  isLoggedOut(){
    return super.find(locators.loginBtn).isDisplayed();
  }

}