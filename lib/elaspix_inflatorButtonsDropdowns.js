/** Closure to inflate a menu with closure examples,
 * this menu is for Buttons and Dropdowns
 *
 * settings contain
 *  parent
 *
 *  requires:
 */

function createInflatorButtonsDropdowns(settings) {

    let mContent = settings.parent;
    let mFunctionTableBody = undefined;
    let mPresentationHelper = createPresentationHelper();

    function inflate(aName) {
        console.log("inflatorButtonsDropdowns: inflate closure", aName);
        mContent.empty();
        mFunctionTableBody = undefined;
        switch (aName) {
            case "buttonBusy":
                text("A Button with Busy-Spinner.", aName);
                text("It is used very often in an AJAX-Scenario where some time elapses until the server answers.");
                
				inflateClosure(aName,parent());
                func("createButtonBusy", "Constructor");
                arg("parent", "");
                arg("title", "");
                arg("onClick", "function that is called when the button is pressed");
                arg("[cssClass]", "CSS-Class like btn-primary or / and w-100 for full width");
                arg("[marginTop]", "CSS-Property");
                arg("[marginBottom]", "CSS-Property");

                func("showBusyIcon", "if true shows the busyIcon");
                func("setTitle", "");
                func("setEnabled", "if false shows a disabled face, use it to prevent the user from pressing the button again although the server has not responded yet");

                func("setCSSClass","removes the default classes from the button and sets the passed classes")
                arg("aClasses", "string containing the classes")

                func("hide")
                func("show")

                break;

            case "dropdown":
                text("Shows a Dropdown with a Button and Dropdown-Menu.", aName);
                text("The Values are provided as JSON-Array separating shown-label und internal-label.");

				inflateClosure(aName,parent());
                

                func("createDropdown", "Constructor");
                arg("parent", "");
                arg("id", "");
                arg("labelText", "");
                arg("titleText", "");
                arg("listValues", "a JSON-Object with key=shown and value=internal");
                arg("width", "CSS-Property like 100%");
                arg("[onChange]", "function that is called when the value changes");
                arg("[onOpen]", "function that is called when the dropdown is opened e.g. for updating the entries");


                func("setValues", "clears the menu and fills the values");
                func("getValue", "returns the internal value of the dropdown-field");
                func("getValues","returns all Values in the dropdown")
                func("getValueReadable", "returns the respective readable value for the internal value");
                arg("aValues", "a JSON-Object with key=shown and value=internal");
                func("setTitle", "");
                func("selectValue", "activates a specific value using its internal representation");
                func("setLabelText", "");
                func("getLabelText", "");
                func("setHintText", "");
                func("setHintTextHTML");
                func("setHint","replaces the html content and appends the passed jQuery")
                func("setHintclass", "common classes for hint are: 'text-danger', 'text-warning', 'text-success'");
                func("clearHint", "clears the hint, note that this is called on selectValue");
                func("showBusyIcon", "if true shows a busy icon");
                func("setEnables", "shows a enabled or disabled face");
                func("hide");
                func("show");
                func("fadeOut", "hide with a slow visual fading effect");

                break;

            case "listNewDropdown":
                text("A dropdown that allows for new entries at runtime and filtering", aName);
                
				inflateClosure(aName,parent());
				
                func("createListNewDropdown", "Constructor");
                arg("parent", "");
                arg("id", "");
                arg("placeholder", "the placeholder in the text field, 'placeholder here'");
                arg("dropdownText", "the text above the dropdown-selector");
                arg("buttonText", "the text on the button, right of the text field");
                arg("onDropdownClick", "function to call when the dropdown is clicked");
                arg("onKeyUp", "event handler, when a keyboard key is released, useful for getting the user input");
                arg("onButtonClick", "event called when the button is clicked");
                arg("help", "the tag for help messages - bottom left");

                func("fill", "fills the dropdown with a list of strings");
                arg("aList", "syntax with key:value: i.e. {\"key1\":\"value1\",\"key2\":\"value2\"}");

                func("getValue", "the value of the button");

                func("getTextValue", "the value of the input field");

                func("setValue", "sets a value on the button, note that this calls .text(), so technically it just writes a text on the button");
                arg("aValue", "");

                func("setTextValue", "sets a value for the text box");
                arg("aValue", "the text to set")

                func("getInput", "returns the actual filter prefix");

                func("setHelp", "sets the help text");
                arg("aText", "the new help text");

                func("hide", "");

                func("show", "")

                break;

            case "lookupDropdown":
                text("A dropdown that allows for filtering entries, 'look them up', similar to listNewDropdown with less features",aName);
                
				inflateClosure(aName,parent());
				
                func("createListNewDropdown", "Constructor");
                arg("parent", "");
                arg("id", "");
                arg("placeholder", "the placeholder in the text field and above the selector, 'placeholder here'");
                arg("ondropdownclick", "function to call when the dropdown is clicked");
                arg("onkeyup", "event handler, when a keyboard key is released, useful for getting the user input");
                arg("help", "the tag for help messages - bottom left");
                arg("rightButtonText", "the text on the button, right of the text field");
                arg("onRightButtonClick", "event called when the button is clicked");
                arg("width", "CSS property");

                func("fill", "fills the dropdown with an array of strings")
                arg("aList","despite the name, this is an array")

                func("getValue","get value of button");

                func("setValue","set text on button")
                arg("aValue","")

                func("setTextValue","set a text in the text box")
                arg("aValue","")

                func("getFilterPrefix","return the actual filter prefix")

                func("add","adds an entry to the dropdown")
                arg("aText","")
                break;

            case "dropdownButton":
                text("closure for a dropdown with an attached button",aName)
                inflateClosure(aName,parent());
				
                func("createDropdownButton","Constructor")
                arg("parent")
                arg("id")
                arg("labelText")
                arg("type","Add description, here 'button'")
                arg("buttonText")
                arg("listValues","an array of values")
                arg("width","CSS property")
                arg("onChange","function to call when the dropdown changes")
                arg("onClick","function to call when the button is pressed")
                arg("marginBottom","CSS property")
                arg("spinner","spinner object to attach (optional), best practice is to declare a div tag that has the 'spinner-border' class")

                func("setValues","Changes the dropdown values, based on passed array")
                arg("aValues")

                func("getValue")

                func("selectValue","selects passed value")
                arg("aValue")

                func("selectKey","selects passed key")
                arg("aKey")

                func("setHint")
                arg("aHint")

                func("hide")
                func("show")
                func("fadeOut")

                func("setEnabled","dis-/enables the button based on passed boolean")
                arg("aEnabled")
                break;
				
			case "imageButton":
                text("closure to hold a button with image and text, note that the button toggles between active states on click",aName)
                inflateClosure(aName,mContent);
				
                func("createImageButton","Constructor");
                arg("parent")
                arg("width","The width of the image in PIXEL, determines the width of the whole button")
                arg("imageURL","the path to the image on the button")
                arg("value","value of the button, passed to the onClick function")
                arg("label", "")
                arg("onClick","function to be called on button click")

                func("isActive","returns the sate of the button")


                break;

            case "imageButtonHolder":
                text("Holds multiple imageTextButtons with flex-display",aName);
                inflateClosure(aName,mContent);
				
                
                func("createImageButtonHolder","Constructor")
                arg("parent")
                arg("singleActive","if true, only one button is active at once")
				arg("statefulButtons","if true, the buttons maintain a state either activated (thin blue border) or deactivated (no border)")
                arg("width","the width in PIXEL for all buttons, note that therefore images should be same proportion")
                arg("onClick","function to call when a button is clicked")
                arg("onDragStart","function to call on drag event of a button")
                arg("onClose","if provided, buttons can be closed")
                arg("onKebabClick","if provided buttons have a kebab menu")
                arg("maxTextLength","max number of chars a text can have, longer texts are truncated to keep the layout")
                arg("padding","CSS property")
                arg("margin","CSS property")
                arg("marginBottom","CSS property")
                arg("addPrepend","if true, images are added in front not at the end")

                func("addImageButton","")
                arg("aLabel","label of the button")
                arg("aImageURL","url of the image that is shown on the button")
                arg("[aInfo]")
                arg("aRemovable","optional, if true the button can be removed")

                func("getConfig", "returns the label of the active button")

                func("setImageURL")
                arg("aLabel","label of the button whose image is to be set")
                arg("aURL","the new URL")

                func("setActive","activates a single button and deactivates all other buttons")
                arg("aLabel","the button to be activated")

                func("removeImageButton","removes a specific button")
                arg("aLabel")

                func("clear","removes all buttons")

                func("deactivateAll","deactivates all buttons, all buttons lose their thin blue border");

                func("toggle","calls the DOMTokenList function toggle on the passed button")
                arg("aLabel")

                func("getActive","returns a list of all active buttons");


                break;

            case "imageTextButton":
                text("closure to hold a button with image and Text aka swatch, providing close button",aName)
                inflateClosure(aName,mContent);
				
				
                func("createImageTextButton","Constructor")
                arg("parent")
                arg("width","width of the image")
                arg("label","")
                arg("onCLick", "function to call on button click")
                arg("margin","CSS property")
                arg("padding","CSS property")
                arg("stateful","if true the button has 2 states, (in-)active")
                arg("onDragStart","function to call when drag event starts")
                arg("onClose","function to call when button is closed")
                arg("onKebabClick","if defined, passes label and a kebab icon is visible in active mode, otherwise hidden")
                arg("maxTextLength", "if set, longer text will be cropped to keep format")

                func("setActive","boolean based setting of active state")
                arg("aIsActive")

                func("setImageURL")
                arg("aURL")

                func("remove","removes the entire button container")

                func("toggle","toggles active state")

                func("isActive","returns active-state")

                func("show")
                func("hide")
                break;

        }
    }
	
	function inflateClosure(aName,aParent)
	{
		switch (aName)
		{
			case "buttonBusy":
				var buttonBusy = createButtonBusy({
                    "parent": aParent,
                    "title": "The Title",
                    "cssClass": "btn-primary"
                });
                buttonBusy.showBusyIcon(true);
			break;
			
			case "dropdown":
				var dropdown = createDropdown({
                    "parent": aParent,
                    "id": "my-dropdown-id",
                    "labelText": "The Label",
                    "titleText": "The Title",
                    "listValues": {"Value 1": "value_1", "Value 2": "value_2", "Value 3": "value_3"},
                    "width": "100%"
                });
                dropdown.setHintText("The Hint.");
			break;
			
			case "listNewDropdown":
				let listNewDropdown = createListNewDropdown({
                    "parent": aParent,
                    "id": "listNewDropdwn",
                    "placeholder": "placeholder here",
                    "dropdownText": "text above dropdown selector",
                    "buttonText": "text on submit button",
                    "help": "tag for help messages",
                })
                listNewDropdown.fill({"key1": "entry1", "key2": "entry2"})
			break;
			
			case "lookupDropdown":
				let lookupDropdown = createLookupDropdown({
                    "parent":aParent,
                    "id":"lookupDropdown",
                    "placeholder": "placeholder here",
                    "help": "help here",
                    "rightButtonText": "text on right button",
                    "witdh": "80%",
                })
                lookupDropdown.fill(["item1","item2","item3"])
			break;
			
			case "dropdownButton":
				var spinner=$("<div/>").addClass("spinner-border").attr("role","status");
                spinner.css({"width":"15px","height":"15px","margin-left":"3px"});
                let dropdownButton = createDropdownButton({
                    "parent":aParent,
                    "id":"dropdownButton",
                    "labelText": "label here",
                    "type": "button",
                    "buttonText": "button text",
                    "listValues": ["value0","value1","value2"],
                    "width": "80%",
                    "spinner":spinner

                });
			break;
			
			case "imageButton":
				
				var row=$("<div/>").addClass("row");
				aParent.append(row);
				var col=$("<div/>").addClass("col-6");
				row.append(col);
				
				let imageButton = createImageButton({
                    "parent": col,
                    "width": "60%",
                    "imageURL": "pics/javascriptLogo.svg",
                    "value": "buttonValue",
                    "label": "button label",

                });
			break;
			
			
			
			case "imageTextButton":
			
				var row=$("<div/>").addClass("row");
				aParent.append(row);
				var col=$("<div/>").addClass("col-6");
				row.append(col);
				let imageTextButton = createImageTextButton({
                    "parent": col,
                    "width": "80%",
                    "imageURL": "pics/javascriptLogo.svg",
                    "label":"label here",
                    "stateful": "true",
                    "onClose": buttonOnClose,
                    "onKebabClick": buttonOnKebabClick,

                });
			break;
			
			case "imageButtonHolder":
				
				var row=$("<div/>").addClass("row");
				aParent.append(row);
				var col=$("<div/>").addClass("col-6");
				row.append(col);
				
				let imageButtonHolder = createImageButtonHolder({
                    "parent": aParent,
                    "singleActive": false,
					"statefulButtons":true,
                    "width": "100px",
                    "padding": "5px",
                    "margin": "10px",
                    "onClose": buttonOnClose,
                    "onKebabClick":buttonOnKebabClick,

                });
				var butn1=imageButtonHolder.addImageButton("button1","pics/javascriptLogo.svg","info button 1",true);
                var butn2=imageButtonHolder.addImageButton("button2","pics/jQuery.svg","info button 2",true);
				butn1.setActive(true);
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
	
	function buttonOnClose(){
        console.log("close")
    }
    function buttonOnKebabClick(){
        console.log("kebab click")
    }

    function parent() {
        var wrapperContainer = $("<div/>").addClass("wrapper-container");
        mContent.append(wrapperContainer);
        wrapperContainer.addClass("bg-white m-5 p-2 rounded");
        return wrapperContainer;
    }

    return {
        "inflate": inflate,
		"inflateClosure":inflateClosure
    }
}