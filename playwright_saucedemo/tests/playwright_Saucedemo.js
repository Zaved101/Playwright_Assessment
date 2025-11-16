const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const ProductsPage = require('../pages/ProductsPage');
const CartPage = require('../pages/CartPage');
const MenuPage = require('../pages/MenuPage');

test('POM: Login → Add product → Verify cart → Logout', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const menuPage = new MenuPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await productsPage.verifyPageLoaded();

  const productName = await productsPage.getFirstProductName();
  await productsPage.addFirstProductToCart();

  await productsPage.goToCart();
  await cartPage.verifyProductInCart(productName);

  await menuPage.logout();

  await expect(page.locator('#login-button')).toBeVisible();
});