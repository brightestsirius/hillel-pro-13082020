Vue.component('input-component',{
	props: {
		array: {
			type: Array,
			default: () => []
		}
	},
	methods: {
		addItem(){
			console.log(this.inputValue);
			this.array.push(this.inputValue);
		}
	},
	data(){
		return {
			inputValue: ''
		}
	},
	template: `
		<div class="input-component">
			<h1>input-component</h1>
			<input type="text" placeholder="Enter new list item" v-model="inputValue">
			<p>{{inputValue}}</p>
			<button @click="addItem">Add new item to list</button>
		</div>
	`
})