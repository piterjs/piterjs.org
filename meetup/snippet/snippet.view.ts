namespace $.$$ {

	export class $piterjs_meetup_snippet extends $.$piterjs_meetup_snippet {

		id() { return this.meetup().id }
		start() { return new $mol_time_moment( this.meetup().start ) }
		title() { return this.meetup().title }
		date() { return this.start().toString( 'MM.YY' ) }

	}

}
