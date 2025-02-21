import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await expect(page.getByText('Apple Inc. stock price')).toBeVisible();
});