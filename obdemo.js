function send() {
    var x = Math.random() * 10000;
    var amount = document.getElementById("amount").value;

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
                "currency": "GBP",
                "lifetimeAmount": amount,
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

function renderrq(data) {
    // Get text elements
    const rq = document.getElementById("rq");
    
    rq.href = "https://web-app.token.io/app/request-token/" + data.tokenRequest.id;
    rq.innerHTML = "WebApp link:  " + "https://web-app.token.io/app/request-token/" + data.tokenRequest.id;
    console.log(rq);
}
