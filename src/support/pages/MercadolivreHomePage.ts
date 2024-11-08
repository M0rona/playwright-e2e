import { Page, expect } from '@playwright/test';
import MercadoLivreElements from '../elements/MercadoLivreElement';
import BasePage from './BasePage';

export default class MercadoLivreHomePage extends BasePage {
  readonly mercadoLivreElements: MercadoLivreElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.mercadoLivreElements = new MercadoLivreElements(page);
  }

  async preencherCepReal(): Promise<void> {
    await this.mercadoLivreElements.getCampoCep().click();
    await this.mercadoLivreElements.getCampoCep().fill('88818-350');
    await this.mercadoLivreElements.getBotaoUsar().click();
  }

  async preencherCepFalso(): Promise<void> {
    await this.mercadoLivreElements.getCampoCep().click();
    await this.mercadoLivreElements.getCampoCep().fill('99999');
    await this.mercadoLivreElements.getBotaoUsar().click();
  }

  async mensagemErro(): Promise<void> {
    await expect(this.mercadoLivreElements.getMensagemErro()).toBeVisible({
      visible: true,
      timeout: 5000
    });
  }
}
