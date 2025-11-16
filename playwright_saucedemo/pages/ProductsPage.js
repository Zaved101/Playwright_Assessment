const { expect } = require('@playwright/test');

class ProductsPage {
  constructor(page) {
    this.page = page;
    this.title = '.title';
    this.firstProductName = '.inventory_item_name';
    this.firstAddToCartBtn = 'button[id*="add-to-cart"]';
    this.cartIcon = '.shopping_cart_link';
  }

  async verifyPageLoaded() {
    await expect(this.page.locator(this.title)).toHaveText('Products');
  }

  async getFirstProductName() {
    return await this.page.locator(this.firstProductName).first().textContent();
  }

  async addFirstProductToCart() {
    await this.page.locator(this.firstAddToCartBtn).first().click();
  }

  async goToCart() {
    await this.page.click(this.cartIcon);
  }
}
module.exports = ProductsPage;