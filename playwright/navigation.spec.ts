test('navigate to commands page', async ({ page }) => {
  await page.goto('/');

  await page.click('text=Commands');
  await expect(page).toHaveURL(/commands/);
});
