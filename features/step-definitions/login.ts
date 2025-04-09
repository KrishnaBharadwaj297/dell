import {Given, Then} from '@wdio/cucumber-framework';

Given(/^I enter the dell home url$/, async function (){
    await browser.url('https://www.dell.com/en-in');
})

Then(/^I should see the dell home page screen$/, async function (){
    const title = await browser.getTitle()
    expect(title).toEqual('Computers, Monitors & Technology Solutions | Dell India');
})