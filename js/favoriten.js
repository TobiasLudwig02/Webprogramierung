window.onload = function(){
    checkLogin()
}

let autoname1 = "Mercedes-Benz S 400 d 4MATIC"
let autoname2 = "BMW i4 M50"
let autoname3 = "Audi A3"
let autourl1 = "../img/auto2.jpg"
let autourl2 = "../img/auto4.jpg"
let autourl3 = "../img/auto7.jpg"

//Autobild1
$(function () {
    imageButtonHolder1 = createImageButtonHolder({
                "parent": $("#auto1"),
                "singleActive": false,
                "width": "400px",
                "padding": "5px",
                "margin": "10px",
                "onClick": autoClick1
            });
            imageButtonHolder1.addImageButton(autoname1, autourl1);

});

//Autobild2
$(function () {
    imageButtonHolder2 = createImageButtonHolder({
                "parent": $("#auto2"),
                "singleActive": false,
                "width": "400px",
                "padding": "5px",
                "margin": "10px",
                "onClick": autoClick2
            });
            imageButtonHolder2.addImageButton(autoname2, autourl2);

});

//Autobild3
$(function () {
    imageButtonHolder3 = createImageButtonHolder({
                "parent": $("#auto3"),
                "singleActive": false,
                "width": "400px",
                "padding": "5px",
                "margin": "10px",
                "onClick": autoClick3
            });
            imageButtonHolder3.addImageButton(autoname3, autourl3);

});


function autoClick1()  //Aufruf der Autoansichtseite beim klicken auf ein Auto
{
    window.open("./Autos/autoansicht2.html")
    // window.close()
}

function autoClick2()  //Aufruf der Autoansichtseite beim klicken auf ein Auto
{
    window.open("./Autos/autoansicht4.html")
    // window.close()
}

function autoClick3()  //Aufruf der Autoansichtseite beim klicken auf ein Auto
{
    window.open("./Autos/autoansicht7.html")
    // window.close()
}

