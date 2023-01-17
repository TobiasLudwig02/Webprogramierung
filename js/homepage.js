window.onload = function(){
    checkLogin()
}

//MarkeDropdown
$(function () {
    Marke = createDropdown({
        "parent":$("#marke"),
        "id":"marke",
    //    "labelText":"Standorte",
        "listValues":{"Marke": "0", "Mercedes": "1", "BMW":"2", 
        "VW":"3", "Audi": "4"},
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
        "listValues":{"Standorte": "0", "Umgebung Mannheim":"1", "Umgebung Stuttgart":"2", 
        "Umgebung Hamburg": "3", "Umgebung Dortmund": "4"},
    });
});

//PreisDropdown
$(function () {
    Preis = createDropdown({
        "parent":$("#preis"),
        "id":"preis",
    //    "labelText":"Standorte",
        "listValues":{"Preis": "0", "25€ - 50€": 1, "50€ - 100€":"2", 
        "100€ - 200€":"3", "200€ - 500€": "4"},
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
                "onClick": autoClick1
            });

});

function autoClick1()  //Aufruf der Autoansichtseite beim klicken auf ein Auto
{
    window.open("./Autos/autoansicht1.html")
    // window.close()
}

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
});

function autoClick2()  //Aufruf der Autoansichtseite beim klicken auf ein Auto
{
    window.open("./Autos/autoansicht2.html")
    // window.close()
}

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
});

function autoClick3()  //Aufruf der Autoansichtseite beim klicken auf ein Auto
{
    window.open("./Autos/autoansicht3.html")
    // window.close()
}

//Autobild4
$(function () {
    imageButtonHolder4 = createImageButtonHolder({
                "parent": $("#auto4"),
                "singleActive": false,
                "width": "400px",
                "padding": "5px",
                "margin": "10px",
                "onClick": autoClick4
            });
});

function autoClick4()  //Aufruf der Autoansichtseite beim klicken auf ein Auto
{
    window.open("./Autos/autoansicht4.html")
    // window.close()
}

//Autobild5
$(function () {
    imageButtonHolder5 = createImageButtonHolder({
                "parent": $("#auto5"),
                "singleActive": false,
                "width": "400px",
                "padding": "5px",
                "margin": "10px",
                "onClick": autoClick5
            });
});

function autoClick5()  //Aufruf der Autoansichtseite beim klicken auf ein Auto
{
    window.open("./Autos/autoansicht5.html")
    // window.close()
}

//Autobild6
$(function () {
    imageButtonHolder6 = createImageButtonHolder({
                "parent": $("#auto6"),
                "singleActive": false,
                "width": "400px",
                "padding": "5px",
                "margin": "10px",
                "onClick": autoClick6
            });
});

function autoClick6()  //Aufruf der Autoansichtseite beim klicken auf ein Auto
{
    window.open("./Autos/autoansicht6.html")
    // window.close()
}

//Autobild7
$(function () {
    imageButtonHolder7 = createImageButtonHolder({
                "parent": $("#auto7"),
                "singleActive": false,
                "width": "400px",
                "padding": "5px",
                "margin": "10px",
                "onClick": autoClick7
            });
});

function autoClick7()  //Aufruf der Autoansichtseite beim klicken auf ein Auto
{
    window.open("./Autos/autoansicht7.html")
    // window.close()
}

//Autobild8
$(function () {
    imageButtonHolder8 = createImageButtonHolder({
                "parent": $("#auto8"),
                "singleActive": false,
                "width": "400px",
                "padding": "5px",
                "margin": "10px",
                "onClick": autoClick8
            });
});

function autoClick8()  //Aufruf der Autoansichtseite beim klicken auf ein Auto
{
    window.open("./Autos/autoansicht8.html")
    // window.close()
}

