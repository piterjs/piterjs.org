namespace $.$$ {

	export class $piterjs_app extends $.$piterjs_app {
		
		meetup_id( next? : string ) { return this.$.$mol_state_arg.value( 'meetup' , next ) || this.meetups()[0].id }
		meetup( id : string ) { return this.meetups().find( meetup => meetup.id === id ) }
		
		speech_id( next? : string ) { return this.$.$mol_state_arg.value( 'speech' , next ) }
		speech( id : string ) { return this.speeches().find( speech => speech.id === id ) }
		
		speaker_id( next? : string ) { return this.$.$mol_state_arg.value( 'speaker' , next ) }
		speaker( id : string ) { return this.speakers().find( speaker => speaker.id === id ) }

		pages() {
			return [
				this.Menu() ,
				this.Meetup( this.meetup_id() ) ,
				... this.speech_id() ? [ this.Speech( this.speech_id() ) ] : [] ,
			]
		}

		menu_meetups() { return this.meetups().map( meetups => this.Menu_meetup( meetups.id ) ) }
		menu_meetup( id : string ) { return this.meetups().find( meetup => meetup.id === id ) }

	}

}
