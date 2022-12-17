function createblankimg(x,y)
/*the image is just a nested array.*/
{
	let img = []
	let xline = Array.from(" ".repeat(x))
	for (let i = 0;i<=y;i++)
	{
		img.push(Array.from(xline))
	}
	return img
}

function getstring(image)
{
	let string = ""
	let leny = image.length
	let lenx = image[0].length
	for (let i = 0;i < leny;i++)
	{
		for (let j = 0;j < lenx;j++)
		{
			string += image[i][j]
		}
		string += "\n"
	}
	return string
}

function printimage(image)
{
	console.log(getstring(image))
}
