class QuizPageLocators {

  constructor(page) {

    this.page = page;

    // Home
    this.homeHeading = page.getByRole('heading', { name: 'Outfits for every Slide 1 of' });
    this.startQuizBtn = page.getByRole('link', { name: 'Start Your Quiz' });

    // Cookie
    this.cookieDialog = page.getByRole('dialog', { name: 'cookie bar' });
    this.okCookieBtn = page.getByRole('button', { name: 'OK' });

    // Navigation
    this.nextQuestionBtn = page.getByRole('button', { name: 'Go to next question' });

    // Question 1
    this.q1Heading = page.getByRole('group', { name: 'What’s got you most excited' });
    this.buildWardrobeOption = page.getByText('Building My Wardrobe');

    // Question 2
    this.q2Heading = page.getByRole('group', { name: 'What Are You Dressing For?' });
    this.specialOccasionOption = page.locator('label').filter({ hasText: 'Special Occasions' });

    // Question 3
    this.workWearHeading = page.getByRole('group', { name: 'Workwear' });
    this.casualOption = page.getByRole('button', { name: 'CasualElevated and comfortable' });

    // Question 4
    this.weekendHeading = page.getByRole('group', { name: 'Weekend Looks' });
    this.classicOption = page.getByRole('checkbox', { name: 'ClassicTimeless and' });

    // Question 5
    this.printHeading = page.getByRole('group', { name: 'Print Check' });
    this.openToPrints = page.getByRole('button', { name: "I'm open to them" });

    // Question 6
    this.avoidHeading = page.getByRole('group', { name: 'Any Pieces to Avoid?' });
    this.athleisureOption = page.locator('label').filter({ hasText: 'Athleisure' });
    this.trustStylistOption = page.locator('label').filter({ hasText: 'I trust my stylist' });

    // Question 7
    this.colorHeading = page.getByRole('group', { name: 'What Colors Do You Like?' });
    this.blueOption = page.getByText('True Blues Tried-and-true');

    // Question 8
    this.outfitSection = page.getByRole('region', { name: 'Style choice selection' });
    this.likeBtn = page.getByRole('button', { name: 'Like', exact: true });
    this.dislikeBtn = page.getByRole('button', { name: 'Dislike' });

    // Question 9
    this.bodyTypeHeading = page.getByRole('group', { name: 'Body Type' });
    this.averageBody = page.getByRole('button', { name: 'Average' });

    // Question 10
    this.emailField = page.getByRole('textbox', { name: 'Where can we send your style' });
    this.messageField = page.getByRole('textbox', { name: 'Leave your stylist a message' });

    // Plan page
    this.planBanner = page.getByRole('region', { name: 'Promotional banner' });
    this.selectPlanBtn = page.getByRole('button', { name: 'Select Plan' });
    this.checkoutBtn = page.getByRole('button', { name: 'Checkout Next arrow' });

  }
}

module.exports = QuizPageLocators;



