//Suche-Input
$(function () {
    Suche = createInputText({
        "parent": $("#suche"),
        "id":"suche",
        "labelText":"Suche",
        "inputPlaceholder":"Suche",
        //"hintText":"Ein Hinweistext, der etwas länger sein kann.",
        "width":"100%"
    });

});

//Suchbutton
$(function () {
    Suchbutton = createButtonBusy({
        "parent": $("#suchbutton"),
        "title":"Suche",
        "cssClass": "btn0",
        "onClick": SuchButtonFunction
    });
});

function SuchButtonFunction()
{
    
}
