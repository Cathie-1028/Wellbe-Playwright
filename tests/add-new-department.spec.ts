import { test, expect } from '@playwright/test';

test('add-new-dept', async ({ page }) => {
  await page.goto('http://localhost:5173/sign-in');
  
  await page.getByRole('textbox', { name: 'Email' }).fill('catherine@mayan.com.ph');
  await page.getByRole('textbox', { name: 'Password' }).fill('Mayan@123!!');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('tab', { name: 'Employees' }).click();
  await page.getByRole('button', { name: '+Department' }).click();

  await page.getByRole('textbox').fill('Engineering');
  await page.getByRole('button', { name: 'Add Department' }).click();

  // ✅ Expect the error message to appear
  const errorMessage = page.getByText('Department already exist!');
  await expect(errorMessage).toBeVisible();

});
