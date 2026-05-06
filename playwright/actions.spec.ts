import { test, expect } from '@playwright/test';

test.describe('Actions', () => {
  test('type into inputs', async ({ page }) => {
    await page.goto('/commands/actions');

    await page.fill('.action-email', 'kat@test.com');
    await expect(page.locator('.action-email')).toHaveValue('kat@test.com');
  });

  test('checkbox interaction', async ({ page }) => {
    await page.goto('/commands/actions');

    await page.check('.action-checkbox');
    await expect(page.locator('.action-checkbox')).toBeChecked();
  });

  test('dropdown selection', async ({ page }) => {
    await page.goto('/commands/actions');

    await page.selectOption('.action-select', 'apples');
    await expect(page.locator('.action-select')).toHaveValue('apples');
  });

  test('alert handling', async ({ page }) => {
    await page.goto('/commands/actions');

    page.on('dialog', async dialog => {
      expect(dialog.message()).toContain('alert');
      await dialog.accept();
    });

    await page.click('.action-alert');
  });
});
