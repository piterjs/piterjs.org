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
		bosy() {
			return [
				... this.description() ? [ this.Description() ] : [] ,
				this.Links() ,
				this.Speeches() ,
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
		
		Speech_add() {
			if( !this.editing() ) return null!
			if( !this.meetup().editable() ) return null!
			return super.Speech_add()
		}

	}

}
