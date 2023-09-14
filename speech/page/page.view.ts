namespace $.$$ {

	export class $piterjs_speech_page extends $.$piterjs_speech_page {

		speaker() {
			return this.speech().speaker()
		}

		@ $mol_mem
		links() {
			return [
				... ( this.editing() || this.slides() ) ? [ this.Slides() ] : [] ,
				... ( this.editing() || this.video() ) ? [ this.Video() ] : [] ,
			]
		}

		Public() {
			if( !this.editing() ) return null!
			return super.Public()
		}

	}

}
