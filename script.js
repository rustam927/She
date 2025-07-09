let div1 = document.querySelector(".div1")
let div2 = document.querySelector(".div2")
let div3 = document.querySelector(".div3")
let btn = document.querySelector(".btn1")
let ocnova = document.querySelector(".ocnova")
let na = document.querySelector(".na")

div3.onclick = function() {
	div3.style.top = 400 + "px"
}

div2.onclick = function() {
	div2.style.left = 650 + "px"
}

div1.onclick = function() {
	btn.style.top = 500 + "px"
	btn.style.left = 725 + "px"
}

btn.onclick = function() {
	ocnova.style.display = "block"
	na.style.display = "none"
}
