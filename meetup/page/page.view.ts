namespace $.$$ {

	export class $piterjs_meetup_page extends $.$piterjs_meetup_page {

		subscribe_title() {
			return `PiterJS ${this.title()}`
		}

		@ $mol_mem
		subscribe_details() {
			const url = $mol_html_encode( this.$.$mol_state_arg.href() )
			return `<a href="${url}">${url}</a>`
		}

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
				... this.join_allowed() ? [ this.Join() ] : [] ,
				... this.join_allowed() && this.meetup().joined() ? [ this.Joined_bid() ] : [],
				this.Speeches() ,
				... this.editing() ? [ this.Speech_add() ] : [] ,
				... this.editing() ? [ this.Hidden_fields() ] : [] ,
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

		@ $mol_mem
		foot() {
			if( !this.editable() ) return []
			return super.foot()
		}
		
		capacity( next?: number ) {
			return this.meetup().place().capacity_max( next )
		}

		capacity_cut() {
			this.meetup().place().capacity_max( this.joined_count() )
		}

		profile_editable() {
			if( this.joined() ) return false
			return true
		}
		
		person_name() {
			return this.person().name_real().trim().replace( /\s+/, ' ' )
		}

		profile_bid() {
			const name = this.person_name()
			if( !name ) return 'Обязательно'
			if( !/\S{2,}\s\S{2,}/.test( this.person_name() ) ) return 'От двух слов'
			return ''
		}
		
		join_enabled() {
			if( this.joined() ) return true
			if( this.profile_bid() ) return false
			if( this.meetup().place().capacity_max() <= this.joined_count() ) return false
			return true
		}

		@ $mol_mem
		join_content() {
			return [
				this.Profile(),
				this.Joined_form(),
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
