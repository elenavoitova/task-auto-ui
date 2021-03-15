import { logging } from 'selenium-webdriver';
import {By, until, Key} from "selenium-webdriver";
import {url} from '../data/vars/envs';


function ignorableLogLevel(logEntry) {
  return logEntry.level.name === '[WARNING]' || logEntry.level.name === '[INFO]';
}

function ignorableLogMessage(logEntry) {
  return logEntry.message.includes('some ignorable message 1') ||
    logEntry.message.includes('some ignorable message2');
}

class AbstractPage {
  constructor(webdriver) {
    this.driver = webdriver;
    this.url = url;
  }

  launch(){
    return this.driver.get(this.url);
  }

  navigate(path, marker) {
    this.driver.navigate().to(`${this.url}?${path}`);
    this.waitUntilVisible(marker);
  }

  waitUntilVisible($el) {
    return this.driver.wait(until.elementLocated(By.xpath($el)));
  }

  getLang(){
    return document.querySelector('html').lang;
  }

  getUrlSearch(){
    return window.location.search;
  }

  find($el) {
    this.driver.wait(until.elementLocated(By.xpath($el)), 15000);
    return this.driver.findElement(By.xpath($el));
  }

  findAll($el) {
    this.driver.wait(until.elementLocated(By.xpath($el)), 15000);
    return this.driver.findElements(By.xpath($el));
  }

  setInputValue($el, value) {
    return this.find($el).sendKeys(value);
  }

  click($el) {
    return this.find($el).click();
  }

}

export default AbstractPage;
