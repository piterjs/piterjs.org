namespace $ {

	@ $mol_class
	export class $piterjs_speech extends $piterjs_model {

		static uri() {
			return 'piterjs/speech/speech.data.tree'
		}		

		@ $mol_mem
		meetup() {
			return this.$.$piterjs_meetup.all().find(
				meetup => meetup.speeches().indexOf( this ) !== -1
			)
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
		slides() {
			return $mol_data_optional( $mol_data_string )( this.data().slides ) || null
		}

		@ $mol_mem
		video() {
			return $mol_data_optional( $mol_data_string )( this.data().video ) || null
		}
		
		@ $mol_mem
		previous() {
			
			const speeches = this.meetup().speeches()

			const index = speeches.indexOf( this )
			if( index <= 0 ) return null
			
			return speeches[ index - 1 ]

		}

		@ $mol_mem
		interval() : $mol_time_interval {
			
			return new $mol_time_interval({
				start : this.previous()?.interval().end ?? this.meetup().start() ,
				duration : this.duration() ,
			})

		}

		@ $mol_mem
		duration() {
			return new $mol_time_duration( $mol_data_string( this.data().duration ) )
		}
		
		@ $mol_mem
		speaker() {
			return this.$.$piterjs_speaker.item( this.data().speaker )
		}

	}

}
