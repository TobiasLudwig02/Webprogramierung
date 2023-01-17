window.onload = function(){
    checkLogin()
    document.getElementById('varauto').innerHTML = autoname;
}

let autoname = "Mercedes-Benz C 63 AMG"
let autoansichturl = "../../img/auto1.jpg"

$(function () {
    Autoansicht=createTagCard({
        "parent":$("#autoansicht"),
        "title": autoname,
        "imageURL": autoansichturl,
        "tags":["Umgebung Mannheim", "Limousine","350kW", "Benzin", "5 Sitzplätze", "Automatik", "175€ pro Tag"]
    });
});

//Dropdown für die Auswahl der Tage
$(function () {
    Tage = createDropdown({
        "parent": $("#tage"),
        "id":"tage",
        "labelText":"Tage",
        "titleText":"Tageee",
        "listValues": {"1":1,"2":2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7},
        "width":"50%"
    });
});


//Favoritenbutton
$(function () {
    Favoritenbutton = createImageButtonHolder({
                "parent": $("#favoriten"),
                "singleActive": false,
                "width": "40px",
                "padding": "5px",
                "margin": "0px",
                "onClick": favoritenClick
            });
            Favoritenbutton.addImageButton("", "../../img/stern.jpg");

});

function favoritenClick()
{
        //In diesem Prototyp ist hier noch keine Funktion vorhanden
}

//Miet-Button
$(function () {
    MietButton = createButtonBusy({
        "parent": $("#mietbutton"),
        "title":"Mieten",
        "cssClass": "btn-primary",
        "onClick": Mieten
    });
});

$(function () {
    Gemietet = createToast({
        "parent": $("#regsuccess"),
        "text": "Erfolgreich gemietet!",
        "title": "Miete erfolgreich",
        "CSS-Class": "text-success"
    });
});

function Mieten(){
    preis = 175 * Tage.getValue()  //Ausrechnen des Preises
    alert("Sie haben " + autoname + " für " + Tage.getValue() + " Tage für einen Preis von " + preis + "€ erfolgreich gemietet")
    Gemietet.show()
}
