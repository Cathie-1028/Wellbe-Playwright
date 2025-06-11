import { test, expect } from '@playwright/test';

test('scatter plot visual changed', async ({ page }) => {
  await page.goto('https://admin-wellbe.vercel.app/sign-in');
  await page.getByText('EmailPassword').click();
  await page.getByRole('textbox', { name: 'Email' }).fill('catherine@mayan.com.ph');
  await page.getByRole('textbox', { name: 'Password' }).fill('Mayan@123!!');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('tab', { name: 'Workforce Vitality' }).click();

  // Wait for the chart to load and check initial number of chart symbols
  const chartSymbols = page.getByRole('main').locator('path.recharts-symbols');
  const initialCount = await chartSymbols.count();

  // Upload the performance CSV
  await page.getByRole('button', { name: 'Upload Performance Data' }).click();
  const fileInput = page.locator('input[type="file"]');
  await fileInput.setInputFiles('tests/perf-rate.csv');
  await page.getByRole('dialog').getByRole('button', { name: 'Upload Csv' }).click();

  // Close the drawer by clicking the X button
  const closeButton = page.locator('button.mantine-Drawer-close');
  await expect(closeButton).toBeVisible();
  await closeButton.click();

  // Wait for chart symbols to appear and be visible (important step)
  await chartSymbols.first().waitFor({ state: 'visible' });

  // Check new count of chart symbols
  const newCount = await chartSymbols.count();

  // Assert that the chart updated (new or changed symbols)
  expect(newCount).toBeGreaterThan(initialCount);
});
