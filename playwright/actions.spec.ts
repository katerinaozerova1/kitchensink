test('fill and submit form', async ({ page }) => {
  await page.goto('/commands/actions');

  await page.fill('.action-email', 'test@email.com');
  await page.fill('.action-password', '123456');

  await page.check('.action-checkbox');

  await page.click('.action-form button');

  // No real backend, so just verify UI interaction
  await expect(page.locator('.action-email')).toHaveValue('test@email.com');
});
