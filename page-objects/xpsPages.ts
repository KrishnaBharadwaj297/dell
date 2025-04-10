export class xps {
  laptops = $(`#menu-heading-0 > a:nth-child(1)`);
  xpsCheckbox = $(`#refinement-xps-product-line`);
  landingXps = $(`//h3[@class='ps-title'][1]`);

  async navigate() {
    await browser.url("https://www.dell.com/en-in");
    await browser.maximizeWindow();
  }

  async xpsValidate() {
    await this.laptops.click();
    await this.xpsCheckbox.scrollIntoView();
    await this.xpsCheckbox.click();
    const text = await this.landingXps.getText();
    const text1 = "XPS 13 Laptop";
    expect(text).toEqual(text1);
  }
}
