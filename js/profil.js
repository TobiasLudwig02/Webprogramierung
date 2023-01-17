window.onload = function (){
    checkLogin()
    let varname = localStorage.getItem("storeName") //Muss aus der DB gezogen werden
    let varvorname = localStorage.getItem("storeVorame") //Muss aus der DB gezogen werden
    let varstrasse = localStorage.getItem("storeStrasse") //Muss aus der DB gezogen werden
    let varhausnummer = localStorage.getItem("storeHausnr") //Muss aus der DB gezogen werden
    let varwohnort = localStorage.getItem("storeWohnort") //Muss aus der DB gezogen werden
    let varplz = localStorage.getItem("storePostleitzahl") //Muss aus der DB gezogen werden
    let varland = localStorage.getItem("storeLand") //Muss aus der DB gezogen werden
    let varführerschein = localStorage.getItem("storeFührerschein") //Muss aus der DB gezogen werden
    let varemail = localStorage.getItem("storeRegEmail") //Muss aus der DB gezogen werden
    let varpasswort = localStorage.getItem("storeRegPasswort")//Muss aus der DB gezogen werden
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
        localStorage.clear()
        location.reload(true)

        
}