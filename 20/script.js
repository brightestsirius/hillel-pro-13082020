// const student = {
// 	name: 'John Doe',
// 	surname: 'Smith',
// 	// age: 16,
// 	scores: {
// 		maths: 74,
// 		// english: 63,
// 		science: {
// 			name: 'firstName Value',
// 			surname: 'secondName Value'
// 		}
// 	}
// };

// function displaySummary(student) {
// 	console.log('Hello, '+ student.name);
// 	console.log('Your Maths score is '+ (student.scores.maths || 0));
// 	console.log('Your English score is ' + (student.scores.english || 0));
// 	console.log('Your Science score is '+ (student.scores.science || 0));
// }
// displaySummary(student);

// // [object_key]:[variable_name] = [default_value]

// let {name:myName, age=20, surname:mySurname='Ivanov', scores:{maths,english:myEn=100,science:{name:firstName, surname:secondName}}} = student;
// console.log(myName, age, mySurname, maths, myEn, firstName, secondName);

// let rgb = [255, {name:'hello'}, [10,20]];
// let [red,{name:hello},[orange,pink]] = rgb;
// console.log(red, hello, orange, pink);

// function renderUser({name:myName='NameDefault', age=100, scores:{maths=10}={}}={}){
// 	console.log(myName,age,maths);
// }

// renderUser(student);


// Modules ES6

import * as secondScript from './secondScript.js';
import {third, helloWorld} from './thirdScript.js';

console.log(secondScript);

let first = paramToSecondFunction => {
	console.log('in function First');
	secondScript.second(paramToSecondFunction);
}
first(10);

secondScript.oneFunc();

console.log(third);

console.log(helloWorld());
console.log(secondScript.helloWorld());


