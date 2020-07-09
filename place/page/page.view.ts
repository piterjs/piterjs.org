namespace $.$$ {

	export class $piterjs_place_page extends $.$piterjs_place_page {

		title() {
			return this.place().title()
		}

		address() {
			return this.place().address()
		}

		coords() {
			return this.place().coords()!
		}

		route() {
			return this.place().route()
		}

		info() {
			return [
				this.Address() ,
				... this.route() ? [ this.Route() ] : []
			]
		}

	}

}
