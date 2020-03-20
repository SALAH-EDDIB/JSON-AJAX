var btn = document.querySelector('#bttn')

var info = document.querySelector('#info')

btn.addEventListener('click', function () {
    let xreq = new XMLHttpRequest();

    xreq.open('GET', 'js/cars.json');

    xreq.onload = function () {

        let xData = JSON.parse(xreq.responseText);


        addHtml(xData)

    };

    xreq.send();

})

function addHtml(data) {

    let htmlText = '';

    for (i = 0; i < data.length; i++) {

        htmlText += "<p>" + data[i].name + "it's a" + data[i].model + " <hr></p>"
    }

    info.insertAdjacentHTML('beforeend', htmlText)

}