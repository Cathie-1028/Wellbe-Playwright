import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://wellbe-admin.vercel.app/sign-in');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('andrew@mayan.com.ph');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('123456');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('tab', { name: 'Employees' }).click();
  await page.getByRole('button', { name: '+ Invite' }).click();
  await page.getByLabel('Department').selectOption('Human Resources');
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Catherine Anne');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Alcala');
  await page.getByRole('textbox', { name: 'Company Email' }).click();
  await page.getByRole('textbox', { name: 'Company Email' }).fill('catherineanne0128@gmail.com');
  await page.getByRole('button', { name: 'Invite', exact: true }).click();
  await page.getByRole('button', { name: 'Invite', exact: true }).click();
});