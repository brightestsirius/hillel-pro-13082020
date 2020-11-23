Vue.component('list-component',{
	props: {
		array: {
			type: Array,
			default: () => []
		}
	},
	template: `
		<div class="list-component">
			<h1>list-component</h1>
			<ul>
				<li v-for="item in array">{{item}}</li>
			</ul>
		</div>
	`
})