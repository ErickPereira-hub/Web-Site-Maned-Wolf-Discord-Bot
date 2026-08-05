function deleteCookie() {

    let status = null;
    
    //Grabbing the HTML nodes from the DOM.
    const baseUrl = "http://localhost:3000";
    const URL = baseUrl + "/logout";
    console.log(1);

    fetch(URL, {
        "credentials" : "include", //<--- Important because we are going to send and receive a cookie
        "method" : "delete"
        }
    ).then(response => {
        status = response.status;
        return response.json();
        }
    ).then(JSON =>{
        
        if (status === 200) {
            window.location.href = "./access.html";
            }
        }
    )
}