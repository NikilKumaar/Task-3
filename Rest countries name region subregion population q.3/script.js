const req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
req.onload = function ()
{
    let obj = JSON.parse(this.response)
    for (let i = 0; i < obj.length; i++)
    {
        console.log('Country Name : ', obj[i].name.common) // country name
        console.log('Region : ', obj[i].region)            // region
        console.log('Sub-region : ', obj[i].subregion)     // sub region
        console.log('Population : ',obj[i].population)     // population

        }
    }
