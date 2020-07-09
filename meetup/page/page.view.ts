namespace $.$$ {

	export class $piterjs_meetup_page extends $.$piterjs_meetup_page {

		title() {
			return this.meetup().title()
		}

		description() {
			return this.meetup().description()
		}

		@ $mol_mem
		date() {
			return this.meetup().start().toString( 'DD Month YYYY' )
		}

		video() {
			return this.meetup().video() ?? ''
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
				... this.coords() ? [ this.Place() ] : [] ,
				... this.video() ? [ this.Video() ] : [] ,
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
		
	}

}
