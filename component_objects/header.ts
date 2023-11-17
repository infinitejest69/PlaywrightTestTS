import { expect, type Locator, type Page } from '@playwright/test';

export class Header {
  // #region Properties (1)

  public readonly page: Page;

  // #endregion Properties (1)

  // #region Constructors (1)

  constructor(page: Page) {
    this.page = page;
  }

  // #endregion Constructors (1)

  // #region Public Methods (3)

  public HomeLogo(): Locator {
    return this.page.getByLabel('store logo');
  }

  basketCounterNumber(): Locator {
    return this.page.locator('.counter-number');
  }

  public cartIcon(): Locator {
    return this.page.getByRole('link', { name: 'My Cart' });
  }

  public search(): Locator {
    return this.page.getByPlaceholder('Search entire store here...');
  }

  // #endregion Public Methods (3)
}
