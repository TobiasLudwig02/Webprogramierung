//Name-Input
$(function () {
    Name = createInputText({
        "parent": $("#name"),
        "id":"name",
        "labelText":"Name*",
        "inputPlaceholder":"Ihr Name",
        //"hintText":"Ein Hinweistext, der etwas länger sein kann.",
        "width":"100%"
    });

});

//Vorname-Input
$(function () {
    Vorname = createInputText({
        "parent": $("#vorname"),
        "id":"vorname",
        "labelText":"Vorname*",
        "inputPlaceholder":"Ihr Vorname",
        //"hintText":"Ein Hinweistext, der etwas länger sein kann.",
        "width":"100%"
    });

});

//Straße-Input
$(function () {
    Strasse = createInputText({
        "parent": $("#strasse"),
        "id":"strasse",
        "labelText":"Straße*",
        "inputPlaceholder":"Ihre Straße",
        //"hintText":"Ein Hinweistext, der etwas länger sein kann.",
        "width":"100%"
    });

});

//Hausnummer-Input
$(function () {
    Hausnr = createInputText({
        "parent": $("#hausnr"),
        "id":"hausnr",
        "labelText":"Hausnummer*",
        "inputPlaceholder":"Ihre Hausnummer",
        //"hintText":"Ein Hinweistext, der etwas länger sein kann.",
        "width":"75%"
    });

});

//Ort-Input
$(function () {
    Wohnort = createInputText({
        "parent": $("#wohnort"),
        "id":"wohnort",
        "labelText":"Wohnort*",
        "inputPlaceholder":"Ihr Wohnort",
        //"hintText":"Ein Hinweistext, der etwas länger sein kann.",
        "width":"100%"
    });

});

//Postleitzahl-Input
$(function () {
    Postleitzahl = createInputText({
        "parent": $("#postleitzahl"),
        "id":"postleitzahl",
        "labelText":"Postleitzahl*",
        "inputPlaceholder":"Ihre Postleitzahl",
        //"hintText":"Ein Hinweistext, der etwas länger sein kann.",
        "width":"100%"
    });

});

//Land-Input
$(function () {
    Land = createInputText({
        "parent": $("#land"),
        "id":"land",
        "labelText":"Land*",
        "inputPlaceholder":"Ihr Land",
        //"hintText":"Ein Hinweistext, der etwas länger sein kann.",
        "width":"100%"
    });

});

//Führerschein-Input
$(function () {
    Führerschein = createInputText({
        "parent": $("#führerschein"),
        "id":"führerschein",
        "labelText":"Führerschein Nr.",
        "inputPlaceholder":"Ihre Führerscheinnummer",
        "hintText":"Nummer 5 auf dem deutschen Führerschein. 11 Zeichen lang!",
        "width":"100%"
    });

});

//Email-Input
$(function () {
    Email = createInputText({
        "parent": $("#email"),
        "id":"email",
        "labelText":"Email*",
        "inputPlaceholder":"Ihre Email",
        //"hintText":"Ein Hinweistext, der etwas länger sein kann.",
        "width":"100%"
    });

});

//Passwort-Input
$(function () {
    Passwort = createInputText({
        "parent": $("#passwort"),
        "id":"passwort",
        "labelText":"Passwort*",
        "inputPlaceholder":"Ihr Passwort",
        "hintText":"Das Passwort muss mind. 8 Zeichen, Groß- und Kleinbuchstaben, Sonderzeichen und Zahlen enthalten!",
        "width":"100%"
    });

});

//Bezahlmethoden
$(function () {
    Bezahlmethode = createDropdown({
        "parent":$("#bezahlmethoden"),
        "id":"bezahlmethoden",
       // "labelText":"Bezahlmethode",
        "listValues":{"Bezahlmethode":"Bezahlmethode", "Paypal":"Paypal", "Kreditkarte":"Kreditkarte", "GiroPay":"GiroPay", "Klarna":"Klarna"},
    });
});


//AGB-Schalter
$(function () {
    AGBSchalter = createSwitch({
                "parent": $("#agbschalter"),
                "id": "agbschalter",
                "isclicked": "Die AGBs wurden akzeptiert!",
                "notclicked": "Klicken Sie hier, um die AGBs zu akzeptieren!",
                "forceMobile": false,
                "isCheckbox": true
            });

});

//Registrierenbutton
$(function () {
    Registrierenbutton = createButtonBusy({
        "parent": $("#registrierenbutton"),
        "title":"Registrieren",
        "cssClass": "btn-primary",
        "onClick": onButtonClick
    });
});

function onButtonClick()
    { 
        //Checken, ob alles ausgefüllt wurde
        i = 0
        if (Name.getValue() == "")
        {
            Name.setHintText('Geben Sie Ihren Namen ein!')
        } else {
            i = i + 1
            Name.setHintText('')
        }
        
        if (Vorname.getValue() == "")
        {
            Vorname.setHintText('Geben Sie Ihren Vornamen ein!')
        } else {
            i = i + 1
            Vorname.setHintText('')}

        if (Strasse.getValue() == "")
        {
            Strasse.setHintText('Geben Sie Ihre Straße ein!')
        } else {
            i = i + 1
            Strasse.setHintText('')
        }

        if (Hausnr.getValue() == "")
        {
            Hausnr.setHintText('Geben Sie Ihre Hausnummer ein!')
        } else {
            i = i + 1
            Hausnr.setHintText('')
        }

        if (Wohnort.getValue() == 0)
        {
            Wohnort.setHintText('Geben Sie Ihren Wohnort ein!')
        } else {
            i = i + 1
            Wohnort.setHintText('')
        }

        if (Postleitzahl.getValue() == "")
        {
            Postleitzahl.setHintText('Geben Sie Ihre Postleitzahl ein!')
        } else {
            i = i + 1
            Postleitzahl.setHintText('')
        }

        if (Land.getValue() == "")
        {
            Land.setHintText('Geben Sie Ihr Land ein!')
        } else {
            i = i + 1
            Land.setHintText('')
        }
        if (Führerschein.length != 11)
        {
            Führerschein.setHintText('Geben Sie Ihre Führerscheinnummer ein! Nummer 5 auf dem deutschen Führerschein. 11 Zeichen lang!')
        } else {
            i = i + 1
            Führerschein.setHintText('')
        }

        let email = Email.getValue()
        if (email == "")
        {
            Email.setHintText('Das Feld ist leer. Bitte geben Sie Ihre Emailadresse ein!')
        } else if (email.indexOf("@") == -1)
        {
            Email.setHintText('Es wurde keine gültige Email eingetragen! Bitte geben Sie eine Emailadresse mit "@" ein!')
        }
        else {
            Email.setHintText('')
            i = i + 1 
        }

        let password = Passwort.getValue()
        if (password.length > 7 && password.match(/[a-z]/) && password.match(/[A-Z]/) && password.match(/[^a-zA-Z\d]/) && password.match(/\d/)) // Überprüfen ob Sonderzeichen
        {
            Passwort.setHintText('')
            i = i + 1
        } 
        else {
            Passwort.setHintText('Geben Sie ein Passwort ein! Das Passwort muss mind. 8 Zeichen, Groß- und Kleinbuchstaben, Sonderzeichen und Zahlen enthalten!')
            Passwort.setHintClass("text-danger")
        }

        //Wenn alles korrekt ausgefüllt wurde => Weiterleitung auf die Login Page
        if (AGBSchalter.isChecked() == true && i == 10)
        {
            window.open("login.html", '_blank').focus();
            window.close()
        }
    }
    