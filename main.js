const xhr = new XMLHttpRequest();
const url = "https://api.weatherapi.com/v1/current.json?key=b677082ac19f45aca07212645220401&q=Kiev&aqi=no";

const promise = new Promise ((resolve, reject) => {
    xhr.open("GET", url);
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4 || xhr.status !== 200) return;
        
        resolve(JSON.parse(xhr.response));
    }
});


promise.then(data => {
    console.log(data);
    document.body.innerHTML = `${data.location.name}<br>${data.current.pressure_mb}<br>${data.current.temp_c}<br>`
})

xhr.send();