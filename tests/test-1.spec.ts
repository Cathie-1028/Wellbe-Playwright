import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://superadmin-wellbe.vercel.app/users');
  await page.getByRole('button', { name: '+Add' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Cathie');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Alcala');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('catherine@mayan.com.ph');
  await page.getByLabel('Company').selectOption('Catherine Corp');
  await page.getByLabel('Department').selectOption('Human Resources');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('Invited Successfully!').click();
  await page.getByRole('button', { name: 'Close' }).click();
});