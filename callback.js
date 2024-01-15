

    function GetURLParameter(sParam){
      var sPageURL = window.location.search.substring(1);
      var sURLVariables = sPageURL.split('&');
      for (var i = 0; i < sURLVariables.length; i++) 
      {
          var sParameterName = sURLVariables[i].split('=');
          if (sParameterName[0] == sParam) 
          {
              return sParameterName[1];
          }
      } 
    } 
    let rq = GetURLParameter('request-id');
    let status = GetURLParameter('transfer-status');
    let t = GetURLParameter('transfer-id');
    let errorMsg = GetURLParameter('message');


    rq = decodeURIComponent(rq);
    t = decodeURIComponent(t);
    errorMsg = decodeURIComponent(errorMsg);




    function renderrq(data) {
    // Get text elements

      document.getElementById("rq").innerHTML = "requestId : " + rq;
      document.getElementById("status").innerHTML = "First Payment Initiation Status : " + status;
      document.getElementById("t").innerHTML = "transferId : " + t;
      document.getElementById("errorMsg").innerHTML = "Error Message : " + errorMsg;

      trStatus.innerHTML = "Token Request Status : " + data.status;
      console.log(data.status);

    } 

    function refreshTR() {
      fetch("https://api.token.io/token-requests/"+rq+"/result", {
        method: "GET",
        headers: {
            "Authorization" : "Basic bS0yckV0aTV4ZlhQWDEzRjdmc1NwZ1U5RmRYN3dzLTV6S3RYRUFxOjM2YTExYzJmLWU5ZWItNGNlZi1iYzk1LTYyZDZiZjEzM2Y0Nw==",
            "Content-Type": "application/json",
        }
      })
      .then((response) => response.json())
      .then((data) => renderrq(data));
    }


    function rendert(data) {
    // Get text elements


      tStatus.innerHTML = "Polled Payment Initiation Status : " + data.transfer.status;
      console.log(data.transfer.status);
    } 
    function refreshT() {
      fetch("https://api.token.io/transfers/"+t, {
        method: "GET",
        headers: {
            "Authorization" : "Basic bS0yckV0aTV4ZlhQWDEzRjdmc1NwZ1U5RmRYN3dzLTV6S3RYRUFxOjM2YTExYzJmLWU5ZWItNGNlZi1iYzk1LTYyZDZiZjEzM2Y0Nw==",
            "Content-Type": "application/json",
        }
      })
      .then((response) => response.json())
      .then((data) => rendert(data));
    }



