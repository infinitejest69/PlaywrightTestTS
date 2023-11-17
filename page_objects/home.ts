import { Locator, Page } from '@playwright/test';
import { ProductItems } from '../component_objects/productitems';

export class Home {
  // #region Properties (1)

  public readonly page: Page;

  // #endregion Properties (1)

  // #region Constructors (1)

  constructor(page: Page) {
    this.page = page;
  }

  // #endregion Constructors (1)

  // #region Public Methods (4)

  //todo add more promo stuff
  public HotSellerHeading(): Locator {
    return this.page.getByRole('heading', { name: 'Hot Sellers' });
  }

  public promoBlock(): Locator {
    return this.page.locator('.blocks-promo');
  }

  public promoNewLumaYogaCollection(): Locator {
    return this.page.getByRole('link', { name: 'New Luma Yoga Collection Get' });
  }

  // #endregion Public Methods (4)
}
