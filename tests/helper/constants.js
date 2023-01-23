// constants

const {expect} = require('@playwright/test')
exports.Constants = class Constants{
    
    constructor() {
        this.SEARCH_WORD = 'activity';
        this.SEARCH_WORD_EX = "'" + this.SEARCH_WORD + "'";
        this.SEARCH_WORD_EXE = /this.SEARCH_WORD/;
    }     
}

