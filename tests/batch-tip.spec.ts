import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3400/sign-in');
  await page.getByRole('textbox', { name: 'Email Address' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).fill('catherineanne0128@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('1234567890');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('tab', { name: 'My Wellbe' }).click();
  // await page.getByRole('button', { name: 'View Result' }).click();
  // await page.locator('div').filter({ hasText: /^Character75%Career92%Contentment45%Connectedness79%$/ }).first().click();
});