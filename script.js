const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const button = document.getElementById("button");

//display current css background as text
const updateBackground = () => {
	css.textContent = `${body.style.background};`;
}

//display currently selected colors in the color pickers
const updateColorPickers = () => {
	color1.value = rgbToHex(random1, random2, random3);
	color2.value = rgbToHex(random4, random5, random6);
}

//change background to color picker selections
const setGradient = () => {
	body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
	updateBackground();
}

//randomly generate a new background
const randomGradient = () => {
	body.style.background = `linear-gradient(to right, rgb(${randomColor1()}, ${randomColor2()}, ${randomColor3()}), rgb(${randomColor4()}, ${randomColor5()}, ${randomColor6()}))`;
	updateBackground();
	updateColorPickers();
}

//generate three numbers for each rgb code
const randomColor1 = () => {
	random1 = Math.floor(Math.random() * 256);
	return random1;
}

const randomColor2 = () => {
	random2 = Math.floor(Math.random() * 256);
	return random2;
}

const randomColor3 = () => {
	random3 = Math.floor(Math.random() * 256);
	return random3;
}

const randomColor4 = () => {
	random4 = Math.floor(Math.random() * 256);
	return random4;
}

const randomColor5 = () => {
	random5 = Math.floor(Math.random() * 256);
	return random5;
}

const randomColor6 = () => {
	random6 = Math.floor(Math.random() * 256);
	return random6;
}

//convert color code from hex to rgb
const componentToHex = (c) => {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

const rgbToHex = (r, g, b) => {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

//left color picker
color1.addEventListener("input", setGradient);

//right color picker
color2.addEventListener("input", setGradient);

//randomize button
button.addEventListener("click", randomGradient);
