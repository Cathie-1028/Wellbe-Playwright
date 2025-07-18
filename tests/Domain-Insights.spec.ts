import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://admin-wellbe-develop.vercel.app/sign-in');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('catherine@mayan.com.ph');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Mayan@123!!');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Show Insight', exact: true }).first().click();
  await page.getByRole('button', { name: 'Hide Insight' }).click();
  await page.getByRole('button', { name: 'Hide Insight' }).click();
});