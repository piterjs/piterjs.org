namespace $.$$ {

	export class $piterjs_meetup_page extends $.$piterjs_meetup_page {

		video() {
			return this.meetup().video() ?? ''
		}
		
		address() {
			return this.meetup().place().address()
		}
		
		coords() {
			return this.meetup().place().coords()
		}

		@ $mol_mem
		join_allowed() {
			return ( this.meetup().start()?.valueOf() ?? 0 ) > $mol_state_time.now( 60 * 60 )
		}
		
		@ $mol_mem
		content() {
			return [
				... ( this.editing() || this.description() ) ? [ this.Description() ] : [] ,
				this.Links() ,
				this.Speeches() ,
				... this.editing() ? [ this.Speech_add() ] : [] ,
				... this.editing() ? [ this.Hidden_fields() ] : [] ,
				... this.join_allowed() ? [ this.Join() ] : [] ,
			]
		}

		@ $mol_mem
		links() {
			return [
				... ( this.editing() || this.address() ) ? [ this.Place() ] : [] ,
				... ( this.editing() || this.video() ) ? [ this.Video() ] : [] ,
			]
		}

		@ $mol_mem
		speeches() {
			return this.meetup().speeches().map(
				( speech , index )=> this.Speech( index )
			)
		}

		speech( index : number ) {
			return this.meetup().speeches()[ index ]
		}

		speech_add() {
			const speech = this.meetup().speech_make()
			this.$.$mol_state_arg.value( 'speech', speech.id() )
		}
		
		Public() {
			if( !this.editing() ) return null!
			return super.Public()
		}

		Guests_link() {
			if( !this.editing() ) return null!
			return super.Guests_link()
		}

		capacity( next?: number ) {
			return this.meetup().place().capacity_max( next )
		}

		profile_editable() {
			return !this.joined()
		}

		join_enabled() {
			if( this.person().name_first().length < 2 ) return false
			if( this.person().name_last().length < 2 ) return false
			return true
		}

		@ $mol_mem
		join_content() {
			return [
				this.Profile(),
				this.Joined_form(),
				... this.meetup().joined() ? [ this.Joined_bid() ] : [],
			]
		}

		@ $mol_mem
		joined_form() {
			return [
				this.Joined(),
				... this.meetup().joined() ? [ this.Joined_confirm() ] : [],
			]
		}

		free_space() {
			const space = this.meetup().place().capacity_max() - this.joined_count()
			return `Свободно мест: ${space}`
		}

	}

}
