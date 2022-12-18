import {plot} from './asciiplotter.mjs'
import {printimage} from './asciirenderer.mjs'
let image = plot("x == y**2");
printimage(image);
