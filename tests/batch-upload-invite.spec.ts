import { test, expect } from '@playwright/test';

test('Batch Upload', async ({ page }) => {
  await page.goto('http://localhost:5173/sign-in');

  await page.getByRole('textbox', { name: 'Email' }).fill('catherine@mayan.com.ph');
  await page.getByRole('textbox', { name: 'Password' }).fill('Mayan@123!!');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('tab', { name: 'Employees' }).click();
  await page.getByRole('button', { name: '+ Invite' }).click();
  await page.getByRole('button', { name: 'Use Batch Upload' }).click();

  const fileInput = page.locator('input[type="file"]');
  await fileInput.setInputFiles('tests/Invite.csv'); // include the csv file to make it work

  await page.getByRole('button', { name: 'Batch Invite' }).click();

  const successMsg = page.getByText('Invite Success');
  await expect(successMsg).toBeVisible();
  await successMsg.click();
});
