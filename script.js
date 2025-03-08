function fibonacci(num) {
// your code here
	if(num==1)
		return 0
	else if(num==2)
		return 1
	else
	{
		let x=0,y=1,fibNo=0
		for(let i=3;i<=num;i++)
			{
				fibNo= x+y
				x=y
				y=fibNo
			}
		return fibNo
	}
}

module.exports = fibonacci;
