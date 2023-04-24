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
            "redirectUrl": "http://pbarnett.io/callback.html" // the URL that the request or PSU should be returned to (the TPP) 
            
        }
    
    //     "bankId": "ngp-byla"
    //    }
    };
    

    fetch("https://api.token.io/token-requests", {
        method: "POST",
        headers: {
            "Authorization" : "Basic bS0yckV0aTV4ZlhQWDEzRjdmc1NwZ1U5RmRYN3dzLTV6S3RYRUFxOjM2YTExYzJmLWU5ZWItNGNlZi1iYzk1LTYyZDZiZjEzM2Y0Nw==",
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
                "refId": "ba8597ac-aa69-4171-864e-457cc5d4982a",
                "displayName": "Sauveteurs Sans Frontières"
    
            },
    

            "transferBody": {
                "currency": "EUR",
                "lifetimeAmount": Amount,
                "instructions": {
                    "transferDestinations": [
                        {
                            "sepa": {
                                "iban": "FR7630003011320003726132433"    
                            },
                            "customerData": {
                                "legalNames": ["Sauveteurs Sans Frontières"]
                            }
                        }
                    ]
                }
            },
    
          
    
            "description": "Donation to SSF",
            "refId": x,
            "redirectUrl": "http://pbarnett.io/callback.html" // the URL that the request or PSU should be returned to (the TPP) 
            
        }
    
    };
    

    fetch("https://api.token.io/token-requests", {
        method: "POST",
        headers: {
            "Authorization" : "Basic bS0yckV0aTV4ZlhQWDEzRjdmc1NwZ1U5RmRYN3dzLTV6S3RYRUFxOjM2YTExYzJmLWU5ZWItNGNlZi1iYzk1LTYyZDZiZjEzM2Y0Nw==",
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
                "refId": "7de1a874-f432-4aef-b9d9-f56bc1d93110"
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
            "redirectUrl": "http://pbarnett.io/callback.html" // the URL that the request or PSU should be returned to (the TPP) 
            
        }
    
    //     "bankId": "ngp-byla"
    //    }
    };
    

    fetch("https://api.token.io/token-requests", {
        method: "POST",
        headers: {
            "Authorization" : "Basic bS0yckV0aTV4ZlhQWDEzRjdmc1NwZ1U5RmRYN3dzLTV6S3RYRUFxOjM2YTExYzJmLWU5ZWItNGNlZi1iYzk1LTYyZDZiZjEzM2Y0Nw==",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(json),
    })
    .then((response) => response.json())
    .then((data) => renderrq(data));

}

function sendlei() {
    var x = (Math.floor(Math.random() * 100000000) + 100000000).toString().substring(1);
    var Amount = document.getElementById("Amount").value;


      const json = {
        "requestPayload": {
            "to": {
                "alias": {"realmId":"m:jH8SCQjtW9uGEQCrNS99qCJ8cHN:5zKtXEAq","type":"DOMAIN","value":"pbarnett.ioo"},
                "id": "m:2rEti5xfXPX13F7fsSpgU9FdX7ws:5zKtXEAq"
            },
    
            "countries":["RO"],

            "actingAs":{
                "displayName": "sf-ana",
                "refId": "f43f2be7-5b21-4408-b0d4-63d2ba1ed3f3"
            },
    
            "transferBody": {
                "currency": "RON",
                "returnRefundAccount": "true",
                "lifetimeAmount": Amount,
                "instructions": {
                    "transferDestinations": [
                        {
                            "euDomesticNonEuro": {
                                "iban": "RO28BTRLRONCRT0644940901" //CREDITOR IBAN IS MANDATORY
                            },
                            "customerData": {
                                "legalNames": [
                                    "sf-ana" //CREDITOR NAME IS MANDATORY
                                ],
                                "address": {
                                    "full": "tbc"
                                }
                            }
                        }
                    ]
                }
            },
          
    
            "description": "Donation to sf-ana",
            "refId": x,
            "redirectUrl": "http://pbarnett.io/callback.html" // the URL that the request or PSU should be returned to (the TPP) 
            
        }
    
    //     "bankId": "ngp-byla"
    //    }
    };
    

    fetch("https://api.token.io/token-requests", {
        method: "POST",
        headers: {
            "Authorization" : "Basic bS0yckV0aTV4ZlhQWDEzRjdmc1NwZ1U5RmRYN3dzLTV6S3RYRUFxOjM2YTExYzJmLWU5ZWItNGNlZi1iYzk1LTYyZDZiZjEzM2Y0Nw==",
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

    hyperlink = "<a " + target + "href='https://web-app.token.io/app/request-token/" + data.tokenRequest.id + "?dk=global-test"+"'>WebApp Link</a>";
    fulllink = "https://web-app.token.io/app/request-token/" + data.tokenRequest.id + "?dk=global-test"
    
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


function sendv2natwest() {
    var x = (Math.floor(Math.random() * 100000000) + 100000000).toString().substring(1);
    var Amount = document.getElementById("Amount").value;


      const json = {
        "initiation": {
          "bankId": "ob-natwest",                                     // Sets the bank to to be used
          "refId": x,                          // Sets the unique payment reference identifier
          "remittanceInformationPrimary": x,
          "remittanceInformationSecondary": "secondary remittance info",
          //"onBehalfOfId": "string",
      
          "amount": {
            "value": Amount,                                          // Specifies the number of the payment
            "currency": "GBP"                                         // Specifies the currency of the payment to be initiated
          },
          "localInstrument": "FASTER_PAYMENTS",                       // Specifies the payment rail to be used
      
          "creditor": {                                   
            "name": "Alipay top-up",                               // Specifies the legal name of the beneficiary account
            "accountNumber": "83998835",                              // Specifies the account number of the beneficiary account
            "sortCode": "090128"                                      // Specifies the sort code of the beneficiary account
            },
      
          "returnRefundAccount": true,                                // Specifies whether the originator account information should be provided back to the TPP
          "callbackUrl": "https://www.alipay.com/"                            // Specifies where the PSU should be returned to, following authentication at the bank
      
        },
      
        "pispConsentAccepted": true                                   // Confirms that the PSU did accept consent within the TPPs user experience
      };
    

    fetch("https://api.token.io/v2/payments", {
        method: "POST",
        headers: {
            "Authorization" : "Basic bS0yckV0aTV4ZlhQWDEzRjdmc1NwZ1U5RmRYN3dzLTV6S3RYRUFxOjM2YTExYzJmLWU5ZWItNGNlZi1iYzk1LTYyZDZiZjEzM2Y0Nw==",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(json),
    })
    .then((response) => response.json())
    .then((data) => renderv2(data));

}

function sendv2sant() {
    var x = (Math.floor(Math.random() * 100000000) + 100000000).toString().substring(1);
    var Amount = document.getElementById("Amount").value;


      const json = {
        "initiation": {
          "bankId": "ob-santander",                                     // Sets the bank to to be used
          "refId": x,                          // Sets the unique payment reference identifier
          "remittanceInformationPrimary": x,
          "remittanceInformationSecondary": "secondary remittance info",
          //"onBehalfOfId": "string",
      
          "amount": {
            "value": Amount,                                          // Specifies the number of the payment
            "currency": "GBP"                                         // Specifies the currency of the payment to be initiated
          },
          "localInstrument": "FASTER_PAYMENTS",                       // Specifies the payment rail to be used
      
          "creditor": {                                   
            "name": "Alipay top-up",                               // Specifies the legal name of the beneficiary account
            "accountNumber": "78044278",                              // Specifies the account number of the beneficiary account
            "sortCode": "517014"                                      // Specifies the sort code of the beneficiary account
            },
      
          "returnRefundAccount": true,                                // Specifies whether the originator account information should be provided back to the TPP
          "callbackUrl": "https://www.alipay.com/"                            // Specifies where the PSU should be returned to, following authentication at the bank
      
        },
      
        "pispConsentAccepted": true                                   // Confirms that the PSU did accept consent within the TPPs user experience
      };
    

    fetch("https://api.token.io/v2/payments", {
        method: "POST",
        headers: {
            "Authorization" : "Basic bS0yckV0aTV4ZlhQWDEzRjdmc1NwZ1U5RmRYN3dzLTV6S3RYRUFxOjM2YTExYzJmLWU5ZWItNGNlZi1iYzk1LTYyZDZiZjEzM2Y0Nw==",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(json),
    })
    .then((response) => response.json())
    .then((data) => renderv2(data));

}

function renderv2(data) {
    // Get text elements
    const rq = document.getElementById("clicklink");
    var target = 'target="_blank"';

    // link = "https://web-app.token.io/app/request-token/" + data.tokenRequest.id

    hyperlink = "<a " + target + "href=" + data.payment.authentication.redirectUrl +"'>Go to bank</a>";
    fulllink = "" + data.payment.authentication.redirectUrl 
    
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