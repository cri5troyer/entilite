const { EntiliteClient } = require('../../Interface/EntiliteClient');

class Client extends EntiliteClient{
    constructor(client){
        super();
        this.client = client;
    }

    beginTran(){
        console.log("begin tran");
    }

    commitTran(){}

    rollbackTran(){}

    query(query){}
}

/**
 * 
 */
module.exports.Client = Client;


