import { Page } from '@playwright/test';
import { Nav } from '../ComponentObjects/Nav';
import { Header } from '../ComponentObjects/Header';
import { Footer } from '../ComponentObjects/Footer';
import { Alerts } from '../ComponentObjects/Alerts';
import { MiniCart } from '../ComponentObjects/Minicart';

export class CommonPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  Alerts(): Alerts {
    return new Alerts(this.page);
  }

  Footer(): Footer {
    return new Footer(this.page);
  }

  Header(): Header {
    return new Header(this.page);
  }

  MiniCart(): MiniCart {
    return new MiniCart(this.page);
  }

  Nav(): Nav {
    return new Nav(this.page);
  }
}
