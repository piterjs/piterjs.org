namespace $.$$ {

	export class $piterjs_meetup_page extends $.$piterjs_meetup_page {

		title() { return this.meetup().title }
		description() { return this.meetup().description }

		speeches() { return this.meetup().speeches.map( id => this.Speech( id ) ) }

	}

}
