import { Locator, Page } from '@playwright/test';
import { ProductItems } from '../ComponentObjects/ProductItems.1';

export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  ProductItems(): ProductItems {
    return new ProductItems(this.page);
  }

  //todo add more promo stuff
  HotSellerHeading(): Locator {
    return this.page.getByRole('heading', { name: 'Hot Sellers' });
  }

  promoBlock(): Locator {
    return this.page.locator('.blocks-promo');
  }

  promoNewLumaYogaCollection(): Locator {
    return this.page.getByRole('link', { name: 'New Luma Yoga Collection Get' });
  }
}
