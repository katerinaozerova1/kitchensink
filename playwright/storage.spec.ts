import { test, expect } from '@playwright/test';

test.describe('Storage', () => {
  test('cookies set correctly', async ({ page }) => {
    await page.goto('/commands/cookies');

    await page.click('#set-cookie');

    const cookies = await page.context().cookies();
    expect(cookies.length).toBeGreaterThan(0);
  });

  test('local storage works', async ({ page }) => {
    await page.goto('/commands/local-storage');

    await page.click('#set-local-storage');

    const value = await page.evaluate(() => localStorage.getItem('prop'));
    expect(value).not.toBeNull();
  });
});
