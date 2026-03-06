const { expect } = require('@playwright/test');
const HomePageLocators = require('../locators/homePageLocators');

class HomePage {

  constructor(page) {
    this.page = page;
    this.locators = new HomePageLocators(page);
  }

  async navigate() {
    await this.page.goto('https://statelymen.com/');
  }
  

  async verifyTitle() {
    await expect(this.page).toHaveTitle(this.locators.pageTitle);
  }

  async verifyLogo() {
    await expect(this.locators.logo).toBeVisible();
  }

  async verifyHeroHeading() {
    await expect(this.locators.heroHeading).toBeVisible();
  }

  async verifySpringBanner() {
    await expect(this.locators.springSaleBanner).toBeVisible();
  }

  async verifyStartQuiz() {
    await expect(this.locators.startQuizBtn).toBeVisible();
  }

  async verifyShopUnboxed() {
    await expect(this.locators.shopUnboxedLink).toBeVisible();
  }

  async verifyAboutUs() {
    await expect(this.locators.aboutUsBtn).toBeVisible();
  }

  async verifyLogin() {
    await expect(this.locators.loginLink).toBeVisible();
  }

  async verifyCart() {
    await expect(this.locators.cartBtn).toBeVisible();
  }

  async openCart() {
    await this.locators.cartBtn.click();
    await expect(this.locators.cartDialog).toBeVisible();
  }

  async openSpringSaleSection() {
    await this.locators.springSaleSection.click();
  }

  async verifySpringSaleHeading() {
    await expect(this.locators.springSaleHeading).toBeVisible();
  }

  async verifySpringSaleText() {
    await expect(this.locators.springSaleText).toBeVisible();
  }

  async verifyUpgradeStyleLink() {
    await expect(this.locators.upgradeStyleLink).toBeVisible();
  }

}

module.exports = HomePage;










