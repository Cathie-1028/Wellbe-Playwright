import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3400/sign-in');
  // await page.getByRole('button', { name: 'Get started' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).fill('catherineanne0128@gmail.com');
  await page.getByRole('textbox', { name: 'Email Address' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('1234567890');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('button', { name: 'Start Your Well-being Journey' }).click();
  await page.getByRole('button', { name: 'Ready? Let\'s Start' }).click();


  // Continue answering the survey if not completed yet
  await page.getByRole('button', { name: 'Agree', exact: true }).first().click();
  await page.getByRole('button', { name: 'Strongly Agree' }).nth(1).click();
  await page.getByRole('button', { name: 'Strongly Agree' }).nth(2).click();
  await page.getByRole('button', { name: 'Agree', exact: true }).nth(3).click();
  await page.getByRole('button', { name: 'Strongly Disagree' }).nth(4).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Okay!' }).click();
  
  // After submission, validate completion
  await page.getByRole('tab', { name: 'Home' }).click();
  await page.getByRole('tab', { name: 'My Wellbe' }).click();
});
