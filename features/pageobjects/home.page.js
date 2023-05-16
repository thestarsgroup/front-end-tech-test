const Page = require('./page');
var assert = require('assert')
var index =0
class HomePage extends Page {


     // Elements
  get sportsHeader() { return $('//*[@id="root"]/div[2]/div[1]/header/div[2]/div[2]/div[3]/div/a[3]'); }
  get betSlip() { return $("//span[contains(text(),'Bet Slip')]"); }
  get joinButton() { return $('//header/div[2]/div[2]/div[2]/div[1]/div[1]/button[2]'); }
  get loginButton() {return $('//header/div[2]/div[2]/div[2]/div[1]/div[1]/button[1]')}
  get acceptCookiesButton() { return $('//*[@id="onetrust-accept-btn-handler"]'); }
  get cookieBannerAlert () { return $('//*[@id="onetrust-banner-sdk"]/div')}
  get oddsBoostSection () { return $('//header/span[1]')}
  get sportsList() { return $('//body[1]/div[1]/div[2]/div[3]/div[1]/div[1]/nav[1]/ul[1]/li[1]/a[1]/span[1]/span[1]')}
  get inPlaySection() { return $("//div[contains(text(),'In-Play')]")}
  
  get loginButtonReal() { return $('//*[@id="root"]/div[2]/div[1]/header/div[2]/div[2]/div[2]/div/div/button[1]'); }
  get joinButtonReal() { return $('//*[@id="root"]/div[2]/div[1]/header/div[2]/div[2]/div[2]/div/div/button[2]'); }

  get iframe() { return $("/html/body/div[3]/div/div/section")}

  get sportsFootball() { return $('//body[1]/div[1]/div[2]/div[3]/div[1]/div[1]/nav[1]/ul[1]/li[1]/a[1]/span[1]/span[1]');}
    
  get inPlaySectionHeader() { return $('//*[@id="root"]/div[2]/div[3]/div[2]/div[2]/div/h1');}

  get matchesSection() { return $('/html/body/div[1]/div[2]/div[3]/div[2]/div[2]/nav/div/ul/li[2]/a');}
  get firstMatchtoChoose() { return $('/html/body/div[1]/div[2]/div[3]/div[2]/div[3]/div[2]/details/div[2]/ol/li/div/div[1]/div[1]/a');}
  get stakeButtonChoose() { return $('//*[@id="root"]/div[2]/div[3]/div[2]/div[3]/div[1]/details/table/tbody/tr/td[2]/button');}
  get stakeInputBox() { return $('/html/body/div[1]/div[2]/div[3]/div[3]/div/form/div[2]/div/div[1]/details/div/div/div/div[3]/div/div/input');}
  get deleteStakebutton() { return $('/html/body/div[1]/div[2]/div[3]/div[3]/div/form/div[2]/div/div[2]/div/div/button[1]');}


   // Methods
   async open() {
    await super.open('');
    }

  acceptAllCookies (){
    this.cookieBannerAlert.waitForDisplayed();
    this.acceptCookiesButton.click();  
   }


   async verifyHomePageLoadsCorrectly() {
     this.sportsHeader.waitForDisplayed();
    await  assert.ok( this.sportsHeader.isDisplayed(), 'sportsHeader is not displayed');
    await assert.ok( this.loginButton.isDisplayed(), 'Login button is not displayed');
    await assert.ok( this.joinButton.isDisplayed(), 'Join button is not displayed');
    await assert.ok( this.betSlip.isDisplayed(), 'Bet slip is not displayed');
    await assert.ok( this.oddsBoostSection.isDisplayed(), 'odds Boost section is not displayed');
    await assert.ok( this.sportsList.isDisplayed(), 'Sports Name list is not displayed');
    await assert.ok( this.inPlaySection.isDisplayed(), 'In Play section is not displayed');
  }

  async clickLoginButton() {
    await this.loginButtonReal.click();  
    await this.iframe.click();
  }

  async clickJoinButton() {
    await this.joinButtonReal.click();  
    await this.iframe.click();
  }

  async verifyLinksAreWorkingCorrectly() {
    for (const link of await $$('a')) {
      const href = await link.getAttribute('href');
      if (href && !href.startsWith('javascript') && !href.startsWith('#')) {
        await link.click();
        assert.ok(await browser.getUrl() !== 'about:blank', `${href} link is broken`);
        await browser.back();
      }
    }
  }


  // method to verify if the website is secure and uses HTTPS
  async verifyWebsiteSecurity() {
    expect(browser).toHaveUrlContaining('https://');
  }

