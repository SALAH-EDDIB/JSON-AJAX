let btn = document.querySelector('#bttn')

let info = document.querySelector('#info')

let pageNum = 1;



btn.addEventListener('click', function () {


    let xreq = new XMLHttpRequest();

    xreq.open('GET', `js/cars_${pageNum}.json`);

    xreq.onload = function () {

        let xData = JSON.parse(xreq.responseText);


        addHtml(xData)

    };
    pageNum++;


    xreq.send();

    if (pageNum > 3) {

        btn.classList.add('hide')
        btn.style.backgroundColor = "#eeeeee"
        btn.style.color = "lightblue"



    }

})

function addHtml(data) {

    let htmlText = '';

    for (i = 0; i < data.length; i++) {

        htmlText += "<p>   " + data[i].name + "it's a" + data[i].model + " <br> <span class='blue'> that have 4x4 cars like : ";
        for (j = 0; j < data[i].type.four.length; j++) {

            if (j == 0) {
                htmlText += data[i].type.four[j]
            } else {
                htmlText += " & " + data[i].type.four[j]
            }


        }

        htmlText += " </span> <br> <span class='red'> and a salon cars like : ";

        for (j = 0; j < data[i].type.salon.length; j++) {

            if (j == 0) {
                htmlText += data[i].type.salon[j]
            } else {
                htmlText += " & " + data[i].type.salon[j]
            }


        }

        htmlText += " </span> <br>  <span class='yellow'>whish was made in the year : " + data[i].year;




        htmlText += " </span><hr></p>"


    }

    info.insertAdjacentHTML('beforeend', htmlText)




}