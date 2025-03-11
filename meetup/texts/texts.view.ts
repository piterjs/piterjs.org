namespace $.$$ {
	export class $piterjs_meetup_texts extends $.$piterjs_meetup_texts {
		
		@ $mol_mem
		speech_post_texts() {
			return this.meetup().speeches().map( speech => this.Speech_post_text( speech ) )
		}

		speech_post_title( speech: $piterjs_speech ) {
			return super.speech_post_title( speech ).replace( '{speaker}', speech.speaker().title() )
		}

		speech_post_text( speech: $piterjs_speech ) {
			return speech.post_text()
		}

		speech_post_moment( speech: $piterjs_speech, next?: $mol_time_moment ) {
			return this.post_moment( 'speech=' + speech.id(), next )
		}
		
	}
}
