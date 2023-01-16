window.onload = function(){
    checkLogin()
    document.getElementById('varauto').innerHTML = autoname;
}

let autoname = "AutoXY"
let autoansichturl = "../img/AMG.jpg"
let autobeschreibung = "Vallah beste Wagen, viele Chayas"

$(function () {
    Autoansicht=createTagCard({
        "parent":$("#autoansicht"),
        "title": autoname,
        "description": autobeschreibung,
        "imageURL": autoansichturl,
        "tags":["Baujahr 2015","Automatik","Benzin","50€ pro Tag"]
    });
});

$(function () {
    Tage = createDropdown({
        "parent": $("#tage"),
        "id":"tage",
        "labelText":"Tage",
        "titleText":"Tageee",
        "listValues": {"1":0,"2":1, "3": 2, "4": 3, "5": 4, "6": 5, "7": 6},
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
            Favoritenbutton.addImageButton("", "../img/stern.jpg");

});

function favoritenClick()
{
    window.open("profil.html")
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
    alert("Erfolgreich gemietet!")
    document.getElementById('varauto').innerHTML = autoname;
    Gemietet.show()
}
