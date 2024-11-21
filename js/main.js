
/* 
	daily-grind.js
	Rotate by Day of Week: Use HTML/CSS & JavaScript to create a single page that rotates unique colors and content for each weekday (Sunday to Saturday) into the page.  The content must include:
	One unique image, with appropriate and matching content in the alt tag.  
	A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)
	A unique color that supports the image and paragraph of content
	The unique color could affect the background HTML, or an element on the page for each day of the week.  All of the above must occur within one page.

	Name - Bubble tea for example
	Pic - An image of a bubble tea
	Day - For example wednesday
	Alt - Data in the alt tag
	Color - A color to match the coffee
	Desc - A paragraph or two of content that describes the daily content

*/

// Set the dates variables
let myDate = new Date();
// pull which day of the week it is 0 = sunday 6 = saturday
myDay = myDate.getDay();
// set variables for today and coffee
let today = "";
let coffee = "";

//working with query strings https://www.sitepoint.com/get-url-parameters-with-javascript/
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if(urlParams.has('day')){
	//Use querry string to pull from previous day loadouts
	// Allows you to click on the day of the week in the nav panel to swap to a different day of the week
    myDay = urlParams.get('day');
    myDay = parseInt(myDay);
}else{
	//Use date object to set the website to current day
	// Sets the default day to the current day of the week when you first open the site.
    myDay = myDate.getDay();
}

switch(myDay){
	case 0:
		today = "Sunday";
		coffee = {
			type: "Bubble Tea",
			pic: "images/bubble-tea.jpg",
			day: "Sunday",
			alt: "A pic of a Bubble Tea",
			color: "pink",
			desc: `Bubble tea is a milk and tea combination`
		}
	break;
	case 1:
		today = "Monday";
		coffee = {
			type: "Caramel Latte",
			pic: "images/caramel-latte.jpg",
			day: "Monday",
			alt: "A pic of a Caramel Latte",
			color: "red",
			desc: `Caramel latte is a type of coffee`
		}
	break;
	case 2:
		today = "Tuesday";
		coffee = {
			type: "Cold Brew",
			pic: "images/cold-brew.jpg",
			day: "Tuesday",
			alt: "A pic of a Cold Brew",
			color: "orange",
			desc: `Cold Brew is a type of coffee`
		}
	break;
	case 3:
		today = "Wednesday";
		coffee = {
			type: "drip",
			pic: "images/drip.jpg",
			day: "Wednesday",
			alt: "A pic of a drip",
			color: "yellow",
			desc: `Drip is the most basic of coffees`
		}
	break;
	case 4:
		today = "Thursday";
		coffee = {
			type: "Frappaccino",
			pic: "images/frappaccino.jpg",
			day: "Thursday",
			alt: "A pic of a Frappaccino",
			color: "green",
			desc: `Frappaccino is a tpe of coffee with whip cream`
		}
	break;
	case 5:
		today = "Friday";
		coffee = {
			type: "Mocha",
			pic: "images/mocha.jpg",
			day: "Friday",
			alt: "A pic of a Mocha",
			color: "blue",
			desc: `Mocha is a type of coffee`
		}
	break;
	case 6:
		today = "Saturday";
		coffee = {
			type: "Pumpkin Spice Latte",
			pic: "images/pumpkin-spice-latte.jpg",
			day: "Saturday",
			alt: "A pic of a Pumpkin Spice Latte",
			color: "purple",
			desc: `Pumpkin Spice Latte is a pumpkin coffee`
		}
	break;

	default:
		today = "Something went wrong";
}

console.log(coffee);

// allows line 68 div to get the information and change coffee types
document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);
// changes the background of the site according to the color within the coffee switche
document.getElementsByTagName("HTML")[0].style.backgroundColor = coffee.color;

function coffeeTemplate(coffee){
	let myReturn = `<p>
	<img src="${coffee.pic}" alt="${coffee.alt}" id="" />
   <p></p><strong class="feature" >${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s Coffee Special is ${coffee.type}.<strong class="feature"></strong> ${coffee.desc}
</p> `;
	return myReturn;	
}

