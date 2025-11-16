const { expect } = require('@playwright/test');

class CartPage {
  constructor(page) {
    this.page = page;
    this.cartProductName = '.inventory_item_name';
  }

  async verifyProductInCart(expectedName) {
    const name = await this.page.locator(this.cartProductName).textContent();
    expect(name).toBe(expectedName);
  }
}
module.exports = CartPage;