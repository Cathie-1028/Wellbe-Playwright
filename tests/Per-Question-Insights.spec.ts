import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://admin-wellbe-develop.vercel.app/sign-in');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('laurence@mayan.com.ph');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Mayan@123!!');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByText('Employee\'s Insight Per').click();
  await page.getByRole('button', { name: 'Show Insights' }).first().click();
  await page.getByRole('button', { name: 'Got it!' }).click();
  await page.getByRole('button', { name: 'Got it!' }).click();
});