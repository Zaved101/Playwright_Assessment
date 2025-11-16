class MenuPage {
  constructor(page) {
    this.page = page;
    this.menuBtn = '#react-burger-menu-btn';
    this.logoutBtn = '#logout_sidebar_link';
  }

  async logout() {
    await this.page.click(this.menuBtn);
    await this.page.click(this.logoutBtn);
  }
}
module.exports = MenuPage;