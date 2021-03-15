import locators from '../data/locators/authPage';
import locatorsHeader from '../data/locators/header';
import AbstractPage from './abstractPage';
import { path } from '../data/vars/envs';
import { use, getFreeUser } from '../data/vars/usersQueue';


class AuthPage extends AbstractPage {
  constructor(webdriver) {
    super(webdriver);
    this.$$ = locators;
  }

  navigate(){
    super.navigate(path.login, this.$$.loginForm.container);
  }

  async setEmail(value){
    await super.setInputValue(this.$$.loginForm.emailInput, value);
  };

  async setPassword(value){
    await super.setInputValue(this.$$.loginForm.passwordInput, value);
  };

  async login(email, password) {
    this.setEmail(email)
    this.setPassword(password);
    await super.click(this.$$.loginForm.loginBtn);
  }

  async loginWithUsersQ() {
    const user = getFreeUser();

    this.setEmail(user.email)
    this.setPassword(user.password);
    await super.click(this.$$.loginForm.loginBtn);

    use(user.id);
    return user.id;
  }

  isLoggedIn(){
    return super.find(locatorsHeader.logoutBtn).isDisplayed();
  }

}

export default AuthPage;