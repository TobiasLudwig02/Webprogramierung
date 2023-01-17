window.onload = function (){
    checkLogin()
    let varname = localStorage.getItem("storeName") 
    let varvorname = localStorage.getItem("storeVorname") 
    let varstrasse = localStorage.getItem("storeStrasse") 
    let varhausnummer = localStorage.getItem("storeHausnr")
    let varwohnort = localStorage.getItem("storeWohnort") 
    let varplz = localStorage.getItem("storePostleitzahl") 
    let varland = localStorage.getItem("storeLand") 
    let varführerschein = localStorage.getItem("storeFührerschein") 
    let varemail = localStorage.getItem("storeRegEmail") 
    let varpasswort = localStorage.getItem("storeRegPasswort")
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

//Logout-Button
$(function () {
    ProfilLöschenButton = createButtonBusy({
        "parent": $("#logout"),
        "title":"Logout",
        "cssClass": "btn-primary",
        "onClick": LogOut
    });
});

function LogOut()
{
    localStorage.setItem("storeLogEmail", "");
    localStorage.setItem("storeLogPasswort", "");
    location.reload(true)
}
