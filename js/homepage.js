//Suche-Input
$(function () {
    Suche = createInputText({
        "parent": $("#suche"),
        "id":"suche",
        // "labelText":"Suche",
        "inputPlaceholder":"Suche",
        //"hintText":"Ein Hinweistext, der etwas länger sein kann.",
        "width":"100%"
    });

});

//Suchbutton
$(function () {
    SuchButton = createButtonBusy({
        "parent": $("#suchbutton"),
        "title":"Suche",
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

function SuchButtonFunction()
{
    let marke = Suche.getValue()
    let standort = Standort.getValue()
    let preis = Preis.getValue()
    let verfügbarkeit = Verfügbarkeit.getValue()


    document.getElementById('varmarke').innerHTML = marke;
    document.getElementById('varstandort').innerHTML = standort;
    document.getElementById('varpreis').innerHTML = preis;
    document.getElementById('varverfügbarkeit').innerHTML = verfügbarkeit;
}


