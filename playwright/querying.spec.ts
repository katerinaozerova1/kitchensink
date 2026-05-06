test('query DOM elements', async ({ page }) => {
  await page.goto('/commands/querying');

  const button = page.locator('#query-btn');
  await expect(button).toBeVisible();

  await button.click();
  await expect(button).toContainText('Clicked');
});
