const Page = require('./page');
var assert = require('assert')

class LoginPrompt extends Page {

    get userName() { return $('//*[@id="userId"]'); }
    get passwordField() { return $('//*[@id="password"]'); }
    get loginButton() { return $('//body/div[3]/div[1]/div[1]/section[1]/form[1]/div[3]/button[1]'); }
    get forgotPasswordButton() { return $('//body/div[3]/div[1]/div[1]/section[1]/form[1]/div[3]/button[2]');}
    get signUp() { return $('//body/div[3]/div[1]/div[1]/section[1]/form[1]/div[3]/button[3]');}
    get closeButton() { return $('//*[@id="Stroke-1"]'); }
    get iframe() { return $("/html/body/div[3]/div/div/section");}
    get form() { return $("/html/body/div[3]/div/div/section/form");}
    
    
  
    
    async close() {
        await this.iframe.click();
        await this.closeButtonReal.click();
      }
    
     validateLoginPrompt(){
        this.iframe.click();
    }

}

module.exports = new LoginPrompt();
