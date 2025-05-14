import { test, expect } from '@playwright/test';

test('batch survey overview display', async ({ page }) => {
  await page.goto('http://localhost:5173/sign-in');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('catherine@mayan.com.ph');
  await page.getByRole('textbox', { name: 'Email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('Mayan@123!!');
  await page.getByRole('button', { name: 'Login' }).click();
  
  //
  await expect(page.getByText('/^Batch Overview:/i')).toBeVisible;
});