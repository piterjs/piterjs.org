namespace $.$$ {

	export class $piterjs_meetup_page extends $.$piterjs_meetup_page {

		title() { return this.meetup().title }
		description() { return this.meetup().description }
		start() { return new $mol_time_moment( this.meetup().start ) }
		date() { return this.start().toString( 'DD Month YYYY' ) }
		speeches() { return this.meetup().speeches.map( id => this.Speech( id ) ) }
		
		speech_start( id : string ) {
			const speech_ids = this.meetup().speeches
			const prev_ids = speech_ids.slice( 0 , speech_ids.indexOf( id ) )
			return prev_ids.reduce( ( start , id )=> start.shift( this.speech( id ).duration ) , this.start() )
		}

	}

}
