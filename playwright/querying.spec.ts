import { test, expect } from '@playwright/test';

test.describe('Querying Elements', () => {
  test('button interaction', async ({ page }) => {
    await page.goto('/commands/querying');

    const btn = page.locator('#query-btn');
    await expect(btn).toBeVisible();

    await btn.click();
    await expect(btn).toContainText('Clicked');
  });

  test('contains text', async ({ page }) => {
    await page.goto('/commands/querying');

    await expect(page.locator('.query-list')).toContainText('apples');
  });
});
