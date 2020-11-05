// Start hw

// let fileJ1= 'gravatars.json',
//     fileJ2= 'user.json',
//     arrJ = [];

// async function request(file){
//     let getData = await fetch(file)
//     if(getData.ok){
//         let json = await getData.json();
//         return json;
//     }else{
//         alert("Ошибка Http: ", getData.status)
//     }
// }

// let firstFunctionCB = data => {
// 	data.firstFunctionCB = true;
// 	return data;
// }

// let firstAnotherFunctionCB = data => {
// 	data.firstAnotherFunctionCB = true;
// 	return data;
// }

// let secondFunctionCB = data => {
// 	data.secondFunctionCB = true;
// 	return data;
// }

// End hw

// Promise
//         .all([
//             request(fileJ1)
//             	.then(
//             		data => {
//             			return firstFunctionCB(data);
//             		}
//         		)
//         		.then(
//             		data => {
//             			return firstAnotherFunctionCB(data);
//             		}
//         		),
//             request(fileJ2)
//           //   	.then(
//           //   		data => {
//           //   			return secondFunctionCB(data);
//           //   		}
//         		// ),
//         ])
//         .then(
//         	data => console.log(data)
//     	)


// Селекторы в jQuery

// let block = document.querySelector('.block'),
// 	blockJQ = $('.block'),
// 	mySuperLi = $('li[name=mySuperLi]');

// console.dir(block);
// console.dir(blockJQ);

// console.dir(block.innerHTML);
// console.dir(blockJQ.html());

// console.log(mySuperLi.html());

// blockJQ.css('background','pink');
// block.style.backgroundColor = 'red';


// Методы выбора элементов в jQuery
// .parent(), .parents(), .find(), .closest(), .prev(), .next(), .siblings()

let grandPa = $('.grandPa'),
	child = $('.child'),
	ul = $('ul'),
	block = $('.block');

//console.log(grandPa.children());

// grandPa.children().css({
// 	'background': 'red',
// 	'color': 'white'
// });

// child.parent().css('background','pink');
// child.parents().css('background','red');

// grandPa.find('p:last-of-type').css('background','pink');
// ul.find('li:even').css('background','pink');

// child.closest('div').css('background','pink');

// События в jQuery

// function handler(){
// 	let el = $(this);
// 	console.log(el.html());
// }

// block
// 	.on('click',function(){
// 		let el = $(this);
// 		el.css('background','pink');
// 	})
// 	.on('click',function(){
// 		let el = $(this);
// 		el.css('color','white');
// 	})
// 	.on('mouseenter',function(){
// 		let el = $(this);
// 		el.css('color','red');
// 	})
// 	.on('mouseleave',function(){
// 		let el = $(this);
// 		el.css('color','green');
// 	})
	// .addEvenetListener('click',function(){
	// 	let el = $(this);
	// 	el.css('font-weight','bold');
	// })

// Методы для работы с классами

// block.classList.add();
//block.addClass('myFavClass');

// setTimeout(()=>{
// 	block.removeClass('myFavClass');
// },2000);

// setInterval(()=>{
// 	block.toggleClass('myFavClass');
// },1000);

// Effects
// .animate(), hide/show, .delay()
// fadeIn() / fadeOut() / fadeToggle()
// slideUp() / slideDown() / slideToggle(3000)

block
	// .animate(
	// 	{
	//     	// opacity: 0.25,
	//     	// left: "+=50",
	//     	// height: "toggle",
	//     	//backgroundColor: "rgba(10,20,30,1)"
	//   	},
	//   	3000,
	//   	function() {
	//   		//block.css('background','green');
	//     	console.log('done!');
	//   	}
 //  	);
 	// .on('click',function(){
 	// 	$(this).delay(1000).slideUp();
 	// })

// Forms

$('form')
	.submit(function(e){
		e.preventDefault();
		
		let form = $(this),
			name = form.find('input[type=text]'),
			pass = form.find('input[type=password]');

		console.log(name.val());
		console.log(pass.val());

		let userData = {
			name: name.val(),
			pass: pass.val()
		}
		console.log(userData);

		let userDataToJSON = JSON.stringify(userData);
		console.log(userDataToJSON);

		$.ajax({
		  type: "POST",
		  url: "/",
		  data: userDataToJSON,
		  success: function(myData){
		  	console.log(myData);
		  },
		  error: function(xhr){
		  	console.log(xhr)
		  }
		});

		async () => {
			let userData = await fetch('user.json',
			{
				method: 'POST',
				data: userDataToJSON
			});
		}

	})

let getText = $('.getText');
// console.log(getText.html());
// console.log(getText.text());

//getText.text('My <em>new</em> text');
// getText.append('EXAMPLE');
// getText.before('<p>EXAMPLE</p>');

//getText.wrap('<div style="background: red;">');

// setTimeout(()=>{
// 	getText.unwrap();
// },2000);

// Работа с разметкой страницы в jQuery.
// .text(), .html(), .prepend(), .append(), .before(), .after()
// .wrap(), .unwrap()
// .empty(), .remove(), .clone()

// setTimeout(()=>{
// 	$('form').append($('.mySection').clone());
// },2000);

// Ajax

$.ajax({
  type: "GET",
  url: "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json",
  success: function(myData){
  	console.log('bank.gov.ua',myData);
  }
});





