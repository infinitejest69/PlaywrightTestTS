import { Locator, Page } from '@playwright/test';

export class ProductItems {
  public readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public async addToCartButtonClickByProductName(productName: string) {
    this.productItemByText(productName).hover();
    await this.productItemByText(productName).getByRole('button').click();
  }

  public async addToCompareButtonClickByProductName(productName: string) {
    this.productItemByText(productName).hover();
    await this.linkProductItemAddToCompare().click();
  }

  public async addToWishlistButtonClickByProductName(productName: string) {
    this.productItemByText(productName).hover();
    await this.linkProductItemAddToWishList().click();
  }

  public colorByLabelExact(input: string): Locator {
    return this.page.getByLabel(input, { exact: true });
  }

  public linkProductItem(): Locator {
    return this.page.locator('.product-item-link');
  }

  public linkProductItemAddToCompare(): Locator {
    return this.page.locator('action.tocompare');
  }

  public linkProductItemAddToWishList(): Locator {
    return this.page.locator('.action.towishlist');
  }

  public linkProductItemPhoto(): Locator {
    return this.page.locator('.product-item-photo');
  }

  public productItemByText(input: string): Locator {
    return this.page.locator('li').filter({ hasText: input });
  }

  public productItemsAll(): Locator {
    return this.page.locator('.product-item-info');
  }

  public sizeByLabelExact(input: string): Locator {
    return this.page.getByLabel(input, { exact: true });
  }
}
