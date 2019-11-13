namespace $.$$ {

	$mol_tree

	export class $piterjs_app extends $.$piterjs_app {

		@ $mol_mem
		meetups() {
			
			const tree = $mol_tree.fromString( this.$.$mol_http.resource( 'piterjs/meetup/meetup.data.tree' ).text() )

			return new $mol_tree({ type : '*' , sub : tree.sub }).toJSON() as Record< string , {
				start : string
				title : string
				description : string
				speeches : string[]
			} >

		}
		
		@ $mol_mem
		speeches() {
			
			const tree = $mol_tree.fromString( this.$.$mol_http.resource( 'piterjs/speech/speech.data.tree' ).text() )

			return new $mol_tree({ type : '*' , sub : tree.sub }).toJSON() as Record< string , {
				title : string
				description : string
				speaker : string
				duration : string
				slides : string
				video : string
			} >

		}
		
		@ $mol_mem
		speakers() {
			
			const tree = $mol_tree.fromString( this.$.$mol_http.resource( 'piterjs/speaker/speaker.data.tree' ).text() )

			return new $mol_tree({ type : '*' , sub : tree.sub }).toJSON() as Record< string , {
				title : string
				description : string
				photo : string
			} >

		}
		
		@ $mol_mem
		now( next? : string ) { return this.$.$mol_state_arg.value( 'now' , next ) }

		@ $mol_mem
		intro( next? : string ) { return this.$.$mol_state_arg.value( 'intro' , next ) }

		@ $mol_mem
		meetup_id( next? : string ) { return this.$.$mol_state_arg.value( 'meetup' , next ) }
		meetup( id : string ) { return this.meetups()[ id ] }
		
		speech_id( next? : string ) { return this.$.$mol_state_arg.value( 'speech' , next ) }
		speech( id : string ) { return this.speeches()[ id ] }
		
		speaker_id( next? : string ) { return this.$.$mol_state_arg.value( 'speaker' , next ) }
		speaker( id : string ) { return this.speakers()[ id ] }

		@ $mol_mem
		pages() {
			if( this.intro() != null ) return [ this.Intro() ]
			return [
				this.Menu() ,
				... !this.meetup( this.meetup_id() ) ? [ this.Now() ] : [] ,
				... this.meetup( this.meetup_id() ) ? [ this.Meetup( this.meetup_id() ) ] : [] ,
				... this.speech( this.speech_id() ) ? [ this.Speech( this.speech_id() ) ] : [] ,
			]
		}

		Placeholder() {
			return this.meetup( this.meetup_id() ) ? super.Placeholder() : null
		}

		@ $mol_mem
		menu_meetups() {
			
			const warn = $mol_fiber_solid.func( console.warn )
			
			return Object.keys( this.meetups() )
			.filter( meetup_id => {

				const meetup = this.meetup( meetup_id )

				if( !meetup.start ) {
					warn( `Meetup ${ meetup_id } has no "start"` )
					return false
				}
				
				if( !meetup.speeches || !meetup.speeches.length ) {
					warn( `Meetup ${ meetup_id } has no "speeches"` )
					return false
				}

				for( const speech_id of meetup.speeches ) {
					const speech = this.speech( speech_id )

					if( !speech.description ) {
						warn( `Speech ${ speech_id } has no "description"` )
						return false
					}

					const speaker = this.speaker( speech.speaker )
					if( !speaker.photo ) {
						warn( `Speaker ${ speech.speaker } has no "photo"` )
						return false
					}
				}
				
				return true
			} )
			.sort( ( a , b )=> new $mol_time_moment( this.meetup( b ).start ).valueOf() - new $mol_time_moment( this.meetup( a ).start ).valueOf() )
			.map( id => this.Menu_meetup( id ) )
		}
		menu_meetup( id : string ) { return this.meetup( id ) }
		menu_meetup_id( id : string ) { return id }

	}

}
