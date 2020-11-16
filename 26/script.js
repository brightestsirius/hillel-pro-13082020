let form = document.querySelector('#form'),
	categories = document.querySelector('input[value=categories]'),
	inputTypes = document.querySelectorAll('input[name=type]'),
	categoriesBlock = document.querySelector('.categories'),
	myJoke = document.querySelector('#myJoke'),
	favouritesJoke = document.querySelector('.favorities');

form.addEventListener('submit',formSubmit);

inputTypes
	.forEach(input => {
		input.addEventListener('change',e=>{
			if(e.target.value !== 'categories'){
				categoriesBlock.classList.add('hide');
			} else{
				categoriesBlock.classList.remove('hide');
			}
		})
	})

categories
	.addEventListener('change',async()=>{
		let categories = await getJoke('categories');
		Joke.renderCategories(categories);
	})

async function formSubmit(e){
	e.preventDefault();
	myJoke.innerHTML = '';

	let typeEl = document.querySelector('input[name=type]:checked'),
		type = typeEl.value;

	if(type === 'search'){
		let userSearch = document.querySelector('#userSearch'),
			searchVal = userSearch.value;

		searchVal = searchVal === '' ? 'hello' : searchVal.trim();
		type = `search?query=${searchVal}`;
	} else if(type === 'categories'){
		let selectedCategory = document.querySelector('input[name=category]:checked'),
			selectedCategoryValue = selectedCategory.value;
		
		type = `random?category=${selectedCategoryValue}`;
	}
	
	let data = await getJoke(type);

	if(type.indexOf('search') > -1){
		data.result
			.forEach(joke => Joke.createJoke(joke));
	} else{
		Joke.createJoke(data);
	}
}

async function getJoke(type){
	let data = await fetch(`https://api.chucknorris.io/jokes/${type}`),
		json = await data.json();
	return json;
}

class Joke{
	static createJoke(data){
		console.log(data);
		let joke = new Joke();

		for(let key in data){
			joke[key] = data[key];
		}

		joke.renderJoke();
	}

	renderJoke(){
		let jokeSingle = document.createElement('div'),
			currentJoke = this;
		jokeSingle.classList.add('jokeSingle');

		for(let key in currentJoke){
			if(key === 'updated_at' || key === 'created_at'){
				currentJoke[key] = formatDate(currentJoke[key]);
			}
			jokeSingle.innerHTML += `<p>${key}: ${currentJoke[key]}</p>`;
		}

		jokeSingle.setAttribute('data-id',`joke_${this.id}`);

		let hurt = document.createElement('div');
		hurt.innerHTML = '<svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.4134 1.66367C17.3781 0.590857 15.9575 0 14.413 0C13.2585 0 12.2012 0.348712 11.2704 1.03637C10.8008 1.38348 10.3752 1.80814 10 2.3038C9.62494 1.80829 9.19922 1.38348 8.7294 1.03637C7.79877 0.348712 6.74149 0 5.58701 0C4.04251 0 2.62177 0.590857 1.58646 1.66367C0.563507 2.72395 0 4.17244 0 5.74252C0 7.35852 0.630341 8.83778 1.98364 10.3979C3.19427 11.7935 4.93423 13.2102 6.94916 14.8507C7.63718 15.411 8.41705 16.046 9.22684 16.7224C9.44077 16.9015 9.71527 17 10 17C10.2846 17 10.5592 16.9015 10.7729 16.7227C11.5826 16.0461 12.363 15.4108 13.0513 14.8503C15.0659 13.2101 16.8059 11.7935 18.0165 10.3978C19.3698 8.83778 20 7.35852 20 5.74238C20 4.17244 19.4365 2.72395 18.4134 1.66367Z" fill="#FF6767"/></svg>';
		
		hurt.addEventListener('click',()=>{
			this.addFavourite();
		});

		jokeSingle.prepend(hurt);
		myJoke.append(jokeSingle);
	}

	static renderCategories(data){
		categoriesBlock.innerHTML = '';
		
		data
			.forEach((category,index)=>{
				let label = document.createElement('label'),
					input = document.createElement('input');

				label.innerHTML = category;

				input.type = 'radio';
				input.value = category;
				input.name = 'category';
				input.checked = index === 0 ? true : false;

				label.prepend(input);
				categoriesBlock.append(label);
			})
	}

	addFavourite(){
		this.favoutite = true;
		let currentBlock = document.querySelector(`div[data-id=joke_${this.id}]`)
		currentBlock.classList.add('favourite');

		let copiedBlock = currentBlock.cloneNode(true);
		favouritesJoke.append(copiedBlock);
	}
}

function formatDate(date) {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}


// class Says{
// 	static sayHello(){
// 		console.log('hello');
// 	}

// 	static sayGoodbay(){
// 		console.log('goodbay');
// 	}
// }

// Says.sayHello();
// Says.sayGoodbay();
