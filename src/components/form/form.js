export default {
	name: 'myForm',
	data () {
		return {
			message: 'Внимание! Необходимо заполнить все обязательные поля!',
			isError: false,
			fio: '',
			phone: '',
			mail: '',
			area: '',
			period: '',
		}
	},
	methods: {
		messageFunc: function (e) {

			console.log('!');

			if (!this.fio || !this.phone || !this.mail || !this.period || !this.area) {
				this.isError = true;
				e.preventDefault();
			} else {
				this.isError = false;
				return true;
			}
		},
		closeFunc: function () {
			this.isError = false;
		},
	}
}
