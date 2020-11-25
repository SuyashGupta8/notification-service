const axios = require('axios')

class Publisher {
    constructor(msg){
        this.msg = msg;
    }

    async sendMessage(retry){

        retry = retry || 0;
        axios.post('https://sendgrid', {
            msg: this.msg }).then(res => {
            console.log(`statusCode: ${res.statusCode}`);
            console.log(res);
        }).catch(error => {
            console.error(error);
            if(retry < 3){
                retry++;
                setTimeout((1000)*retry, ()=>{
                    this.sendMessage(retry);
                })
            }
            
        });
    }


}

module.exports = Publisher;



