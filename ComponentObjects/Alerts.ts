import { expect, type Locator, type Page } from '@playwright/test';

export class Alerts {
  // #region Properties (1)

  public readonly page: Page;

  // #endregion Properties (1)

  // #region Constructors (1)

  constructor(page: Page) {
    this.page = page;
  }

  AlertsAll(): Locator {
    return this.page.getByRole('alert');
  }

  ShoppingCartLink(): Locator {
    return this.page.getByRole('link', { name: 'shopping cart' });
  }
}
