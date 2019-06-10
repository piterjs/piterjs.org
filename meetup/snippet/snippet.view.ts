namespace $.$$ {

	export class $piterjs_meetup_snippet extends $.$piterjs_meetup_snippet {

		start() { return new $mol_time_moment( this.meetup().start ) }
		title() { return this.meetup().title }
		date() { return this.start().toString( "Month'YY" ) }

	}

}
