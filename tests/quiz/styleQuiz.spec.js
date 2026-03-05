const { test } = require('@playwright/test');
const QuizPage = require('../../pages/QuizPage');

test.describe('Style Quiz Flow', () => {

  test('TC01 Verify quiz start', async ({ page }) => {

    const quiz = new QuizPage(page);

    await quiz.openHomePage();
    await quiz.startQuiz();

  });

  test('TC02 Verify Question 1 selection', async ({ page }) => {

    const quiz = new QuizPage(page);

    await quiz.openHomePage();
    await quiz.startQuiz();
    await quiz.question1();

  });

  test('TC03 Verify Question 2 selection', async ({ page }) => {

    const quiz = new QuizPage(page);

    await quiz.openHomePage();
    await quiz.startQuiz();
    await quiz.question1();
    await quiz.question2();

  });

  test('TC04 Verify Question 3 flow', async ({ page }) => {

    const quiz = new QuizPage(page);

    await quiz.openHomePage();
    await quiz.startQuiz();
    await quiz.question1();
    await quiz.question2();
    await quiz.question3();

  });

  test('TC05 Verify Question 4 flow', async ({ page }) => {

    const quiz = new QuizPage(page);

    await quiz.openHomePage();
    await quiz.startQuiz();
    await quiz.question1();
    await quiz.question2();
    await quiz.question3();
    await quiz.question4();

  });

  test('TC06 Verify Question 5 flow', async ({ page }) => {

    const quiz = new QuizPage(page);

    await quiz.openHomePage();
    await quiz.startQuiz();
    await quiz.question1();
    await quiz.question2();
    await quiz.question3();
    await quiz.question4();
    await quiz.question5();

  });

  test('TC07 Verify Question 6 flow', async ({ page }) => {

    const quiz = new QuizPage(page);

    await quiz.openHomePage();
    await quiz.startQuiz();
    await quiz.question1();
    await quiz.question2();
    await quiz.question3();
    await quiz.question4();
    await quiz.question5();
    await quiz.question6();

  });

  test('TC08 Verify Question 7 flow', async ({ page }) => {

    const quiz = new QuizPage(page);

    await quiz.openHomePage();
    await quiz.startQuiz();
    await quiz.question1();
    await quiz.question2();
    await quiz.question3();
    await quiz.question4();
    await quiz.question5();
    await quiz.question6();
    await quiz.question7();

  });

  test('TC09 Verify Question 8 flow', async ({ page }) => {

    const quiz = new QuizPage(page);

    await quiz.openHomePage();
    await quiz.startQuiz();
    await quiz.question1();
    await quiz.question2();
    await quiz.question3();
    await quiz.question4();
    await quiz.question5();
    await quiz.question6();
    await quiz.question7();
    await quiz.question8();

  });

  test('TC10 Verify full quiz and plan selection', async ({ page }) => {

    const quiz = new QuizPage(page);

    await quiz.openHomePage();
    await quiz.startQuiz();

    await quiz.question1();
    await quiz.question2();
    await quiz.question3();
    await quiz.question4();
    await quiz.question5();
    await quiz.question6();
    await quiz.question7();
    await quiz.question8();
    await quiz.question9();
    await quiz.question10();

    await quiz.selectPlan();

  });

});