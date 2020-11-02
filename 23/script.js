// let xhr = new XMLHttpRequest();
// xhr.open('GET','files/user.json',true);
// xhr.send();

// xhr.addEventListener('readystatechange',()=>{
// 	if(xhr.readyState === 4 && xhr.status < 400){
// 		console.log(JSON.parse(xhr.responseText));
// 	}
// })

class User{

	constructor(){
		this.country = 'Ukraine';
	}

	get name(){
		return this.userName;
	}
	set name(value){
		this.userName = value;
	}

	get nickname(){
		return this.userNickname;
	}
	set nickname(value){
		this.userNickname = value;
	}

	get age(){
		return this.userAge;
	}
	set age(value){
		this.userAge = value;
	}

	static async getUser(){
		let users = await fetch('files/user.json'),
			usersObj = await users.json();
		
		User.createUser(usersObj);
	}

	static createUser(obj){
		let user = new User();
		for(let key in obj){
			user[key] = obj[key];
		}

		user.renderUser();
	}

	async renderUser(){
		let table = document.createElement('table'),
			trs = ``;
		
		for(let key in this){
			trs += `<tr>
			<td>${key}</td>
			<td>${this[key]}</td>
			</tr>`;
		}

		trs += `<tr>
		<td>avatar</td>
		<td><img src="${await this.getGravatars()}" alt="${this.name}" height="100"></td>
		</tr>`;

		table.innerHTML = trs;
		document.body.append(table);
	}

	async getGravatars(){
		let gravatars = await fetch('files/gravatars.json'),
			gravatarsObj = await gravatars.json();
		return await this.getUserGravatar(gravatarsObj);
	}

	getUserGravatar(gravatars){
		return gravatars[this.nickname] ? gravatars[this.nickname] : gravatars.default;
	}
}

let getUserBtn = document.querySelector('#getUser');
getUserBtn.addEventListener('click', User.getUser);

