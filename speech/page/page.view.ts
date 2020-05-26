namespace $.$$ {

	export class $piterjs_speech_page extends $.$piterjs_speech_page {

		title() {
			return this.speech().title()
		}

		description() {
			return this.speech().description()
		}

		speaker() {
			return this.speech().speaker()
		}

		slides() {
			return this.speech().slides()!
		}

		video() {
			return this.speech().video()!
		}

		@ $mol_mem
		links() {
			return [
				... this.slides() ? [ this.Slides() ] : [] ,
				... this.video() ? [ this.Video() ] : [] ,
			]
		}

	}

}
