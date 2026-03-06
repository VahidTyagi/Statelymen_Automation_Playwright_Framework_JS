
const { test } = require('@playwright/test');
const HomePage = require('../../pages/HomePage');

test.describe('Homepage Module', () => {

  test('TC01 Verify Homepage Title', async ({ page }) => {
    const home = new HomePage(page);
    await home.navigate();
    await home.verifyTitle();
  });

  test('TC02 Verify Logo Appears', async ({ page }) => {
    const home = new HomePage(page);
    await home.navigate();
    await home.verifyLogo();
  });

  test('TC03 Verify Hero Heading Visible', async ({ page }) => {
    const home = new HomePage(page);
    await home.navigate();
    await home.verifyHeroHeading();
  });

  test('TC04 Verify Spring Sale Banner', async ({ page }) => {
    const home = new HomePage(page);
    await home.navigate();
    await home.verifySpringBanner();
  });

  test('TC05 Verify Start Your Quiz Button', async ({ page }) => {
    const home = new HomePage(page);
    await home.navigate();
    await home.verifyStartQuiz();
  });

  test('TC06 Verify Hero Heading Again', async ({ page }) => {
    const home = new HomePage(page);
    await home.navigate();
    await home.verifyHeroHeading();
  });

  test('TC07 Verify Shop Unboxed Link', async ({ page }) => {
    const home = new HomePage(page);
    await home.navigate();
    await home.verifyShopUnboxed();
  });

  test('TC08 Verify Hero Heading Again', async ({ page }) => {
    const home = new HomePage(page);
    await home.navigate();
    await home.verifyHeroHeading();
  });

  test('TC09 Verify About Us Button', async ({ page }) => {
    const home = new HomePage(page);
    await home.navigate();
    await home.verifyAboutUs();
  });

  test('TC10 Verify Login Link', async ({ page }) => {
    const home = new HomePage(page);
    await home.navigate();
    await home.verifyLogin();
  });

  test('TC11 Verify Hero Heading Again', async ({ page }) => {
    const home = new HomePage(page);
    await home.navigate();
    await home.verifyHeroHeading();
  });

  test('TC12 Verify Cart Button', async ({ page }) => {
    const home = new HomePage(page);
    await home.navigate();
    await home.verifyCart();
  });

  test('TC13 Verify Cart Popup', async ({ page }) => {
    const home = new HomePage(page);
    await home.navigate();
    await home.openCart();
  });

  test('TC14 Click Spring Sale Section', async ({ page }) => {
    const home = new HomePage(page);
    await home.navigate();
    await home.openSpringSaleSection();
  });

  test('TC15 Verify Spring Sale Heading', async ({ page }) => {
    const home = new HomePage(page);
    await home.navigate();
    await home.verifySpringSaleHeading();
  });

  test('TC16 Verify Spring Sale Description', async ({ page }) => {
    const home = new HomePage(page);
    await home.navigate();
    await home.verifySpringSaleText();
  });

  test('TC17 Verify Upgrade Your Style Link', async ({ page }) => {
    const home = new HomePage(page);
    await home.navigate();
    await home.verifyUpgradeStyleLink();
  });

});










