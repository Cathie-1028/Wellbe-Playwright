import { test, expect } from '@playwright/test';

test('add department', async ({ page }) => {
  await page.goto('https://wellbe-admin.vercel.app/sign-in');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('andrew@mayan.com.ph');
  await page.getByRole('textbox', { name: 'Email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('123456');
  await page.getByRole('button', { name: 'Login' }).click();

  // Goes to the employee Tab 
  await page.getByRole('tab', { name: 'Employees' }).click();
  await page.getByRole('button', { name: '+ Invite' }).click();
  await page.getByRole('button').filter({ hasText: /^$/ }).click();

  // Under the Employee Tab, adding New department
  await page.getByRole('button', { name: '+ Department' }).click();
  await page.locator('input[name="department"]').click();
  await page.locator('input[name="department"]').fill('Sales');
  await page.getByRole('button', { name: 'Save' }).click();

  // Asserting that the "Sales" department was successfully selected in the dropdown option
  // Combobox is the dropdown list input in playwright 
  await page.getByRole('combobox').selectOption('Sales');

  await expect(page.getByRole('combobox')).toHaveValue('Sales');
});
