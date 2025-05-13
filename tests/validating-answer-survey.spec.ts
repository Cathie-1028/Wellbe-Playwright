import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://wellbe-ui.vercel.app/get-started');
 await page.getByRole('button', { name: 'Get started' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).fill('catherineanne0128@gmail.com');
  await page.getByRole('textbox', { name: 'Email Address' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('1234567890');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('button', { name: 'Start Your Well-being Journey' }).click();
  await page.getByRole('button', { name: 'Ready? Let\'s Start' }).click(); 


// Check if the survey has already been completed
const alreadyAnsweredMessage = page.locator('p:has-text("You already answered all the questions. Well done!")');

// Try to wait for it for a short time — if it doesn't appear, continue survey
 const isAlreadyAnsweredVisible = await alreadyAnsweredMessage.isVisible({ timeout: 2000 }).catch(() => false); 

if (isAlreadyAnsweredVisible) {
  console.log('Survey already answered — skipping the rest.');

  await page.locator('button:has-text("Go Back!")').click(); 
  console.log('Clicked Go Back!');

  await page.waitForURL('https://wellbe-ui.vercel.app/');
  console.log('URL after Go Back:', page.url());

  await page.locator('button:has-text("My Wellbe")').click(); 
  console.log('Clicked My Wellbe tab!');

  await expect(page.locator('button[aria-selected="true"]:has-text("My Wellbe")')).toBeVisible();
  return;
}

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
