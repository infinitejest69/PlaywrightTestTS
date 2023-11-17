import { test, expect } from '../../Fixtures/AllPages';

const products = [
  { item: 'Radiant Tee', size: 'XS', color: 'Blue' },
  { item: 'Radiant Tee', size: 'XL', color: 'Orange' },
  { item: 'Breathe-Easy Tank', size: 'S', color: 'White' },
  { item: 'Breathe-Easy Tank', size: 'M', color: 'Yellow' },
  { item: 'Argus All-Weather Tank', size: 'L', color: 'Gray' },
  { item: 'Argus All-Weather Tank', size: 'XL', color: 'Gray' },
  { item: 'Hero Hoodie', size: 'XS', color: 'Gray' },
  { item: 'Hero Hoodie', size: 'S', color: 'Black' },
  { item: 'Hero Hoodie', size: 'M', color: 'Green' },
  { item: 'Hero Hoodie', size: 'L', color: 'Gray' },
  { item: 'Hero Hoodie', size: 'XL', color: 'Green' },
];

for (const product of products) {
  test(`Add ${product.item} - ${product.size} - ${product.color} To basket`, async ({ page, CommonPage, HomePage }) => {
    await page.goto('/');
    await expect(CommonPage.Header().HomeLogo()).toBeInViewport();
    await expect(CommonPage.Header().search()).toBeInViewport();
    await expect(CommonPage.Nav().NavBar()).toBeInViewport();
    await expect(HomePage.ProductItems().productItemByText(product.item)).toBeVisible();
    await HomePage.ProductItems().productItemByText(product.item).locator(HomePage.ProductItems().sizeByLabelExact(product.size)).click();
    await HomePage.ProductItems().productItemByText(product.item).locator(HomePage.ProductItems().colorByLabelExact(product.color)).click();
    await HomePage.ProductItems().addToCartButtonClickByProductName(product.item);
    await expect(CommonPage.Alerts().AlertsAll().first()).toContainText(`You added ${product.item} to your shopping cart`);
    await expect(CommonPage.Alerts().ShoppingCartLink()).toBeVisible();
    await expect(CommonPage.Header().basketCounterNumber()).toHaveText('1', { timeout: 30000 });
    //todo validate correct item size and color added to basket
  });
}
