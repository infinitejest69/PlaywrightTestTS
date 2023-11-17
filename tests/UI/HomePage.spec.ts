import { test, expect } from './Fixtures/allPages';

test('Buy a hero Hoodie from hot sellers', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Hero Hoodie' }).first().click();
  
});
