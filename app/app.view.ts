namespace $.$$ {

	$mol_tree

	export class $piterjs_app extends $.$piterjs_app {

		@ $mol_mem
		Domain() {

			const yard = super.Yard()
			const land_id = 'n6cy9h_41olxb' as $mol_int62_string
			
			const rights = new Uint8Array( $mol_fetch.buffer( require( `/piterjs/app/${land_id}!${land_id}.bin` ) ) )
			$mol_wire_sync( yard.world() ).apply( rights )

			return this.Yard().world().Fund( $piterjs_domain ).Item( land_id )

		}

		@ $mol_mem
		now( next? : string | null ) { return this.$.$mol_state_arg.value( 'now' , next ) }

		@ $mol_mem
		intro( next? : string | null ) {
			return this.$.$mol_state_arg.value( 'intro' , next )!
		}

		place_show() { return this.$.$mol_state_arg.value( 'place' ) !== null }

		others() { return this.$.$mol_state_arg.value( 'others' ) !== null }

		@ $mol_mem
		meetup_id( next? : string | null ) {
			
			const id = this.$.$mol_state_arg.value( 'meetup' , next )
			if( !id ) return id

			const ids2 = $mol_int62_string_ensure( id )
			if( ids2 ) return ids2

			return null

		}

		@ $mol_action
		metup_add() {
			const meetup = this.Domain().meetup_make()
			this.meetup_id( meetup.id() )
		}
		
		speech_id( next? : string ) { return this.$.$mol_state_arg.value( 'speech' , next ) }
		speech( id : $mol_int62_string ) { return this.Domain().world()!.Fund( $piterjs_speech ).Item( id ) }
		
		speaker_id( next? : string ) { return this.$.$mol_state_arg.value( 'speaker' , next ) }
		// speaker( id : string ) { return $piterjs_speaker.item( id ) }

		@ $mol_mem
		pages() {
			if( this.intro() != null ) return [ this.Intro() ]
			const pages = [
				this.Menu() ,
				... this.meetup_id() ? [ this.Meetup( this.meetup_id() ) ] : [] ,
				... this.speech_id() ? [ this.Speech( this.speech_id() ) ] : [] ,
				... this.place_show() ? [ this.Place() ] : [] ,
				... this.video_uri() ? [ this.Video() ] : [] ,
				... this.others() ? [ this.Others() ] : [] ,
			]
			if( pages.length === 1 ) pages.push( this.Now() )
			return pages
		}

		@ $mol_mem
		title() {
			if( this.intro() != null ) return this.Intro().title()
			return this.Book().title()
		}

		@ $mol_mem
		meetup_current() {
			return this.meetup( this.meetup_id() || this.meetups_ids()[0] )
		}

		@ $mol_mem
		place() {
			return this.meetup_current().place()
		}

		@ $mol_mem
		menu_meetups() {
			return this.meetups_ids().slice().reverse()
				.sort( ( a, b )=>
					+( this.meetup( b ).start()?.valueOf() ?? 0 )
					-( this.meetup( a ).start()?.valueOf() ?? 0 )
				)
				.map( id => this.Menu_meetup( id ) )
		}
		menu_meetup( id : string ) { return this.meetup( id ) }
		menu_meetup_id( id : string ) { return id }

		toggle_intro( next? : boolean ) {
			
			if( next !== undefined ) {

				if( this.intro() ) {
					this.intro( null )
				} else {
					this.intro( 'main' )
				}

			}

			return Boolean( this.intro() )

		}

		video() {
			return this.$.$mol_state_arg.value( 'video' ) !== null
		}

		@ $mol_mem
		video_uri() {

			if( !this.video() ) return ''
			
			const id = this.meetup_id()
			if( !id ) return ''
			
			return this.meetup( id ).video() ?? ''
			
		}

		Meetup_add() {
			if( !this.editing() ) return null!
			return super.Meetup_add()
		}

		@ $mol_mem
		foot() {
			return [
				this.Online(),
				... this.Domain().editable() ? [ this.Editing() ] : [ this.User() ],
				this.Lights(),
			]
		}

		@ $mol_mem
		user_id() {
			return this.Yard().peer().id
		}

		speech_public( id: $mol_int62_string, next?: boolean ) {
			return this.meetup_current().speech_public( id, next )
		}

	}

}
