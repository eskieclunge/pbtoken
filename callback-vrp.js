        
        
        let vc = GetURLParameter('vrp-consent-id');
        let status = GetURLParameter('status');

    
    
        vc = decodeURIComponent(vc);

    
        document.getElementById("vc").innerHTML = "Token VRP Consent ID : " + vc;
        document.getElementById("status").innerHTML = "VRP Consent Status : " + status;
