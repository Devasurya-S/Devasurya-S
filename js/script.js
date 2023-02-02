//This function gets the html filename and modifies the href of css using the extracted name as the window size changes.

// function layoutHandler() {

// 	var styleLinkOne = document.getElementById("pageStyleOne");
//     var styleLinkTwo = document.getElementById("pageStyleTwo");
// 	var url = window.location.pathname;
// 	var filename = url.substring(url.lastIndexOf('/')+1);
// 	var name = filename.split(".");
// 	var mobileStyleOne = "styles/Mobile/"+name[0]+".css";
// 	var mobileStyleTwo = "styles/Mobile/style.css";
// 	var desktopStyleOne = "styles/Desktop/"+name[0]+".css";
// 	var desktopStyleTwo = "styles/Desktop/style.css";


// 	if(window.innerWidth < 800){

// 		styleLinkOne.setAttribute("href", mobileStyleOne);
//         styleLinkTwo.setAttribute("href", mobileStyleTwo);

// 	}   else {	

//             styleLinkOne.setAttribute("href", desktopStyleOne);
//             styleLinkTwo.setAttribute("href", desktopStyleTwo);

// 	}
// }

// var value = document.getElementById("fileName");

//var value = document.currentScript.getAttribute('one');
var value = document.querySelector('#fileName');
var fileName = value.getAttribute('target');

function layoutHandler() {

	var styleLinkOne = document.getElementById("pageStyleOne");
    var styleLinkTwo = document.getElementById("pageStyleTwo");
	var mobileStyleOne = "styles/Mobile/" + fileName + ".css";
	var mobileStyleTwo = "styles/Mobile/style.css";
	var desktopStyleOne = "styles/Desktop/" + fileName + ".css";
	var desktopStyleTwo = "styles/Desktop/style.css";

	if(window.innerWidth < 800){

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
