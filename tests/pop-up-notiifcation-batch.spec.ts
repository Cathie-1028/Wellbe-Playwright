import { test, expect } from '@playwright/test';

test('pop-up', async ({ page }) => {
  await page.goto('http://localhost:5173/sign-in');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('catherine@mayan.com.ph');
  await page.getByRole('textbox', { name: 'Email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('Mayan@123!!');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Send Batch Survey' }).click();
  await page.getByText('Are you sure you want to').click();
});