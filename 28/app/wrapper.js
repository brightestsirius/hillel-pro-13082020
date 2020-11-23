Vue.component('wrapper',{
	data(){
		return {
			list: ['Item 1', 'Item 2']
		}
	},
	template: `
		<div class="wrapper">
			<h1>Wrapper</h1>
			<div class="flex">
				<list-component :array="list"></list-component>
				<list-component :array="list"></list-component>

				<input-component :array="list"></input-component>
			</div>
		</div>
	`
})