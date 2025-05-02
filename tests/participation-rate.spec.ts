import { test, expect, Page } from '@playwright/test';
import { assert } from 'console';

// test('add department', async ({ page }) => {
//   await page.goto('https://wellbe-admin.vercel.app/sign-in');
//   await page.getByRole('textbox', { name: 'Email' }).click();
//   await page.getByRole('textbox', { name: 'Email' }).fill('andrew@mayan.com.ph');
//   await page.getByRole('textbox', { name: 'Email' }).press('Tab');
//   await page.getByRole('textbox', { name: 'Password' }).fill('123456');
//   await page.getByRole('button', { name: 'Login' }).click();
//   await page.getByRole('tab', { name: 'Employees' }).click();
//   const departmentComboBox = page.getByRole('combobox')
//   // Open the combobox (click the dropdown)
//   await departmentComboBox.click();
//   await page.waitForTimeout(1000); // wait for dropdown to render
//   const optionTexts = await departmentComboBox.getByRole('option').allTextContents();

//   // Extract numbers and find the highest one
//   let maxNumber = 0;
//   for (const option of optionTexts) {
//     const match = option.match(/^Test\s*(\d+)$/);
//     if (match) {
//       const num = parseInt(match[1], 10);
//       if (num > maxNumber) maxNumber = num;
//     } else if (option.trim() === 'Test') {
//       if (maxNumber < 1) maxNumber = 1; // Default to 1 if 'Test' with no number exists
//     }
//   }

//   // Generate new department name
//   const newDept = `Test ${maxNumber + 1}`;
//   // const newDept = `Test 2`;

//   // Click '+ Department'
//   await page.getByRole('button', { name: '+ Department' }).click();

//   // Fill in new department name
//   await page.locator('input[name="department"]').click();
//   await page.locator('input[name="department"]').fill(newDept);

//   // Save new department
//   await page.getByRole('button', { name: 'Save' }).click();

//   // Find Kim's account
//   for (let i = 0; i < optionTexts.length; i++) {
//     // 1. select the i-th option
//     await departmentComboBox.selectOption({ index: i });
//     await page.waitForTimeout(1000);
//     // 2. wait a moment for the page to update (adjust or remove if not needed)
//     // await page.waitForLoadState('networkidle');
  
//     // 3. locate "John Smith"
//     const nameLocator = page.getByText('Kim Nicole Montano', { exact: true });
  
//     // 4. check if it's on the page
//     if (await nameLocator.count() > 0) {
//       // 5. click it and then break out of the loop
//       await nameLocator.first().click();
//       break;
//     }
//   }
  
//   // Transfer Kim's account to the new department
//   await page.getByLabel('Department').selectOption(newDept);
//   await page.getByRole('button', { name: 'Save', exact: true }).click();
//   await expect(page.getByText('Update Success!!')).toBeVisible();

//   page.reload()

//   await departmentComboBox.selectOption(newDept);

//   //Check if participation rate is 0% on the newly created department
//   await expect(page.getByText('0%')).toBeVisible();

//   //Send a batch survey
//   await page.getByRole('button', { name: 'Send Batch Survey' }).click();
//   await page.getByText('Are you sure you want to').click();

//   //Go to the employee app and answer the surveys
//   await page.goto('https://wellbe-ui.vercel.app/get-started');
//   await page.getByRole('button', { name: 'Get started' }).click();
//   await page.getByRole('textbox', { name: 'Email Address' }).click();
//   await page.getByRole('textbox', { name: 'Email Address' }).fill('kim@mayan.com.ph');
//   await page.getByRole('textbox', { name: 'Password' }).click();
//   await page.getByRole('textbox', { name: 'Password' }).fill('123456');
//   await page.getByRole('button', { name: 'Log in' }).click();
//   await page.getByRole('button', { name: 'Start Your Well-being Journey' }).click();
//   await page.getByRole('button', { name: 'Ready? Let\'s Start' }).click();

//   //Answer Questions
//   await page.getByRole('button', { name: 'Strongly Disagree' }).first().click();
//   await page.getByRole('button', { name: 'Agree', exact: true }).nth(1).click();
//   await page.getByRole('button', { name: 'Disagree', exact: true }).nth(2).click();
//   await page.getByRole('button', { name: 'Strongly Agree' }).nth(3).click();
//   await page.getByRole('button', { name: 'Agree', exact: true }).nth(4).click();
//   await page.getByRole('button', { name: 'Submit' }).click();

