import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://superadmin-wellbe.vercel.app/clients');
  await page.getByRole('button', { name: '+Add Company' }).click();
  await page.getByRole('textbox', { name: 'Company Name' }).fill('Catherine Corp');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('heading', { name: 'Catherine Corp' }).click();
  await page.getByRole('heading', { name: 'Catherine Corp' }).click();
});