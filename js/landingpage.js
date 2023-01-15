//Registrieren-Button
$(function () {
    RegistrierenButton = createButtonBusy({
        "parent": $("#lpregistrieren"),
        "title":"Jetzt registrieren!",
        "cssClass": "btn-primary",
        "onClick": lpregistrieren
    });
});

function lpregistrieren()
{
    window.open("registrieren.html")
    window.close()
}