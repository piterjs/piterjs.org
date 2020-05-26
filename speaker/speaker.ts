namespace $ {

	export class $piterjs_speaker extends $piterjs_model {

		static uri() {
			return 'piterjs/speaker/speaker.data.tree'
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
		photo() {
			return $mol_data_string( this.data().photo )
		}

		@ $mol_mem
		speeches() {
			return this.$.$piterjs_speech.all().filter(
				speech => speech.speaker() === this
			)
		}

	}

}
