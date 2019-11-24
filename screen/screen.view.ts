namespace $.$$ {

	export class $piterjs_screen extends $.$piterjs_screen {

		color_open() {
			return this.place().colors()[0]
		}

		color_close() {
			return this.place().colors()[1] || this.color_open()
		}

		sub() {
			return [
				this.Open() ,
				this.Close() ,
				... this.content() ,
			]
		}

	}

}
