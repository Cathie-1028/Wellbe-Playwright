import { test, expect } from '@playwright/test';

test('sign-up', async ({ page }) => {
  await page.goto('https://wellbe-ui.vercel.app/sign-up?company=Mayan%20Solutions&department=Marketing&firstName=Catherine&lastName=Alcala&email=catherineanne0128%40gmail.com&role=employee');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('1234567890');
  await page.getByRole('button', { name: 'Sign up' }).click();
  await page.getByRole('tab', { name: 'Profile' }).click();
  await page.getByRole('button', { name: 'Get started' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).fill('catherineanne0128@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('1234567890');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('tab', { name: 'Profile' }).click();
  await page.locator('div').filter({ hasText: /^Logout$/ }).nth(1).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
});