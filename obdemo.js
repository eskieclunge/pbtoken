function sendgbp() {
    var x = Math.random() * 10000;
    var Amount = document.getElementById("Amount").value;


      const json = {
        "requestPayload": {
            "to": {
                "alias": {"realmId":"m:jH8SCQjtW9uGEQCrNS99qCJ8cHN:5zKtXEAq","type":"DOMAIN","value":"pbarnett.ioo"},
                "id": "m:2rEti5xfXPX13F7fsSpgU9FdX7ws:5zKtXEAq"
            },
    
            "countries":["GB"],

            "actingAs":{
                "displayName": "Wolf Merchant",
                "refId": "f43f2be7-5b21-4408-b0d4-63d2ba1ed3f3"
            },
    
            "transferBody": {
                "currency": "GBP",
                "lifetimeAmount": Amount,
                "returnRefundAccount":"true",
                
                "instructions": {
                    "transferDestinations": [
                        {
                            "fasterPayments": {
                                "sortCode": "517014",
                                "accountNumber": "78813166"
                            },
                            "customerData": {
                                "legalNames": ["Peter Barnett"]
                            }
                        }
                    ]
                }
            },
    
          
    
            "description": "Donation-Saturdays",
            "refId": x,
            "redirectUrl": "https://pbtoken.azurewebsites.net/callback.html" // the URL that the request or PSU should be returned to (the TPP) 
            
        }
    
    //     "bankId": "ngp-byla"
    //    }
    };
    

    fetch("https://api.token.io/token-requests", {
        method: "POST",
        headers: {
            "Authorization" : "Basic bS0yckV0aTV4ZlhQWDEzRjdmc1NwZ1U5RmRYN3dzLTV6S3RYRUFxOjlhODU0ZmJhLTAyMTYtNDg5Zi04ZWJlLWY5OTBlNjMyNTM3Yg==",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(json),
    })
    .then((response) => response.json())
    .then((data) => renderrq(data));

}

function sendeur() {
    var x = Math.random() * 10000;
    var Amount = document.getElementById("Amount").value;


      const json = {
        "requestPayload": {
            "to": {
                "alias": {"realmId":"m:jH8SCQjtW9uGEQCrNS99qCJ8cHN:5zKtXEAq","type":"DOMAIN","value":"pbarnett.ioo"},
                "id": "m:2rEti5xfXPX13F7fsSpgU9FdX7ws:5zKtXEAq"
            },
    
            //"countries":["GB"],

            "actingAs":{
                "displayName": "Wolf Merchant",
                "refId": "f43f2be7-5b21-4408-b0d4-63d2ba1ed3f3"
            },
    
            "transferBody": {
                "currency": "EUR",
                "returnRefundAccount": "true",
                "lifetimeAmount": Amount,
                "instructions": {
                    "transferDestinations": [
                        {
                            "sepa": {
                                "iban": "GB63REVO00997010707063"
                            },
                            "customerData": {
                                "legalNames": ["Peter Barnett"]
                            }
                        }
                    ]
                }
            },
          
    
            "description": "Donation-Saturdays",
            "refId": x,
            "redirectUrl": "https://pbtoken.azurewebsites.net/callback.html" // the URL that the request or PSU should be returned to (the TPP) 
            
        }
    
    //     "bankId": "ngp-byla"
    //    }
    };
    

    fetch("https://api.token.io/token-requests", {
        method: "POST",
        headers: {
            "Authorization" : "Basic bS0yckV0aTV4ZlhQWDEzRjdmc1NwZ1U5RmRYN3dzLTV6S3RYRUFxOjlhODU0ZmJhLTAyMTYtNDg5Zi04ZWJlLWY5OTBlNjMyNTM3Yg==",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(json),
    })
    .then((response) => response.json())
    .then((data) => renderrq(data));

}

function renderrq(data) {
    // Get text elements
    const rq = document.getElementById("clicklink");
    var target = 'target="_blank"';

    // link = "https://web-app.token.io/app/request-token/" + data.tokenRequest.id

    hyperlink = "<a " + target + "href='https://web-app.token.io/app/request-token/" + data.tokenRequest.id +"'>WebApp Link</a>";
    fulllink = "https://web-app.token.io/app/request-token/" + data.tokenRequest.id
    
    document.getElementById("clicklink").innerHTML = hyperlink
    document.getElementById("fulllink").innerHTML = fulllink

    sessionStorage.setItem("qr",fulllink);

    qr = sessionStorage.getItem("qr");

    
    var qrcode = new QRCode(document.getElementById("qrcode-2"), {
	text: qr,
	width: 128,
	height: 128,
	colorDark : "#5868bf",
	colorLight : "#ffffff",
	correctLevel : QRCode.CorrectLevel.H
    });

    console.log(qr);
}

