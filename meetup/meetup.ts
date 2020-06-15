namespace $ {

	export class $piterjs_meetup extends $piterjs_model {

		static uri() {
			return 'piterjs/meetup/meetup.data.tree'
		}

		@ $mol_mem
		start() {
			return new $mol_time_moment(  $mol_data_string( this.data().start ) )
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
		video() {
			return $mol_data_optional( $mol_data_string )( this.data().video ) || null
		}

		@ $mol_mem
		speeches() {
			return this.$.$piterjs_speech.list()( this.data().speeches )
		}

		@ $mol_mem
		place() {
			return this.$.$piterjs_place.item( this.data().place )
		}

		@ $mol_mem
		afterparty() {
			return $mol_data_optional( $mol_data_string )( this.data().afterparty ) || ''
		}

	}

}