//   //Go back to the admin platform
//   await page.goto('https://wellbe-admin.vercel.app/sign-in');
//   await page.getByRole('textbox', { name: 'Email' }).click();
//   await page.getByRole('textbox', { name: 'Email' }).fill('andrew@mayan.com.ph');
//   await page.getByRole('textbox', { name: 'Email' }).press('Tab');
//   await page.getByRole('textbox', { name: 'Password' }).fill('123456');
//   await page.getByRole('button', { name: 'Login' }).click();
//   await page.getByRole('tab', { name: 'Employees' }).click();
  
//   await departmentComboBox.selectOption(newDept);

//   //Check if participation rate has increased to 100%
//   await expect(page.getByText('100%')).toBeVisible();

// });

// Reusable helpers

async function login(page: Page) {
  await page.goto('https://wellbe-admin.vercel.app/sign-in');
  await page.getByRole('textbox', { name: 'Email' }).fill('andrew@mayan.com.ph');
  await page.getByRole('textbox', { name: 'Password' }).fill('123456');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('tab', { name: 'Employees' }).click();
}

async function createNextDepartment(page: Page, baseName: string) {
  const combo = page.getByRole('combobox');
  await combo.click();
  await page.waitForTimeout(500);
  const optionTexts = await combo.getByRole('option').allTextContents();

  let max = 0;
  for (const txt of optionTexts) {
    const m = txt.match(new RegExp(`^${baseName}\\s*(\\d+)$`));
    if (m) max = Math.max(max, parseInt(m[1], 10));
    else if (txt.trim() === baseName) max = Math.max(max, 1);
  }

  const newName = `${baseName} ${max + 1}`;
  await page.getByRole('button', { name: '+ Department' }).click();
  const input = page.locator('input[name="department"]');
  await input.fill(newName);
  await page.getByRole('button', { name: 'Save' }).click();
  return newName;
}

async function selectDepartment(page: Page, name: string) {
  // reopen dropdown if needed or use native select
  const combo = page.getByRole('combobox');
  await combo.selectOption({ label: name });
  await page.waitForTimeout(500);
}

async function transferAccount(page: Page, accountName: string, toDept: string) {
  const combo = page.getByRole('combobox');
  const opts = await combo.getByRole('option').allTextContents();
  for (let i = 0; i < opts.length; i++) {
    await combo.selectOption({ index: i });
    if (await page.getByText(accountName, { exact: true }).count()) {
      await page.getByText(accountName, { exact: true }).click();
      break;
    }
  }
  await page.getByLabel('Department').selectOption(toDept);
  await page.getByRole('button', { name: 'Save', exact: true }).click();
  await expect(page.getByText('Update Success!!')).toBeVisible();
}

async function sendBatchSurvey(page: Page) {
  await page.getByRole('button', { name: 'Send Batch Survey' }).click();
  await page.getByText('Are you sure you want to').click();
}

async function answerSurvey(page: Page, email: string, password: string) {
  await page.goto('https://wellbe-ui.vercel.app/get-started');
  await page.getByRole('textbox', { name: 'Email Address' }).fill(email);
  await page.getByRole('textbox', { name: 'Password' }).fill(password);
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('button', { name: 'Start Your Well-being Journey' }).click();
  await page.getByRole('button', { name: "Ready? Let's Start" }).click();

  const answers = [ 'Strongly Disagree', 'Agree', 'Disagree', 'Strongly Agree', 'Agree' ];
  for (const [idx, label] of answers.entries()) {
    await page.getByRole('button', { name: label, exact: true }).nth(idx).click();
  }
  await page.getByRole('button', { name: 'Submit' }).click();
}

// Main test
test('add and verify department lifecycle', async ({ page }) => {
  await login(page);

  // 1. Create a new department
  const newDept = await createNextDepartment(page, 'Test');
  await selectDepartment(page, newDept);

  // 2. Verify participation rate is 0%
  await expect(page.getByText('0%')).toBeVisible();

  // 3. Transfer Kim's account
  await transferAccount(page, 'Kim Nicole Montano', newDept);

  // 4. Reload and reselect dept
  await page.reload();
  await selectDepartment(page, newDept);

  // 5. Verify participation rate is still 0%
  await expect(page.getByText('0%')).toBeVisible();

  // 6. Send batch survey
  await sendBatchSurvey(page);

  // 7. Complete survey as Kim
  await answerSurvey(page, 'kim@mayan.com.ph', '123456');

  // 8. Back to admin and verify 100%
  await login(page);
  await selectDepartment(page, newDept);
  await expect(page.getByText('100%')).toBeVisible();
});
