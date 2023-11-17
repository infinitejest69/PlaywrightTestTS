import { Page } from '@playwright/test';
import { Nav } from '../component_objects/nav';
import { Header } from '../component_objects/header';
import { Footer } from '../component_objects/footer';
import { Alerts } from '../component_objects/alerts';
import { MiniCart } from '../component_objects/minicart';

export class CommonPage {
  // #region Properties (1)

  public readonly page: Page;

  // #endregion Properties (1)

  // #region Constructors (1)

  constructor(page: Page) {
    this.page = page;
  }

  // #endregion Constructors (1)

  // #region Public Methods (5)

  public Alerts(): Alerts {
    return new Alerts(this.page);
  }

  public Footer(): Footer {
    return new Footer(this.page);
  }

  public Header(): Header {
    return new Header(this.page);
  }

  public MiniCart(): MiniCart {
    return new MiniCart(this.page);
  }

  public Nav(): Nav {
    return new Nav(this.page);
  }

  // #endregion Public Methods (5)
}
