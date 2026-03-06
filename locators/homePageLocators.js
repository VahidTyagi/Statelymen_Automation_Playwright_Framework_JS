class HomePageLocators {

  constructor(page) {
    this.page = page;

    // Title
    this.pageTitle = "Men's clothing boxes personalized by expert stylists | Stately";

    // Logo
    this.logo = page.locator("div.header__desktop-logo__wrapper div.header__heading-logo-wrapper");

    // Hero heading
    this.heroHeading = page.getByRole('heading', { name: 'Outfits for every Slide 1 of' });

    // Sale banner
    this.springSaleBanner = page.getByText(
      'SPRING SALE: BONUS OUTFIT IN FIRST 5 BOXES WITH CODE 5BONUSFITS',
      { exact: true }
    );

    // Navigation / Header elements
    this.startQuizBtn = page.getByRole('link', { name: 'Start Your Quiz' });
    this.shopUnboxedLink = page.getByRole('link', { name: 'Shop Unboxed' });
    this.aboutUsBtn = page.getByRole('button', { name: 'About Us' });
    this.loginLink = page.getByRole('link', { name: 'Login' });
    this.cartBtn = page.getByRole('button', { name: 'Cart' });

    // Cart popup
    this.cartDialog = page.getByRole('dialog', { name: 'Your cart' });

    // Spring section
    this.springSaleSection = page.locator('div').filter({ hasText: 'SPRING SALE A fresh season' }).nth(1);
    this.springSaleHeading = page.getByRole('heading', { name: 'SPRING SALE' });
    this.springSaleText = page.getByText('A fresh season calls for');
    this.upgradeStyleLink = page.getByRole('link', { name: 'UPGRADE YOUR STYLE' });

  }

}


module.exports = HomePageLocators;












