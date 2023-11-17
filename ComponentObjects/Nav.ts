import { expect, type Locator, type Page } from '@playwright/test';

export class Nav {
  public readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  NavBar(): Locator {
    return this.page.locator('nav');
  }

  public search(): Locator {
    return this.page.getByRole('menuitem', { name: "What's New" });
  }
}