function SuchButtonFunction()
{
    let marke = Marke.getValue()
    let standort = Standort.getValue()
    let preis = Preis.getValue()

    //Daten der Autos
    let autoname1 = "Mercedes-Benz C 63 AMG"
    let autoname2 = "Mercedes-Benz S 400 d 4MATIC"
    let autoname3 = "BMW 318D"
    let autoname4 = "BMW i4 M50"
    let autoname5 = "Volkswagen Golf Plus Trendline"
    let autoname6 = "Volkswagen Tiguan"
    let autoname7 = "Audi A3"
    let autoname8 = "Audi e-tron GT quattro"
    let autourl1 = "../img/auto1.jpg"
    let autourl2 = "../img/auto2.jpg"
    let autourl3 = "../img/auto3.jpg"
    let autourl4 = "../img/auto4.jpg"
    let autourl5 = "../img/auto5.jpg"
    let autourl6 = "../img/auto6.jpg"
    let autourl7 = "../img/auto7.jpg"
    let autourl8 = "../img/auto8.jpg"

    //Marke: "Keine Auswahl": "0", "Mercedes": "1", "BMW":"2", "VW":"3", "Audi": "4"
    //Standorte: "Keine Auswahl": "0", "Umgebung Mannheim":"1" , "Umgebung Stuttgart":"2", "Umgebung Hamburg": "3", "Umgebung Dortmund": "4"
    //Preis: "Keine Auswahl": "0", "25€ - 50€": 1, "50€ - 100€":"2", "100€ - 200€":"3", "200€ - 500€": "4"


    if (marke == 0 && standort == 0 && preis == 0)
    {
        imageButtonHolder1.addImageButton(autoname1, autourl1);
        imageButtonHolder2.addImageButton(autoname2, autourl2);
        imageButtonHolder3.addImageButton(autoname3, autourl3);
        imageButtonHolder4.addImageButton(autoname4, autourl4);
        imageButtonHolder5.addImageButton(autoname5, autourl5);
        imageButtonHolder6.addImageButton(autoname6, autourl6);
        imageButtonHolder7.addImageButton(autoname7, autourl7);
        imageButtonHolder8.addImageButton(autoname8, autourl8);
    }
    // Marke 0
    if (marke == 0 && standort == 0 && preis == 1)
    {
        imageButtonHolder5.addImageButton(autoname5, autourl5);

    }
    if (marke == 0 && standort == 0 && preis == 2)
    {
        imageButtonHolder3.addImageButton(autoname3, autourl3);
        imageButtonHolder7.addImageButton(autoname7, autourl7);
    }
    if (marke == 0 && standort == 0 && preis == 3)
    {
        imageButtonHolder1.addImageButton(autoname1, autourl1);
        imageButtonHolder6.addImageButton(autoname6, autourl6);
        imageButtonHolder8.addImageButton(autoname8, autourl8);    
    }
    if (marke == 0 && standort == 0 && preis == 4)
    {
        imageButtonHolder2.addImageButton(autoname2, autourl2);
        imageButtonHolder4.addImageButton(autoname4, autourl4);
    }

    if (marke == 0 && standort == 1 && preis == 0)
    {
        imageButtonHolder1.addImageButton(autoname1, autourl1);
        imageButtonHolder5.addImageButton(autoname5, autourl5);
    }
    if (marke == 0 && standort == 1 && preis == 1)
    {
        imageButtonHolder5.addImageButton(autoname5, autourl5);
    }

    if (marke == 0 && standort == 1 && preis == 3)
    {
        imageButtonHolder1.addImageButton(autoname1, autourl1);

    }

    if (marke == 0 && standort == 2 && preis == 0)
    {
        imageButtonHolder2.addImageButton(autoname2, autourl2);
        imageButtonHolder6.addImageButton(autoname6, autourl6);
    }
    if (marke == 0 && standort == 2 && preis == 3)
    {
        imageButtonHolder6.addImageButton(autoname6, autourl6);
    }
    if (marke == 0 && standort == 2 && preis == 4)
    {
        imageButtonHolder2.addImageButton(autoname2, autourl2);
    }

    if (marke == 0 && standort == 3 && preis == 0)
    {
        imageButtonHolder3.addImageButton(autoname3, autourl3);
        imageButtonHolder7.addImageButton(autoname7, autourl7);
    }
    if (marke == 0 && standort == 3 && preis == 2)
    {
        imageButtonHolder3.addImageButton(autoname3, autourl3);
        imageButtonHolder7.addImageButton(autoname7, autourl7);
    }
   

    if (marke == 0 && standort == 4 && preis == 0)
    {
        imageButtonHolder4.addImageButton(autoname4, autourl4);
        imageButtonHolder8.addImageButton(autoname8, autourl8);
    }
    if (marke == 0 && standort == 4 && preis == 3)
    {
        imageButtonHolder8.addImageButton(autoname8, autourl8);

    }
    if (marke == 0 && standort == 4 && preis == 4)
    {
        imageButtonHolder4.addImageButton(autoname4, autourl4);

    }
    // Marke 1
    if (marke == 1 && standort == 0 && preis == 0)
    {
        imageButtonHolder1.addImageButton(autoname1, autourl1);
        imageButtonHolder2.addImageButton(autoname2, autourl2);
    }
    if (marke == 1 && standort == 0 && preis == 3)
    {
        imageButtonHolder1.addImageButton(autoname1, autourl1);
    }
    if (marke == 1 && standort == 0 && preis == 4)
    {
        imageButtonHolder2.addImageButton(autoname2, autourl2);
    }

    if (marke == 1 && standort == 1 && preis == 0)
    {
        imageButtonHolder1.addImageButton(autoname1, autourl1);
    }
    if (marke == 1 && standort == 1 && preis == 3)
    {
        imageButtonHolder1.addImageButton(autoname1, autourl1);

    }

    if (marke == 1 && standort == 2 && preis == 0)
    {
        imageButtonHolder2.addImageButton(autoname2, autourl2);

    }
    if (marke == 1 && standort == 2 && preis == 4)
    {
        imageButtonHolder2.addImageButton(autoname2, autourl2);

    }

    

    // Marke2
    if (marke == 2 && standort == 0 && preis == 0)
    {
        imageButtonHolder3.addImageButton(autoname3, autourl3);
        imageButtonHolder4.addImageButton(autoname4, autourl4);
    }
    if (marke == 2 && standort == 0 && preis == 2)
    {
        imageButtonHolder3.addImageButton(autoname3, autourl3);

    }
    if (marke == 2 && standort == 0 && preis == 4)
    {
        imageButtonHolder4.addImageButton(autoname4, autourl4);

    }

    if (marke == 2 && standort == 3 && preis == 0)
    {
        imageButtonHolder3.addImageButton(autoname3, autourl3);

    }
    if (marke == 2 && standort == 3 && preis == 2)
    {
        imageButtonHolder3.addImageButton(autoname3, autourl3);

    }

    if (marke == 2 && standort == 4 && preis == 0)
    {
        imageButtonHolder4.addImageButton(autoname4, autourl4);

    }
    if (marke == 2 && standort == 4 && preis == 4)
    {
        imageButtonHolder4.addImageButton(autoname4, autourl4);

    }

    //Marke3
    if (marke == 3 && standort == 0 && preis == 0)
    {
        imageButtonHolder5.addImageButton(autoname5, autourl5);
        imageButtonHolder6.addImageButton(autoname6, autourl6);
    }
    if (marke == 3 && standort == 0 && preis == 1)
    {
        imageButtonHolder5.addImageButton(autoname5, autourl5);

    }
   if (marke == 3 && standort == 0 && preis == 3)
    {
        imageButtonHolder6.addImageButton(autoname6, autourl6);

    }
    if (marke == 3 && standort == 1 && preis == 0)
    {
        imageButtonHolder5.addImageButton(autoname5, autourl5);

    }
    if (marke == 3 && standort == 1 && preis == 1)
    {
        imageButtonHolder5.addImageButton(autoname5, autourl5);

    }

    if (marke == 3 && standort == 2 && preis == 0)
    {
        imageButtonHolder6.addImageButton(autoname6, autourl6);

    }
    if (marke == 3 && standort == 2 && preis == 3)
    {
        imageButtonHolder6.addImageButton(autoname6, autourl6);

    }

    //Marke4
    if (marke == 4 && standort == 0 && preis == 0)
    {
        imageButtonHolder7.addImageButton(autoname7, autourl7);
        imageButtonHolder8.addImageButton(autoname8, autourl8);
    }
   if (marke == 4 && standort == 0 && preis == 2)
    {
        imageButtonHolder7.addImageButton(autoname7, autourl7);
 
    }
    if (marke == 4 && standort == 0 && preis == 3)
    {
        imageButtonHolder8.addImageButton(autoname8, autourl8);

    }

    if (marke == 4 && standort == 3 && preis == 0)
    {
        imageButtonHolder7.addImageButton(autoname7, autourl7);

    }
    if (marke == 4 && standort == 3 && preis == 2)
    {
        imageButtonHolder7.addImageButton(autoname7, autourl7);

    }

    if (marke == 4 && standort == 4 && preis == 0)
    {
        imageButtonHolder8.addImageButton(autoname8, autourl8);

    }
    elif (marke == 4 && standort == 4 && preis == 3)
    {
        imageButtonHolder8.addImageButton(autoname8, autourl8);

    }
}




