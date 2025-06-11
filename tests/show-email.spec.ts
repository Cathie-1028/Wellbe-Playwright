import { test, expect } from '@playwright/test';

test('show email', async ({ page }) => {
  await page.goto('https://employee-wellbe-develop.vercel.app/sign-in');
  await page.getByRole('textbox', { name: 'Email Address' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).fill('catherine@mayan.com.ph');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('123456');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('tab', { name: 'Inbox' }).click();
  await page.getByText('Wellbe Reminder').first().click();
  await page.getByRole('heading', { name: 'Wellbe Reminder' }).click();
  await page.getByRole('button', { name: 'Inbox' }).click();
  await page.getByRole('tab', { name: 'Profile' }).click();
  await page.locator('div').filter({ hasText: /^Logout$/ }).first().click();
  await page.getByRole('button', { name: 'Confirm' }).click();
});