namespace $.$$ {

	$mol_tree

	export class $piterjs_app extends $.$piterjs_app {

		@ $mol_mem
		now( next? : string ) { return this.$.$mol_state_arg.value( 'now' , next ) }

		@ $mol_mem
		intro( next? : string ) { return this.$.$mol_state_arg.value( 'intro' , next ) }

		@ $mol_mem
		meetup_id( next? : string ) { return this.$.$mol_state_arg.value( 'meetup' , next ) }
		meetup( id : string ) { return $piterjs_meetup.item( id ) }
		
		speech_id( next? : string ) { return this.$.$mol_state_arg.value( 'speech' , next ) }
		speech( id : string ) { return $piterjs_speech.item( id ) }
		
		speaker_id( next? : string ) { return this.$.$mol_state_arg.value( 'speaker' , next ) }
		speaker( id : string ) { return $piterjs_speaker.item( id ) }

		@ $mol_mem
		pages() {
			if( this.intro() != null ) return [ this.Intro() ]
			return [
				this.Menu() ,
				... !this.meetup_id() ? [ this.Now() ] : [] ,
				... this.meetup_id() ? [ this.Meetup( this.meetup_id() ) ] : [] ,
				... this.speech_id() ? [ this.Speech( this.speech_id() ) ] : [] ,
			]
		}

		Placeholder() {
			return this.meetup_id() ? super.Placeholder() : null
		}

		@ $mol_mem
		meetups() {
			return this.$.$piterjs_meetup.all().slice()
			.sort( ( a , b )=> b.start().valueOf() - a.start().valueOf() )
		}

		meetup_last() {
			return this.meetups()[0]
		}

		@ $mol_mem
		place() {
			const id = this.meetup_id()
			const meetup = id ? this.meetup( id ) : this.meetup_last()
			return meetup.place()
		}

		@ $mol_mem
		menu_meetups() {
			return this.meetups().map( meetup => this.Menu_meetup( meetup.id() ) )
		}
		menu_meetup( id : string ) { return this.meetup( id ) }
		menu_meetup_id( id : string ) { return id }

	}

}
