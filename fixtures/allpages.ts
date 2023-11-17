import { test as base } from '@playwright/test';
import { CommonPage } from '../PageObjects/Common';
import { HomePage } from '../PageObjects/Home';

type AllPages = {
  CommonPage: CommonPage;
  HomePage: HomePage;
};

export const test = base.extend<AllPages>({
  CommonPage: async ({ page }, use) => {
    await use(new CommonPage(page));
  },
  HomePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
});
export { expect } from '@playwright/test';
