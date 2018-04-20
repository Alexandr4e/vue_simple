export default {
	name: 'form',
	data () {
		return {
			message: 'Внимание! Необходимо заполнить все обязательные поля!',
			isError: false,
			fio: '',
			phone: '',
			mail: '',
			area: '',
			radio: '',
		}
	},
	methods: {
		messageFunc: function () {
			data.return.isError = !(this.fio && this.phone && this.mail && this.area && this.radio)
		}
	},
}
