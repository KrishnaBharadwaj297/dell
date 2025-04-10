import { Given, Then } from "@wdio/cucumber-framework";
import { xps } from "../../page-objects/xpsPages.js";

const xpsPage = new xps();

Given(/^I am on the dell home page$/, async function () {
  await xpsPage.navigate();
});

Then(/^I should see xps laptops being displayed$/, async function () {
   await xpsPage.xpsValidate();
});
