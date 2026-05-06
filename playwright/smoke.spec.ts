import { test, expect } from '@playwright/test';

test.describe('Smoke Tests', () => {
  test('homepage loads', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toContainText('Kitchen Sink');
  });

  test('main sections are visible', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('text=Commands')).toBeVisible();
    await expect(page.locator('text=Utilities')).toBeVisible();
  });
});
