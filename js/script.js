let xreq = new XMLHttpRequest();

xreq.open('GET', 'js/cars.json');

xreq.onload = function () {

    let xData = JSON.parse(xreq.responseText);
    document.write(xData[0].name);
    document.write(xData[0].model);
    document.write(xData[1].name);
    document.write(xData[1].model);

};

xreq.send();