//Email-Input
$(function () {
    Email = createInputText({
        "parent": $("#logemail"),
        "id":"logemail",
        "labelText":"Email",
        "inputPlaceholder":"Ihre Email",
        //"hintText":"Ein Hinweistext, der etwas länger sein kann.",
        "width":"100%"
    });

});

//Passwort-Input
$(function () {
    Passwort = createInputText({
        "parent": $("#logpasswort"),
        "id":"logpasswort",
        "labelText":"Passwort",
        "inputPlaceholder":"Ihr Passwort",
        //"hintText":"Das Passwort muss mind. 8 Zeichen, Groß- und Kleinbuchstaben, Sonderzeichen und Zahlen enthalten!",
        "width":"100%"
    });

});

//Login-Button
$(function () {
    LoginButton = createButtonBusy({
        "parent": $("#login"),
        "title":"Login",
        "cssClass": "btn-primary",
        "onClick": onLogin
    });
});

function onLogin()
{
    let password = Passwort.getValue()
    let email = Email.getValue()
    //Funktion zum checken ob login funktioniert
    if (email == "")
        {
            Email.setHintText('Das Feld ist leer. Bitte geben Sie Ihre Emailadresse ein!')
        } else if (email.indexOf("@") == -1)
        {
            Email.setHintText('Es wurde keine gültige Email eingetragen! Bitte geben Sie eine Emailadresse mit "@" ein!')
        }
        else if (password.length > 7 && password.match(/[a-z]/) && password.match(/[A-Z]/) && password.match(/[^a-zA-Z\d]/) && password.match(/\d/)) // Überprüfen ob Sonderzeichen
        {
            Passwort.setHintText('')
            window.open("homepage.html", '_blank').focus();
            localStorage.setItem("storeEmail", Email.getValue());
            localStorage.setItem("storePassword", Passwort.getValue());
            window.close()
        }

        else {
            Passwort.setHintText('Geben Sie Ihr korrektes Passwort ein!')
            Passwort.setHintClass("text-danger")
        }
    
}