  // method to verify if the website displays the correct sports and events
  async verifySportsAndEvents() {
    expect($('//*[@id="root"]/div[2]/div[3]/div[1]/div/nav/ul[1]/li[1]/a/span/span')).toHaveText('Football');
    expect($('//*[@id="root"]/div[2]/div[3]/div[1]/div/nav/ul[1]/li[2]/a/span/span')).toHaveText('Tennis');
    expect($('//*[@id="root"]/div[2]/div[3]/div[1]/div/nav/ul[1]/li[3]/a/span/span')).toHaveText('Horse Racing');
    expect($('//*[@id="root"]/div[2]/div[3]/div[1]/div/nav/ul[1]/li[4]/a/span/span')).toHaveText('Basketball');
    expect($('//*[@id="root"]/div[2]/div[3]/div[1]/div/nav/ul[1]/li[5]/a/span/span')).toHaveText('Cricket');
    expect($('//*[@id="root"]/div[2]/div[3]/div[1]/div/nav/ul[1]/li[6]/a/span/span')).toHaveText('Darts');
    expect($('//*[@id="root"]/div[2]/div[3]/div[1]/div/nav/ul[1]/li[7]/a/span/span')).toHaveText('Esports');
    expect($('//*[@id="root"]/div[2]/div[3]/div[1]/div/nav/ul[1]/li[8]/a/span/span')).toHaveText('Golf');
    expect($('//*[@id="root"]/div[2]/div[3]/div[1]/div/nav/ul[1]/li[9]/a/span/span')).toHaveText('Boxing');
    expect($('//*[@id="root"]/div[2]/div[3]/div[1]/div/nav/ul[1]/li[10]/a/span/span')).toHaveText('Mixed Martial Arts');
    expect($('//*[@id="root"]/div[2]/div[3]/div[1]/div/nav/ul[1]/li[11]/a/span/span')).toHaveText('Rugby Union');
    expect($('//*[@id="root"]/div[2]/div[3]/div[1]/div/nav/ul[1]/li[12]/a/span/span')).toHaveText('Rugby League');
    expect($('//*[@id="root"]/div[2]/div[3]/div[1]/div/nav/ul[1]/li[13]/a/span/span')).toHaveText('Baseball');
    expect($('//*[@id="root"]/div[2]/div[3]/div[1]/div/nav/ul[1]/li[14]/a/span/span')).toHaveText('Motor Sport');

    
  }

  async chooseSportsInPlaySection(){
    await this.sportsFootball.click();  
    await this.sportsFootball.click();  

    browser.pause(5000);
    browser.navigateTo('https://www.pokerstars.uk/sports/football/1/matches/');
    expect($('/html[1]/body[1]/div[1]/div[2]/div[3]/div[2]/div[2]/div[1]/h1[1]')).toHaveText('Football');
  }


  async chooseMatch(){
    await this.matchesSection.click();
    await this.firstMatchtoChoose.click();
    browser.pause(5000);

    //const optionButton = await this.findElement(By.xpath(`/html/body/div[1]/div[2]/div[3]/div[2]/div[3]/div[2]/details/div[2]/ol/li/div/div[1]/div[2]/button[2]`));
    //await optionButton.click();
  }


  async chooseMatchOdds(){
    expect($('/html/body/div[1]/div[2]/div[3]/div[2]/div[3]/div[1]/details/table/thead/tr/th[2]')).toHaveText('Draw');
    await this.stakeButtonChoose.click();
    browser.pause(3000);
  }


  async verifyBetSlipCount(){
    expect($('/html/body/div[1]/div[2]/div[3]/div[3]/div/form/div[1]/div/h2/span')).toHaveText('1');
  }


  async enterStake(){
    await this.stakeInputBox.setValue('10');
  }


  async verifyOdds(){
    expect($('/html/body/div[1]/div[2]/div[3]/div[3]/div/form/div[2]/div/div[1]/details/div/div/div/div[2]/h4')).toHaveText('The Draw');
  }


  async verifyStake(){
    expect($('/html/body/div[1]/div[2]/div[3]/div[3]/div/form/div[2]/div/div[2]/div/ul/li[1]/span[2]')).toHaveText('10');
  }


  async deleteBetStake(){
    await this.deleteStakebutton.click();
  }


  async verifyEmptyBetSlip(){
    await expect($('/html/body/div[1]/div[2]/div[3]/div[3]/div/form/div[2]/div/div[1]/div')).toHaveText('Your bet slip is empty');
  }

  
}

module.exports = new HomePage();
