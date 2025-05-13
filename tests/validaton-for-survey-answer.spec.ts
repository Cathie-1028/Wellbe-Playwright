import { test, expect } from '@playwright/test';

test('validate survey completion message before Go Back', async ({ page }) => {
  await page.goto('https://wellbe-ui.vercel.app/get-started');
  await page.getByRole('button', { name: 'Get started' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).fill('catherineanne0128@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('1234567890');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('button', { name: 'Start Your Well-being Journey' }).click();
  await page.getByRole('button', { name: 'Ready? Let\'s Start' }).click();

  // Check that the message appears before clicking Go Back
  const message = page.locator('p:has-text("You already answered all the questions. Well done!")');
  await expect(message).toBeVisible({ timeout: 2000 });

  // If visible, then click Go Back
  await page.getByRole('button', { name: 'Go Back!' }).click();
});
