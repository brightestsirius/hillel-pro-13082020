let roles = {
	admin: 'https://www.flaticon.com/svg/static/icons/svg/1424/1424453.svg',
	student: 'https://www.flaticon.com/svg/static/icons/svg/1424/1424424.svg',
	lector: 'https://www.flaticon.com/svg/static/icons/svg/1424/1424450.svg'
};

let gradation = [
	[0,20],
	[20,55],
	[55,85],
	[85,100]
];

let users = [
	{
		name: 'Jack Smith',
		age: 23,
		img: 'https://www.flaticon.com/svg/static/icons/svg/2922/2922522.svg',
		role: 'student',
		courses: [
			{
				title: 'Front-end Pro',
				mark: 20
			},
			{
				title: 'Java Enterprise',
				mark: 100
			}
		]
	},
	{
		name: 'Amelia Smith',
		age: 20,
		img: 'https://www.flaticon.com/svg/static/icons/svg/2922/2922656.svg',
		role: 'student',
	},
	{
		name: 'Noah Smith',
		age: 43,
		img: 'https://www.flaticon.com/svg/static/icons/svg/2922/2922616.svg',
		role: 'student',
		courses: [
			{
				title: 'Front-end Pro',
				mark: 50
			}
		]
	},
	{
		name: 'Charlie Smith',
		age: 18,
		img: 'https://www.flaticon.com/svg/static/icons/svg/2922/2922688.svg',
		role: 'student',
		courses: [
			{
				title: 'Front-end Pro',
				mark: 75
			},
			{
				title: 'Java Enterprise',
				mark: 23
			}
		]
	},
	{
		name: 'Emily Smith',
		age: 30,
		img: 'https://www.flaticon.com/svg/static/icons/svg/2922/2922565.svg',
		role: 'admin',
		courses: [
			{
				title: 'Front-end Pro',
				score: 10
			},
			{
				title: 'Java Enterprise',
				score: 50
			},
			{
				title: 'QA',
				score: 75
			}
		]
	},
	{
		name: 'Leo Smith',
		age: 253,
		img: 'https://www.flaticon.com/svg/static/icons/svg/2922/2922719.svg',
		role: 'lector',
		courses: [
			{
				title: 'Front-end Pro',
				score: 78
			},
			{
				title: 'Java Enterprise',
				score: 85
			}
		]
	},
];