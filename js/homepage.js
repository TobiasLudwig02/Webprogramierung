//MarkeDropdown
$(function () {
    Marke = createDropdown({
        "parent":$("#marke"),
        "id":"marke",
    //    "labelText":"Standorte",
        "listValues":{"Marke": "", "Mercedes": "Mercedes", "BMW":"BMW", 
        "VW":"VW", "Audi": "Audi"},
    });
});

//Suchbutton
$(function () {
    SuchButton = createButtonBusy({
        "parent": $("#suchbutton"),
        "title":"Suchen",
        "cssClass": "btn-primary",
        "onClick": SuchButtonFunction
    });
});

//StandortDropdown
$(function () {
    Standort = createDropdown({
        "parent":$("#standort"),
        "id":"standort",
    //    "labelText":"Standorte",
        "listValues":{"Standorte": "", "Umgebung Mannheim":"Umgebung Mannheim", "Umgebung Stuttgart":"Umgebung Stuttgart", 
        "Umgebung Hamburg": "Umgebung Hamburg", "Umgebung Dortmund": "Umgebung Dortmund"},
    });
});

//PreisDropdown
$(function () {
    Preis = createDropdown({
        "parent":$("#preis"),
        "id":"preis",
    //    "labelText":"Standorte",
        "listValues":{"Preis": "", "25€ - 50€": "25€ - 50€", "50€ - 100€":"50€ - 100€", 
        "100€ - 200€":"100€ - 200€", "200€ - 500€": "200€ - 500€"},
    });
});

//VerfügbarkeitDropdown
$(function () {
    Verfügbarkeit = createDropdown({
        "parent":$("#verfügbarkeit"),
        "id":"verfügbarkeit",
    //    "labelText":"Standorte",
        "listValues":{"Verfügbarkeit": "", "Alle": "Alle", "Nur Verfügbare":"Nur Verfügbare",},
    });
});

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
});

function autoClick()  //Aufruf der Autoansichtseite beim klicken auf ein Auto
{
    window.open("autoansicht.html")
    // window.close()
}


function SuchButtonFunction()
{
    //Daten zur Abfrage im Backend
    let marke = Marke.getValue()
    let standort = Standort.getValue()
    let preis = Preis.getValue()
    let verfügbarkeit = Verfügbarkeit.getValue()

    //Daten aus dem Backend
    let autoname1 = "Auto1"
    let autoname2 = "Auto2"
    let autoname3 = "Auto3"
    let autoname4 = "Auto4"
    let autourl1 = "../img/AMG.jpg"
    let autourl2 = "../img/G-Klasse.jpg"
    let autourl3 = "../img/porsche1.jpg"
    let autourl4 = "../img/porsche2.jpg"

    //Erstellen der Buttons der Autos
    imageButtonHolder1.addImageButton(autoname1, autourl1);
    imageButtonHolder2.addImageButton(autoname2, autourl2);
    imageButtonHolder3.addImageButton(autoname3, autourl3);
    imageButtonHolder4.addImageButton(autoname4, autourl4);


    
    document.getElementById('varmarke').innerHTML = marke;
    document.getElementById('varstandort').innerHTML = standort;
    document.getElementById('varpreis').innerHTML = preis;
    document.getElementById('varverfügbarkeit').innerHTML = verfügbarkeit;

}




