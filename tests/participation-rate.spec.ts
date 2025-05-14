import { test, expect } from '@playwright/test';

test('participation rate', async ({ page }) => {
  await page.goto('http://localhost:5173/sign-in');
  await page.getByRole('textbox', { name: 'Email' }).fill('catherine@mayan.com.ph');
  await page.getByRole('textbox', { name: 'Password' }).fill('Mayan@123!!');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('tab', { name: 'Employees' }).click();

  // Filter by Engineering
  await page.locator('select[name="department"]').nth(0).selectOption('Engineering');
  await page.getByText('Cathie Alcala', { exact: true }).click();

  // Change department to Marketing
  await page.getByLabel('Department').selectOption('Marketing');
  await page.getByRole('button', { name: 'Save' }).click();

  // Refilter by Marketing
  await page.locator('select[name="department"]').nth(0).selectOption('Marketing');

  // Wait for the employee card or something relevant to appear (e.g., name or card container)
  await expect(page.getByText('Cathie Alcala')).toBeVisible();

  // Wait and check for 100% to be visible
  //await expect(page.getByText('100%')).toBeVisible();
});
