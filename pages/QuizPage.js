const QuizPageLocators = require('../locators/quizPageLocators');
const { expect } = require('@playwright/test');

class QuizPage {

  constructor(page) {

    this.page = page;
    this.locator = new QuizPageLocators(page);

  }

  async openHomePage() {

    await this.page.goto('https://statelymen.com/');
    await expect(this.locator.homeHeading).toBeVisible();

  }

  async startQuiz() {

    await this.locator.startQuizBtn.click();
    await expect(this.locator.cookieDialog).toBeVisible();
    await this.locator.okCookieBtn.click();

  }

  async question1() {

    await expect(this.locator.q1Heading).toBeVisible();
    await this.locator.buildWardrobeOption.click();
    await this.locator.nextQuestionBtn.click();

  }

  async question2() {

    await expect(this.locator.q2Heading).toBeVisible();
    await this.locator.specialOccasionOption.click();
    await this.locator.nextQuestionBtn.click();

  }

  async question3() {

    await expect(this.locator.workWearHeading).toBeVisible();
    await this.locator.casualOption.click();
    await this.locator.nextQuestionBtn.click();

  }

  async question4() {

    await expect(this.locator.weekendHeading).toBeVisible();
    await this.locator.classicOption.click();
    await this.locator.nextQuestionBtn.click();

  }

  async question5() {

    await expect(this.locator.printHeading).toBeVisible();
    await this.locator.openToPrints.click();
    await this.locator.nextQuestionBtn.click();

  }

  async question6() {

    await expect(this.locator.avoidHeading).toBeVisible();
    await this.locator.athleisureOption.click();
    await this.locator.trustStylistOption.click();
    await this.locator.nextQuestionBtn.click();

  }

  async question7() {

    await expect(this.locator.colorHeading).toBeVisible();
    await this.locator.blueOption.click();
    await this.locator.nextQuestionBtn.click();

  }

  async question8() {

    await expect(this.locator.outfitSection).toBeVisible();
    await this.locator.likeBtn.first().click();
    await this.locator.dislikeBtn.first().click();
    await this.locator.nextQuestionBtn.click();

  }

  async question9() {

    await expect(this.locator.bodyTypeHeading).toBeVisible();
    await this.locator.averageBody.click();
    await this.locator.nextQuestionBtn.click();

  }

  async question10() {

    await this.locator.messageField.fill("Automation Test");
    await this.locator.emailField.fill("testautomation@gmail.com");
    await this.locator.nextQuestionBtn.click();

  }

  async selectPlan() {

    await expect(this.locator.planBanner).toBeVisible();
    await this.locator.selectPlanBtn.first().click();
    await this.locator.checkoutBtn.click();

  }

}

module.exports = QuizPage;




