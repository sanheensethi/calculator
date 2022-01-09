function getId(id){
	return document.getElementById(id);
}

function getClass(className){
	return document.getElementsByClassName(className);
}

let clear = getId("clear");
let getAllBtns = getClass("but");
let onoff = getId("onoff");
let display = getId("display");

let allOff = false;
for(btn of getAllBtns){
	btn.disabled = true;
	allOff = true;
}
clear.disabled = true;
onoff.addEventListener('click',function(){
	if(allOff){
		for(btn of getAllBtns){
			btn.disabled = false;
			allOff = false;
		}
		clear.disabled = false;
		onoff.innerHTML = "ON"
		display.innerHTML = "0"
		onoff.classList.remove("bg-danger");
		onoff.classList.add("bg-success");		
	}else{
		for(btn of getAllBtns){
			btn.disabled = true;
			allOff = true;
		}
		onoff.innerHTML = "OFF"
		clear.disabled = true;
		display.innerHTML = ""
		onoff.classList.remove("bg-success");
		onoff.classList.add("bg-danger");
	}
});

evalString = "";

clear.addEventListener('click',function(){
	evalString = "";
	display.innerHTML = "0"
})

for(let i = 0 ; i < getAllBtns.length;i++){
	let btn = i;
	if(getAllBtns[btn].attributes.data.nodeValue == "="){
		getAllBtns[btn].addEventListener('click',function(){
			let ans = eval(evalString);
			display.innerHTML = ans;
		})
		continue;
	}
	getAllBtns[btn].addEventListener('click',function(){
		evalString += getAllBtns[btn].attributes.data.nodeValue;
		display.innerHTML = evalString;
	});
}

