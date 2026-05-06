import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('navigate to Commands page', async ({ page }) => {
    await page.goto('/');
    await page.click('text=Commands');
    await expect(page).toHaveURL(/commands/);
  });

  test('direct navigation works', async ({ page }) => {
    await page.goto('/commands/actions');
    await expect(page.locator('h1')).toContainText('Actions');
  });
});
