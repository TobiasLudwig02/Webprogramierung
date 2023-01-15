let autoname = "Auto1"
let autoansichturl = "../img/AMG.jpg"
let autobeschreibung = "Vallah beste Wagen, viele Chayas"

$(function () {
    Autoansicht=createTagCard({
        "parent":$("#autoansicht"),
        "title": autoname,
        "description": autobeschreibung,
        "imageURL": autoansichturl,
        "tags":["Baujahr 2015","Automatik","Benzin"]
    });
});

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

function Mieten(){
    alert("Erfolgreich gemietet!")
    Gemietet.show()
}