window.onload = function (){

                    let varname = "Ludwig" //Muss aus der DB gezogen werden
                    let varvorname = "Tobias" //Muss aus der DB gezogen werden
                    let varstrasse = "Händelstraße" //Muss aus der DB gezogen werden
                    let varhausnummer = "16" //Muss aus der DB gezogen werden
                    let varwohnort = "Weinheim" //Muss aus der DB gezogen werden
                    let varplz = "69469" //Muss aus der DB gezogen werden
                    let varland = "Deutschland" //Muss aus der DB gezogen werden
                    let varführerschein = "A1234567890" //Muss aus der DB gezogen werden
                    let varemail = "tobias.ludwig@freudenberg.com" //Muss aus der DB gezogen werden
                    let varpasswort = "DHBWAdmin123." //Muss aus der DB gezogen werden
                    document.getElementById('varname').innerHTML = varname;
                    document.getElementById('varvorname').innerHTML = varvorname;
                    document.getElementById('varstrasse').innerHTML = varstrasse;
                    document.getElementById('varhausnummer').innerHTML = varhausnummer;
                    document.getElementById('varwohnort').innerHTML = varwohnort;
                    document.getElementById('varplz').innerHTML = varplz;
                    document.getElementById('varland').innerHTML = varland;
                    document.getElementById('varführerschein').innerHTML = varführerschein;
                    document.getElementById('varemail').innerHTML = varemail;
                    document.getElementById('varpasswort').innerHTML = varpasswort;
                    
                }
                    

//Profil löschen-Button
$(function () {
    ProfilLöschenButton = createButtonBusy({
        "parent": $("#profillöschenbutton"),
        "title":"Profil löschen",
        "cssClass": "btn-primary",
        "onClick": ProfilLöschenFunction
    });
});

function ProfilLöschenFunction()
    {
        let varname = "" //Muss aus der DB gezogen werden
        let varvorname = "" //Muss aus der DB gezogen werden
        let varstrasse = "" //Muss aus der DB gezogen werden
        let varhausnummer = "" //Muss aus der DB gezogen werden
        let varwohnort = "" //Muss aus der DB gezogen werden
        let varplz = "" //Muss aus der DB gezogen werden
        let varland = "" //Muss aus der DB gezogen werden
        let varführerschein = "" //Muss aus der DB gezogen werden
        let varemail = "" //Muss aus der DB gezogen werden
        let varpasswort = "" //Muss aus der DB gezogen werden
        document.getElementById('varname').innerHTML = varname;
        document.getElementById('varvorname').innerHTML = varvorname;
        document.getElementById('varstrasse').innerHTML = varstrasse;
        document.getElementById('varhausnummer').innerHTML = varhausnummer;
        document.getElementById('varwohnort').innerHTML = varwohnort;
        document.getElementById('varplz').innerHTML = varplz;
        document.getElementById('varland').innerHTML = varland;
        document.getElementById('varführerschein').innerHTML = varführerschein;
        document.getElementById('varemail').innerHTML = varemail;
        document.getElementById('varpasswort').innerHTML = varpasswort;
        // window.open("landingpage.html")
        // window.close()
        
}