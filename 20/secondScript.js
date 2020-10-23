export let second = argFromFirstFunction => console.log(`in Second function, ${argFromFirstFunction}`);
export let x = 100;

export let oneFunc = () => console.log(twoFunc());
let twoFunc = () => 'hello from twoFunc';

export function helloWorld(){
	return 'helloWorld another';
}