namespace $.$$ {

	export class $piterjs_place_page extends $.$piterjs_place_page {

		coords() {
			return this.place().coords()!
		}

		info() {
			return [
				this.Address() ,
				... this.route() ? [ this.Route() ] : []
			]
		}

		@ $mol_mem
		map_locate() {
			this.Map().query( this.address() )
			this.Map().search()
		}

	}

}
