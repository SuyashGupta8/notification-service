var utils = require('../utils/utility');

class TextMessageProcessor extends ProcessMessage {
    constructor(msg){
        super(msg);
    }

    buildMessage(){
        let msgContent = utils.getMsgContent;
        return new  msgContent().getMsgContent(this.msg);
    }
}