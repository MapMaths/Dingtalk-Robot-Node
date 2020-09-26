const request = require('request');
const crypto = require('crypto');

var secret = "thesecret";                            //secret
var url = "https://example.com/postrecieve";         //post url
var data = {
    "msgtype": "text", 
    "text": {
        "content": "message"                         //message
    }, 
    "at": {
        "atMobiles": [],                             //at someone
        "isAtAll": false                             //at all
    }
};
var time = Date.now();
var stringToSign = time + "\n" + secret;
var base = crypto.createHmac('sha256', secret).update(stringToSign).digest('base64');
var sign = encodeURIComponent(base);
url = url + `&timestamp=${time}&sign=${sign}`;
console.log(url);
request.post(
    url,
    {
        json: data,
        encoding: "utf-8",
        headers: {
            'Content-Type': 'application/json'
        }
    },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
        }
    }
);