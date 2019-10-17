var xhr = new XMLHttpRequest();
var data;

xhr.open("GET", "http://climatedataapi.worldbank.org/climateweb/rest/v1/country/cru/tas/month/");
xhr.send();

function setData(jsonData) {
    data = jsonData;
}

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        data = this.responseText;
        }
    };
}

function printDataToConsole(data) {
    console.log(data);

}

getData(printDataToConsole);





