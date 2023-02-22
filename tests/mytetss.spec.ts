import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:4200/');

 const firstpageCards = page.getByTestId('userCard');
 expect(firstpageCards).toHaveCount(10);

  await page.getByRole('button', { name: 'Next page' }).click();
  await page.getByRole('button', { name: 'Next page' }).click();
  // await page.getByRole('button', { name: 'Next page' }).click();
  await page.getByRole('button', { name: 'Previous page' }).click();
  await page.getByRole('button', { name: 'Previous page' }).click();
  await page.getByRole('button', { name: 'Last page' }).click();
  await page.getByRole('button', { name: 'First page' }).click();
  await page.locator('mat-card-actions').filter({ hasText: 'View mojombo repos' }).click();
  await page.goto('http://localhost:4200/');
  await page.locator('a').filter({ hasText: 'View defunkt repos' }).click();
});