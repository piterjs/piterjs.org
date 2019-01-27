namespace $.$$ {

	export class $piterjs_speech_snippet extends $.$piterjs_speech_snippet {

		id() { return this.speech().id }
		photo() { return this.speech_speaker().photo }
		title() { return this.speech_speaker().title }
		description() { return this.speech().title }

		speech_speaker() { return this.speaker( this.speech().speaker ) }

	}

}
