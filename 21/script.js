// Start request
let request = (file, cb) => {
	let getFile = new XMLHttpRequest();
	getFile.open('GET',file,true);
	getFile.send();

	getFile.addEventListener('readystatechange',()=>{
		if(getFile.readyState === 4 && getFile.status < 400){
			cb(JSON.parse(getFile.response));
		}

	});
}
// End request

// Start option render
let fileRenderFunc = {
	animals: renderAnimals,
	users: renderUser
};

let renderUser = obj =>{
	let users = obj.users;
	users
		.forEach(user=>console.log(user.name));
}

let renderAnimals = obj =>{
	for(key in obj){
		console.log(obj[key].name)
	}
}
// End option render

// Start Form submit
let getData = document.querySelector('#getData');
getData.addEventListener('submit',getFormData);

function getFormData(e){
	e.preventDefault();
	
	let select = getData.querySelector('select'),
		selectedOptionIndex = select.options.selectedIndex,
		selectedOptionValue = select.options[selectedOptionIndex].value;

	fileRenderFunc[selectedOptionValue] && request(`/${selectedOptionValue}.json`,fileRenderFunc[selectedOptionValue]);
}
// End Form submit

