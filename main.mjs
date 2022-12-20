import {getstring} from './asciirenderer.mjs'
import {plot} from './asciiplotter.mjs'

const output = document.getElementById("out")
const input = document.getElementById("in")
const button = document.getElementById("mkplot")

button.addEventListener("click",plotinout)

function plotinout(){
	var value = input.value
	var ploted = plot(value)
	output.innerHTML = getstring(ploted)
}
