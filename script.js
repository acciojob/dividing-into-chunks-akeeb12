const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here

	const result=[];
	let currentSubarray [];
	let currentSum  = 0;

	for(const num of arr)
	{
		if(currentSum + sum > n)
		{
			result.push(currentSubarray);
			currentSubarray = [num];
			currentSum = num;
		}else
		{
			currentSubarray.push(num);
			currentSum += num;
		}
	}
	if(currentSubarray.length) 
		result.push(currentSubarray);
		
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));




