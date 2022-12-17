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

