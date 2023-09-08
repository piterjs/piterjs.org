namespace $.$$ {

	export class $piterjs_speech_page extends $.$piterjs_speech_page {

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

		Public() {
			if( !this.editing() ) return null!
			return super.Public()
		}

	}

}
