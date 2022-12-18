let {asc} = require('./asciirenderer.js')

function ascii2cart(x, y, img, s=5)
{
	let length_y= img.length
	let length_x = img[0].length
	let ny = (Math.trunc(length_y / 2) - y) / s
	let nx = (x - Math.trunc(length_x / 2)) / s
	return nx, ny
}

function cart2ascii(x, y, img, s=5)
{
	let length_y = img.length
	let length_x = img[0].length
    	var y = Math.trunc(length_y / 2) - s * ny
    	var x = s * nx + Math.trunc(length_x / 2)
    	return Math.trunc(x), Math.trunc(y)
}
function getrange(img, s=5)
{
	let ran = []
	let leny = image.length
    	let lenx = image[0].length
    	for (var y = 0;y < leny;y++)
    	{
        	for (var x = 0;x < lenx;x++)
        	{
			ran.push(ascii2cart(x, y, img, s))
		}
    	}
	return ran
}

function plot(equation, img=asc.createblankimg(49, 49), white="⬜", black="⬛", s=5)
{
	var ran = getrange(img, s)
	for (var i=0;i < ran.length;i++)
	{
		var coor = ran[i]
		var x = coor[0]
        	var y = coor[1]
        	var nx, ny = cart2ascii(x, y, img, s)
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
