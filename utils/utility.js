
let getMsgContent = function(content){
    const msg = {
        to: content.to, 
        from: content.from, 
        subject: '', //
        text: '', //
        html: '', //
      }
    return msg;
}

getMsgContent.prototype.textMessageContent = function(){

}

module.exports = {
    getMsgContent: getMsgContent
}