window.onload = function(){
    //Daten aus dem Backend
    let autoname1 = "Auto1"
    let autoname2 = "Auto2"
    let autoname3 = "Auto3"
    let autoname4 = "Auto4"
    let autourl1 = "../img/AMG.jpg"
    let autourl2 = "../img/G-Klasse.jpg"
    let autourl3 = "../img/porsche1.jpg"
    let autourl4 = "../img/porsche2.jpg"
}

let autoname1 = "Auto1"
let autoname2 = "Auto2"
let autoname3 = "Auto3"
let autoname4 = "Auto4"
let autourl1 = "../img/AMG.jpg"
let autourl2 = "../img/G-Klasse.jpg"
let autourl3 = "../img/porsche1.jpg"
let autourl4 = "../img/porsche2.jpg"

//Autobild1
$(function () {
    imageButtonHolder1 = createImageButtonHolder({
                "parent": $("#auto1"),
                "singleActive": false,
                "width": "400px",
                "padding": "5px",
                "margin": "10px",
                "onClick": autoClick
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
                "onClick": autoClick
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
                "onClick": autoClick
            });
            imageButtonHolder3.addImageButton(autoname3, autourl3);

});

//Autobild4
$(function () {
    imageButtonHolder4 = createImageButtonHolder({
                "parent": $("#auto4"),
                "singleActive": false,
                "width": "400px",
                "padding": "5px",
                "margin": "10px",
                "onClick": autoClick
            });
            imageButtonHolder4.addImageButton(autoname4, autourl4);

});

function autoClick()  //Aufruf der Autoansichtseite beim klicken auf ein Auto
{
    window.open("autoansicht.html")
    // window.close()
}

