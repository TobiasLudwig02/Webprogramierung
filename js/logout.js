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