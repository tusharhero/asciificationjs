import {getstring,createblankimg} from './asciirenderer.mjs'
import {plot} from './asciiplotter.mjs'

const output = document.getElementById("out")
const input = document.getElementById("in")
const button = document.getElementById("mkplot")
const size = document.getElementById("size")
const scale = document.getElementById("scale")

button.addEventListener("click",plotinout)

function plotinout(){
	var value = input.value
	var ploted = plot(value)
	var sizeval = size.value
	var scaleval = scale.value
	console.log(sizeval,scaleval)
	output.innerHTML = getstring(ploted,blankimg(sizeval,sizeval),undefined,undefined,scaleval)
}
