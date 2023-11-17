import { test, expect } from '../../Fixtures/AllPages';

const products = [
  { item: 'Radiant Tee', color: 'Blue' },
  { item: 'Radiant Tee', color: 'Purple' },
  { item: 'Radiant Tee', color: 'Orange' },
  { item: 'Breathe-Easy Tank', color: 'Purple' },
  { item: 'Breathe-Easy Tank', color: 'White' },
  { item: 'Breathe-Easy Tank', color: 'Yellow' },
  { item: 'Argus All-Weather Tank', color: 'Gray' },
  { item: 'Hero Hoodie', color: 'Gray' },
  { item: 'Hero Hoodie', color: 'Black' },
  { item: 'Hero Hoodie', color: 'Green' },
  { item: 'Fusion Backpack', color: '' },
  { item: 'Push It Messenger Bag', color: '' },
];

for (const product of products) {
  test(`Visual Test of ${product.item} - ${product.color}`, async ({ page, HomePage }) => {
    await page.goto('/');
    await expect(HomePage.ProductItems().productItemByText(product.item)).toBeVisible();
    if (product.color != '') {
      await HomePage.ProductItems().productItemByText(product.item).locator(HomePage.ProductItems().colorByLabelExact(product.color)).click();
      await expect(HomePage.ProductItems().loadingImage()).toBeVisible();
      await expect(HomePage.ProductItems().loadingImage()).not.toBeVisible();
    }
    await expect(HomePage.ProductItems().productItemByText(product.item)).toHaveScreenshot(`${product.item}_${product.color}.png`, {
      animations: 'disabled',
      omitBackground: true,
      maxDiffPixels: 20,
    });
  });
}
