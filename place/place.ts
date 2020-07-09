namespace $ {

	export class $piterjs_place extends $piterjs_model {

		static uri() {
			return 'piterjs/place/place.data.tree'
		}		

		@ $mol_mem
		title() {
			return $mol_data_string( this.data().title )
		}

		@ $mol_mem
		description() {
			return $mol_data_string( this.data().description )
		}

		@ $mol_mem
		notes() {
			return $mol_data_optional( $mol_data_string )( this.data().notes ) || ''
		}

		@ $mol_mem
		site() {
			return $mol_data_wrapper( $mol_data_string , URL )( this.data().site )
		}

		@ $mol_mem
		address() {
			return $mol_data_optional( $mol_data_string )( this.data().address ) ?? ''
		}

		@ $mol_mem
		coords() {
			
			const coords = $mol_data_optional( $mol_data_array( $mol_data_number ) )( this.data().coords )
			if( !coords ) return null as null

			return new $mol_vector_2d( coords[0] , coords[1] )
		}

		@ $mol_mem
		route() {
			return $mol_data_optional( $mol_data_string )( this.data().route ) ?? ''
		}

		@ $mol_mem
		colors() {
			return $mol_data_array( $mol_data_string )( this.data().colors )
		}

		@ $mol_mem
		meetups() {
			return this.$.$piterjs_meetup.all().filter(
				speech => speech.place() === this
			)
		}

	}

}
