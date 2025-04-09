import {Given, Then} from '@wdio/cucumber-framework';

Given(/^I am on the dell home page$/, async function (){
    await browser.url('https://www.dell.com/en-in');
    await browser.maximizeWindow()
})

Then(/^I click on laptops$/, async function () {
    await $(`#menu-heading-0 > a:nth-child(1)`).click();
})

Then(/^I check the xps check box$/, async function () {
    await $(`#refinement-xps-product-line`).scrollIntoView();
    await $(`#refinement-xps-product-line`).click();
})

Then(/^I should see xps laptops being displayed$/, async function () {
    const text = await $(`//h3[@class='ps-title'][1]`).getText()
    const text1 = 'XPS 13 Laptop'
    expect(text).toEqual(text1)
})