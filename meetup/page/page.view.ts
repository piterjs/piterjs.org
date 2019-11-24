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
			return this.meetup().translation()
		}
		
		@ $mol_mem_key
		speech_start( index : number ) {
			
			const meetup = this.meetup()
			const speeches = meetup.speeches().slice( 0 , index + 1 )
			const now = new $mol_time_moment

			return speeches.reduce(
				( start , speech )=> start.shift( speech.duration() ) ,
				meetup.start().toOffset( now.offset ) ,
			)

		}

		@ $mol_mem
		info() {
			return [
				... this.description() ? [ this.Description() ] : [] ,
				... this.translation() ? [ this.Translation() ] : [] ,
			]
		}

		@ $mol_mem
		body() {
			return [
				... this.info().length ? [ this.Info() ] : [] ,
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
