import { expect, type Locator, type Page } from '@playwright/test';

export class Footer {
  // #region Properties (1)

  public readonly page: Page;

  // #endregion Properties (1)

  // #region Constructors (1)

  constructor(page: Page) {
    this.page = page;
  }

  // #endregion Constructors (1)

  // #region Public Methods (2)

  public footerCopyWrite(): Locator {
    return this.page.getByText('Copyright © 2013-present');
  }

  public linkByText(input: string): Locator {
    return this.page.getByRole('link', { name: input });
  }

  // #endregion Public Methods (2)
}
