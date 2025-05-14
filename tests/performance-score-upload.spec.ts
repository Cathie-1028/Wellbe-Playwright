import { test, expect } from '@playwright/test';

test('Performance Score', async ({ page }) => {
  await page.goto('https://admin-wellbe.vercel.app/');

  await page.getByRole('textbox', { name: 'Email' }).fill('catherine@mayan.com.ph');
  await page.getByRole('textbox', { name: 'Password' }).fill('Mayan@123!!');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('tab', { name: 'Workforce Vitality' }).click();

  // Click the button to open the file upload dialog (outside the modal/dialog)
  await page.locator('#root').getByRole('button', { name: 'Upload Performance Data' }).click();

  const fileInput = page.locator('input[type="file"]');
  await fileInput.setInputFiles('tests/Perf.csv'); //Include the CSV to make it work, same as the batch invite. 

  // Click the upload/submit button inside the dialog/modal
  await page.getByRole('dialog').getByRole('button', { name: 'Upload Csv' }).click();

  const successMsg = page.getByText('Upload Success');
  await expect(successMsg).toBeVisible();
  await successMsg.click();
});
