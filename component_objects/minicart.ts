import { expect, type Locator, type Page } from '@playwright/test';

export class MiniCart {
  // #region Properties (1)

  public readonly page: Page;

  // #endregion Properties (1)

  // #region Constructors (1)

  constructor(page: Page) {
    this.page = page;
  }
  wholeMiniCart(): Locator {
    return this.page.locator('#minicart-content-wrapper');
  }

  buttonCheckOut(): Locator {
    return this.page.locator('#top-cart-btn-checkout');
  }

  productItemByName(name: string): Locator {
    return this.page.locator('.item.product.product-item', { hasText: name });
  }
}
