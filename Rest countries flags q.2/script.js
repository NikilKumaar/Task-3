const req = new XMLHttpRequest();  // Creating an XML HTTP Request object
req.open("GET", "https://restcountries.com/v3.1/all"); // What should i do and where i have to go
req.send(); //Sending request to the server
req.onload = function () {
    let obj = JSON.parse(this.response)
    for (let i = 0; i < obj.length; i++)
    {
        console.log(obj[i].flags.png)
        }
}
