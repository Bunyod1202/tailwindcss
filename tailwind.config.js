/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.html'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				bodys: '#FAFAFA',
				bodyDark: '#202C36',
				componentsDark: '#2B3844',
				oranges: '#2B3844',
			},
			fontFamily: {
				body: ['Be Vietnam'],
			},
			btnShadow: {
				header: '0px 15px 5px -10px #FF9F8E',
			},
			colors: {
				greyColor: "#242D52",
				btnColor:"#F3603C"
			}
		},
	},
	plugins: [],
};
