window.onload = function(){
    checkLogin()
    document.getElementById('varauto').innerHTML = autoname;
}

let autoname = "Mercedes-Benz S 400 d 4MATIC"
let autoansichturl = "../../img/auto2.jpg"

$(function () {
    Autoansicht=createTagCard({
        "parent":$("#autoansicht"),
        "title": autoname,
        "imageURL": autoansichturl,
        "tags":["Umgebung Stuttgart", "Limousine","243kW", "Diesel", "5 Sitzplätze", "Automatik", "250€ pro Tag"]
    });
});

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
    preis = 250 * Tage.getValue()
    alert("Sie haben " + autoname + " für " + Tage.getValue() + " Tage für einen Preis von " + preis + "€ erfolgreich gemietet")
    Gemietet.show()
}
