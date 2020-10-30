// start request
// let request = (file, cb) => {
// 	let getFile = new XMLHttpRequest();
// 	getFile.open('GET',file,true);
// 	getFile.send();

// 	getFile.addEventListener('readystatechange',()=>{
// 		if(getFile.readyState === 4 && getFile.status < 400){
// 			cb(JSON.parse(getFile.response));
// 		}

// 	});
// }
// end request

// Promise

// let timeout = 1000;

// let myPromise = new Promise((myOkFunc,myNotOkFunc)=>{
// 	timeout <= 1000 ? myOkFunc('from Promise resolve') : myNotOkFunc('from Promise reject');
// })

// myPromise
// 	.then(
// 		function(str){
// 			console.log('in 1 then OK');
// 			console.log(str);
// 			return new Promise(function(ok, notOk){
// 				notOk();
// 			});
// 		},
// 		function(str){
// 			console.log('in 1 then NOT OK');
// 			console.log(str);
// 			return new Promise(function(ok, notOk){
// 				notOk();
// 			});
// 		}
// 	)
// 	.then(
// 		function(){
// 			console.log('in 2 then OK');
// 		},
// 		function(){
// 			console.log('in 2 then NOT OK');
// 			return new Promise(function(ok, notOk){
// 				notOk();
// 			});
// 		}
// 	)
// 	.then(
// 		function(){
// 			console.log('in 3 then OK');
// 		},
// 		function(){
// 			console.log('in 3 then NOT OK');
// 		}
// 	)

// Promise to get User data
let request = (file) => {
	return new Promise((resolve,reject)=>{
		let getFile = new XMLHttpRequest();
			getFile.open('GET',file,true);
			getFile.send();

			getFile.addEventListener('readystatechange',()=>{
				if(getFile.readyState === 4){
					getFile.status < 400 ? resolve(JSON.parse(getFile.response)) : reject(getFile.status);
				}

			});	
	})
}

// request('json/userA.json')
// 	.then(
// 		data => {
// 			return new Promise((resolve,reject)=>{
// 				data.icon && data.icon.length>0 ? resolve(data.icon) : reject('MY ERROR');
// 			})
// 		}
// 	)
// 	.finally(
// 		() => console.log('ooh, finally after FIRST')
// 	)
// 	.then(
// 		userIcon => {return userIcon},
// 		//defaultIcon => {return 'https://www.aljazeera.com/wp-content/uploads/2020/04/ecab8c7af42a439d9043b0ade6e1f05b_18.jpeg?fit=999%2C562'}
// 	)
// 	.then(
// 		data => console.log(`<img src="${data}">`),
// 		data => console.log(`reject in third then, ${data}`)
// 	)
// 	.finally(
// 		() => console.log('ooh, finally after FIRST')
// 	)
// 	.then(
// 		() => console.log('in fourth resolve then'),
// 		() => console.log('in fourth reject then')
// 	)
// 	.catch(
// 		data => console.error(data)
// 	)
// 	.finally(
// 		() => console.log('ooh, finally after all')
// 	)

// let namesArr = [];

// request('json/userA.json')
// 	.then(
// 		userA => {
// 			if(userA.name && userA.name.length>0){
// 				namesArr.push(userA.name);
// 				return request('json/userB.json');
// 			}
// 		}
// 	)
// 	.then(
// 		userB => {
// 			if(userB.name && userB.name.length>0){
// 				namesArr.push(userB.name);
// 			}
// 		}
// 	)
// 		userBReject => console.log('userBReject',userBReject)
// 	)
// 	.catch(
// 		error => console.error(error)
// 	)

// console.log(namesArr);

// Promise
// 	.all([
// 		request('json/userA.json'),
// 		request('json/userB.json')
// 	])
// 	.then(
// 		allUsers => {
// 			return allUsers
// 				.filter(user=>user.icon.length>0)
// 		}
// 	)
// 	.then(
// 		notEmptyIconUsers => console.log(notEmptyIconUsers)
// 	)
// 	.catch(
// 		error => console.log('in catch zone')
// 	)

function main() {
	console.log('A');

	setTimeout(function exec() {
	  console.log('B');
	}, 0);

	console.log('C');

	function one(){

	}

	exec()

	function two(){}
}

// main();
// x = 9;
// do{
// 	console.log('here')
// } while(x<10);

