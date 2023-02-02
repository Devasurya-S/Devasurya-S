//This function gets the html filename and modifies the href of css using the extracted name as the window size changes.

function layoutHandler() {

	var styleLinkOne = document.getElementById("pageStyleOne");
    var styleLinkTwo = document.getElementById("pageStyleTwo");
	var url = window.location.pathname;
	var filename = url.substring(url.lastIndexOf('/')+1);
	var name = filename.split(".");
	var mobileStyleOne = "styles/Mobile/"+name[0]+".css";
	var mobileStyleTwo = "styles/Mobile/style.css";
	var desktopStyleOne = "styles/Desktop/"+name[0]+".css";
	var desktopStyleTwo = "styles/Desktop/style.css";


	if(window.innerWidth < 600){

		styleLinkOne.setAttribute("href", mobileStyleOne);
        styleLinkTwo.setAttribute("href", mobileStyleTwo);

	}   else {	

            styleLinkOne.setAttribute("href", desktopStyleOne);
            styleLinkTwo.setAttribute("href", desktopStyleTwo);

	}
}

window.onresize = layoutHandler;
layoutHandler();

//End
