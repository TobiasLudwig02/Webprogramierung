window.onload = function(){
    checkLogin()
    document.getElementById('varauto').innerHTML = autoname;
}

let autoname = "Volkswagen Tiguan"
let autoansichturl = "../../img/auto6.jpg"

$(function () {
    Autoansicht=createTagCard({
        "parent":$("#autoansicht"),
        "title": autoname,
        "imageURL": autoansichturl,
        "tags":["Umgebung Stuttgart","SUV","96kW", "Benzin", "5 Sitzplätze", "Schaltgetriebe", "110€ pro Tag"]
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
    alert("Sie haben" + autoname + " für " + Tage.getValue() + " Tage erfolgreich gemietet")
    Gemietet.show()
}
