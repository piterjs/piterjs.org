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

		translation() {
			return this.meetup().translation() ?? ''
		}
		
		@ $mol_mem
		info() {
			return [
				... this.description() ? [ this.Description() ] : [] ,
			]
		}

		@ $mol_mem
		body() {
			return [
				... this.info().length ? [ this.Info() ] : [] ,
				... this.translation() ? [ this.Translation() ] : [] ,
				this.Speeches() ,
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
