import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://employee-wellbe-develop.vercel.app/sign-in');
  await page.getByRole('textbox', { name: 'Email Address' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).fill('catherine@mayan.com.ph');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('123456');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.goto('https://employee-wellbe-develop.vercel.app/');
  await page.getByText('You have finished all your quick checks, your next Quick Check will be').click();
  await page.getByText('You have finished all your quick checks, your next Quick Check will be').click();
});