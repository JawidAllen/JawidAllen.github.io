function closeit() {
	document.getElementById('navbar').style.height = "0%";
}
function openit() {
	document.getElementById('navbar').style.height = "100%";
}
var allpic = [
	"images1/17.jpg",
	"images1/20.jpg",
	"images1/21.jpg",
];

var A = 0;
function Sliderchange (){
	document.getElementById('img_1').src = allpic[A];
	if (A<(allpic.length -1))
		A ++;
	else 
		A = 0;
}
setInterval('Sliderchange()', 2000);
//The seond Slider of Round img
var allpic2 = [
	"images1/18.jpg",
	"images1/22.jpg",
	"images1/23.jpg",
];

var A2 = 0;
function Sliderchange2 (){
	document.getElementById('img_2').src = allpic2[A2];
	if (A2<(allpic2.length -1))
		A2 ++;
	else 
		A2 = 0;
}
setInterval('Sliderchange2()', 2000);

//The 3th Slider of Round img
var allpic3 = [
	"images1/19.jpg",
	"images1/24.jpg",
	"images1/25.jpg",
];

var A3 = 0;
function Sliderchange3 (){
	document.getElementById('img_3').src = allpic3[A3];
	if (A3<(allpic3.length -1))
		A3 ++;
	else 
		A3 = 0;
}
setInterval('Sliderchange3()', 2000);

// onClick image change by Cliking on it 

var b = 'c';
function chnagejawid (){
	var photo = document.getElementById('img');
	if (b=='c') {
		photo.src = "images/jawid_1.jpg";
		b = 'c1'
	}
	else {
		photo.src = "images/jawid.jpg";
		b = 'c'
	}
}