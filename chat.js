var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:false}));

let names = new Array();
let msgs = new Array();


app.all("/sendName",function(request,response){
    let name = request.query.name;
    names.push(name);
    response.send("OK");
    console.log("sendMessage::"+name);
});

app.all("/sendMessage",function(request,response){
    let msg = request.query.msg;
    msgs.push(msg);
    response.send("OK");
    console.log("sendMessage::"+msg);
});

app.all("/getNewMessage",function(request,response){
    let msgCount = Number(request.query.msgCount);
    let sendMsgs;
    if(msgCount < msgs.length){
        sendMsgs = msgs.slice(msgCount);
    }
    else {
        sendMsgs = new Array();
    }
    response.send(JSON.stringify(sendMsgs));
    console.log("getNewMessage:" + JSON.stringify(sendMsgs));
});

app.all("/getName",function(request,response){
    let nameCount = Number(request.query.nameCount);   
    let sendName;
    if(nameCount < names.length){
        sendName = names.slice(nameCount);
    }
    else {
        sendName = new Array();
    }
    response.send(JSON.stringify(sendName));
    console.log("getName:" + JSON.stringify(sendName));
});

app.listen(52237,function(){
    console.log('Server Running at http://127.0.0.1:52237/chat.html');
});

