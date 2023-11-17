import { Locator, Page } from '@playwright/test';

export class ProductItems {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async addToCartButtonClickByProductName(productName: string) {
    this.productItemByText(productName).hover();
    await this.productItemByText(productName).getByRole('button').click();
  }

  async addToCompareButtonClickByProductName(productName: string) {
    this.productItemByText(productName).hover();
    await this.linkProductItemAddToCompare().click();
  }

  async addToWishlistButtonClickByProductName(productName: string) {
    this.productItemByText(productName).hover();
    await this.linkProductItemAddToWishList().click();
  }

  colorByLabelExact(input: string): Locator {
    return this.page.getByLabel(input, { exact: true });
  }

  linkProductItem(): Locator {
    return this.page.locator('.product-item-link');
  }

  linkProductItemAddToCompare(): Locator {
    return this.page.locator('action.tocompare');
  }

  linkProductItemAddToWishList(): Locator {
    return this.page.locator('.action.towishlist');
  }

  linkProductItemPhoto(): Locator {
    return this.page.locator('.product-item-photo');
  }

  loadingImage(): Locator {
    return this.page.locator('.product-image-photo.swatch-option-loading');
  }

  productItemByText(input: string): Locator {
    return this.page.locator('li').filter({ hasText: input });
  }

  productItemsAll(): Locator {
    return this.page.locator('.product-item-info');
  }

  sizeByLabelExact(input: string): Locator {
    return this.page.getByLabel(input, { exact: true });
  }
}
