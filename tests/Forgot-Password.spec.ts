import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://employee-wellbe-develop.vercel.app/sign-in');
  await page.getByRole('link', { name: 'Forgot Password?' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('catherine@mayan.com.ph');
  await page.getByRole('button', { name: 'Send reset link' }).click();
  await page.getByText('Success!').click();
  await page.getByRole('banner').getByRole('button').click();
});
