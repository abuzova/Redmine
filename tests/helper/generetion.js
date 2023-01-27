exports.RandomStringGeneration = class RandomStringGeneration {  

    async gen_password(len) {
        let passwordRand = "";
        let symbols = "abcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < len; i++) {
            passwordRand += symbols.charAt(Math.floor(Math.random() * symbols.length));
        }
        return passwordRand;
    }

    async gen_login(len) {
        let loginRand = "";
        let symbols = "abcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < len; i++) {
            loginRand += symbols.charAt(Math.floor(Math.random() * symbols.length));
        }
        return loginRand;
    }  

    async gen_languge(langugeArray) {
        let langugeRand = "";
        for (let i = 0; i < (await langugeArray).length; i++) {
            langugeRand = (Math.floor(Math.random() * (await langugeArray).length));
        }
        return langugeRand;
    }    
   
}