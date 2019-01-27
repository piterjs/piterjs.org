namespace $.$$ {

	export class $piterjs_app extends $.$piterjs_app {

		speaker_id( next? : string ) { return this.$.$mol_state_arg.value( 'speaker' , next ) }
		
		meeting_id( next? : string ) { return this.$.$mol_state_arg.value( 'meeting' , next ) || this.meetings()[0].id }
		meeting() { return this.meetings().find( meeting => meeting.id === this.meeting_id() ) }
		meeting_speech( id : string ) { return this.speeches().find( speech => speech.id === id ) }
		
		speech_id( next? : string ) { return this.$.$mol_state_arg.value( 'speech' , next ) }
		speech() { return this.speeches().find( speech => speech.id === this.speech_id() ) }
		speech_speaker( id : string ) { return this.speakers().find( speaker => speaker.id === id ) }

		pages() {
			return [
				this.Menu() ,
				this.Meeting() ,
				... this.speech() ? [ this.Speech() ] : [] ,
			]
		}

		menu_meetings() { return this.meetings().map( meetings => this.Menu_meeting( meetings.id ) ) }
		menu_meeting( id : string ) { return this.meetings().find( meeting => meeting.id === id ) }

	}

}
