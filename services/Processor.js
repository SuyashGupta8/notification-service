var utils = require('../utils/utility');

class ProcessMessage {
    constructor(msg){
        this.msg = msg;
    }

    buildMessage(){
        return utils.getMsgContent(this.msg);
    }
}

module.exports = ProcessMessage;