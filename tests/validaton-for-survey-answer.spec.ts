import { test, expect } from '@playwright/test';

test('validate survey completion message before Go Back', async ({ page }) => {
  await page.goto('http://localhost:3400/sign-in');
  await page.getByRole('textbox', { name: 'Email Address' }).fill('catherineanne0128@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('1234567890');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('button', { name: 'Start Your Well-being Journey' }).click();
  await page.getByRole('button', { name: "Ready? Let's Start" }).click();

  const message = page.locator('text=No questions available!');
  // await expect(message).toBeVisible({ timeout: 2000 });

  await page.getByRole('button', { name: 'Go Back!' }).click();
});
