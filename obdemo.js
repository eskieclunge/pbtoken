function sendgbp() {
    var x = (Math.floor(Math.random() * 100000000) + 100000000).toString().substring(1);
    var Amount = document.getElementById("Amount").value;


      const json = {
        "requestPayload": {
            "to": {
                "alias": {"realmId":"m:jH8SCQjtW9uGEQCrNS99qCJ8cHN:5zKtXEAq","type":"DOMAIN","value":"pbarnett.ioo"},
                "id": "m:2rEti5xfXPX13F7fsSpgU9FdX7ws:5zKtXEAq"
            },
    
            "countries":["GB"],

            "actingAs":{
                "displayName": "Unicef UK",
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
                                "sortCode": "400602",
                                "accountNumber": "91566814"
                            },
                            "customerData": {
                                "legalNames": ["Unicef"]
                            }
                        }
                    ]
                }
            },
    
          
    
            "description": "Donation to Unicef",
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
    var x = (Math.floor(Math.random() * 100000000) + 100000000).toString().substring(1);
    var Amount = document.getElementById("Amount").value;


      const json = {
        "requestPayload": {
            "to": {
                "alias": {"realmId":"m:jH8SCQjtW9uGEQCrNS99qCJ8cHN:5zKtXEAq","type":"DOMAIN","value":"pbarnett.ioo"},
                "id": "m:2rEti5xfXPX13F7fsSpgU9FdX7ws:5zKtXEAq"
            },
    
            "actingAs":{                              // Used to specify the sub-tpp executing the transaction
                "refId": "f43f2be7-5b21-4408-b0d4-63d2ba1ed3f3",
                "displayName": "Developer"
    
            },
    

            "transferBody": {
                "currency": "EUR",
                "lifetimeAmount": "1.20",
                "instructions": {
                    "transferDestinations": [
                        {
                            "sepa": {
                                "iban": "GB63REVO00997010707063"    
                            },
                            "customerData": {
                                "legalNames": ["King Pedro"]
                            }
                        }
                    ]
                }
            },
    
          
    
            "description": "Example description",
            "refId": x,
            "redirectUrl": "http://pbtoken.azurewebsites.net/callback.html" // the URL that the request or PSU should be returned to (the TPP) 
            
        }
    
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

function sendpln() {
    var x = (Math.floor(Math.random() * 100000000) + 100000000).toString().substring(1);
    var Amount = document.getElementById("Amount").value;


      const json = {
        "requestPayload": {
            "to": {
                "alias": {"realmId":"m:jH8SCQjtW9uGEQCrNS99qCJ8cHN:5zKtXEAq","type":"DOMAIN","value":"pbarnett.ioo"},
                "id": "m:2rEti5xfXPX13F7fsSpgU9FdX7ws:5zKtXEAq"
            },
    
            "countries":["PL"],

            "actingAs":{
                "displayName": "Polish Humanitarian Action",
                "refId": "f43f2be7-5b21-4408-b0d4-63d2ba1ed3f3"
            },
    
            "transferBody": {
                "currency": "PLN",
                "returnRefundAccount": "true",
                "lifetimeAmount": Amount,
                "instructions": {
                    "transferDestinations": [
                        {
                            "elixir": {
                                "accountNumber": "PL02249000050000460083168772" //CREDITOR IBAN IS MANDATORY
                            },
                            "customerData": {
                                "legalNames": [
                                    "Polish Humanitarian Action" //CREDITOR NAME IS MANDATORY
                                ],
                                "address": {
                                    "full": "tbc"
                                }
                            }
                        }
                    ]
                }
            },
          
    
            "description": "Donation to PAH",
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

