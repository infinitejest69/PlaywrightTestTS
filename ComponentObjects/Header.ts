import { expect, type Locator, type Page } from '@playwright/test';

export class Header {
  public readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

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
}
