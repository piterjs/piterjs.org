namespace $.$$ {

	export class $piterjs_meeting_page extends $.$piterjs_meeting_page {

		title() { return this.meeting().title }
		description() { return this.meeting().description }

		speeches() { return this.meeting().speeches.map( id => this.Speech( id ) ) }

	}

}
