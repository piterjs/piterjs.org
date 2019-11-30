namespace $.$$ {

	export class $piterjs_speech_snippet extends $.$piterjs_speech_snippet {

		id() {
			return this.speech().id()
		}

		photo() {
			return this.speech().speaker().photo()
		}

		speaker_title() {
			return this.speech().speaker().title()
		}

		title() {
			return this.speech().title()
		}

		@ $mol_mem
		time() {
			return this.speech().interval().start.toString( 'hh:mm' )
		}

	}

}
