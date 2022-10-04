        
        
        let rq = GetURLParameter('request-id');
        let status = GetURLParameter('transfer-status');
        let t = GetURLParameter('transfer-id');
        let errorMsg = GetURLParameter('message');
    
    
        rq = decodeURIComponent(rq);
        t = decodeURIComponent(t);
        errorMsg = decodeURIComponent(errorMsg);
    
        document.getElementById("rq").innerHTML = "requestId : " + rq;
        document.getElementById("status").innerHTML = "Payment Initiation Status : " + status;
        document.getElementById("t").innerHTML = "transferId : " + t;
        document.getElementById("errorMsg").innerHTML = "Error Message : " + errorMsg;