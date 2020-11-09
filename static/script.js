let url1 = 'https://api.openweathermap.org/data/2.5/weather?q=Ranchi&appid=c95d30d30b354709644bc377fff8ea99'  //City Name
let url2 = 'https://api.openweathermap.org/data/2.5/weather?id=1258526&appid=c95d30d30b354709644bc377fff8ea99' //city-id
let url3 = 'https://api.openweathermap.org/data/2.5/weather?lat=23.35&lon=85.333328&appid=c95d30d30b354709644bc377fff8ea99' //Latitude and longitude

let url_dict = {'City Name': url1,
'City ID': url2,
'Lattitude and Longitude': url3}


function getWeatherData (url, way){
	xhr = new XMLHttpRequest ();
	xhr.open('GET', url, false)

	xhr.onload = function(){
	    webData = JSON.parse(xhr.response)
	    console.log(webData);
	    string = String(webData['weather'][0]['main']);
	    AppendMainArticelNode(string, way);
	}
	xhr.send();
}

function AppendMainArticelNode(str, way){

	tempID = document.getElementById('main-article');
	new_element = document.createElement('section');
	new_element.className = "inside-main";
	new_element.innerHTML = 'The weather KW searched by '+ way+ ' is '+str;
	tempID.append(new_element);
}


var alerted = localStorage.getItem('alerted') || '';
if (alerted != 'yes') {
 alert("Click on Guvi for Day-3 assignment");
 localStorage.setItem('alerted','yes');
}

btnContactClic = () => {
	window.alert('Mobile: 9840917857 \nEmail: anusu90@gmail.com')
}

guviClickFunction = () => {
	console.log("I was CLICKed");
	mainArticleNode = document.getElementById('main-article');
	mainArticleNode.innerHTML = "";
	new_element = document.createElement('section');
	new_element.className = "inside-main";
	new_element.innerHTML = "I have selected Ranchi as the city to display its weather using city name (Ranchi), city-id (1258526) and latttitute (23.35) & longitude (85.333328)";
	mainArticleNode.append(new_element);
	console.log(mainArticleNode);

	for (var url_i in url_dict){
		getWeatherData(url_dict[url_i],url_i);
	}

}


btnContact = document.getElementById('btn-contact');
btnContact.addEventListener('click', btnContactClic);

guviClick = document.getElementById('guvi-link');
guviClick.addEventListener('click', guviClickFunction);


