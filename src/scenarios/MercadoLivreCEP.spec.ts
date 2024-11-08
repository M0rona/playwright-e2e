import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import MercadoLivreHomePage from '../support/pages/MercadolivreHomePage';

test.describe('Insere cep para calculo de frete', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let mercadoLivreHomePage: MercadoLivreHomePage;
  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.base_url')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    mercadoLivreHomePage = new MercadoLivreHomePage(page);
    await page.goto(BASE_URL);
  });

  test('Preenche CEP', async () => {
    await mercadoLivreHomePage.preencherCepReal();
  });

  test('Preenche CEP falso', async () => {
    await mercadoLivreHomePage.preencherCepFalso();
    await mercadoLivreHomePage.mensagemErro();
  });
});
