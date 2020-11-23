Vue.component('front-end',
{
	// props: ['mytitle', 'mytext', 'btnname', 'classname'],
	props: {
		mytitle: {},
		'mytext': {},
		'btnname': {
			default: 'KNOPKA'
		},
		'classname': {
			type: [String, Number],
			default: 'first'
		},
		number: {
			type: Array,
			default: () => []
		},
		onClick: {
			type: Function,
			default: () => console.log('default function')
		}
	},
	data(){
		return {
			title: 'Hello000',
			text: 'lorem hdscs bshdbcj'
		}
	},
	methods: {
		removeItem(key){
			console.log(key);
			this.number.splice(key,1);
		},
		mySuperFunction(){
			this.onClick && this.onClick();
			console.log(`--- additional function --- `);
		}
	},
	template: `
	<div class="front-end" :data-class="classname">
		<h1>{{title}}</h1>
		<h2>{{text}}</h2>
		<p>{{mytitle}}</p>
		<button :class="mytext" @click="mySuperFunction">{{btnname}}</button>
		<input type="text" v-model="mytitle">
		
		<ol>
			<li v-for="(item, key) in number" @click="removeItem(key)">{{key}} : {{item}}</li>
		</ol>
	</div>
	`
})

let app = new Vue({
	el: '#app',
	data: {
		x: 10,
		list: [10,20,30]
	},
	methods: {
		onMyInput(){
			this.x += 1;
			console.log(arguments);
			//console.log(arguments[0].target.value);
		},
		removeItem(key){
			console.log(key);
			this.list.splice(key,1);
		},
		onClick(){
			console.log('click');
		}
	}
})

// let arr = [100,200,300];
// console.log(arr);

// function foo(x){
// 	x = x.slice();
// 	if(Array.isArray(x)){
// 		x[0] = 1000;
// 	} else{
// 		x = 20;
// 	}
// }

// foo(arr);
// console.log(arr);

leftSidber = {
	'/advanced-functions/': 'advancedFunctionsLeft.vue',
	'/downgrade-functions/': 'downgradeFunctionsLeft.vue'
}


rightSidber = {
	'/advanced-functions/': 'advancedFunctionsRight.vue',
	'/downgrade-functions/': 'downgradeFunctionsRight.vue'
}


