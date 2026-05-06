test('local storage interaction', async ({ page }) => {
  await page.goto('/commands/local-storage');

  await page.click('#set-local-storage');

  const value = await page.evaluate(() => localStorage.getItem('prop'));
  expect(value).toBeTruthy();
});
