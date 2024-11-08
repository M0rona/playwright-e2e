import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class MercadoLivreElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getCampoCep(): Locator {
    return this.page.locator('input[name="zipcode"]');
  }

  getBotaoUsar(): Locator {
    return this.page.locator('button[data-testid=button-use-zipcode]');
  }

  getMensagemErro(): Locator {
    return this.page.locator('text=Digite um CEP válido.');
  }
}
