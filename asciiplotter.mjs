import {createblankimg} from './asciirenderer.mjs'

export function ascii2cart(x, y, img, s=5)
{
	let length_y= img.length
	let length_x = img[0].length
	let ny = (Math.trunc(length_y / 2) - y) / s
	let nx = (x - Math.trunc(length_x / 2)) / s
	return [nx, ny]
}

export function cart2ascii(nx, ny, img, s=5)
{
	let length_y = img.length
	let length_x = img[0].length
    	var y = Math.trunc(length_y / 2) - s * ny
    	var x = s * nx + Math.trunc(length_x / 2)
    	return [Math.trunc(x), Math.trunc(y)]
}

export function getrange(img, s=5)
{
	let ran = []
	let leny = img.length
    	let lenx = img[0].length
    	for (var y = 0;y < leny;y++)
    	{
        	for (var x = 0;x < lenx;x++)
        	{
			ran.push(ascii2cart(x, y, img, s))
		}
    	}
	return ran
}

export function plot(equation, img=createblankimg(49, 49), white="⬜", black="⬛", s=5)
{
	var ran = getrange(img, s)
	for (var i=0;i < ran.length;i++)
	{
		var coor = ran[i]
		var x = coor[0]
        	var y = coor[1]
        	var nn = cart2ascii(x, y, img, s)
		var nx = nn[0]
		var ny = nn[1]
        	var condition = eval(equation)
        	if (condition)
		{
            		img[ny][nx] = white
		}
        	else
		{
            		img[ny][nx] = black
		}
	}
	return img
}
