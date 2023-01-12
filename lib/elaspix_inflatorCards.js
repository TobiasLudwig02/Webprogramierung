/** Closure to inflate a menu with closure examples,
 * this menu is (image)-cards
 *
 * settings contain
 *  parent
 *
 *  requires:
 */

function createInflatorCards(settings){
    let mContent = settings.parent;
    let mFunctionTableBody = undefined;
    let mPresentationHelper = createPresentationHelper();

    function inflate(aName) {
        console.log("inflatorDialogs: inflate closure", aName);
        mContent.empty();
        mFunctionTableBody = undefined;

        switch (aName) {
            
			
			case "tagCard":
				text("Shows a card with image, title,description and tags", aName);
				inflateClosure(aName,mContent);
			
				func("createTagCard", "Constructor");
				arg("parent", "");
				arg("title", "");
				arg("description", "");
				arg("imageURL", "");
				arg("[tags]", "optional array of tags");
				func("hide");
				func("show");
			break;	
			
			case "imageText":
                text("Displays an image with a description text above", aName);
                inflateClosure(aName,mContent);
				
                func("createImageText", "Constructor");
                arg("parent", "");
                arg("imageURL", "the location of the image in the project structure: i.e. 'pics/examplePicture.jpeg'");
                arg("text", "");
                arg("height", "the height of the image, should be in px or em");
                arg("width","the width of the container, surrounding the image")
                arg("margin", "");
                arg("id", "");
                arg("onDelete", "function to be called when 'x' in the top right is pressed");
                arg("closeButtonVisible", "boolean");
                func("getImage", "");
                func("getText", "");
                func("getHeader", "");
                func("setCloseButtonVisible", "");
                arg("aIsVisible", "a boolean to change visibility")
                break;

            case "mediaCard":
                text("A closure that wraps a media card, note that the CSS is fixed for now",aName);
                inflateClosure(aName,mContent);
				
                
                func("createMediaCard","Constructor");
                arg("parent","");
                arg("title","");
                arg("text","");
                arg("url","the URL to the image");

                break;

            
        }
    }
	
	
	
	function inflateClosure(aName,aParent)
	{
		switch (aName)
		{
			case "tagCard":
				
				
				var row=$("<div/>").addClass("row");
				aParent.append(row);
				var col=$("<div/>").addClass("col-6");
				row.append(col);
				
				var tagCard=createTagCard({
					"parent":col,
					"title":"Kartentitel",
					"description":"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
					"imageURL":"pics/emptyImage.svg",
					"tags":["Tag 1","Tag 2","Tag 3"]
				});				
			break;
			
			case "imageText":
				let imageText = createImageText({
                    "parent": parent(),
                    "imageURL": "pics/emptyImage.svg",
                    "text": "Text here",
                    "height": "200px",
                    "width":"300px",
                    "margin": "5%",
                    "id": "imageText",
                });
			break;
			
			case "mediaCard":
				let mediaCard = createMediaCard({
                    "parent": parent(),
                    "title": "A title",
                    "text": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod" +
                        " tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. " +
                        "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren," +
                        " no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, " +
                        "consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore " +
                        "magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. " +
                        "Stet clita kasd gubergren," +
                        " no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                    "url": "pics/javascriptLogo.svg",
                });
			break;
			
			
			
			
			
		}
	}
	
    function text(aText, aTitle) {
        mPresentationHelper.text(aText, aTitle, mContent);
    }

    function func(aFunctionName, aDescription) {
        mFunctionTableBody = mPresentationHelper.func(aFunctionName, aDescription, mFunctionTableBody, mContent)

    }

    function arg(aArgumentName, aDescription) {
        mPresentationHelper.arg(aArgumentName, aDescription, mFunctionTableBody)

    }

    function parent() {
        var wrapperContainer = $("<div/>").addClass("wrapper-container");
        mContent.append(wrapperContainer);
        wrapperContainer.addClass("bg-white m-5 p-2 rounded");
        return wrapperContainer;
    }

    function buttonOnClose(){
        console.log("close")
    }
    function buttonOnKebabClick(){
        console.log("kebab click")
    }
    return {
        "inflate": inflate,
		"inflateClosure":inflateClosure
    }
}