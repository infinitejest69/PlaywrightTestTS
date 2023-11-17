import { expect, type Locator, type Page } from '@playwright/test';

export class Nav {
  // #region Properties (1)

  public readonly page: Page;

  // #endregion Properties (1)

  // #region Constructors (1)

  constructor(page: Page) {
    this.page = page;
  }

  // #endregion Constructors (1)

  // #region Public Methods (2)

  public HomeLogo(): Locator {
    return this.page.getByLabel('store logo');
  }

  public search(): Locator {
    return this.page.getByRole('menuitem', { name: "What's New" });
  }

  // #endregion Public Methods (2)
}
