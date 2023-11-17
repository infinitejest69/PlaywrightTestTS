import { test as base } from '@playwright/test';
import { CommonPage } from '../page_objects/common';

type Fixtures = {
  CommonPage: CommonPage;
};

export const test = base.extend<Fixtures>({
  CommonPage: async ({ page }, use) => {
    await use(new CommonPage(page));
  },
});
export { expect } from '@playwright/test';
