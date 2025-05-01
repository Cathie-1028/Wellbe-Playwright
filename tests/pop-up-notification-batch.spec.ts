import { test, expect } from '@playwright/test';

test('add department', async ({ page }) => {
  await page.goto('https://wellbe-admin.vercel.app/sign-in');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('andrew@mayan.com.ph');
  await page.getByRole('textbox', { name: 'Email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('123456');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Send Batch Survey' }).click();
  await page.getByText('Are you sure you want to').click();
});