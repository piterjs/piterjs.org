namespace $.$$ {

	export class $piterjs_speech_page extends $.$piterjs_speech_page {

		title() { return this.speech().title }
		description() { return this.speech().description }
		speech_speaker() { return this.speaker( this.speech().speaker ) }
		slides() { return this.speech().slides }
		video() { return this.speech().video }

		links() {
			return [
				... this.slides() ? [ this.Slides() ] : [] ,
				... this.video() ? [ this.Video() ] : [] ,
			]
		}

	}

}
