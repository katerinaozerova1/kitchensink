import { test, expect } from '@playwright/test';

test.describe('Async Behavior', () => {
  test('wait for delayed content', async ({ page }) => {
    await page.goto('/commands/waiting');

    await page.click('.wait-btn');

    await expect(page.locator('.wait-output')).toContainText('Done');
  });

  test('retry assertion example', async ({ page }) => {
    await page.goto('/commands/waiting');

    await page.click('.wait-btn');

    await expect(page.locator('.wait-output')).toBeVisible();
  });
});
