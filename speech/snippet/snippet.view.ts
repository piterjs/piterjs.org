namespace $.$$ {

	export class $piterjs_speech_snippet extends $.$piterjs_speech_snippet {

		photo() { return this.speech_speaker().photo }
		speaker_title() { return this.speech_speaker().title }
		title() { return this.speech().title }
		time() { return this.start().toString( 'hh:mm' ) }
		speech_speaker() { return this.speaker( this.speech().speaker ) }

	}

}
