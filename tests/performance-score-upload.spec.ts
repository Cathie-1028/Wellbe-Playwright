import { test, expect } from '@playwright/test';

test('Performance Score', async ({ page }) => {
  await page.goto('https://wellbe-admin.vercel.app/sign-in');

  await page.getByRole('textbox', { name: 'Email' }).fill('andrew@mayan.com.ph');
  await page.getByRole('textbox', { name: 'Password' }).fill('123456');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('tab', { name: 'Scatter Plot' }).click();

  // Click the button to open the file upload dialog (outside the modal/dialog)
  await page.locator('#root').getByRole('button', { name: 'Upload Performance Data' }).click();

  const fileInput = page.locator('input[type="file"]');
  await fileInput.setInputFiles('tests/performance-score.csv'); //Include the CSV to make it work, same as the batch invite. 

  // Click the upload/submit button inside the dialog/modal
  await page.getByRole('dialog').getByRole('button', { name: 'Upload Performance Data' }).click();

  const successMsg = page.getByText('Upload Success!');
  await expect(successMsg).toBeVisible();
  await successMsg.click();
});
