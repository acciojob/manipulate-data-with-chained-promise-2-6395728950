//your JS code here. If required.

const array = [1,2,3,4];
 const div = document.getElementById('output');

const promise1 = () => {
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(array);
		},3000);
	});
};
 
 
const promise2 = () => {
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			const arr = array.filter(num=>num%2===0);
			resolve(arr);
		},1000);
	});
};
  
const promise3 = () => {
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			const updatedArr=array.filter(num=>num%2===0).map(num=>num*2);
			resolve(updatedArr);
		},2000);
		 
	});
};

promise1().then((array)=>{
 
div.innerHTML=array;
	 return promise2();
}).then((arr)=>{
	div.innerHTML=arr;
	 
	return promise3();
}).then((updatedArr)=>{
	 
	 
	div.innerHTML=updatedArr;
}).catch((err)=>{
	const p = document.createElement('p');
	p.textContent=err;
	div.appendChild(p);
})

	