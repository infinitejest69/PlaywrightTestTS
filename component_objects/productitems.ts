import { expect, type Locator, type Page } from '@playwright/test';

export class ProductItems {
  // #region Properties (1)

  public readonly page: Page;

  // #endregion Properties (1)

  // #region Constructors (1)

  constructor(page: Page) {
    this.page = page;
  }

  // #endregion Constructors (1)

  // #region Public Methods (11)

  public addToCartButtonClickByProductName(productName: string) {
    this.productItemByText(productName).hover();
    this.productItemByText(productName).getByRole('button').click();
  }

  public addToCompareButtonClickByProductName(productName: string) {
    this.productItemByText(productName).hover();
    this.linkProductItemAddToCompare().click();
  }

  public addToWishlistButtonClickByProductName(productName: string) {
    this.productItemByText(productName).hover();
    this.linkProductItemAddToWishList().click();
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

  // #endregion Public Methods (11)
}
