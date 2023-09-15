namespace $.$$ {

	export class $piterjs_meetup_snippet extends $.$piterjs_meetup_snippet {

		id() {
			return this.meetup().id()
		}

		title() {
			return this.meetup().title()
		}

		@ $mol_mem
		date() {
			return this.meetup().start()?.toString( "Month'YY" ) ?? ''
		}

	}

}
