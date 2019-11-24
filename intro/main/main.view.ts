namespace $.$$ {

	export class $piterjs_intro_main extends $.$piterjs_intro_main {

		title() {
			return super.title().replace( '{title}' , this.meetup().title() )
		}

	}

}
