import {plot} from './asciiplotter.mjs'
import {printimage} from './asciirenderer.mjs'
let image = plot("x**2+y**2<=5");
printimage(image);
