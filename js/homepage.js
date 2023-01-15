//MarkeDropdown
$(function () {
    Marke = createDropdown({
        "parent":$("#marke"),
        "id":"marke",
    //    "labelText":"Standorte",
        "listValues":{"Marke": "", "Mercedes": "Mercedes", "BMW":"BMW", 
        "100€ - 200€":"100€ - 200€", "200€ - 500€": "200€ - 500€"},
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


var imageButtonHolder1;
$(function () {
    imageButtonHolder1 = createImageButtonHolder({
                "parent": $("#auto1"),
                "singleActive": false,
                "width": "400px",
                "padding": "5px",
                "margin": "10px"
            });
    imageButtonHolder1.addImageButton("Auto1","../img/AMG.jpg");

});

var imageButtonHolder2;

$(function () {
    imageButtonHolder2 = createImageButtonHolder({
                "parent": $("#auto2"),
                "singleActive": false,
                "width": "400px",
                "padding": "5px",
                "margin": "10px"
            });
    imageButtonHolder2.addImageButton("Auto2","../img/G-Klasse.jpg");

});


function SuchButtonFunction()
{
    let marke = Marke.getValue()
    let standort = Standort.getValue()
    let preis = Preis.getValue()
    let verfügbarkeit = Verfügbarkeit.getValue()
    document.getElementById('varmarke').innerHTML = marke;
    document.getElementById('varstandort').innerHTML = standort;
    document.getElementById('varpreis').innerHTML = preis;
    document.getElementById('varverfügbarkeit').innerHTML = verfügbarkeit;

}


