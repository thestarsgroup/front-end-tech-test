const Page = require('./page');
var assert = require('assert')

class JoinPrompt extends Page {
    get closeButton() { return $('//*[@id="Stroke-1"]'); }
    get iframe() { return $("/html/body/div[3]/div/div/section");}


    async close() {
        await this.iframe.click();
        await this.closeButtonReal.click();
      }
    
     validateJoinPrompt(){
        this.iframe.click();
    }
}

module.exports = new JoinPrompt();
